# tatvasoft-practical

project is only done for read listblogs and read users from the mysql DB

to Start the project:

step 1: clone the project from "https://github.com/ManojSharma5500/tatvasoft-practical"

step 2: cd into the project folder

step 3: run the following command in the terminal:
 > npm install
 > npm start

step 4: open the browser and go to http://localhost:3000/

now on postman you can query the API

For list of blogs from the mysql DB
http://localhost:3000/app/listblogs  
ex: output blogs:  [
             RowDataPacket {
               Title: 'blog1',
               Description: 'this is first blog',
               publised_date: '0000-00-00',
               status: 0,
               category: 'fun',
               author: 'manoj'
             }
           ]

For list of users from the mysql DB
http://localhost:3000/app/blogusers





