import "./AppointmentCard.css";

function AppointmentCard({ patientName, doctorName, date, timeSlot, status }) {
  return (
    <article className="appointment-card">
      <header className="appointment-card-header">
        <div>
          <p className="label">Patient</p>
          <h3>{patientName}</h3>
        </div>
        <span className={`status-badge status-${status}`}>{status}</span>
      </header>
      <dl className="appointment-meta">
        <div>
          <dt>Doctor</dt>
          <dd>{doctorName}</dd>
        </div>
        <div>
          <dt>Date</dt>
          <dd>{date}</dd>
        </div>
        <div>
          <dt>Time slot</dt>
          <dd>{timeSlot}</dd>
        </div>
      </dl>
    </article>
  );
}

export default AppointmentCard;
