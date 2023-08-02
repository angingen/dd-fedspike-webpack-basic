import "./styles.css";

(function () {
  var counter = 0;
  var increment = function () {
    counter++;
    document.querySelector(".js-counter-result").innerHTML = counter;
  };

  const button = document.querySelector(".js-counter-button");
  button.addEventListener("click", increment);
})();
