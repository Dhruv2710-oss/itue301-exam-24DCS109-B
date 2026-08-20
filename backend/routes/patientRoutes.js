const express = require("express");
const Patient = require("../models/Patient");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json({
      success: true,
      data: patient,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
