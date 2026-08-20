import { useState } from "react";
import AppointmentCard from "../components/AppointmentCard";
import "./BookingPage.css";

const emptyForm = {
  patientName: "",
  doctorName: "",
  date: "",
  timeSlot: "",
  reason: "",
};

function BookingPage() {
  const [formData, setFormData] = useState(emptyForm);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));

    if (name === "doctorName") {
      setSelectedDoctor(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");

    const { patientName, doctorName, date, timeSlot, reason } = formData;

    if (!patientName.trim() || !doctorName.trim() || !date || !timeSlot.trim() || !reason.trim()) {
      setError("Please fill in all required fields before submitting.");
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch("http://localhost:5000/api/v1/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientName: patientName.trim(),
          doctorName: doctorName.trim(),
          date,
          timeSlot: timeSlot.trim(),
          reason: reason.trim(),
          status: "pending",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create appointment");
      }

      setConfirmation({
        patientName: result.data.patientName,
        doctorName: result.data.doctorName,
        date: result.data.date,
        timeSlot: result.data.timeSlot,
        status: result.data.status || "pending",
      });
      setSuccessMessage("Appointment booked successfully. Status is pending.");
      setFormData(emptyForm);
      setSelectedDoctor("");
    } catch (err) {
      setError(err.message || "Could not book the appointment. Please try again.");
      setConfirmation(null);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section>
      <h1>Book an appointment</h1>
      <p className="page-lead">
        Fill in the details below. New bookings are saved with status pending.
      </p>

      <div className="booking-layout">
        <form className="booking-form" onSubmit={handleSubmit}>
          <label>
            Patient name
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Doctor name
            <input
              type="text"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Date
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Time slot
            <input
              type="text"
              name="timeSlot"
              placeholder="e.g. 10:00 AM"
              value={formData.timeSlot}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Reason
            <textarea
              name="reason"
              rows="3"
              maxLength="300"
              value={formData.reason}
              onChange={handleChange}
              required
            />
          </label>

          {error ? <p className="form-alert error">{error}</p> : null}
          {successMessage ? <p className="form-alert success">{successMessage}</p> : null}

          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Book appointment"}
          </button>
        </form>

        <aside className="booking-side">
          {formData.patientName ? (
            <p className="live-preview">
              Booking for: <strong>{formData.patientName}</strong>
            </p>
          ) : (
            <p className="live-preview muted">Start typing the patient name.</p>
          )}

          {selectedDoctor ? (
            <p className="live-preview">
              Selected doctor: <strong>{selectedDoctor}</strong>
            </p>
          ) : null}

          {confirmation ? (
            <div className="confirmation">
              <h2>Appointment confirmation</h2>
              <AppointmentCard
                patientName={confirmation.patientName}
                doctorName={confirmation.doctorName}
                date={confirmation.date}
                timeSlot={confirmation.timeSlot}
                status={confirmation.status}
              />
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  );
}

export default BookingPage;
