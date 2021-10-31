/*
We use var instead of const because we want to be able to dynamically update
the date (time).
*/

// Create a new Data object with the current date and time
var date = new Date();
// Inititalize variables set to the current time
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

document.getElementByID("time").innerHTML = hours + ":" + minutes + ":" + seconds;
