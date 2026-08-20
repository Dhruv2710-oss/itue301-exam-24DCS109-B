import { Link } from "react-router-dom";
import AppointmentCard from "../components/AppointmentCard";
import "./HomePage.css";

const sampleAppointments = [
  {
    patientName: "Anita Shah",
    doctorName: "Dr. Mehta",
    date: "2026-08-22",
    timeSlot: "10:00 AM",
    status: "confirmed",
  },
  {
    patientName: "Rahul Patel",
    doctorName: "Dr. Iyer",
    date: "2026-08-23",
    timeSlot: "02:30 PM",
    status: "pending",
  },
  {
    patientName: "Neha Joshi",
    doctorName: "Dr. Khan",
    date: "2026-08-21",
    timeSlot: "11:15 AM",
    status: "cancelled",
  },
];

function HomePage() {
  return (
    <section>
      <div className="hero">
        <p className="eyebrow">MedCare Plus</p>
        <h1>Care that starts with a simple appointment</h1>
        <p>
          Book a slot with our specialists, review doctor availability, and keep
          track of upcoming visits in one place.
        </p>
        <Link to="/booking" className="cta">
          Book an appointment
        </Link>
      </div>

      <h2 className="section-title">Recent appointments</h2>
      <div className="card-grid">
        {sampleAppointments.map((appointment) => (
          <AppointmentCard
            key={`${appointment.patientName}-${appointment.date}`}
            patientName={appointment.patientName}
            doctorName={appointment.doctorName}
            date={appointment.date}
            timeSlot={appointment.timeSlot}
            status={appointment.status}
          />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
