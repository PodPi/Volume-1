// Load the Johnny-Five Library
var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {

  // Define the potentiometer on analog pin A0
  var pot = new five.Sensor('A0');
  
  // Define an LED on digital pin 11
  var led = new five.Led(11);
  
  // WHen the voltage on analog pin A0 changes,
  // execute the code in the function below
  pot.on('change', function() {
  
    // capture the analog voltage and divide it by 4
    var v = this.value/4;
    console.log('Potentiometer value is ' + v );
    led.brightness(v);
  });

});
