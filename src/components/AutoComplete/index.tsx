import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./auto-complete.module.css";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

export function AutoComplete() {
  const { onChange, value, result, canShowResult, onKeyDown } =
    useAutoComplete();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        paddingTop: "64px",
      }}
    >
      <div className={styles["autocomplete-container"]}>
        <input
          id="auto-complete"
          className={styles["autocomplete-input"]}
          onChange={onChange}
          value={value}
          placeholder="Search Users..."
          aria-autocomplete="list"
          role="combobox"
          aria-expanded={canShowResult}
          onKeyDown={onKeyDown}
          autoComplete="off"
          autoCorrect="off"
        />
        {canShowResult && <Result items={result} />}
      </div>
    </div>
  );
}

function Result({ items }: { items: ResultItem[] }) {
  return (
    <div className={styles["autocomplete-result-container"]}>
      <ul className={styles["ac-list"]}>
        {items.length > 0 ? (
          items.map((item) => (
            <li
              key={item.id}
              ref={item.ref}
              className={`${styles["ac-list-item"]} ${item.isSelected ? styles["ac-list-item__selected"] : ""}`}
            >
              {item.firstName} {item.age}
            </li>
          ))
        ) : (
          <li
            className={`${styles["ac-list-item"]} ${styles["ac-no-records"]} `}
          >
            No Records Found
          </li>
        )}
      </ul>
    </div>
  );
}

function useAutoComplete(): UseAutoComplete {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebouncedValue(inputValue, 300);
  const [result, setResult] = useState<ResultItem[]>([]);
  const [canShowResult, setCanShowResult] = useState(false);
  const [cachedResults, setCachedResults] = useState<
    Record<string, ResultItem[]>
  >({});
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const itemRefs = useRef<Record<number, HTMLElement>>({});

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!canShowResult) {
      return;
    }
    switch (e.key) {
      case "ArrowUp": {
        e.preventDefault();
        setSelectedIndex((prevIndex) => {
          return prevIndex === 0 ? result.length - 1 : prevIndex - 1;
        });
        break;
      }
      case "ArrowDown": {
        e.preventDefault();
        setSelectedIndex((prevIndex) => {
          return (prevIndex + 1) % result.length;
        });
        break;
      }
      case "Escape": {
        e.preventDefault();
        setCanShowResult(false);
        break;
      }
    }
  };

  useEffect(() => {
    // trigger search
    if (!debouncedValue || debouncedValue.length < 2) {
      setCanShowResult(false);
      return;
    }

    async function fetchAndCacheSearchResults() {
      const searchQuery = debouncedValue.trim();
      const responseStream = await window.fetch(
        `https://dummyjson.com/users/search?q=${searchQuery}`,
      );
      const fetchResult = await responseStream.json();
      const users = fetchResult.users as ResultItem[];

      setCachedResults((prevResults) => ({
        ...prevResults,
        [searchQuery]: users,
      }));
    }

    if (!(debouncedValue in cachedResults)) {
      fetchAndCacheSearchResults();
    }
    setSelectedIndex(0);
  }, [debouncedValue]);

  useEffect(() => {
    if (debouncedValue && debouncedValue in cachedResults) {
      const show = cachedResults[debouncedValue];
      const withSelectedIndex = show.map((item, index) => {
        const withRef = {
          ...item,
          ref: (el: HTMLLIElement) => {
            itemRefs.current[index] = el;
          },
        };
        if (index === selectedIndex) {
          return {
            ...withRef,
            isSelected: true,
          };
        }
        return withRef;
      });
      setResult(withSelectedIndex);
      setCanShowResult(true);
    } else {
      setCanShowResult(false);
    }
  }, [debouncedValue, cachedResults, selectedIndex]);

  useLayoutEffect(() => {
    if (itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex].scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  return {
    onChange: (e) => setInputValue(e.target.value.trim()),
    value: inputValue,
    result,
    canShowResult,
    onKeyDown,
  };
}

export type UseAutoComplete = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  result: ResultItem[];
  canShowResult: boolean;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export type ResultItem = {
  id: number;
  isSelected: boolean;
  firstName: string;
  age: number;
  ref: React.Ref<HTMLLIElement>;
};
