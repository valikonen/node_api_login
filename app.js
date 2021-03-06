const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();


// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());


// Routes
// app.use("/users", require("./routes/users"));
app.use('/users', require('./routes/users'));


// Start the server
const port = process.env.PORT || 9001;

app.listen(port);

// console.log(`Server run on http://localhost:${port}`)
