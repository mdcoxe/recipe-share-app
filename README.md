# Scrumptious V2.0 --Coming Soon
Scrumptious is going to be making big changes.  Up coming is a complete rebuild, going to be rebuilt as a MERN app.  

- Stage 1 
    - Rebuilding the frontend as a react app

- Stage 2
    - Rebuilding express/node backend with authentication options to include google and facebook

- Stage 3
    - Add in the option for to add in links to recipes found on the web as well as adding your own recipes...Essentially a bookmark service built in just for recipes to put all the recipes in one spot.

- Potential Stage 4
    - Build chrome extention that allows the user to add links from web directly through extention eliminating the need to open app to add recipes found online.

# Scrumptious V1.0
Scrumptious is my first attempt at building a react native app using expo's cli.  The initial version of the app is to make a crud app using react native.  Currently the app works locally iOS, android and web(Android requires changing the backend source to 10.0.2.2:3010 to connect to the database).  

User authentication with JWT is already incorporated on the backend and has successfully been tested using postman.  It has not been implemented on the frontend yet.

## Technologies used
- MERN Stack
    - React & React Native
    - NodeJS
    - Express
    - MongoDB
- Backend Dependencies
    - Cors
    - DotENV
    - Express 
    - Mongoose
    - Nodemon
    - Authentication with JWT, Bcrypt
- Frontend Dependencies
    - react-native-paper
    - @react-navigation/native
    - @react-navigation/stack

![](https://imgur.com/ZIA8Mi9.png) ![](https://imgur.com/xs8XS4S.png)

![](https://imgur.com/DA52Zot.png) ![](https://imgur.com/Y7psBOB.png)


## Lessons learned
Biggest lesson is probably to just focus on one platform, like android.  Documentation was difficult to digest and implement as much was out of date by 2+ years as well as some dependencies do not work well with expo(even if they had in the past).  If I had stuck with a react app and built to be mobile friendly this project would have more than likely completed all the post MVP goals prior to project end date.

## Weekend Updates 23/24 Jan
- ~~Researched ideas, decided against socket.io~~
- ~~Researched best set-up for database(MongoDB vs PostgreSQL)~~
- ~~Learned React native basics through code along tutorial(Built tesla app clone)~~

## Monday Updates 25 Jan
- ~~Build backend~~ included authorization/authentication with jwt/bcrypt all routes and models included
- ~~Built a cheatsheet for future use~~ incloudes some basic templates =>> [Cheatsheet](https://github.com/mdcoxe/dev-notebook/blob/main/MERRNN-APP_Notes.md)

## Tuesday Updates 26 Jan
- ~~Verify models work~~
    - Models work, verified in postman
- ~~Test routes and authorization~~
    - Routes work, verified in Postman
- ~~Read up on google and facebook authentication~~might pick only one...depends how easily google auth goes
- ~~Wireframe frontend~~ Did on whiteboard instead
- ~~Initialize react native frontend~~ React Native front end initialized with ios, android and web running

## Wednesday To Do
- ~~finish building out initial functionality on frontend~~
- ~~build forms, filler text, logo/icons, make nav bar work~~

## Thursday
- ~~Finish building recipe create/edit form~~
- ~~Connect to backend~~ - completed Friday morning due to issues

## Friday
- ~~Work through issues - backend connection~~
- ~~Get styling finished on current pages~~

## Saturday
- Worked on Portfolio

## Sunday
- Finish portfolio 


## Monday 
- ~~Worked through routing issues with react-navigation and the show page~~
- ~~Build in show page, and pass through route to edit page~~

## Tuesday
- Finish styling
- Fix feed refresh issue

## User Stories
- All users should be able to create multiple recipes, share/edit/delete specific recipes created by said user
- Each user should be able to view any recipes that are marked public, favorite/save public recipe for future reference
- Each user should be able to share specific recipe to specific user(aka friend or family)


## MVP
- Used new tech - React Native
- Users can create, edit, and delete
- Finished product styling


## Post MVP
- Users can register, login, log out using google/facebook auth.
- Users can search and sort list of all recipes or just their own recipes(created and favorited) 
- Users can view a private feed of user created recipes and liked recipes
- Build in photo upload functionality (Upload from album or take photo)

