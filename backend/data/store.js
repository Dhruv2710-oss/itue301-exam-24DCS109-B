const doctors = [
  {
    id: "d1",
    name: "Dr. Mehta",
    email: "mehta@medcareplus.com",
    specialisation: "Cardiology",
    available: true,
  },
  {
    id: "d2",
    name: "Dr. Iyer",
    email: "iyer@medcareplus.com",
    specialisation: "Orthopaedics",
    available: true,
  },
  {
    id: "d3",
    name: "Dr. Khan",
    email: "khan@medcareplus.com",
    specialisation: "Paediatrics",
    available: false,
  },
];

const appointments = [
  {
    id: "a1",
    patientName: "Anita Shah",
    doctorName: "Dr. Mehta",
    patientId: "p1",
    doctorId: "d1",
    date: "2026-08-22",
    timeSlot: "10:00 AM",
    status: "confirmed",
    reason: "Routine checkup",
  },
];

module.exports = { doctors, appointments };
