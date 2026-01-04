"use client";

import React from "react";

export default function Header() {
  return (
    <>
      <section className="bg-hf pb-10 relative py-4">
        <div className="w-full maxW">
          <article className="flex justify-between items-end pb-4">
            <div>
              <a className="font-barlow uppercase font-semibold tracking-wider text-2xl" href="">Logotipo</a>
            </div>

            <div className="outline outline-Primary text-Primary px-6 rounded-sm py-2 hover:bg-Primary hover:text-white cursor-pointer transition-colors duration-300">
              <a className="font-barlow uppercase tracking-wide  " href="">Entre em contato</a>
            </div>
          </article>


          <header className="bg-white px-4 py-6 rounded-sm flex justify-center items-center absolute left-1/2 -translate-x-1/2 min-w-[1348px] bottom-0 translate-y-1/2  mx-auto z-20">
            <ul className="flex gap-8 uppercase font-roboto text-textP text-lg">
              <li><a href="">Inicio</a></li>
              <li><a href="">Sobre nós</a></li>
              <li><a href="">Serviços</a></li>
              <li><a href="">Portfólio</a></li>
              <li><a href="">Contato</a></li>
            </ul>
          </header>



        </div>
      </section>
    </>
  );
}
