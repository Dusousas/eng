"use client";

import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Inicio", href: "#main" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre nós", href: "#sobre-nos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // trava scroll e corta overflow horizontal
    document.body.style.overflow = open ? "hidden" : "";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Botão */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white relative z-[3000]"
        aria-label="Abrir menu"
      >
        <FiMenu className="text-3xl" />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[2999] bg-black/60 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[3000] h-dvh w-[320px] max-w-[85vw] bg-white shadow-xl
        transition-transform duration-200 will-change-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
          <p className="font-barlow uppercase tracking-wider text-textP font-semibold">
            LOGOTIPO
          </p>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="p-2 rounded-md text-textP"
            aria-label="Fechar menu"
          >
            <FiX className="text-3xl" />
          </button>
        </div>

        <nav className="px-5 py-6">
          <ul className="flex flex-col gap-5 uppercase font-roboto text-textP text-lg">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 border-b border-black/10"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
