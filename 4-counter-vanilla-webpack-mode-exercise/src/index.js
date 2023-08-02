import "./styles.css";
import { addOne, addOneError } from "./utils/number";

(function () {
  var counter = 0;
  var increment = function () {
    counter = addOne(counter);
    document.querySelector(".js-counter-result").innerHTML = counter;
  };

  const button = document.querySelector(".js-counter-button");
  button.addEventListener("click", increment);
})();
