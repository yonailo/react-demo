import { useState, useEffect } from "react";
import Button from "../Components/Button";
import Nav from "../Components/Navigation";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    console.log(counter);

    let scrollListener = () => {
      console.log("scroll Y" + window.scrollY);
    };

    window.addEventListener("scroll", scrollListener);

    return () => window.removeEventListener("scroll", scrollListener);
  }, [counter]);

  return (
    <div className="Counter">
      <Nav />

      <h1 style={{ padding: "300px 0" }}>Counter is {counter}</h1>
      <span>
        <Button title="+" clickHandler={increment} />
        <Button title="-" clickHandler={decrement} />
      </span>
    </div>
  );
}

export default Counter;
