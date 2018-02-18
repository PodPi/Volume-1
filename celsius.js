var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {

  var celsius = new five.Sensor('A0');
  var led = new five.Led(3);
  var temp_value = 0;
  
  celsius.on('change', function() {
    temp_value = this.value;
    console.log('Temperature analog value is ' + temp_value);
    led.brightness(temp_value);
  });
  
});
