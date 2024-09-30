// safe get

export function get(objectParam, pathParam, defaultValue) {
  const paths =
    typeof pathParam === "string" ? pathParam.split(".") : pathParam;
  let currentValue = objectParam;
  for (let i = 0; i < paths.length; i++) {
    const key = paths[i];
    if (
      !Array.isArray(currentValue) &&
      Object.prototype.toString.call(currentValue) !== "[object Object]"
    ) {
      currentValue = undefined;
      break;
    }
    currentValue = currentValue[key];
    if (typeof currentValue == "undefined") {
      currentValue = defaultValue;
      break;
    }
  }
  return currentValue;
}

// unique array

export function uniqueArray(array) {
  return Array.from(new Set(array));
}

// Array.prototype.filter

Array.prototype.myFilter = function (callbackFn, thisArg) {
  const length = this.length;
  const filteredArray = [];

  for (let i = 0; i < length; i++) {
    const item = this[i];
    let shouldFilter = false;
    if (typeof item === "undefined") {
      shouldFilter = true;
    } else {
      shouldFilter = !callbackFn.call(thisArg, item, i, this);
    }
    if (!shouldFilter) {
      filteredArray.push(item);
    }
  }
  return filteredArray;
};

// Array.prototype.map

Array.prototype.myMap = function (callbackFn, thisArg) {
  const length = this.length;

  const mappedArray = [];

  for (let i = 0; i < length; i++) {
    const item = this[i];
    if (typeof item === "undefined") {
      mappedArray.push(item);
      continue;
    }
    const mappedValue = callbackFn.call(thisArg, item, i, this);

    mappedArray.push(mappedValue);
  }

  return mappedArray;
};

// Array.prototype.reduce

Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (typeof initialValue === "undefined" && this.length === 0) {
    throw "cannot reduce";
  }
  let start = typeof initialValue !== "undefined" ? 0 : 1;
  let accumulator = initialValue ?? this[0];

  for (let i = start; i < this.length; i++) {
    const item = this[i];
    if (typeof item !== "undefined") {
      accumulator = callbackFn(accumulator, item, i, this);
    }
  }
  return accumulator;
};

// Function.prototype.bind

Function.prototype.myBind = function (thisArg, ...argArray) {
  const localThis = this;
  return (...args) => {
    return localThis.call(thisArg, ...argArray, ...args);
  };
};

// jQuery.css

export default function $(selector) {
  const element = document.querySelector(selector);
  const jq = {
    css: (...args) => {
      if (args.length === 1) {
        if (!element) {
          return undefined;
        }
        const value = element.style.getPropertyValue(args[0]);
        if (!value) {
          return undefined;
        }
        return value;
      }
      if (!element) {
        return jq;
      }
      element.style[args[0]] = args[1];
      return jq;
    },
  };
  return jq;
}

// Sum - Currying

function sum(value) {
  return (...args) => {
    if (args.length === 0) {
      return value;
    } else {
      return sum(value + args[0]);
    }
  };
}

// Data Selection

export function selectData(sessions, options = {}) {
  const { user, minDuration = 0, equipment, merge = false } = options;

  function getEquipment(a = [], b = []) {
    const uniqueEq = new Set([...a, ...b]);
    return Array.from(uniqueEq).sort();
  }

  if (merge) {
    const groupByUser = sessions.reduce((a, c, index) => {
      const userId = c.user;
      if (userId in a) {
        a[userId] = {
          user: userId,
          duration: a[userId].duration + c.duration,
          equipment: getEquipment(a[userId].equipment, c.equipment),
          index,
        };
      } else {
        a[userId] = { ...c, index };
      }
      return a;
    }, {});

    const merged = Object.values(groupByUser)
      .sort((a, b) => a.index - b.index)
      .map(({ index, ...s }) => s);

    return filter(merged);
  } else {
    return filter(sessions);
  }

  function filter(sess) {
    return sess
      .filter((s) => (user ? s.user === user : true))
      .filter((s) => s.duration >= minDuration)
      .filter((s) =>
        equipment ? equipment.some((e) => s.equipment.includes(e)) : true
      );
  }
}
