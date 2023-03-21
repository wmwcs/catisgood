// Get all the adopt button elements
const adoptButtons = document.querySelectorAll("button");

// Loop through the buttons and add a click event listener to each one
adoptButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Get the bunny card element that the button was clicked on
    const bunnyCard = button.parentElement;
    // Get the bunny's name and price from the bunny card
    const bunnyName = bunnyCard.querySelector("h3").textContent;
    const bunnyPrice = bunnyCard.querySelector("p:last-of-type").textContent;
    // Show an alert message with the bunny's name and price
    alert(`You have adopted ${bunnyName} for ${bunnyPrice}. Thank you for choosing Rabbitary!`);
  });
});
