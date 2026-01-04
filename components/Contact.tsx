"use client";

import { FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import Form from "./subc/Form";
import Depoimentos from "./Depoimentos";

export default function Contact() {
  return (
    <>
      <section id="contato" className="py-20 bg-white">
        <div className="maxW">
          <p className="uppercase text-Primary text-center tracking-wider">
            Entre em contato
          </p>

          <h1 className="text-textP text-3xl font-barlow text-center font-semibold mt-2 lg:max-w-[1000px] lg:mx-auto">
            Convidamos você a se juntar a nós nesta jornada de construção de valor para nossos clientes e para a nossa sociedade.
          </h1>

          <article className="flex flex-col mt-20 lg:flex-row gap-20">
            <div className="w-full lg:flex-row lg:w-1/2">
              <h2 className="text-textP text-2xl font-barlow font-medium">Na EngiConnect estamos prontos para transformar seus desafios de engenharia em sucessos sustentáveis.</h2>
              <div className="border-2 border-Primary mt-3 w-[90px]" />
              <p className="mt-6 lg:w-[80%] text-[#666]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At saepe eveniet temporibus veniam voluptate doloribus ipsum corporis quod obcaecati rem!</p>
              <div className="flex gap-3 mt-4">
                <a href=""><FaInstagramSquare className="text-3xl text-Primary" /></a>
                <a href=""><FaWhatsappSquare className="text-3xl text-Primary" /></a>
                <a href=""><FaLinkedin className="text-3xl text-Primary" /></a>
              </div>
            </div>


            <div className="w-full lg:flex-row lg:w-1/2">
              <Form />
            </div>
          </article>
        </div>
      </section>
      <Depoimentos />

    </>
  );
}
