"use client";

import { useState } from "react";

interface CounsellingFormData {
  name: string;
  email: string;
  phone: string;
  department: string;
  year: string;
  counsellingType: string;
  mode: string;
  message: string;
}

export default function StudentCounsellingPage() {
  const [form, setForm] = useState<CounsellingFormData>({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    counsellingType: "",
    mode: "In-person",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_key: "fa37382d-ddcb-4160-adae-7bd0add88acb",
          subject: "New Student Counselling Request – PIET",
          from_name: "PIET Counselling Portal",
          ...form
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Your counselling request has been submitted successfully.");
        setForm({
          name: "",
          email: "",
          phone: "",
          department: "",
          year: "",
          counsellingType: "",
          mode: "In-person",
          message: ""
        });
      } else {
        setStatus("Submission failed. Please try again.");
      }

    } catch (error) {
      setStatus("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-4">
        Student Counselling & Support
      </h1>

      <p className="text-sm text-gray-600 mb-6">
        This form is confidential. Details will be shared only with the authorized counsellor.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          placeholder="Student Name (Optional)"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Email Address *"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="phone"
          placeholder="Contact Number (Optional)"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="year"
          placeholder="Year / Semester"
          value={form.year}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <select
          name="counsellingType"
          required
          value={form.counsellingType}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Type of Counselling *</option>
          <option>Mental Health / Stress</option>
          <option>Career Guidance</option>
          <option>Academic Stress</option>
          <option>Personal Issues</option>
          <option>Other</option>
        </select>

        <select
          name="mode"
          value={form.mode}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>In-person</option>
          <option>Online</option>
        </select>

        <textarea
          name="message"
          required
          placeholder="Describe your concern *"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={4}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Submitting..." : "Submit Counselling Request"}
        </button>

        {status && (
          <p className="text-center text-green-600 text-sm mt-2">
            {status}
          </p>
        )}
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        If you are in immediate distress, please contact emergency services or a trusted authority.
      </p>
    </div>
  );
}
