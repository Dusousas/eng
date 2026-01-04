"use client";

import React from "react";
import { FaStar } from "react-icons/fa";

// ✅ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar: string;
  stars?: number; // 1-5
};

const testimonials: Testimonial[] = [
  {
    name: "Eduardo",
    role: "Desenvolvedor Web",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/avatar1.jpg",
    stars: 5,
  },
  {
    name: "Eduardo",
    role: "Desenvolvedor Web",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/avatar1.jpg",
    stars: 4,
  },
  {
    name: "Eduardo",
    role: "Desenvolvedor Web",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "/avatar1.jpg",
    stars: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex justify-center gap-1 mt-8 text-[#F4B000]">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={i < count ? "opacity-100" : "opacity-30"}
        />
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <>
      <section className="bgContact py-20">
        <div className="maxW">
          <h2 className="text-center text-textP font-barlow text-4xl font-semibold">
           O que nossos clientes dizem
          </h2>

          <div className="mt-10 overflow-visible pt-16">
            <Swiper
              className="!overflow-visible"
              slidesPerView={1}
              spaceBetween={40} // equivalente ao gap-10
              breakpoints={{
                768: { slidesPerView: 2 }, // md:grid-cols-2
                1024: { slidesPerView: 3 }, // lg:grid-cols-3
              }}
            >
              {testimonials.map((t, idx) => (
                <SwiperSlide key={idx} className="!overflow-visible">
                  <div className="relative overflow-visible">
                    {/* Avatar “flutuando” */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-16 z-10">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-30 h-30 rounded-full object-cover border-4 border-white shadow-md"
                      />
                    </div>

                    {/* Card */}
                    <div className="bg-white border border-black/10 pt-16 pb-10 px-10 text-center min-h-[360px]">
                      <h3 className="text-textP font-roboto font-semibold text-xl">
                        {t.name}
                      </h3>
                      <p className="text-[#888] text-sm mt-1">{t.role}</p>

                      <p className="text-[#666] mt-8 leading-relaxed">
                        {t.text}
                      </p>

                      <Stars count={t.stars} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
