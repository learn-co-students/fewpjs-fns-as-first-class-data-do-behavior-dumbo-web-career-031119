/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
var d = new Date();
var time = d.getHours();

if (time < 12) {
  document.write("<b>Good Morning!</b>");
}
if (time > 12) {
  document.write("<b>Good Afternoon!</b>");
}
if (time == 12) {
  document.write("<b>Go eat lunch!</b>");
}
}
/* Write your implementation of displayMessage() */
function displayMessage()
