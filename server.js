const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require('cors');
const path = require('path');

const users = require("./routes/users");
const requests = require("./routes/requests");

const app = express();
const port = process.env.PORT || 5000;
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());

// DB Config
const URI = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI || URI,
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/users", users);
app.use("/requests", requests);




const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
