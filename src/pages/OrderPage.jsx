import React, { useState } from "react";

export default function OrderPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    carModel: "",
    serviceType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Service booked for ${form.carModel} by ${form.name} — ${form.serviceType}`
    );
    setForm({ name: "", email: "", carModel: "", serviceType: "" });
  };

  return (
    // ✅ Match Landing Page Background (dark luxury car gradient)
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#111133] to-[#1e103f] pt-24 px-6 md:px-20 text-white relative overflow-hidden">
      {/* Subtle glowing overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.2),transparent_60%)]" />

      {/* Title */}
      <h1 className="relative text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">
        Book Your Car <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Service</span>
      </h1>

      {/* Glassmorphism Form */}
      <form
        onSubmit={handleSubmit}
        className="relative max-w-lg mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] space-y-6 transition-all duration-300 hover:shadow-[0_0_35px_rgba(147,51,234,0.3)] hover:scale-[1.02]"
      >
        {/* Name */}
        <div className="relative">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="peer w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition-all"
            required
          />
          <label className="absolute left-5 top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-purple-300 bg-gradient-to-r from-[#0a0a1a]/80 to-transparent px-1">
            Full Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="peer w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition-all"
            required
          />
          <label className="absolute left-5 top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-purple-300 bg-gradient-to-r from-[#0a0a1a]/80 to-transparent px-1">
            Email Address
          </label>
        </div>

        {/* Car Model */}
        <div className="relative">
          <input
            type="text"
            placeholder="Car Model"
            value={form.carModel}
            onChange={(e) => setForm({ ...form, carModel: e.target.value })}
            className="peer w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition-all"
            required
          />
          <label className="absolute left-5 top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-purple-300 bg-gradient-to-r from-[#0a0a1a]/80 to-transparent px-1">
            Car Model
          </label>
        </div>

        {/* Service Type */}
        <div className="relative">
          <select
            value={form.serviceType}
            onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
            className="w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition-all"
            required
          >
            <option value="">Select Service Type</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Engine Check">Engine Check</option>
            <option value="Tire Replacement">Tire Replacement</option>
            <option value="Full Maintenance">Full Maintenance</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
