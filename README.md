# 📦 next-hooks

A high-quality and reliable React Hooks library.


## ⚡ Using

**useMountEffect**
```js
import { useMountEffect } from "next-hooks";

useMountEffect(() => {
  console.log("app mounted");
});
```

**useUpdateEffect**
```js
import { useUpdateEffect } from "next-hooks";

const [value, setValue] = useState(0);

useUpdateEffect(() => {
  console.log("value update：", value);
}, [value]);
```

**useUnmountEffect**
```js
import { useUnmountEffect } from "next-hooks";

useUnmountEffect(() => {
  console.log("app unmounted");
});
```

**usePrevious**
```js
import { usePrevious } from "next-hooks";

const [value, setValue] = useState(0);
const prevValue = usePrevious(value);

return (
  <>
    <span>
      Current: <strong>{value}</strong>
    </span>
    <br />
    <span>
      Previous: <strong>{prevValue}</strong>
    </span>
  </>
)
```

**useCounter**
```js
import { useCounter } from "next-hooks";

const { count, increment, decrement, reset } = useCounter(0);

return (
  <>
    {count}
    <br />
    <button onClick={() => increment()}>increment</button>
    <br />
    <button onClick={() => decrement()}>decrement</button>
    <br />
    <button onClick={() => reset()}>reset</button>
  </>
);
```

**useDebounce**
```js
import { useDebounce } from "next-hooks";

const [inputValue, debouncedValue, setInputValue] = useDebounce("initValue", 600);

return (
  <label>
    Input Value:
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    <span className="text-xl">
      Debounced Value: <strong>{debouncedValue}</strong>
    </span>
  </label>
)
```

**useTimeout**
```js
import { useTimeout } from "next-hooks";

const [clearTimeout] = useTimeout(() => {
  // 1 second log
  console.log("useTimeout");
}, 1000);
```

**useInterval**
```js
import { useInterval } from "next-hooks";

const [clearInterval] = useInterval(() => {
  // 1 second log
  console.log("useInterval");
}, 1000);
```

**useStorage/useLocalStorage/useSessionStorage**
```js
import { useStorage, useLocalStorage, useSessionStorage } from "next-hooks";

  const [store, setStore] = useStorage(0, "store");
  const [local, setLocal] = useLocalStorage(0, "local");
  const [session, setSession] = useSessionStorage(0, "session");

  return (
    <>
      <p>
        <button onClick={() => setStore(store + 1)}>useStorage {store}</button>
      </p>
      <p>
        <button onClick={() => setLocal(local + 1)}>useLocalStorage {local}</button>
      </p>
      <p>
        <button onClick={() => setSession(session + 1)}>useSessionStorage {session}</button>
      </p>
    </>
  );
```

**useEventListener**
```js
import { useRef } from "react";
import { useMountEffect, useUnmountEffect, useEventListener } from "next-hooks";

const elementRef = useRef();

useMountEffect(() => {
  bindMouseEnterListener();
});

useUnmountEffect(() => {
  unbindMouseEnterListener();
});

const [bindMouseEnterListener, unbindMouseEnterListener] = useEventListener({
  target: elementRef,
  type: "mouseenter",
  listener: (event: any) => {
    console.log("mouseenter: ", event);
  },
});

return (
  <span ref={elementRef} style={{ border: "1px solid #aaa" }}>
    MouseEnter
  </span>
)
```

**useResizeListener**
```js
import { useMountEffect, useUnmountEffect, useResizeListener } from "next-hooks";

useMountEffect(() => {
  bindWindowResizeListener();
});

useUnmountEffect(() => {
  unbindWindowResizeListener();
});

const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
  listener: (event: any) => {
    console.log("resize: ", event);
  },
});
```
