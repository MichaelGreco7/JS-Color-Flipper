// Array of 4 colors
const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
// Target button
const btn = document.getElementById('btn');
// Target color span
const color = document.querySelector('.color');

// Add event listener with callback function
btn.addEventListener('click', function () {
  // console.log(document.body);
  // Get random number
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  // Look for - document object - for the body - style property and specifically backgroundColor
  // Set to colors array with the index of randomNumber function
  document.body.style.backgroundColor = colors[randomNumber];
  // Select color with property with the index of randomNumber function
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  // Return number between 0 - 1 multiplied by length of array and rounded with floor method
  return Math.floor(Math.random() * colors.length);
}
