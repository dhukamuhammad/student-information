const connection = require("../config/connection");

const getstudent = (req, res) => {
  const sql = "SELECT * FROM student_registation";
  connection.query(sql, (error, result) => {
    if (error) {
      console.log("Error Getting Data Brand Table in server.js" + error);
    }
    return res.json(result);
  });
};

const addStudentData = async (req, res) => {
  try {
    const {
      name,
      middle_name,
      surname,
      email,
      mobile,
      father_mobail,
      adress,
      city,
      gender,
      registation_date,
    } = req.body;
    console.log(req.body);

    const profile_pic = req.file.filename;
    console.log(profile_pic);
    const sql =
      "INSERT INTO student_registation (name, middle_name,surname,email,mobile,father_mobail,adress,city,gender,profile_pic,registation_date) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    const values = [
      name,
      middle_name,
      surname,
      email,
      mobile,
      father_mobail,
      adress,
      city,
      gender,
      profile_pic,
      registation_date,
    ];

    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error("Error Adding Data", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      return res.sendStatus(200);
    });
  } catch (error) {
    console.error("Error Adding Data", error);
    res.status(500).send("Internal Server Error");
  }
};

const deleteStudent = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const query = "DELETE FROM student_registation WHERE id = ?";

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error deleting item from the database", err);
      return res
        .status(500)
        .json({ error: "Error deleting item from the database" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json({ message: "Item deleted successfully" });
  });
};

const editstudent = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      name,
      middle_name,
      surname,
      email,
      mobile,
      father_mobail,
      adress,
      city,
      gender,
      registation_date,
    } = req.body;

    const query = "UPDATE clan SET clan_name = ?, parent_clan = ? WHERE id = ?";
    const values = [
      name,
      middle_name,
      surname,
      email,
      mobile,
      father_mobail,
      adress,
      city,
      gender,
      profile_pic,
      registation_date,
      id,
    ];
    await conn.query(query, values);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error Adding Data", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getstudent,
  addStudentData,
  deleteStudent,
};
