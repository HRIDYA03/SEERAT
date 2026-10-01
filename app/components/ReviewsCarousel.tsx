"use client";

import { useEffect, useRef, useState } from "react";
import { reviews } from "../../data/reviews";

export default function ReviewsCarousel() {
  const [active, setActive] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const viewportRef = useRef<HTMLDivElement>(null);

  const total = reviews.length;
  const gap = 20;

  // Measure the actual card width
  useEffect(() => {
    const updateWidth = () => {
      if (!viewportRef.current) return;

      const viewportWidth = viewportRef.current.offsetWidth;

      if (window.innerWidth < 768) {
        // Mobile: one card
        setSlideWidth(viewportWidth + gap);
      } else {
        // Desktop: three cards
        const cardWidth = (viewportWidth - gap * 2) / 3;
        setSlideWidth(cardWidth + gap);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Automatic movement
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 4500);

    return () => clearInterval(interval);
  }, [total]);

  const nextReview = () => {
    setActive((current) => (current + 1) % total);
  };

  const previousReview = () => {
    setActive((current) => (current - 1 + total) % total);
  };

  // Duplicate cards so the track has enough content
  const carouselReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="relative mt-20">

      {/* Viewport */}
      <div
        ref={viewportRef}
        className="overflow-hidden"
      >

        {/* Track */}
        <div
          className="flex gap-5 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translate3d(-${active * slideWidth}px, 0, 0)`,
          }}
        >

          {carouselReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="group relative min-w-0 flex-[0_0_100%] overflow-hidden rounded-[2rem] md:flex-[0_0_calc((100%-40px)/3)]"
            >

              {/* Background */}
              <div
                className={`absolute inset-0 ${
                  review.photo
                    ? "bg-cover bg-center"
                    : "bg-[#F8F6F1]"
                }`}
                style={
                  review.photo
                    ? {
                        backgroundImage: `url(${review.photo})`,
                      }
                    : undefined
                }
              />

              {/* Subtle overlay for image reviews */}
              {review.photo && (
                <div className="absolute inset-0 bg-black/15" />
              )}

              {/* Content */}
              <div
                className={`relative z-10 flex min-h-[390px] flex-col justify-between p-8 ${
                  review.photo
                    ? "text-white"
                    : "text-[#292522]"
                }`}
              >

                {/* Top */}
                <div className="flex items-start justify-between">

                  <span className="text-xs tracking-[0.25em] uppercase opacity-60">
                    REVIEW
                  </span>

                  <span className="text-sm tracking-[0.12em]">
                    {"★".repeat(review.rating)}
                  </span>

                </div>

                {/* Bottom */}
                <div>

                  <p className="text-xl font-light leading-8 tracking-[-0.02em]">
                    “{review.message}”
                  </p>

                  <div className="mt-8 h-px w-10 bg-current opacity-30" />

                  <p className="mt-5 text-xs font-medium tracking-[0.2em] uppercase opacity-60">
                    {review.name}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-between">

        <button
          onClick={previousReview}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#292522]/20 transition-all hover:bg-[#292522] hover:text-[#F8F6F1]"
          aria-label="Previous review"
        >
          ←
        </button>

        <div className="text-xs tracking-[0.2em] opacity-40">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </div>

        <button
          onClick={nextReview}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#292522]/20 transition-all hover:bg-[#292522] hover:text-[#F8F6F1]"
          aria-label="Next review"
        >
          →
        </button>

      </div>

    </div>
  );
}