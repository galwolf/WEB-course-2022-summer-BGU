# WEB-course-2022-summer-BGU
Charged up is a platform that provides an opportunity to people to know where is nearest EV charge station for their car. more and more people start to use electric cars so the dement for stations is higher then ever. I created this website to give an option for those who doesn’t know yet where is EV charge stations around them.

creating HTML pages:
1.	"home page" - home page is where the client can see the stations that near to the address he sighend with
2.	"sigh in page" – login page where the client get fill his user name and his car number
3.	"register page" – in this page the client register for the website
4.	"final page" – in the final page the client will recieve massage for his reservation in the station he choosed

css design:
The CSS file which is linked to all the pages of the site includes the design content of the site while preventing repetition of code in order to apply best practice. The file includes a relatively uniform design for all website pages.
* Using a grid that divides the pages as identically as possible.
* Using @media to adjust the dimensions of the pages for viewing through devices with small screens.
* Defining fonts and colors that accompany the website pages.
* The design definition is the same for solving, headings, forms and more.

realization dynamic JS function:
The JS file which is linked to all the website pages includes various functions that create dynamism in the website pages.
Greeting() – changes the user's greeting that is on the home page depending on the time of day.
ShowHideReport() – when clicking on the button that activates the function, the hours report will appear or disappear and the text on the button will change accordingly.
validation() - when clicking the button on the registration form, we will verify the user's inputs and return appropriate error messages if necessary.

realization client functions:
We will verify the customer's inputs in the registration form so that no idle data enters the database in the future.
We will verify the following:
1. It is mandatory to fill in all the fields in the registration form as well as in the login form.
2. First name and last name will include letters in English only and will include at least 2 letters.
3. An email address must be written according to a general email format.
4. Username must include at least 4 characters.
5. A car number must include at least 8 characters including at least one uppercase letter, one lowercase letter and a number.
