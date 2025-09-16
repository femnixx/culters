import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import quote from "../assets/image3removebg.png";

const testimonials = [
  {
    text: "The best investment we've made for our team's productivity. Highly recommended!",
    author: "Millon Zahino",
    role: "Behavioral Science",
    img: "https://via.placeholder.com/40"
  },
  {
    text: "Amazing tool! Boosted our efficiency by 200%.",
    author: "Sarah Lee",
    role: "Data Analyst",
    img: "https://via.placeholder.com/40"
  },
  {
    text: "We can't imagine working without it anymore.",
    author: "James Doe",
    role: "Project Manager",
    img: "https://via.placeholder.com/40"
  }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Animate when index changes
  useEffect(() => {
    if (!containerRef.current) return; // ✅ null check here

    const cards = containerRef.current.querySelectorAll<HTMLElement>(".testimonial-card");
    cards.forEach((card: HTMLElement, i: number) => { // ✅ type for card
      const offset = (i - index + testimonials.length) % testimonials.length;
      gsap.to(card, {
        x: offset * 30,
        y: offset * 10,
        opacity: offset === 0 ? 1 : 0.3,
        scale: offset === 0 ? 1 : 0.95,
        zIndex: testimonials.length - offset,
        duration: 0.5,
        ease: "power2.out"
      });
    });
  }, [index]);

  const nextCard = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevCard = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="flex justify-center items-center mt-10">
      {/* main card */}
      <div className="flex flex-col bg-[#D3DED2]">
        <div className=" px-5 py-3 flex ">
          <div className="flex bg-white px-3 h-fit">
          <p>{index} of {testimonials.length}</p>
          </div>
          <img src={quote} alt="image svsg2" />
        </div>
      <p>"{testimonials[index].text}"</p>
      <div className="flex justify-between">
        {/* read more */}
        <div className="text-center flex justify-center items-center px-3 py-1.5 bg-white text-black font-semibold">
          <p>Read More</p>
          {/* arrow */}
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={prevCard}
            className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition "
            > ←</button>
            <button onClick={nextCard}
            className="bg-gray-200 px-3 py-1 rounded-full hover:bg-gray-300 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
