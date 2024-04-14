const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const db  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'Password2.0',
    database        : 'demodays'
  });

app.post('/pages/signup/judgeSignup', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;

    db.query("INSERT INTO judge (FirstName, LastName, Email, Password) VALUES (?, ?, ?, ?)", 
    [firstName, lastName, email, password], 
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send({firstName: firstName});
        }
    });
})

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});