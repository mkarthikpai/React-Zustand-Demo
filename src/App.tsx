import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./store";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log(count);
};

const setCount = () => {
  useCounterStore.setState({ count: 1 });
};

function App() {
  const count = useCounterStore((state) => state.count);
  useEffect(() => {
    setCount();
    logCount();
  }, []);

  return (
    <>
      <h3>Zustand</h3>
      <p>Counter:</p>
      <OtherComponent count={count} />
    </>
  );
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrmentAsync = useCounterStore((state) => state.incrementAsync);
  return (
    <div>
      {count}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={incrmentAsync}>Increment Async</button>
      </div>
    </div>
  );
};

export default App;
