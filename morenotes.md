*********INSTRUCTIONS**********

In git bash, or the command line, type the following: 'npx create-react-app {app name}'. You will need to replace '{app name}' with a unique name, i.e. 'npx create-react-app sacrd-gardn'. 

Once the above is written and entered, your system will run scripts; when you see, 'We suggest that you begin by typing: cd {app name} and npm (or yarn) start Happy hacking!' react has installed and you are ready to begin!

If you run into issues, ensure that nodemon, npm are up to date--react regularly releases updates. 

In git bash, or the command line, type the following: 'cd {app name}', replace '{app name}' with your unique app name. 

Once in the correct folder, in git bash, or the command line, type the following: 'npm start' or 'yarn start' (if the module is installed).

Once the above is written and entered, your system will run scripts; when you see, 'Compiled successfully! You can now view {app name} in the browser....webpack compiled successfully' You can view your app in the local host url, i.e. 'Local:            http://localhost:3000'. 

*************MONGODB**************

In git bash type the following command to initialize mongoDB: 'mongod', you will see multiple lines of code--it should not cut off. Then enter, 'mongosh' which will render more code--you do not need to know what the code means; however, if you do not see the code then you a) have not installed mongoDB, or b) you have not created the necessary paths. 

Once you have verified and initialized that mongoDB is working, you can type the following commands:\
'db'--this will show the current db being used.
'use {uniqueDB}'--this will change the db to use {uniqueDB}.
'db.{uniqueClass}.insert({uniqueInfo})'--this will insert an object into the unique class.
'db.{uniqueClass}.find()'--this will render all the objects existing within the unique class. 
'show dbs'--this will render all the existing dbs.

Reminder, you can create a db from the command line, but it will not show unless you have inserted information to the db. 

***********MERN************

To concurrently run the server and the client, type the following command: 'npm run develop'. This will not work unless you have the right package.json file in the client and server parent folder. 

