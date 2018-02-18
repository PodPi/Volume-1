// Load the Johnny-Five library
var five = require('johnny-five');
var board = new five.Board();

// Connect to the Arduino board and
// wait for it to be ready
board.on('ready', function() {

  // define an array of LEDs connected on
  // digital pin 3, 4, 5 and 6
  var array = new five.Leds([3,4,5,6]);
  
  // blink the entire array at 1 second interval
  array.on(1000);
  
});
