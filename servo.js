var five = require('johnny-five');
var board = five.Board();

board.on('ready', function() {

  // define a servo motor on pin 11
  var servo = new five.Servo({pin:11});

  // start sweeping the servo back and forth
  servo.sweep();
});
