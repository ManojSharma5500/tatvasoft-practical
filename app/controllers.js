const model = require("../app/models.js");

exports.blogs = (req, res) => {

    var data;
    model.getblogs((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
            data = res.json(data);
        }
    });
    res.send(data);

};

exports.blogUsers = (req, res) => {

    var data;
    model.getBlogUsers((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            console.log(res);
            data = res.json(data);
            res.status(200).send(data);
        }
    });
    res.send(data);

};