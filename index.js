/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let timeHour = parseInt(timeString,10)
  if (timeHour < 12) return "Good Morning"
  if (timeHour > 17) return "Good Evening"
  return "Good Afternoon"
}

/* Write your implementation of displayMessage() */
function displayMessage(stringArg) {
  let greeting = document.getElementById('greeting')
  greeting.innerHTML = stringArg
}