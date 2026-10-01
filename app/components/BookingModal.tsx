"use client";

import { useState } from "react";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function BookingModal({
  open,
  onClose,
}: BookingModalProps) {
  const [location, setLocation] = useState("");
  const [castingType, setCastingType] = useState("");
  const [cast, setCast] = useState("");
  const [people, setPeople] = useState("");
  const [date, setDate] = useState("");
const [time, setTime] = useState("");
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const whatsappNumber = "9625353503";

  const bookingMessage = `
*NEW SEERAT BOOKING REQUEST*

*Location:* ${location || "Not specified"}
*Casting Type:* ${castingType || "Not specified"}
*Casting:* ${cast || "Not specified"}
*Number of People:* ${people || "Not specified"}

*Preferred Date:* ${date || "Not specified"}
*Preferred Time:* ${time || "Not specified"}

*Name:* ${name || "Not specified"}
*WhatsApp:* ${phone || "Not specified"}
*Email:* ${email || "Not provided"}

*Additional Requirements:*
${message || "None"}
  `.trim();

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    bookingMessage
  )}`;

  window.open(whatsappUrl, "_blank");
};

  if (!open) return null;

  const options = (
    value: string,
    selected: string,
    setSelected: (value: string) => void
  ) => (
    <button
      type="button"
      onClick={() => setSelected(value)}
      className={`rounded-full border px-5 py-3 text-sm transition-all duration-300 ${
        selected === value
          ? "border-[#292522] bg-[#292522] text-[#F8F6F1]"
          : "border-[#292522]/15 hover:border-[#292522]/40"
      }`}
    >
      {value}
    </button>
  );

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#292522]/40 backdrop-blur-md">
      <div className="flex min-h-screen items-center justify-center p-4 md:p-8">

        <div className="relative w-full max-w-4xl rounded-[2rem] bg-[#F8F6F1] p-7 shadow-2xl md:p-12">

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#292522]/10 text-lg transition-colors hover:bg-[#292522]/5"
            aria-label="Close booking form"
          >
            ×
          </button>

          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase opacity-40">
              SEERAT
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              Book a session.
            </h2>

            <p className="mt-5 text-base leading-7 opacity-55">
              Tell us a little about the moment you want to preserve.
            </p>
          </div>

<form
  onSubmit={handleSubmit}
  className="mt-12 space-y-12"
>
            {/* Location */}
            <div>
              <p className="mb-4 text-xs tracking-[0.25em] uppercase opacity-40">
                WHERE?
              </p>

              <div className="flex flex-wrap gap-3">
                {options(
                  "Visit Studio",
                  location,
                  setLocation
                )}

                {options(
                  "Home Service",
                  location,
                  setLocation
                )}
              </div>
            </div>

            {/* Casting Type */}
            <div>
              <p className="mb-4 text-xs tracking-[0.25em] uppercase opacity-40">
                WHO IS THIS FOR?
              </p>

              <div className="flex flex-wrap gap-3">
                {options("Couple", castingType, setCastingType)}
                {options("Children", castingType, setCastingType)}
                {options(
                  "Children + Parent(s)",
                  castingType,
                  setCastingType
                )}
                {options("Parent(s)", castingType, setCastingType)}
                {options("Myself", castingType, setCastingType)}
                {options("Other / Custom", castingType, setCastingType)}
              </div>
            </div>

            {/* Casting */}
            <div>
              <p className="mb-4 text-xs tracking-[0.25em] uppercase opacity-40">
                WHAT WOULD YOU LIKE TO CAST?
              </p>

              <div className="flex flex-wrap gap-3">
                {options("Hands", cast, setCast)}
                {options("Feet", cast, setCast)}
                {options("Hands + Feet", cast, setCast)}
                {options("Custom", cast, setCast)}
              </div>
            </div>

            {/* People */}
            <div>
              <p className="mb-4 text-xs tracking-[0.25em] uppercase opacity-40">
                NUMBER OF PEOPLE
              </p>

              <div className="flex flex-wrap gap-3">
                {options("1", people, setPeople)}
                {options("2", people, setPeople)}
                {options("3", people, setPeople)}
                {options("3+", people, setPeople)}
              </div>
            </div>

            {/* Date + Time */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-3 block text-xs tracking-[0.25em] uppercase opacity-40">
                  PREFERRED DATE
                </label>

                <input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  required
  className="w-full rounded-2xl border border-[#292522]/15 bg-transparent px-5 py-4 text-sm outline-none transition-colors focus:border-[#292522]/50"
/>
              </div>

              <div>
                <label className="mb-3 block text-xs tracking-[0.25em] uppercase opacity-40">
                  PREFERRED TIME
                </label>

                <select
  value={time}
  onChange={(e) => setTime(e.target.value)}
  required
  className="w-full appearance-none rounded-2xl border border-[#292522]/15 bg-[#F8F6F1] px-5 py-4 text-sm outline-none transition-colors focus:border-[#292522]/50"
>
  <option value="" disabled>
    Select a time
  </option>
  <option value="Morning">Morning</option>
  <option value="Afternoon">Afternoon</option>
  <option value="Evening">Evening</option>
</select>
              </div>

            </div>

            {/* Personal details */}
            <div>
              <p className="mb-5 text-xs tracking-[0.25em] uppercase opacity-40">
                YOUR DETAILS
              </p>

              <div className="space-y-4">

                <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Your name"
  required
  className="w-full rounded-2xl border border-[#292522]/15 bg-transparent px-5 py-4 text-sm outline-none placeholder:opacity-40 focus:border-[#292522]/50"
/>
                <input
  type="tel"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  placeholder="WhatsApp number"
  required
  className="w-full rounded-2xl border border-[#292522]/15 bg-transparent px-5 py-4 text-sm outline-none placeholder:opacity-40 focus:border-[#292522]/50"
/>

                <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email address — optional"
  className="w-full rounded-2xl border border-[#292522]/15 bg-transparent px-5 py-4 text-sm outline-none placeholder:opacity-40 focus:border-[#292522]/50"
/>

                <textarea
  rows={4}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  placeholder="Anything you'd like us to know? — optional"
  className="w-full resize-none rounded-2xl border border-[#292522]/15 bg-transparent px-5 py-4 text-sm outline-none placeholder:opacity-40 focus:border-[#292522]/50"
/>

              </div>
            </div>

            {/* Placeholder information */}
            {/* Location information */}
<div className="rounded-2xl bg-[#EFE9DE] p-5 text-sm leading-6">
  {location === "Visit Studio" && (
    <p>
      Studio: <span className="opacity-60">Max Heights, Kundli, Sonipat</span>
    </p>
  )}

  {location === "Home Service" && (
    <p>
      Home service:{" "}
      <span className="opacity-60">
        Available across Delhi NCR Areas
      </span>
    </p>
  )}

  {!location && (
    <p className="opacity-50">
      Select your preferred experience above.
    </p>
  )}

  <p className="mt-2 opacity-50">
    Studio timings: 9a.m. - 5p.m.
  </p>
</div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-full bg-[#292522] px-7 py-5 text-sm text-[#F8F6F1] transition-transform duration-300 hover:scale-[1.02]"
            >
              Request a Session
            </button>

            <p className="text-center text-xs leading-5 opacity-40">
              This is a booking request. Our team will contact you
              to confirm availability and details.
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}