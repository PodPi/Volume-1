// Load the Johny-Five Library
var five = require('johnny-five');
var board = new five.Board();

// Connect to the Arduino board
board.on('ready', function() {

  // define a new sensor connected on pin A0
  var lumina = new five.Sensor('A0');
  var led = new five.Led(3);
  
  // execute the function when the voltage changes
  lumina.on('change', function() {
    // display the value
    console.log('light sensed is ' + this.value);
    
    // if the value sensed is less than 200 then...
    if ( this.value < 200 ) {
      // ... turn the led on
      led.on();
    } else {
      // ... else turn the led off
      led.off();
    }
  });
});
