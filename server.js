const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dbUrl = 'mongodb://heroku_rmj2g0c9:r10fi2vajl2erh4e1am8pnjvn5@ds161345.mlab.com:61345/heroku_rmj2g0c9';
const app = express();

// Connect to remote MongoDB
mongoose.connect(dbUrl, { useNewUrlParser: true })
  .then(() => { console.log("Connected to MongoDB"); },
    err => { console.log(err) });

// Routers
const indexRouter = require('./routes/index');
const messagesRouter = require('./routes/messagesRouter');

// Use morgan & body-parser
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Use routers
app.use('/', indexRouter);
app.use('/', messagesRouter);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
