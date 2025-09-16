import { gsap } from "gsap";
import { useRef, useState } from "react";

const testimonials = [
  {
    text: "The best investment we've made for our team's productivity. Highly recommended!",
    author: "Millon Zahino",
    role: "Behavioral Science",
    img: "https://via.placeholder.com/40" // replace with real image
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
  const cardRef = useRef(null);

  const nextCard = () => {
    gsap.to(cardRef.current, {
      x: -200,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        gsap.fromTo(
          cardRef.current,
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }
    });
  };

  const prevCard = () => {
    gsap.to(cardRef.current, {
      x: 200,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        gsap.fromTo(
          cardRef.current,
          { x: -200, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }
    });
  };

  const { text, author, role, img } = testimonials[index];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-teal-900 text-gray-900">
      <div
        ref={cardRef}
        className="w-96 bg-white rounded-3xl p-6 shadow-lg relative"
      >
        <p className="text-sm bg-gray-200 px-3 py-1 rounded-full inline-block mb-2">
          {index + 1} of {testimonials.length}
        </p>
        <p className="text-3xl font-bold opacity-10 absolute top-6 right-6">“</p>
        <p className="text-lg mb-6">{text}</p>

        <button className="bg-gray-100 px-4 py-2 rounded-full font-bold">
          Read More
        </button>

        <div className="flex justify-end gap-4 mt-4">
          <button onClick={prevCard}>←</button>
          <button onClick={nextCard}>→</button>
        </div>

        <hr className="my-4" />

        <div className="flex items-center gap-3">
          <img src={img} alt={author} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-bold">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
