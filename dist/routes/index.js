"use strict";

var _express = require("express");
/**
 * Contains all API routes for the application.
 */

var router = (0, _express.Router)();
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
// For Get one User
router.get('/user/:id', function (req, res) {
  var id = req.params.id;
  res.status(200).json({
    message: "get user id ".concat(id)
  });
});

//For Get All Users
router.get('/users', function (req, res) {
  res.status(200).json({
    message: "get all users"
  });
});

//For Create User
router.post('/user', function (req, res) {
  res.status(200).json({
    message: 'user created'
  });
});

//For Delete User
router["delete"]('/user/:id', function (req, res) {
  res.status(200).json({
    message: "delete user id ".concat(req.params.id)
  });
});

//For update user
router.put('/user/:id', function (req, res) {
  res.status(200).json({
    message: "update user id ".concat(req.params.id)
  });
});
module.exports = router;