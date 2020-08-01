# Daily Event Scheduler
- [How the daily calendar works](#how-the-daily-calendar-works)
- [What it is](#what-it-is)
- [Functionality](#functionality)
- [Additional Changes Made](#additional-changes-made)
- [Applications used](#applications-used)
- [Image](#image)
- [Link](#link)
# How the daily calendar works
When the user is in the daily calendar, the current day is displayed, which is the following; the day, the time and what time zone the user is in. The user can scroll to the specific time block they want to schedule their event and then type within that timebox. After clicking the lock button on the far right side, the event will then be stored in local storage. After refreshing the page, the saved events will persist. However, in order to clear the calendar, the user can use the 'reset daily calendar' key at the top of the page, to clear the calendar of event.
# Functionality
This is a dynamic work day calendar, which shows you color coded time blocks to make it easy to navigate the tasks set for that day, with working hours of 8AM - 5:00PM. The program used bootstrap, making the style of the calendar clean and easy to read. 
# Additional changes made
Within the html file, I added a class of 'time' to the div within the row timeblock, so I could style out that section and seperate the time from the textarea - at least make it stand out more! In the css I took the class of time and added background color of #ffffff, made the font a little larger, aligned the text and added a margin.  
# Applications used
* Jquery
* css
* Bootstrap
* Ajax
# Img
![schedule](img/schedule.png)
# Link
https://teresaheidt.github.io/Scheduler/.
