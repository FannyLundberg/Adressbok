var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const fs = require("fs");
const cors = require("cors");

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {index: false} ));


// Hämta users
app.get("/users", (req, res) => {

    fs.readFile("users.json", (error, data) => {
        
        if (error) {
            res.json({ "message": "error" })
        } else {
            let users = JSON.parse(data);
            res.json({ "message": "success", "contacts": users });
        }
    }); 
});


// Hämta users
app.post("/users", (req, res) => {

    // Hämta
    fs.readFile("users.json", (error, data) => {
        
        if (error) {
            res.json({ "message": "error" })
        } 

        let users = JSON.parse(data);

        // Ändra
        let newContact = {
            "name": req.body.name,
            "email": req.body.email,
            "phone": req.body.phone
        }

        users.push(newContact);

        // Spara
        fs.writeFile("users.json", JSON.stringify(users), (error) => {

            if (error) {
                console.log("Något blev fel: " + error)
            }
        })
        res.send(users)

    }); 

});


module.exports = app;
