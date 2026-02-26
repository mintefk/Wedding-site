import { useState } from "react";
import { handleRSVPSubmit } from "../controllers/rsvpController";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({ name: "", guests: "" });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleRSVPSubmit(formData, resetForm);
  };

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-2xl mb-6">RSVP</h2>
      <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-b border-gray-400 bg-transparent p-3 focus:outline-none"
          required
        />
        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={formData.guests}
          onChange={handleChange}
         className="w-full border-b border-gray-400 bg-transparent p-3 focus:outline-none"
          required
        />
        <button className="bg-amber-500 text-white px-8 py-3 tracking-widest uppercase hover:bg-amber-600 transition">
  Confirm Attendance
</button>
      </form>
    </section>
  );
}