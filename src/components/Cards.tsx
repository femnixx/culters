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
    <div className="flex justify-center items-center mt-10 mx-5">
      {/* main card */}
      <div className="flex flex-col bg-[#D3DED2] rounded-xl">
        <div className=" px-5 py-3 flex ">
          {/* index and svg  */}
          <div className="flex justify-between w-full">
            <div className="flex bg-white px-4 ml-5 mt-5 rounded-full py-1 h-fit text-sm">
            <p className="text-xs py-0.5">{index} of {testimonials.length}</p>
            </div>
            <img src={quote} alt="image svsg2" className="w-30 mt-5"/>
          </div>
        </div>
      <p className=" text-sm text-[#4B5563] mt-3 leading-7 mx-7 text-justify">"{testimonials[index].text}"</p>
      <div className="flex justify-between">
        {/* read more */}
        <div className="text-center flex justify-center items-center px-5 py-3 bg-white text-[#1E381C] font-semibold mt-16 ml-10 rounded-full text-xs">
          <p className="">Read More</p>
        </div>
          {/* arrow */}
          <div className="gap-x-3.5 mt-4 mx-7 flex items-end">
            <button onClick={prevCard}
            className=" py-1 rounded-full hover:bg-gray-300 transition"
            > ←</button>
            <button onClick={nextCard}
            className="  py-1 rounded-full hover:bg-gray-300 transition"
            >
              →
            </button>
          </div>
      </div>
            <hr className="border-1.5 mx-5 mt-7 bg-white text-white"/> 
          
      </div>
    </div>
  );
}
