const connection = require("../config/connection");

const getCourseDetails = (req, res) => {
    const sql = "SELECT * FROM course_details";
    connection.query(sql, (error, result) => {
        if (error) {
            console.log("Error Getting Data Brand Table in server.js" + error);
        }
        return res.json(result);
    });
};

module.exports = {
    getCourseDetails
}