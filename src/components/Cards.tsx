import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import quote from "../assets/image3removebg.png";

const testimonials = [
  {
    text: "The best investment we've made for our team's productivity. Highly recommended!",
    author: "Millon Zahino",
    role: "Behavioral Science",
    img: "https://via.placeholder.com/40",
  },
  {
    text: "Amazing tool! Boosted our efficiency by 200%.",
    author: "Sarah Lee",
    role: "Data Analyst",
    img: "https://via.placeholder.com/40",
  },
  {
    text: "We can't imagine working without it anymore.",
    author: "James Doe",
    role: "Project Manager",
    img: "https://via.placeholder.com/40",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Animate cards when index changes
  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll<HTMLElement>(".testimonial-card");
    cards.forEach((card: HTMLElement, i: number) => {
      const offset = (i - index + testimonials.length) % testimonials.length;

      // Petal-like positioning
      const angle = offset * 10; // tilt angle for fan effect
      const x = offset * 30; // horizontal shift
      const y = offset * 15; // vertical shift

      gsap.to(card, {
        x,
        y,
        rotate: angle,
        opacity: offset === 0 ? 1 : 0.3,
        scale: offset === 0 ? 1 : 0.9,
        zIndex: testimonials.length - offset,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  }, [index]);

  const nextCard = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevCard = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="flex justify-center items-center mt-10 mx-5">
      <div
        ref={containerRef}
        className="relative w-[350px] h-[320px] overflow-hidden flex justify-center items-center"
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial-card absolute w-full h-full bg-[#D3DED2] rounded-xl shadow-lg p-5 flex flex-col justify-between"
          >
            {/* Header with index and quote */}
            <div className="flex justify-between">
              <div className="flex bg-white px-4 mt-3 rounded-full py-1 h-fit text-sm">
                <p className="text-xs">{index} of {testimonials.length}</p>
              </div>
              <img src={quote} alt="quote" className="w-8 mt-2" />
            </div>

            {/* Testimonial text */}
            <p className="text-sm text-[#4B5563] mt-3 leading-6 text-justify">
              "{t.text}"
            </p>

            {/* Footer with buttons and profile */}
            <div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-center flex justify-center items-center px-5 py-2 bg-white text-[#1E381C] font-semibold rounded-full text-xs">
                  <p>Read More</p>
                </div>
                <div className="gap-x-3 mt-2 flex items-end">
                  <button
                    onClick={prevCard}
                    className="py-1 px-2 rounded-full hover:bg-gray-300 transition"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextCard}
                    className="py-1 px-2 rounded-full hover:bg-gray-300 transition"
                  >
                    →
                  </button>
                </div>
              </div>
              <hr className="border-1 mt-4 mb-3" />
              <div className="flex items-center">
                <div className="rounded-full bg-white p-3">
                  <img src={t.img} alt="" />
                </div>
                <div className="flex flex-col ml-2 text-xs">
                  <p className="font-bold text-sm">{t.author}</p>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
