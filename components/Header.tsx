"use client";

import Navbar from "./subc/Navbar";

export default function Header() {
  return (
    <>
      <section className="bg-hf relative py-4 lg:pb-10">
        <div className="w-full maxW">
          <article className="flex justify-between items-end lg:pb-4">
            <div>
              <a className="font-barlow uppercase font-semibold tracking-wider text-2xl" href="">Logotipo</a>
            </div>

            <div className="hidden outline outline-Primary text-Primary px-6 rounded-sm py-2 hover:bg-Primary hover:text-white cursor-pointer transition-colors duration-300 lg:block">
              <a className="font-barlow uppercase tracking-wide  " href="">Entre em contato</a>
            </div>
          </article>

          <header className="hidden bg-white px-4 py-6 rounded-sm flex justify-center items-center  left-1/2 -translate-x-1/2 min-w-[1348px] bottom-0 translate-y-1/2  mx-auto z-20 absolute lg:block">
            <Navbar />
          </header>

        </div>
      </section>
    </>
  );
}
