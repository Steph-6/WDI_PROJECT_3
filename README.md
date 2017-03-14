# Project 3 - MEAN Stack Application

### Overview
The first group project of the immersive course. The Express application was to be built with a Node and a Mongo database. Moving on from the previous project, this was to be built with Angular.js.

The application can be used here: [nApp](https://nappzzz.herokuapp.com/)
Final Site:
![image](http://imgur.com/tgtXBE8.png)
![image](http://imgur.com/Eth9F0D.png)
![image](http://imgur.com/L1a6OyD.png)
![image](http://imgur.com/63UiJnz.png)

***

### Intial Concept - MVP
After a brainstorming session we all decided upon a few ideas and then agreed that the idea should:  
  
1. Have an achievable MVP.
2. Lots of additional features that could be negotiated later.
3. A minimal design and easy user journey.  

We all felt that if we stuck to these three things then we could work together with little conflict and so be much more productive.  
We decided upon an app in which the user could rate the previous nights dream, rate how well they felt they slept and using a product such as a FitBit or Jawbone, retrieve data of how many hours they slept. This left a lot of room for some really imaginative additional pages, as well as maybe playing around with charts to indicate sleeping trends.

Brainstorming:
![image](http://imgur.com/t3OWbTi.png)

##### MVP 
* Full user authentication and registration with angular-jwt.
* Ability to record the previous nights dream.
* A form of rating system that could indicate trends on the index page.
* Using data from the users FitBit or Jawbone device, add the previous nights hours slept.

##### Building Upon MVP
* Angular directives to improve upon the UX:
  * ng-animate to create smooth transitions between each page.
  * angular-typed to type out the dream as though the user was reading it out to you - making the experience more friendly.
  * ng-audio for a moodboard of calming sounds to help the user get to sleep.
 
### Team Orgainisation
When brainstorming initial concepts we kept up to date with ideas on Slack, each researching possible external API's that could be used. Once the idea was decided we created Trello boards in order to plan what was to be completed each day and assigned each task to a member of the team. We also held three stand-ups a day to ensure everyone was up to speed with what was happening. 

#### Day 1
* The User model with authentication could be created using Angular-jwt tokens.
* Folder and page setup:
	* Using ui-router to navigate between view files.
* Wireframes were designed using Marvel.
![image](http://imgur.com/1SIzVJM.png)
![image](http://imgur.com/USou4wR.png)
Where the colour of each day represented a scale of how well the user slept.  

* The possible external APIs were researched and FitBit was chosen due to it returning the most amount of data and it being the most popular device. This meant the most amount of users could fully utilise all the features of the website.
* The possible CSS frameworks were researched and decided upon. Due to the design and transitions on the page being important to us all we went with Foundation, this was later changed to Skeleton.

#### Day 2 
* The Dream model was created and nested within the User model.
* The back-end and front-end RESTful actions / routes were implemented.
* The FitBit API was completed with satellizer.

#### Day 3 - Achieved MVP
* Code from the previous day was read through and made more DRY.  
We also agreed it was important to run through all the code written by each memeber, so that we all had a full understanding of how the app was working.

#### Day 4
* Implemented the CSS framework Foundation.
* Each person was assigned a page to style according to the wireframes.  
Though we all agreed upon the design of the wireframes inevitably by having different members working on different pages, things like colours or shapes of text boxes were not consistent.  
At the end of the day we decided to overhaul the design together the following day.  
* Using @keyframes glowing animations were created to be implemented throughout the site.

Mid Stages:
![image](http://imgur.com/eS26YVD.png)
![image](http://imgur.com/XPbKW4P.png)
![image](http://imgur.com/zsOWete.png)
 
#### Day 5
* CSS framework changed to Skeleton.  
When we began redesigning the page it was also a common problem that we were having to override Foundation too many times, due to this we changed the framework to Skeleton.  
* Angular Typed was implemented.  
Though the directive was very easy to implement there was a lot of problems with using actual Angular, this was one of the real challenges of the project.
* Moodboard Added
Using ng-audio and http://asoftmurmur.com/ we were able to create a moodboard of calming sounds. Angular-slider, which was implemented to rate the dream, was then used to adjust the volume of each sound.

#### Day 6
* Bugs were fixed.
* Styling was finalised.
* Group code run-through.
* A Powerpoint presentation was made and a light script was written out.

***

### Wins  
###### Team - 
The definite win was how well we worked as a team. Being so orgainised and communicating always we had probably three conflicts on Git, and no tme wasted arguing about ideas. Instead we decided upon a clear MVP and any ideas a team member had would be added to the Trello board. Then when MVP was achieved we coud prioritised which features to add.  

###### Myself - 
The animations within the site I was very happy with making. From the beginning we all agreed upon a soft glow throughtout the site and using @keyframes I think this was achieved. Also playing around with ng-animate to create the smooth page transitions was a nice win for myself.  
Implementing the slider was also I had a lot of fun playing around with and was really happy with the outcome.

***

### Challenges  

###### Team -   
I think each member of the team found their own challenges with the tasks they were assigned, but I think what was great about how we worked is that it was mostly pair programming, and so problems were resolved quicker and with less fustration.  
Of course one challenge of working in a team is always seeing code be deleted, though this happened only a couple times it was hard sometimes to voice issues with design or fucntionality, even though it would improve the site.  

###### Myself -   
Understanding the relationship between how the Dream model was accessed through the User model. I think also one thing we should have talked through more was the attrributes of the two models and how the dreams were nested and therefore how to access them with angular through the User model.

***

### Improvements  

Overall I'm really happy with how the final site came out, though I love its minimalistic feel I think there's also so much room to expand upon.   

* A speech to text input so the user could speak out their dream as soon as they woke.
* Playing around with ngCharts to look at sleeping patterns the user had.
	* This could then lead to a group stats page which all users could access, to see how their sleep compares to others. 
* By having a page with all users things like forums could be explored, either in entertaining way where people share their dreams, or, in a more serious way for people who have trouble with their sleep.
