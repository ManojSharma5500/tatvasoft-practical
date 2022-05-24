const sql = require("../db.js");

module.getblogs = (result) =>{
    let query = "SELECT * from blogs";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("blogs: ", res);
        // result(null, res);
        return res;
    });
};


module.getBlogUsers = (result) =>{
    let query = "SELECT * from bloguser";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("blogs: ", res);
        // result(null, res);
        return;
    });
};

module.exports = module;