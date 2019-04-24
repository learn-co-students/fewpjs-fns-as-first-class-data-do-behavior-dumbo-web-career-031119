/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let str = parseFloat(time)
  if (str < 12.00) {
    return "Good Morning"
  }
  else if (str > 12.00 && str < 17.00) {
    return "Good Afternoon"
  }
  else if (str > 17.00) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */


function displayMessage(str) {
document.getElementById("greeting").textContent = str
}
