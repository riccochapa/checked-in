#WebApp
"Checked In"

app that allows you to set a parameter that executes a series of actions after a set period of time.

people are meeting people irl that they've only met online (ie Tinder, selling something on Craigslist, using Uber or Airbnb) or are in situations that they'd prefer to not be in(taking the subway late at night or walking home alone, in a home with an abusive family member or are worried about their safety for whatever reason.) or are going somewhere like camping, hiking, fishing or are traveling abroad.... safety has to be found or searched for should it be needed. we would like to empower people to be proactive and enable a way to remove risk from potentially dangerous situations and have a process already in place for when someone could need it most.  it is similar to a reminder app, but a reminder app that ensures you aren't forgotten. it can track you, take your picture, alert your loved ones and get information in the hands of those what will be sure to use it in the best way possible. we want to provide a way to ensure that nothing is left to chance provide a bit of peace of mind in a time that it feels like it is in short supply.

-authenticated portal log with option to set up account (first page).

-home page (second page):

	 - has a link to the account settings(third page):
		-user information - name, address, phone number, etc.
		-user emergency contacts in order of alert.
			-settings to alert emergency contact that contact wasn't made at time that was expected.
			-way for emergency contact to respond to say they are on standby.
			-way for secondary contact to be alerted if first emergency contact doesn't initiate standby or a secondary time period has elapsed to escalate alert.
				-example of emergency contact flow... first contact is to boyfriend, roommate or friend. second contact is to parent, third contact is to ???
		-stored settings for multiple case uses. (driving in a secluded area, going for a jog, hiking, camping, etc)
		-link to settings for hardware (fourth page)-

	 - has an action to activate a preset check-in parameters (second page):
		-selfie taken when alert is set? (so current clothing, hairstyle, etc is included if alert is escalated?).
		-note field to say where going, expected return, who you're going to meet etc.
		-ability to modify or set parameters of alert. (urgency, timeframe, escalation order, etc) ....or have it set in settings???
		-geo-location tracker while alert monitoring is active and/or geo-location stamp at the time of alert alarm.
		-activate camera, and take pictures, then turn in the video camera with audio to record and stream online until phone dies, recovered or alert is turned off.
		-password to turn off alarm with alternate password to set a silent alert into action.
			-initiate de-escalation if alert is reset.

	- alerts: logged to (fifth page):
		-sent via sms, email, phone call, stored in database, backed up to online portal and/or ???
		-include a way to alert on standby for response.
		-have a way to log into the account to view stored information at a certain escalation level.
		-store alerts for 30 days if escalated to a certain level.

-hardware(fourth page):

	- connect to external device that has internet connectivity.
	- have it listening in order to take in commands from and to a server.
	- or have it receive settings when app is activated.
	- ability to securely deactivate or activate with a push of a button.


will need to use:

express,
html or jade;
mongodb ... Crud, online DB?
  -to store user profile, information on account, settings and to store alert info to be used for escalating alarm.
mongoose
  -for user profile, setting options and alerts.
login portal - Facebook, Twitter ....or basic for MVP?
geolocation tagging and logging.
allow access to camera, audio and GPS
SMS or whatever method for escalated alert.

TBD
software for hardware interface.
