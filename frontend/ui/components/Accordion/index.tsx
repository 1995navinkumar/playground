import { useState } from "react";
import css from "./accordion.module.css";

export function Accordion({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  const [expandedItem, setExpandedItem] = useState(-1);
  return <div className={css["accordion"]}>{children}</div>;
}

export function AccordionItem({ children }: { children: JSX.Element[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className={css["accordion-item"]}
      role="button"
      onClick={toggleExpanded}
    >
      <div>{children[0]}</div>
      {isExpanded && (
        <div className={`flex-1 ${css["accordion-item-content"]}`}>
          {children[1]}
        </div>
      )}
    </div>
  );
}

export function AccordionItemTitle({ title = "" }) {
  return <div>{title}</div>;
}

export function AccordionItemContent({ children }: { children: JSX.Element }) {
  return <div>{children}</div>;
}
