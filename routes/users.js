const express = require("express");
var router = require('express-promise-router')();


const UsersController = require("../controllers/users");

router.route("/signup")
    .post(UsersController.signUp);

router.route("/signin")
    .post(UsersController.signIn);

router.route("/secret")
    .get(UsersController.secret);

module.exports = router;