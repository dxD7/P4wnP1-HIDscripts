layout('us'); //set keyboard layout to us.
typingSpeed(0,0) //set typing speed to max.
for (var i = 0; i < 5; i++) { //this opens the URL 5 times, adjust the number that is currently 5 to select how many tabs this script wil open.
press("GUI r"); //windows button + R (Run box)
delay(500);
type("URL\n"); //types url and presses enter.
}
