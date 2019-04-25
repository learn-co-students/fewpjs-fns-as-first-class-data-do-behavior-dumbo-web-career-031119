/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

const greet = (time) => {
	let newTime = parseInt(time.replace(":",""))
	if (newTime < 1200) {
		return 'Good Morning'
	} else if (newTime > 1200 && newTime < 1700) {
		return 'Good Afternoon'
	} else {
		return 'Good Evening'
	}
}

const displayMessage = (message) => {
	document.querySelector('#greeting').textContent = `${message}`
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
