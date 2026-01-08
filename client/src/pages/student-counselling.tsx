
import { useState } from "react";
import { useEffect } from "react";
import Header from "@/components/Header";
import BreadCrumb from "@/components/BreadCrumb";
import { AccessibilityFeatures } from "@/components/AccessibilityFeatures";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

/* ================================
   STUDENT COUNSELLING PAGE
   PIET – Poornima Institute of Engineering & Technology
================================ */

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.get("status") === "success") {
    setStatus("Your counselling request has been submitted successfully.");
  }
}, []);


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

const StudentCounsellingPage = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const formElement = document.createElement("form");
  formElement.method = "POST";
  formElement.action =
    "https://script.google.com/macros/s/AKfycbzNMnnm9oYZ3IfYIFO0KHcG_VpFENqeGi4b2p038eUiB_rqygu3FcaqpF2939OP7iaxqQ/exec";

  Object.entries(form).forEach(([key, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    formElement.appendChild(input);
  });

  document.body.appendChild(formElement);
  formElement.submit();

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
};


  return (
    <div className="min-h-screen bg-gray-50">
         <AccessibilityFeatures />
            <Header />
        
            <BreadCrumb
              title="Student Counselling"
              description="Support services for student well-being"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Student Counselling", isCurrent: true },
              ]}
              />
      
      {/* ================= HEADER ================= */}
      <header className="bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-semibold">
            Poornima Institute of Engineering & Technology
          </h1>
          <p className="text-sm opacity-90">
            Student Counselling & Support Services
          </p>
        </div>
      </header>

      

      {/* ================= CONTENT ================= */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        
        {/* INTRO */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Student Counselling & Support Portal
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            The institute provides professional counselling support to students
            experiencing academic stress, emotional challenges, career-related
            concerns, or personal difficulties. Students are encouraged to seek
            guidance in a safe, confidential, and supportive environment.
          </p>
        </section>

        {/* FORM CARD */}
        <section className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">
            Request a Counselling Session
          </h3>

          <p className="text-sm text-gray-600 mb-6">
            All information shared through this form is kept strictly confidential
            and will only be accessed by the authorized college counsellor.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              placeholder="Student Name (Optional)"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />

            <input
              name="phone"
              placeholder="Contact Number (Optional)"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="department"
                placeholder="Department"
                value={form.department}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2"
              />

              <input
                name="year"
                placeholder="Year / Semester"
                value={form.year}
                onChange={handleChange}
                className="border rounded-lg px-4 py-2"
              />
            </div>

            <select
              name="counsellingType"
              required
              value={form.counsellingType}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
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
              className="w-full border rounded-lg px-4 py-2"
            >
              <option>In-person</option>
              <option>Online</option>
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder="Briefly describe your concern *"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition"
            >
              {loading ? "Submitting..." : "Submit Counselling Request"}
            </button>

            {status && (
              <p className="text-center text-sm text-green-600 mt-2">
                {status}
              </p>
            )}
          </form>
        </section>

        {/* DISCLAIMER */}
        <section className="mt-6 text-xs text-gray-500 text-center">
          <p>
            If you are experiencing severe distress or are in immediate danger,
            please contact local emergency services or a trusted authority without delay.
          </p>
        </section>
       
      </main>
       <Cta />
        <Footer />

    </div>
  );
};

export default StudentCounsellingPage;
