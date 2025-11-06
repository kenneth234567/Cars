import React from "react";

export default function PrimaryButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 font-semibold"
    >
      {label}
    </button>
  );
}