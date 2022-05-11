var express = require('express');
var router = express.Router();

// const fs = require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// router.get("/users", (req, res) => {

//   fs.readFile("./users.json", (error, data) => {
      
//       if (error) {
//           console.log("Error: " + error)
//       } else {
//           let users = JSON.parse(data);
//           res.json(users);
//       }
//   });

// });


module.exports = router;
