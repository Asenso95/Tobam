"use client";

import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    avatar: "/customer3.png",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    avatar: "/customer2.png",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    avatar: "/customer1.png",
  },
  {
    name: "Tolu Adebanjo",
    role: "Solutions Architect, ByteWorks",
    quote:
      "The Tobams Group team scoped our upskilling program quickly and delivered training our engineers still reference months later. Structured, practical, and worth every naira.",
    avatar: "/customer4.jpg",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-testimonial-card]");
    const gap = 24;
    const distance = card ? card.getBoundingClientRect().width + gap : track.clientWidth;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <section aria-labelledby="testimonials-heading" className="py-8 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="testimonials-heading"
          className="text-center text-3xl font-semibold text-ink sm:text-4xl"
        >
          Testimonials
        </h2>

        <div ref={trackRef} role="region" aria-label="Client testimonials" tabIndex={0}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 "
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              data-testimonial-card
              className="flex w-[85%] shrink-0 snap-start flex-col gap-4 border-l-2 border-[#ef4353] rounded-xl shadow-2xl py-5 px-6 sm:w-[46%] lg:w-[31%]"
            >
              <div className="flex items-center gap-3">
                <Image src={testimonial.avatar} alt={`Portrait of ${testimonial.name}`} 
                width={48} height={48} className="h-12 w-12 rounded-full object-cover lg:h-[44px] w-[44px]"
                />
                <div>
                  <p className="font-semibold text-ink">{testimonial.name}</p>
                  <p className="text-sm text-muted ">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-sm leading-relaxed text-ink/80">
                {testimonial.quote}
              </blockquote>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-pink-light text-brand-pink transition-colors hover:bg-brand-pink hover:text-white"
            aria-label="Show previous testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-pink-light text-brand-pink transition-colors hover:bg-brand-pink hover:text-white"
            aria-label="Show next testimonials"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}




















// "use client";

// import Image from "next/image";
// import { useState } from "react";

// const testimonials = [
//   {
//     name: "Aisha Yusuf",
//     role: "Founder, CraftHub NG",
//     quote:
//       "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
//     avatar: "/avatar-1.svg",
//   },
//   {
//     name: "John Davies",
//     role: "Marketing Manager, E-Commerce Emporium",
//     quote:
//       "Tobams Group's Digital Marketing strategies gave our website the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
//     avatar: "/avatar-2.svg",
//   },
//   {
//     name: "Chinonso Nwankwo",
//     role: "HR Director, FutureTech Solutions",
//     quote:
//       "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
//     avatar: "/avatar-3.svg",
//   },
// ];

// export default function Testimonials() {
//   const [index, setIndex] = useState(0);

//   const showPrevious = () => {
//     setIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
//   };

//   const showNext = () => {
//     setIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
//   };

//   const active = testimonials[index];

//   return (
//     <section aria-labelledby="testimonials-heading" className="bg-[#ffffff] py-16 sm:py-20">
//       <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
//         <h2 id="testimonials-heading" className="text-2xl font-bold text-[#151515] sm:text-[40px]">
//           Testimonials
//         </h2>

//         <div className="mt-8 rounded-2xl border border-brand-pink/30 bg-white p-6 sm:p-8">
//           <Image
//             src={active.avatar}
//             alt={`Portrait of ${active.name}`}
//             width={64}
//             height={64}
//             className="mx-auto h-16 w-16 rounded-full object-cover"
//           />
//           <p className="mt-4 font-semibold text-ink">{active.name}</p>
//           <p className="text-sm text-muted">{active.role}</p>
//           <blockquote className="mt-4 text-sm leading-relaxed text-ink sm:text-base">
//             &ldquo;{active.quote}&rdquo;
//           </blockquote>
//         </div>

//         <div className="mt-6 flex items-center justify-center gap-4">
//           <button
//             type="button"
//             onClick={showPrevious}
//             className="rounded-full border border-brand-maroon p-2 text-brand-maroon transition-colors hover:bg-brand-maroon hover:text-white"
//             aria-label="Show previous testimonial"
//           >
//             ‹
//           </button>
//           <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial pagination">
//             {testimonials.map((testimonial, i) => (
//               <button
//                 key={testimonial.name}
//                 type="button"
//                 role="tab"
//                 aria-selected={i === index}
//                 aria-label={`Show testimonial from ${testimonial.name}`}
//                 onClick={() => setIndex(i)}
//                 className={`h-2.5 w-2.5 rounded-full transition-colors ${
//                   i === index ? "bg-brand-pink" : "bg-brand-pink/30"
//                 }`}
//               />
//             ))}
//           </div>
//           <button
//             type="button"
//             onClick={showNext}
//             className="rounded-full border border-brand-maroon p-2 text-brand-maroon transition-colors hover:bg-brand-maroon hover:text-white"
//             aria-label="Show next testimonial"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
