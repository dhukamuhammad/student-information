const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 4002;

// const login = require("./route/login");
const student = require("./route/Student_Routes");
const Course_Details = require("./route/CourseDetailsRoute");


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("From  Server ");
});
app.use("/", student);
app.use("/", Course_Details);

app.listen(PORT, () => {
  console.log(`Server Listening on port ` + PORT);
});
