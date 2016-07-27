# Checked-In Project

1. Brainstorm
  Check-in
    - user Check-in
    - when the user checks in a timer is set and a series of events happens if that timer is
      not turned off by the user.
    - based on user using a mobile device

  Contact information
    - If user does not cancel timer an emergency notification is sent
      to the users emergency contacts
    - If first emergency contact doesn't respond then the next contact will be notified

  Login-Auth
    - Facebook authentication
    - Google authentication
    - Email
2. Persona
   is going out and wants an emergency contact to be notified if they
  have not checked-in on time.

3. Behaviors
  1. is going out and wants an emergency contact to be notified if they have not checked-in within
    a certain time period.
4. (1) activity
  is going out and wants an emergency contact to be notified if they have not checked-in within
  a certain time period.
5. Features needed for the Activity
  Data of emergency contacts (model)
    name
    number
    Email

  UI
    * Check in button
    * User Settings
      - Emergency contacts set up
      - Setting timer interval

6. Development


# Models

  Emergency contacts
    Name: string
    phone number: number
    email: string

# Routes

  /
    Login Page

  /userprofile
    show users profile
    user contact information

  /settings/userprofile
    user settings can be configured
