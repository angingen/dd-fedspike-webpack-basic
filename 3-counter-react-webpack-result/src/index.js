import { createRoot } from "react-dom/client";

import { Counter } from "./components/Counter/Counter";
import "./styles.css";
import catImage from "./assets/img/cutest-cat.png";

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(
  <>
    <h1 class="title">Simple counter - webpack bundled</h1>
    <Counter />
    <br />
    <img
      class="image"
      src={catImage}
      alt="Picture of the world's cutest cat sitting on a chair"
    />
  </>
);
