const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: [true, "Patient is required"],
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: [true, "Doctor is required"],
  },
  date: { type: String, required: [true, "Date is required"] },
  timeSlot: { type: String, required: [true, "Time slot is required"] },
  status: {
    type: String,
    enum: {
      values: ["pending", "confirmed", "cancelled"],
      message: "Invalid appointment status",
    },
    default: "pending",
  },
  reason: {
    type: String,
    maxlength: [300, "Reason cannot exceed 300 characters"],
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
