import React from "react";

export const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <p>Clicked {counter} times</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </>
  );
};
