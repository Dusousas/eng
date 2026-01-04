"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./subc/Navbar";
import NavMobile from "./subc/Navmobile/NavMobile";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const percent = maxScroll > 0 ? scrollTop / maxScroll : 0;

      setScrolled(percent >= 0.10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section id="main" className="bg-hf fixed top-0 left-0 w-full z-[1000] py-4
             lg:relative lg:z-auto lg:py-4 lg:pb-10">
        <div className="w-full maxW">
          <article className="flex justify-between items-end lg:pb-4">
            <div>
              <a
                className="font-barlow uppercase font-semibold tracking-wider text-2xl"
                href=""
              >
                Logotipo
              </a>
            </div>

            {/* MENUMOBILE AQUI */}
            <div className="lg:hidden">
              <NavMobile />
            </div>

            <div className="hidden outline outline-Primary text-Primary px-6 rounded-sm py-2 hover:bg-Primary hover:text-white cursor-pointer transition-colors duration-300 lg:block">
              <a className="font-barlow uppercase tracking-wide" href="">
                Entre em contato
              </a>
            </div>
          </article>

          {/* ✅ HEADER PRINCIPAL (posição atual) - some quando rolar 5% */}
          <header
            className={[
              "hidden bg-white px-4 py-6 rounded-sm flex justify-center items-center",
              "left-1/2 -translate-x-1/2 min-w-[1348px] bottom-0 translate-y-1/2 mx-auto z-20 absolute lg:block",
              scrolled ? "opacity-0 pointer-events-none " : "opacity-100",
              "transition-opacity duration-200",
            ].join(" ")}
          >
            <Navbar />
          </header>
        </div>
      </section>

      {/* ✅ HEADER FIXO (aparece após 5%) */}
      <header
        className={[
          "hidden lg:block fixed top-0 left-1/2 -translate-x-1/2 z-[999]",
          "bg-white px-4 py-4 rounded-sm",
          "min-w-[1348px]",
          "shadow-md",
          scrolled
            ? "opacity-100 translate-y-0 top-2 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none",
          "transition-all duration-200",
        ].join(" ")}
      >
        <Navbar />
      </header>
    </>
  );
}
