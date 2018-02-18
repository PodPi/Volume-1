# PodPi Volume 1 - To the Island
You and the Pods are on your way to the Island of PodPi.  Beforing arriving there you need to learn to use some new components.

### The LED Challenge
`array.js`: Let's start off with a small challenge. Control 4 and then 8 LEDs with a single variable. An array is a data structure that contains multiple values. In this case, the variable named `array` will contain the list of all ports to control with a single method called `on()`.
**Experiment:** Go a tad further with this challenge by creating a second variable to hold the other 4 LEDs. This will give you two groups of LEDs you can control. Using this new variable, alternate the blinking rate.

### The Potentiometer with Ohmie
`pot.js`: A potentiometer is used to control the voltage in a circuit. When controlling the potentiometer, the voltage sent to the analog pin will change between 0 volt to 5 volts. By adding a `Sensor` object in your code, connected to the `A0` analog pin, the Arduino board will convert the voltage into a 10 bits value (a value that ranges between 0 to 1023).
You can then control the brightness of an LED by using a PWM pin (pin3 3, 5, 6, 9, 10 or 11) by using the `brightness()` method. Note that the brightness uses an 8 bit value (a value that ranges between 0 and 255), and therefore we need to divide the value sensed by 4.

### Sensing Light with Lumina
`lumina.js`: Sensing light is fun. This circuit and code is very similar to the last one. A light sensor works a bit like the potentiometer. When more light is sense, more current is let through the sensor. By coupling the sensor with a 100K resitors, you can now sense the voltage in between the two components using the Arduino on pin A0.
In this lesson, we detect a certain light intensit (200 in the code) and turn on the LED or turn off the LED based on that value. When running the code, observe the values reported on the screen and change the 200 number in the code to match your environment.  Each environment will be different based on the ambient light sensed

### Sensing temperatur with Celsius
`celsius.js`: Sensing temperature is very useful in many real life applications. Want to make sure if your fridge or freezer is not working properly? Use a temperature sensor to monitor them and have a trigger activates when the value reaches a certain threshold. Note that the temperature is sensed much slower than the light. The light sensor react quickly, whereas the temperature sensor needs time to adjust to the new temperature. Therefore, in our experiment, the LED brightness will change slowly too.  Experiment further by dividng the value received more aggressivly (use a larger divider).

### Sweeping with Servo
`servo.js`: In this lesson, you will learn how to connect a servo motor and control the sweeping apsect of it.  Serv motors must be connected to any PWM pins (pins 3, 5, 6, 9, 10 or 11) to function properly. You will learn more about PWM pins in PodPi volume 9 - all about Servo.

### The Dashboard Challenge
`dashboard.js` This dashboard challenge is fun. Build a gauge that can measure the light and report it on a gauge. Make sure to be creative and build a cool dashboard.
