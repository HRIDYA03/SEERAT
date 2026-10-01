"use client";

import ReviewsCarousel from "./components/ReviewsCarousel";
import Hero3D from "./components/Hero3D";
import StoryBanner from "./components/StoryBanner";
import { useState } from "react";
import BookingModal from "./components/BookingModal";
import Reveal from "./components/Reveal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<main
  id="top"
  className="min-h-screen bg-[#F8F6F1] text-[#292522]"
>
{/* Navigation */}
<nav className="fixed left-0 top-0 z-50 w-full bg-[#F8F6F1] px-6 py-5 md:px-12">
  <div className="flex items-center justify-between">

    {/* Logo */}
    <a
      href="#top"
      onClick={() => setMenuOpen(false)}
      className="text-2xl font-medium tracking-[0.22em] md:text-3xl"
    >
      SEERAT
    </a>

    {/* Desktop Navigation */}
    <div className="hidden items-center gap-8 text-sm md:flex">
      <a
        href="#experience"
        className="transition-opacity hover:opacity-60"
      >
        Experience
      </a>

      <a
        href="#creations"
        className="transition-opacity hover:opacity-60"
      >
        Creations
      </a>

      <a
        href="#process"
        className="transition-opacity hover:opacity-60"
      >
        How It Works
      </a>

      <a
        href="#reviews"
        className="transition-opacity hover:opacity-60"
      >
        Reviews
      </a>
    </div>

    {/* Desktop CTA */}
    <button
      onClick={() => setBookingOpen(true)}
      className="hidden rounded-full bg-[#292522] px-7 py-4 text-sm text-[#F8F6F1] transition-transform hover:scale-105 md:block"
    >
      Book a Session
    </button>

    {/* Mobile Menu Button */}
    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#292522]/10 md:hidden"
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
    >
      <span className="text-xl">
        {menuOpen ? "×" : "☰"}
      </span>
    </button>

  </div>

  {/* Mobile Menu */}
  <div
    className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
      menuOpen
        ? "max-h-[500px] opacity-100"
        : "max-h-0 opacity-0"
    }`}
  >
    <div className="border-t border-[#292522]/10 pb-6 pt-8">

      <div className="flex flex-col gap-6 text-2xl font-light">

        <a
          href="#experience"
          onClick={() => setMenuOpen(false)}
          className="transition-opacity hover:opacity-50"
        >
          Experience
        </a>

        <a
          href="#creations"
          onClick={() => setMenuOpen(false)}
          className="transition-opacity hover:opacity-50"
        >
          Creations
        </a>

        <a
          href="#process"
          onClick={() => setMenuOpen(false)}
          className="transition-opacity hover:opacity-50"
        >
          How It Works
        </a>

        <a
          href="#reviews"
          onClick={() => setMenuOpen(false)}
          className="transition-opacity hover:opacity-50"
        >
          Reviews
        </a>

      </div>

      <button
        onClick={() => {
          setMenuOpen(false);
          setBookingOpen(true);
        }}
        className="mt-8 w-full rounded-full bg-[#292522] px-7 py-4 text-sm text-[#F8F6F1]"
      >
        Book a Session
      </button>

    </div>
  </div>
</nav>

      {/* Hero */}
<section className="min-h-screen px-6 pt-28 md:px-12">
  <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-4 lg:grid-cols-[3fr_3fr]">
    
    {/* 3D Experience */}
    <div className="relative order-2 lg:order-1 h-[650px] lg:h-[calc(100vh-80px)] w-full overflow-visible">
  <Hero3D />
</div>
    {/* Brand Message */}
    <div className="order-1 flex flex-col justify-center text-center lg:order-2 lg:text-left">
      <p className="mb-5 text-xs tracking-[0.3em] uppercase opacity-40">
        3D HAND CASTING STUDIO
      </p>

<h1 className="text-8xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-[9rem] md:text-[10.5rem] lg:text-[11rem]">
          SEERAT
      </h1>

<p className="mt-8 font-[var(--font-devanagari)] text-2xl font-light tracking-wide md:text-4xl lg:text-[2.7rem]">
          हर स्पर्श में एक कहानी
      </p>

<p className="mt-7 max-w-xl text-lg leading-8 opacity-60 lg:text-xl lg:leading-9">
          Every touch holds a story.
        <br />
        Preserve the moments that matter.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:justify-start">
        <button
  onClick={() => setBookingOpen(true)}
  className="rounded-full bg-[#292522] px-7 py-4 text-sm text-[#F8F6F1] transition-transform hover:scale-105"
>
  Book a Session
</button>

        <a
          href="#experience"
          className="rounded-full border border-[#292522]/20 px-8 py-4 text-sm transition-colors hover:bg-[#292522]/5"
        >
          Explore Seerat
        </a>
      </div>

      <div className="mt-14 hidden items-center gap-3 opacity-35 lg:flex">
        <div className="h-px w-8 bg-[#292522]" />

        <span className="text-[10px] tracking-[0.3em] uppercase">
          Scroll to explore
        </span>
      </div>
    </div>

  </div>
</section>

      {/* Introduction */}
<section
  id="experience"
  className="flex min-h-screen items-center px-6 py-32 md:px-12"
>
  <div className="mx-auto w-full max-w-7xl">
    <div className="max-w-5xl">
      <p className="mb-8 text-xs tracking-[0.35em] uppercase opacity-40">
        THE IDEA
      </p>

      <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.045em] md:text-7xl lg:text-8xl">
        Some moments are too
        <br />
        meaningful to leave
        <br />
        only in memory.
      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-2 md:gap-20">
        <p className="text-lg leading-8 opacity-60 md:text-xl">
          A child's tiny hand. A parent's touch. Two hands held together
          on a day you'll never forget.
        </p>

        <p className="text-lg leading-8 opacity-60 md:text-xl">
          SEERAT transforms those fleeting moments into something
          tangible — carefully cast, finished and made to be held onto.
        </p>
      </div>
    </div>
  </div>
</section>

<StoryBanner />

{/* Creations */}
<section
  id="creations"
  className="bg-[#292522] px-6 py-32 text-[#F8F6F1] md:px-12"
>
  <div className="mx-auto max-w-7xl">

    {/* Section Header */}
    <div className="max-w-3xl">
      <p className="mb-6 text-xs tracking-[0.3em] uppercase text-white/50">
        CREATIONS
      </p>

      <h2 className="text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
        Made to be
        <br />
        held onto.
      </h2>

      <p className="mt-8 max-w-xl text-base leading-7 text-white/55 md:text-lg">
        Every Seerat creation is made to turn a fleeting moment into
        something you can see, touch and keep forever.
      </p>
    </div>

    {/* Creation Cards */}
    <div className="mt-20 grid gap-5 md:grid-cols-3">

      {/* ================= SCULPTURE ================= */}
      <div className="group relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10">

        {/* Image */}
        <img
          src="../sculpture.jpeg"
          alt="Seerat Sculpture"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

{/* Readability Overlay */}
<div className="absolute inset-0 bg-black/25 transition-all duration-500 group-hover:bg-black/45" />
        {/* Content */}
        <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-8 md:p-10">

          {/* Top */}
          <div className="flex items-start justify-between">

            <span className="text-xs font-medium tracking-[0.25em] text-white/90">
              01
            </span>

            <span className="text-sm text-white/80 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>

          </div>

          {/* Bottom */}
          <div>

            <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/90 transition-all duration-500 group-hover:text-white">
              3D HAND CAST
            </p>

            <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-white drop-shadow-sm transition-all duration-500 group-hover:drop-shadow-md">
              Sculpture
            </h3>

            <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-white/85 transition-all duration-500 group-hover:text-white">
              A physical 3D cast, carefully detailed and finished by hand —
              created directly from your moment.
            </p>

            <div className="mt-7 h-px w-12 bg-white/60 transition-all duration-500 group-hover:w-20 group-hover:bg-white" />

          </div>
        </div>
      </div>


      {/* ================= MEMORY FRAME ================= */}
      <div className="group relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10">

        {/* Image */}
        <img
          src="../frame.jpeg"
          alt="Seerat Memory Frame"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

{/* Readability Overlay */}
<div className="absolute inset-0 bg-black/25 transition-all duration-500 group-hover:bg-black/45" />
        {/* Content */}
        <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-8 md:p-10">

          {/* Top */}
          <div className="flex items-start justify-between">

            <span className="text-xs font-medium tracking-[0.25em] text-white/90">
              02
            </span>

            <span className="text-sm text-white/80 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>

          </div>

          {/* Bottom */}
          <div>

            <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/90 transition-all duration-500 group-hover:text-white">
              MEMORY ART
            </p>

            <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-white drop-shadow-sm transition-all duration-500 group-hover:drop-shadow-md">
              Memory Frame
            </h3>

            <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-white/85 transition-all duration-500 group-hover:text-white">
              Your cast brought together with photographs, caricatures and
              personal details that make the memory yours.
            </p>

            <div className="mt-7 h-px w-12 bg-white/60 transition-all duration-500 group-hover:w-20 group-hover:bg-white" />

          </div>
        </div>
      </div>


      {/* ================= MEMORY CABINET ================= */}
      <div className="group relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10">

        {/* Image */}
        <img
          src="../cabinet.jpeg"
          alt="Seerat Memory Cabinet"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

{/* Readability Overlay */}
<div className="absolute inset-0 bg-black/25 transition-all duration-500 group-hover:bg-black/45" />
        {/* Content */}
        <div className="relative z-10 flex h-full min-h-[520px] flex-col justify-between p-8 md:p-10">

          {/* Top */}
          <div className="flex items-start justify-between">

            <span className="text-xs font-medium tracking-[0.25em] text-white/90">
              03
            </span>

            <span className="text-sm text-white/80 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>

          </div>

          {/* Bottom */}
          <div>

            <p className="text-xs font-medium tracking-[0.25em] uppercase text-white/90 transition-all duration-500 group-hover:text-white">
              DISPLAY & PRESERVE
            </p>

            <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-white drop-shadow-sm transition-all duration-500 group-hover:drop-shadow-md">
              Memory Cabinet
            </h3>

            <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-white/85 transition-all duration-500 group-hover:text-white">
              A handcrafted display that gives your sculpture a beautiful
              place to live and become part of your space.
            </p>

            <div className="mt-7 h-px w-12 bg-white/60 transition-all duration-500 group-hover:w-20 group-hover:bg-white" />

          </div>
        </div>
      </div>

    </div>
  </div>
</section>


{/* Process */}
<section
  id="process"
  className="px-6 py-32 md:px-12"
>
  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-4xl">
      <p className="mb-6 text-xs tracking-[0.3em] uppercase opacity-40">
        THE EXPERIENCE
      </p>

      <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.045em] md:text-7xl lg:text-8xl">
        From a moment
        <br />
        to a memory.
      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 opacity-55 md:text-xl">
        Every SEERAT creation begins with a moment
        and ends with something you can keep.
      </p>
    </div>

    {/* Process */}
    <div className="mt-24">

      {/* Step 01 */}
      <div className="grid gap-6 border-t border-[#292522]/10 py-12 md:grid-cols-[100px_1fr_1fr] md:gap-12">

        <span className="text-sm opacity-35">
          01
        </span>

        <div>
          <p className="mb-3 text-xs tracking-[0.25em] uppercase opacity-40">
            BEGIN
          </p>

          <h3 className="text-3xl font-light tracking-[-0.03em] md:text-4xl">
            Choose your experience.
          </h3>
        </div>

        <p className="max-w-md text-base leading-7 opacity-55">
          Visit the SEERAT studio or book a home
          casting experience across Delhi NCR.
        </p>

      </div>

      {/* Step 02 */}
      <div className="grid gap-6 border-t border-[#292522]/10 py-12 md:grid-cols-[100px_1fr_1fr] md:gap-12">

        <span className="text-sm opacity-35">
          02
        </span>

        <div>
          <p className="mb-3 text-xs tracking-[0.25em] uppercase opacity-40">
            CAST
          </p>

          <h3 className="text-3xl font-light tracking-[-0.03em] md:text-4xl">
            Capture the moment.
          </h3>
        </div>

        <div className="max-w-md">
          <p className="text-base leading-7 opacity-55">
            Your hands or feet are carefully cast using
            casting stone, preserving the details of the
            moment.
          </p>

          <p className="mt-4 text-xs tracking-[0.15em] uppercase opacity-35">
            TYPICAL SESSION · 1–3 HOURS
          </p>
        </div>

      </div>

      {/* Step 03 */}
      <div className="grid gap-6 border-t border-[#292522]/10 py-12 md:grid-cols-[100px_1fr_1fr] md:gap-12">

        <span className="text-sm opacity-35">
          03
        </span>

        <div>
          <p className="mb-3 text-xs tracking-[0.25em] uppercase opacity-40">
            PERSONALISE
          </p>

          <h3 className="text-3xl font-light tracking-[-0.03em] md:text-4xl">
            Make it yours.
          </h3>
        </div>

        <p className="max-w-md text-base leading-7 opacity-55">
          Choose the finish, base and presentation.
          Add names, dates, photographs, caricatures
          and other personal details.
        </p>

      </div>

      {/* Step 04 */}
      <div className="grid gap-6 border-t border-b border-[#292522]/10 py-12 md:grid-cols-[100px_1fr_1fr] md:gap-12">

        <span className="text-sm opacity-35">
          04
        </span>

        <div>
          <p className="mb-3 text-xs tracking-[0.25em] uppercase opacity-40">
            COMPLETE
          </p>

          <h3 className="text-3xl font-light tracking-[-0.03em] md:text-4xl">
            Receive your memory.
          </h3>
        </div>

        <div className="max-w-md">
          <p className="text-base leading-7 opacity-55">
            Your creation is detailed, polished,
            customised and prepared for delivery.
          </p>

          <p className="mt-4 text-xs tracking-[0.15em] uppercase opacity-35">
            TYPICAL DELIVERY · 10–40 DAYS
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

{/* Moments */}
<section
  id="moments"
  className="bg-[#EFE9DE] px-6 py-32 md:px-12"
>
  <div className="mx-auto max-w-7xl">

    {/* Header */}
    <div className="max-w-5xl">
      <p className="mb-6 text-xs tracking-[0.35em] uppercase text-[#292522]/45">
        MOMENTS WORTH PRESERVING
      </p>

      <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.045em] text-[#292522] md:text-7xl lg:text-8xl">
        Because some
        <br />
        moments deserve
        <br />
        to stay.
      </h2>
    </div>

    {/* Moments Grid */}
    <div className="mt-24 grid gap-5 md:grid-cols-2">

      {/* Couples */}
      <div className="group relative min-h-[460px] overflow-hidden rounded-[2rem] bg-[#F8F6F1]">
        
        <img
          src="../couple.jpeg"
          alt="Couple hand casting"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
{/* Readability Overlay */}
<div className="absolute inset-0 bg-black/25 transition-all duration-500 group-hover:bg-black/45" />
        {/* Subtle hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-full min-h-[460px] flex-col justify-between p-8 md:p-10">

          <span className="text-xs font-medium tracking-[0.25em] uppercase text-white drop-shadow-sm">
            01 · TOGETHER
          </span>

          <div className="max-w-xl">
            <h3 className="text-4xl font-medium leading-tight tracking-[-0.03em] text-white drop-shadow-md md:text-5xl">
              Two hands.
              <br />
              One story.
            </h3>

            <p className="mt-6 max-w-md text-sm font-medium leading-7 text-white/90">
              Preserve the hands that held yours through
              a relationship, an engagement, a wedding or
              simply a moment that belongs to both of you.
            </p>
          </div>

        </div>
      </div>


      {/* Family */}
      <div className="group relative min-h-[460px] overflow-hidden rounded-[2rem] bg-[#F8F6F1]">

        <img
          src="/moments/family.jpg"
          alt="Family hand casting"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
{/* Readability Overlay */}
<div className="absolute inset-0 bg-black/25 transition-all duration-500 group-hover:bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-full min-h-[460px] flex-col justify-between p-8 md:p-10">

          <span className="text-xs font-medium tracking-[0.25em] uppercase text-white drop-shadow-sm">
            02 · FAMILY
          </span>

          <div className="max-w-xl">
            <h3 className="text-4xl font-medium leading-tight tracking-[-0.03em] text-white drop-shadow-md md:text-5xl">
              A family's
              <br />
              touch.
            </h3>

            <p className="mt-6 max-w-md text-sm font-medium leading-7 text-white/90">
              Bring generations together in one piece —
              parents, children and loved ones preserved
              in a form you can hold forever.
            </p>
          </div>

        </div>
      </div>


      {/* Parents & Children */}
      <div className="group relative min-h-[460px] overflow-hidden rounded-[2rem] bg-[#F8F6F1]">

        <img
          src="../baby.jpeg"
          alt="Parents and children hand casting"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
{/* Readability Overlay */}
<div className="absolute inset-0 bg-black/25 transition-all duration-500 group-hover:bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-full min-h-[460px] flex-col justify-between p-8 md:p-10">

          <span className="text-xs font-medium tracking-[0.25em] uppercase text-white drop-shadow-sm">
            03 · GROWING UP
          </span>

          <div className="max-w-xl">
            <h3 className="text-4xl font-medium leading-tight tracking-[-0.03em] text-white drop-shadow-md md:text-5xl">
              Before they
              <br />
              grow.
            </h3>

            <p className="mt-6 max-w-md text-sm font-medium leading-7 text-white/90">
              Tiny hands and little feet change so quickly.
              Preserve this chapter before the next one begins.
            </p>
          </div>

        </div>
      </div>


      {/* Gifts */}
      <div className="group relative min-h-[460px] overflow-hidden rounded-[2rem] bg-[#F8F6F1]">

        <img
          src="../gift.jpeg"
          alt="Hand casting gift"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
{/* Readability Overlay */}
<div className="absolute inset-0 bg-black/25 transition-all duration-500 group-hover:bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-full min-h-[460px] flex-col justify-between p-8 md:p-10">

          <span className="text-xs font-medium tracking-[0.25em] uppercase text-white drop-shadow-sm">
            04 · A GIFT
          </span>

          <div className="max-w-xl">
            <h3 className="text-4xl font-medium leading-tight tracking-[-0.03em] text-white drop-shadow-md md:text-5xl">
              Give them
              <br />
              something real.
            </h3>

            <p className="mt-6 max-w-md text-sm font-medium leading-7 text-white/90">
              A deeply personal gift for weddings, anniversaries,
              birthdays, new beginnings and the people who matter.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

{/* Reviews */}
<section
  id="reviews"
  className="bg-[#EFE9DE] px-6 py-32 md:px-12"
>
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="max-w-4xl">
      <p className="mb-6 text-xs tracking-[0.35em] uppercase opacity-40">
        WORDS FROM THEM
      </p>

      <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.045em] md:text-7xl lg:text-8xl">
        Memories
        <br />
        worth sharing.
      </h2>

      <p className="mt-8 max-w-xl text-base leading-7 opacity-60 md:text-lg">
        Every piece begins with a moment. These are the words
        from the people who trusted Seerat to preserve theirs.
      </p>
    </div>

    {/* Reviews Carousel */}
    <ReviewsCarousel />

  </div>
</section>

      {/* Final CTA */}
      <section className="flex min-h-[70vh] items-center justify-center bg-[#292522] px-6 text-center text-[#F8F6F1]">
        <div>
          <p className="mb-6 text-sm tracking-[0.25em] uppercase opacity-50">
            SEERAT
          </p>

          <h2 className="text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
            Your moment.
            <br />
            Your story.
          </h2>

          <p className="mt-8 text-lg opacity-60">
            हर स्पर्श में एक कहानी
          </p>

          <button
  onClick={() => setBookingOpen(true)}
  className="mt-10 rounded-full bg-[#F8F6F1] px-8 py-4 text-sm text-[#292522] transition-transform hover:scale-105"
>
  Book a Session
</button>
        </div>
      </section>


      {/* Footer */}
<footer className="bg-[#292522] border-t border-white/10 px-6 py-16 text-[#F8F6F1] md:px-12">

  <div className="mx-auto max-w-7xl">

    {/* Main footer */}
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div className="lg:col-span-2">

        <p className="text-3xl font-medium tracking-[0.22em]">
          SEERAT
        </p>

        <p className="mt-5 font-[var(--font-devanagari)] text-xl opacity-70">
          हर स्पर्श में एक कहानी
        </p>

        <p className="mt-5 max-w-sm text-sm leading-6 opacity-40">
          Preserving meaningful moments through handcrafted
          3D hand and foot casting.
        </p>

      </div>

      {/* Explore */}
      <div>

        <p className="mb-5 text-xs tracking-[0.25em] uppercase opacity-40">
          EXPLORE
        </p>

        <div className="flex flex-col gap-3 text-sm opacity-65">

          <a
            href="#experience"
            className="transition-opacity hover:opacity-100"
          >
            Experience
          </a>

          <a
            href="#creations"
            className="transition-opacity hover:opacity-100"
          >
            Creations
          </a>

          <a
            href="#process"
            className="transition-opacity hover:opacity-100"
          >
            How It Works
          </a>

          <a
            href="#reviews"
            className="transition-opacity hover:opacity-100"
          >
            Reviews
          </a>

        </div>

      </div>

      {/* Contact */}
      <div>

        <p className="mb-5 text-xs tracking-[0.25em] uppercase opacity-40">
          CONNECT
        </p>

        <div className="flex flex-col gap-3 text-sm opacity-65">

          <a
            href="#"
            className="transition-opacity hover:opacity-100"
          >
            Instagram
          </a>

          <a
            href="#"
            className="transition-opacity hover:opacity-100"
          >
            Facebook
          </a>

          <a
            href="https://wa.me/9625353503"
            className="transition-opacity hover:opacity-100"
          >
            WhatsApp
          </a>

          <a
            href="tel:9625353503"
            className="transition-opacity hover:opacity-100"
          >
            +91-9625353503
          </a>

        </div>

      </div>

    </div>

    {/* Location */}
    <div className="mt-16 border-t border-white/10 pt-8">

      <div className="grid gap-6 text-sm md:grid-cols-2">

        <div>
          <p className="text-xs tracking-[0.2em] uppercase opacity-30">
            STUDIO
          </p>

          <p className="mt-2 opacity-60">
            Max Heights, Kundli, Sonipat
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-xs tracking-[0.2em] uppercase opacity-30">
            HOME SERVICE
          </p>

          <p className="mt-2 opacity-60">
            Delhi NCR Area
          </p>
        </div>

      </div>

    </div>

    {/* Bottom */}
    <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 text-xs opacity-35 md:flex-row">

      <p>
        © {new Date().getFullYear()} SEERAT. All rights reserved.
      </p>

      <div className="flex gap-6">

        <a href="#" className="hover:opacity-100">
          Privacy
        </a>

        <a href="#" className="hover:opacity-100">
          Terms
        </a>

      </div>

    </div>

  </div>

</footer>
      <BookingModal
  open={bookingOpen}
  onClose={() => setBookingOpen(false)}
/>
    </main>
  );
}