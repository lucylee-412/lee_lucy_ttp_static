/*
We use var instead of const because we want to be able to dynamically update
the date (time).
*/

// Create a new Data object with the current date and time
var date = new Date();

/* Found a better method, scrapped code

// Inititalize variables set to the current time
// var hours = date.getHours();
// var minutes = date.getMinutes();
// var seconds = date.getSeconds();
*/

// Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
// Initalize time to the current time
var time = date.toLocaleTimeString();

document.getElementById("time").innerHTML = "The current time is " + time + ".";
