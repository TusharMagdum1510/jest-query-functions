import { useEffect, useState } from "react";

function fakeFetchColors() {
  return Promise.resolve(["red", "green", "blue"]);
}

type StateType = Array<string>;

function LoadableColorList() {
  const [colors, setColors] = useState<StateType>([]);

  useEffect(() => {
    fakeFetchColors().then((data) => setColors(data));
  }, []);

  const renderedColors = colors.map((color) => {
    return <li key={color}>{color} </li>;
  });

  return (
    <>
      <ul>{renderedColors}</ul>
    </>
  );
}

export default LoadableColorList;
