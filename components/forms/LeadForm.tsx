"use client";

import { useState } from "react";

type Division = "solar" | "construction";

export default function LeadForm({
  division,
  onSuccess,
}: {
  division: Division;
  onSuccess?: () => void;
}) {
  const solar = division === "solar";
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!/^[+]?[ds()-]{8,18}$/.test(String(data.contact_number || ""))) {
      setError("Please enter a valid contact number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, division }),
      });

      if (!response.ok) throw new Error("Lead submission failed");

      form.reset();
      if (onSuccess) {
        onSuccess();
      } else {
        setSent(true);
      }
    } catch {
      setError("We could not submit your enquiry. Please call or WhatsApp us.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="success-box" role="status">
        <h3>Thank You!</h3>
        <p>Your enquiry has been received. Our team will review your requirement and contact you shortly.</p>
        <a className="btn btn-primary" href={`/${division}/thank-you`}>Continue</a>
      </div>
    );
  }

  const options = solar
    ? ["Residential Rooftop", "C&I Setup", "Solar Pumps", "Highmast Infrastructure"]
    : ["New Construction", "Repair & Retrofit", "Waterproofing", "Land Development", "Plot Erection"];

  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          Name
          <input name="customer_name" autoComplete="name" required />
        </label>
        <label>
          Contact
          <input name="contact_number" autoComplete="tel" inputMode="tel" required />
        </label>
        <label>
          {solar ? "Location / City" : "Project Site Location"}
          <input name="location" autoComplete="address-level2" required />
        </label>
        {solar ? (
          <>
            <label>
              Average Monthly Bill
              <input name="monthly_bill" type="number" min="0" inputMode="numeric" required />
            </label>
            <label>
              Roof Space
              <input name="roof_space" type="number" min="0" inputMode="numeric" required />
            </label>
          </>
        ) : (
          <label>
            Total Area / Plot Size
            <input name="project_area" type="number" min="0" inputMode="numeric" required />
          </label>
        )}
        <label className="full">
          {solar ? "Solar Requirement" : "Project Requirement"}
          <select name="service_type" defaultValue="" required>
            <option value="" disabled>Select an option</option>
            {options.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Request a Callback"}
      </button>
    </form>
  );
}
