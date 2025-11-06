import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Card from "../components/card.jsx";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Order form state
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
    setIsModalOpen(false);
  };

  return (
    <div className="relative overflow-x-hidden text-white bg-gradient-to-b from-[#08080f] via-[#111026] to-[#0a091a] min-h-screen font-sans tracking-wide">

      {/* === SIDE PANEL === */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-gradient-to-b from-[#15132c]/95 to-[#241b3b]/95 backdrop-blur-2xl border-l border-white/10 shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-transform duration-500 ease-in-out z-50 ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            ⚡ New Arrivals
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Discover the latest models engineered for performance, precision, and sustainability.
          </p>

          <div className="mt-6 space-y-4">
            {[
              { title: "Velocity X-One", desc: "A new era of electric dominance." },
              { title: "Velocity Aurora", desc: "Redefining luxury with silent power." },
              { title: "Velocity Shadow", desc: "Dark elegance meets speed." }
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all duration-300"
              >
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsPanelOpen(false)}
            className="mt-8 w-full py-2 bg-gradient-to-r from-indigo-500/40 to-purple-500/40 hover:from-indigo-500 hover:to-purple-500 rounded-xl transition-all font-semibold text-white shadow-[0_0_10px_rgba(99,102,241,0.4)]"
          >
            Close Panel
          </button>
        </div>
      </div>

      {/* === BACKDROP === */}
      {(isPanelOpen || isModalOpen) && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 animate-fadeIn"
          onClick={() => {
            setIsPanelOpen(false);
            setIsModalOpen(false);
          }}
        ></div>
      )}

      {/* === MODAL === */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 animate-fadeIn">
          <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.4)] p-8 sm:p-10 w-full sm:max-w-lg text-white scale-95 transform transition-all duration-300">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Book Your <span className="text-purple-400">Car Service</span>
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {["name", "email", "carModel"].map((field, idx) => (
                <div key={idx} className="relative">
                  <input
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "carModel" ? "Car Model" : field === "name" ? "Full Name" : "Email Address"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="peer w-full px-5 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition-all"
                    required
                  />
                  <label className="absolute left-5 top-3.5 text-gray-300 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-purple-300 bg-gradient-to-r from-[#0a0a1a]/80 to-transparent px-1">
                    {field === "carModel" ? "Car Model" : field === "name" ? "Full Name" : "Email Address"}
                  </label>
                </div>
              ))}

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

              <div className="flex flex-col sm:flex-row justify-end gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:w-auto px-5 py-2 border border-white/20 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all duration-300"
                >
                  Avail Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* === MAIN CONTENT === */}
      <div className="pt-24 px-4 sm:px-6 md:px-28">

        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row justify-between items-center gap-10 mb-24">
          <div className="md:w-1/2 space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.4)]">
              Powering the Future <br />
              <span className="text-white">of Intelligent Mobility</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              At <span className="text-indigo-400 font-semibold">Velocity Motors</span>, every model is designed with
              sustainability, performance, and cutting-edge technology in mind — redefining what cars can be.
            </p>
          </div>

          <div className="relative md:w-1/2 flex flex-col items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl rounded-full"></div>
            <img
              src="/images/BMW.jpg"
              alt="Velocity Motors Car"
              className="relative z-10 md:w-full rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(99,102,241,0.6)] hover:shadow-[0_25px_80px_rgba(139,92,246,0.7)] transition-all duration-700 transform hover:scale-105"
            />
            <div className="relative z-20 mt-6 md:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              <PrimaryButton label="Ours Models" onClick={() => navigate("/cars")} />
              <PrimaryButton label="Avail Now" onClick={() => setIsModalOpen(true)} />
              <PrimaryButton label="Exclusive Offers" onClick={() => setIsPanelOpen(true)} />
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="mb-28">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]">
            Why Choose Velocity
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] transition-all duration-500 hover:-translate-y-2">
              <Card
                icon="battery"
                title="Next-Gen Battery Tech"
                description="Delivering up to 850km range per charge with AI-optimized efficiency and thermal stability."
              />
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_25px_rgba(147,51,234,0.3)] hover:shadow-[0_0_35px_rgba(147,51,234,0.6)] transition-all duration-500 hover:-translate-y-2">
              <Card
                icon="design"
                title="Futuristic Craftsmanship"
                description="Every curve, line, and texture reflects aerodynamic elegance and intelligent design."
              />
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-500 hover:-translate-y-2">
              <Card
                icon="speed"
                title="Pure Performance"
                description="Accelerate 0–100 km/h in just 2.5s with precision control and zero emissions."
              />
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center pb-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
            Drive the Change with Velocity Motors
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
            Experience the future today. Pre-order your model or join our elite membership for early access to innovations.
          </p>
          <PrimaryButton label="Get Started" onClick={() => setIsModalOpen(true)} />
        </section>

      </div>
    </div>
  );
}
