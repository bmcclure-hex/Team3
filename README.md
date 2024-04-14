# Team3
PosterJudging

# Instructions to run app with backend connectivity
MySQL:
Install MySQL Workbench and set up the configurations
- I installed from these links:
    - MySQL Community Server: https://dev.mysql.com/downloads/mysql/
    - MySQL Workbench: https://www.mysql.com/products/workbench/
- Important: The Server Port should NOT be "3000" or "8080". The deafult may be "3306", you can leave this as is.
- Make sure you set up your MySQL password to "Password2.0" as included in the settings.json file
- After set up, ensure the MySQL server is running by clicking on your local instance

Prepare MySQL Workbench:
- In Workbench, create a databse (also known as schema) called "demodays"
- I couldn't figure out how to import the tables so I just recreated the competitors and judge tables based on "Database Structure.sql"
    - I also added a column in the 'judge' table for password

Running the Server:
- Open a local terminal (NOT in the IDE)
- cd to  the "Team3\server" directory
- Run "node index.js" to start the server
    - If succesful, you should see "Server listening on port 8080" in the terminal

Running the App:
- Open a terminal in Visual Studio Code (or your IDE)
- cd to the "Team3\demoday" directory
- Run "npm run start" as usual

Verifying connection to the database:
- Navigate to the judgeSignup page
- Submit dummy values
- Return to MySQL Workbench 
- On the left navigation pane, expand the tree until you see the judge table
- Hover over "judge" and you should see a chart with a lightning bolt icon (which is 'Query All'), click this icon
- In the table, you should see your dummy values inserted

As of this push (4/13), only the judgeSignup page is connected to the DB