const express = require("express");
const { doctors } = require("../data/store");

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: doctors,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
