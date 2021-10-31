// Print out the current time to index.html
function displayTime()
{
  // Create a new Data object with the current date and time
  var date = new Date();
  // Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
  // Initalize time to the current time
  var time = date.toLocaleTimeString();
  document.getElementById("time").innerHTML = "The current time is " + time + ".";
  // Source: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
  // Update the displayed time by executing displayTime() every second
  setInterval(displayTime, 1000);
}

displayTime();

/*
Note that I use var instead of const because I want to be able to dynamically
update the date (time).
*/
