var five = require('johnny-five');
var board = five.Board();

board.on('ready', function() {

  var servo = new five.Servo({pin:11});
  var light = new five.Sensor("A0");
  
  light.on('change', function() {
    
    // display the value sensed
    console.log(this.value);
    
    // We need to divide the value sensed (0 to 1023)
    // into an angle the sensor understands (0 to 180)
    servo.to(Math.abs(this.value/6));
  });
});
