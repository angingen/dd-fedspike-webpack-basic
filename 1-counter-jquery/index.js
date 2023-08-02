$(document).ready(function () {
  // Initialize the counter value to 0
  let counterValue = 0;

  // Display the initial counter value on the page
  $(".js-counter-result").text(counterValue);

  // Bind a click event to the "Increment" button
  $(".js-counter-button").on("click", function () {
    // Increment the counter value by 1
    counterValue++;

    // Update the counter display on the page
    $(".js-counter-result").text(counterValue);
  });
});
