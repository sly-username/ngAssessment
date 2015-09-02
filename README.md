##### What libraries did you use to write your application?
- None.
- Well, I used Angular. Not sure if you're including frameworks in your definition of "library". 

##### What influenced the design of your user interface?
- To be honest, I used the similar bootstrap design found in most angular tutorials. But I didn't use bootstrap since there weren't that many views and I did not make the design very complicated. 

##### What steps did you take to make your application user friendly?
- I wanted the application to be as simple as possible, but still make the features obvious enough so that the user does not overlook anything. 
- Colors, fonts, layout, I tried to make as consistent as possible.
- I added validation for the login form and guestbook entry creation form. 
- Unfortunately, the application is not responsive. I want to continue working on that. 

##### What steps did you take to insure your application was secure?
- I cannot say I can ensure that the application is secure at this point. Other than the suggestions listed below, I do not have much experience with security. Although I am interested in this topic. 
- For now, I added a basic layer of security. The user needs authorization to view the application, excluding the login view, of course. 

##### What could be done to the front end or back end to make it more secure?
- Regarding the server side application, I am not sure. Maybe add more server side validation?
- But regarding the client side, I would like to add token based authentication instead of using cookies. 
- Additionally, I believe I can remedy the automatically-log-out-on-refresh problem with tokens. But I was not able to get to this yet. 
- Also, if the application ends up allowing user to create accounts, I would like to include requirements for password creation and hash the passwords instead of storing them in plain text. Also, I wouldn't hard code any of the passwords in the server.js file, obviously.
