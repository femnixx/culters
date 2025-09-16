import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import imagesvg2 from "../assets/imagesvg2.svg";

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
      <div className="bg-[#D3DED2] px-5 py-3 flex flex-col">
        <div className="flex bg-white px-3">
        <p>{index} of {testimonials.length}</p>
        <img src={imagesvg2} alt="image svsg2" />
        </div>
      </div>
    </div>
  );
}
