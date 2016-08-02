#Checked-In Project


##1: Brainstorm

Checked-in
    - Application that enables end users to have an alert sent if they do not check-in at a designated time.
    - Should the end user not check in and disable the alert after designated time an alert is sent to a predetermined contact.
    - Web based application with a focus on mobile.

Contact information
    - A feature that allows for contacts to be set in order of escalation.
    - Should the alert not be disabled and the contact still doesn't hear from end user that is checked in the alert escalates to next contact in system.

Login-Auth
    -Types of login: email, social media or other OAuth providers.

##2: Persona

   People are meeting people irl that they've only met online (ie Tinder, selling something on Craigslist, using Uber or Airbnb) or are in situations that they'd prefer to not be in(taking the subway late at night or walking home alone, in a home with an abusive family member or are worried about their safety for whatever reason). Or are going somewhere like camping, hiking, fishing or are traveling abroad.

##3: Behaviors

   Wants an emergency contact to be notified if they have not checked-in within a certain time period.

##4: Activity

  In a situation that if they haven't checked-in they would like someone to be alerted of their failure to do so.

##5: Features needed for the Activity

    Secure login for application.
    Timer that completes a certain action if alert isn't deactivated.
    Contacts that alerts need to be sent to.
    Database that stores user preferences and information.

##6: Development

###Models

    * Emergency contacts
    * Name: string
    * phone number: number
    * email: string

###Routes

    *  /login
    *  /home
        show users profile name
        access to activate/deactivate buttons and their settings
        link to settings page
        link to logout
    *  /settings
        user contact information
        access for configuring account information
        link to home page
        link to logout
    *  /logout    

###UI

    * Secure login portal and application.
    * Home page that has access to saved settings and activate/deactivate features.
    * Settings page that inputs required information.


#Student Roles


* Ricco
  - Create walled garden for application with a login portal to authenticates users.
  - Research the capabilities of the the third party application and understand how to use the information that it provides.
  - Create database that can connect Auth0 user information, alerts database and emergency contacts in order to make application functional.
  - Develop framework for building out the front end portion of the application.
  - Integrate each of the students roles into a central application.  
* Jacky
  - Login using Auth0 (additional login features).
  - Develop code for the timer portion of the alerts feature.
* Pam
  - Working on user experience and Auth0 emails (verification, welcome).
  - Assisted with project management via Trello.
* Steve
  - Create README
  - Structure (Routes, Views)
  - Settings (Emergency Contacts)
