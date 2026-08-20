import { useEffect, useState } from "react";
import "./DoctorsPage.css";

function DoctorsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:5000/api/v1/doctors");

        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }

        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <section>
        <h1>Our doctors</h1>
        <p className="status-msg">Loading doctors...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h1>Our doctors</h1>
        <p className="status-msg error-msg">{error}</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Our doctors</h1>
      <p className="page-lead">
        Specialists available for consultation at MedCare Plus.
      </p>
      <div className="doctor-grid">
        {data.map((doctor) => (
          <article
            key={doctor.id || doctor.email || doctor.name}
            className="doctor-card"
          >
            <div className="doctor-avatar">{doctor.name.charAt(4) || "D"}</div>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialisation}</p>
            <span
              className={doctor.available ? "pill available" : "pill unavailable"}
            >
              {doctor.available ? "Available" : "Unavailable"}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DoctorsPage;
