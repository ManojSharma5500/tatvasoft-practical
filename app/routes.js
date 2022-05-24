var router = require("express").Router();

    const controller = require('../app/controllers.js');
    router.get("/listblogs", controller.blogs);
    router.get("/blogusers", controller.blogUsers);

module.exports = router;