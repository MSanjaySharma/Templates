const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const configureDB = require("./config/database");

//routes imports
//const exampleRoutes = require("./config/routes/exampleRoutes");

//app
const app = express();

//db
configureDB();

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes middlewares
//app.use("/apiv1/", exampleRoutes);

//port
const port = process.env.PORT || 7331;

app.listen(port, () => {
  console.log(
    `\x1b[94mServer is running on port ${port}\x1b[39m\n\x1b[94mvisit\x1b[39m \x1b[96mhttp://localhost:${port}/apiv1\x1b[39m`
  );
});
