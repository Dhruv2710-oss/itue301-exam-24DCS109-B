const express = require("express");
const { appointments } = require("../data/store");

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: appointments,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  try {
    const { patientName, doctorName, patientId, doctorId, date, timeSlot, reason } =
      req.body;

    if (!date || !timeSlot || (!patientName && !patientId) || (!doctorName && !doctorId)) {
      const error = new Error("Please provide patient, doctor, date and time slot");
      error.statusCode = 400;
      throw error;
    }

    const newAppointment = {
      id: "a" + (appointments.length + 1),
      patientName: patientName || "",
      doctorName: doctorName || "",
      patientId: patientId || null,
      doctorId: doctorId || null,
      date,
      timeSlot,
      status: "pending",
      reason: reason || "",
    };

    appointments.push(newAppointment);

    res.status(201).json({
      success: true,
      data: newAppointment,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
