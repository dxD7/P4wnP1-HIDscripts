//P4wnP1 HiDscript 
//Setup shared internet with host computer 
//Change USB gadget IP address & gateway to allow P4wnP1 to connect to internet - https://www.youtube.com/watch?v=QEWaIoal5qU
//Manually need to enter:"sudo route add -net default gw 172.16.0.2" inside P4wnP1 SSH to reach internet - can also be pasted at the end of /etc/bash.bashrc so it connects to internet after every boot
  
layout('us');			// US keyboard layout
typingSpeed(0,0)	// Type Fast

//Open Network Connections and allow connection sharing
delay(500);
press('GUI D');
delay(500);
press('GUI');
delay(300);
type("ncpa.cpl");
delay(100);
press('ENTER');
delay(2000);
press('SPACE');
delay(800);
press('ALT');
delay(800);
press('F');
delay(800);
press('R');
delay(800);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('RIGHT');
delay(300);
press('TAB');
delay(500);
press('SPACE');
delay(500);
press('TAB');
delay(500);
type('E');
delay(500);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('ENTER');

//Change ethernet gadget IP address and gateway
delay(1000);
press('RIGHT');
delay(800);
press('ALT');
delay(800);
press('F');
delay(800);
press('R');
delay(1000);
type('I');
delay(300);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('ENTER');
delay(1000);
press('TAB');
delay(300);
type('172');
delay(300);
type('16');
delay(300);
press('SPACE');
delay(300);
type('0');
delay(300);
press('SPACE');
delay(300);
type('2');
delay(300);
press('TAB');
delay(300);
type('255');
delay(300);
type('255');
delay(300);
type('255');
delay(300);
type('252');
delay(300);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('ENTER');
delay(300);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('TAB');
delay(300);
press('ENTER');
