"use client";

import { useEffect, useState } from "react";

const stories = [
  {
    title: "Treasure Your Love.",
    subtitle: "COUPLE HAND CASTING",
    image: "/stories/couple.jpeg",
  },
  {
    title: "Love that guides, blessings that stay.",
    subtitle: "PARENT'S CASTING",
    image: "/stories/family.jpg",
  },
  {
    title: "Hold their first steps forever.",
    subtitle: "BABY HAND & FEET CASTING",
    image: "/stories/baby.jpeg",
  },
];

export default function StoryBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % stories.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Banner */}
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] md:h-[500px]">

          {/* Slides */}
          {stories.map((story, index) => (
            <div
              key={story.subtitle}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            >

              {/* Image */}
              <img
                src={story.image}
                alt={story.subtitle}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark cinematic overlay */}
              <div className="absolute inset-0 bg-black/25" />

              {/* Soft gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

              {/* Content */}
              <div className="relative flex h-full items-center px-8 md:px-16 lg:px-20">
                <div className="max-w-3xl text-[#F8F6F1]">

                  <p className="mb-6 text-xs tracking-[0.35em] uppercase opacity-70">
                    A SEERAT STORY
                  </p>

                  <h2 className="text-5xl font-light leading-[1.05] tracking-[-0.04em] md:text-7xl lg:text-8xl">
                    {story.title}
                  </h2>

                  <div className="mt-8 h-px w-24 bg-[#F8F6F1]/50" />

                  <p className="mt-6 text-xs tracking-[0.35em] uppercase opacity-70">
                    {story.subtitle}
                  </p>

                </div>
              </div>
            </div>
          ))}

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
            {stories.map((story, index) => (
              <button
                key={story.subtitle}
                onClick={() => setActive(index)}
                aria-label={`Show ${story.subtitle}`}
                className={`h-1 rounded-full transition-all duration-700 ${
                  index === active
                    ? "w-10 bg-[#F8F6F1]"
                    : "w-2 bg-[#F8F6F1]/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}