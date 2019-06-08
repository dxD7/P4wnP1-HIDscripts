layout('us'); //set keyboard layout to us.
typingSpeed(0,0) //set typing speed to max.
press("GUI r"); //windows button + R (Run box)
delay(500);
type("sndvol.exe\n"); //open the sndvol.exe program which controls the system volume.
delay(1000);
for (i = 0; i < 100; i++) {// t
press("up"); // presses the 'up' button 100 times to get to max volume.
}
delay(1000);
press("GUI r"); //windows button + R (Run box)
delay(500);
type("YOUTUBE_URL\n"); //opens your URL.
delay(5000);
for (i = 0; i < 20; i++) {
press("up"); //presses the 'up' button 20 times to max out YouTube's volume.
}
type("f"); //makes the video fullscreen.
