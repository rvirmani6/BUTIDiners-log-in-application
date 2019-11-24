const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
// Set the port to 3000 OR let the process set the port (if deployed to Heroku)
const PORT = process.env.PORT || 5000;

// Initialize Express
const app = express();

/* Redirect http to https */
app.get("*", (req, res, next) => {
  if (
    req.headers["x-forwarded-proto"] !== "https" &&
    process.env.NODE_ENV === "production"
  )
    res.redirect("https://" + req.headers.host + req.url);
  else next(); /* Continue to other routes if we're not redirecting */
});

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../my-app/public'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../my-app/public/index.html'));
});
// Routes
// API Routes (require from routes file and pass in Express app)
require("./routes/api-routes")(app);

// Start the server
app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});