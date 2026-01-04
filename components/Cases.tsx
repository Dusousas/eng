"use client";

import React, { useState } from "react";

// ✅ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type CaseItem = {
  title: string;
  desc: string;
  local: string;
  bgClass: string;
};

function CaseCard({ title, desc, bgClass, local }: CaseItem) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={[
        bgClass,
        "group relative overflow-hidden h-[480px] w-full object-cover",
        "cursor-pointer",
      ].join(" ")}
      onClick={() => setOpen((v) => !v)}
      role="button"
      tabIndex={0}
    >
      <div className="absolute inset-0 bg-black/80 transition-opacity duration-300 group-hover:bg-black/90" />

      <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
        <h3 className="font-barlow text-xl font-semibold uppercase leading-tight max-w-[420px]">
          {title}
        </h3>

        <p
          className={[
            "mt-4 max-w-[520px] text-white/90 leading-relaxed",
            "opacity-0 max-h-0 overflow-hidden",
            "transition-all duration-300",
            "group-hover:opacity-100 group-hover:max-h-40",
            open ? "opacity-100 max-h-40" : "",
          ].join(" ")}
        >
          {desc}
        </p>

        <p
          className={[
            "mt-4 max-w-[520px] text-white/90 leading-relaxed font-bold",
            "opacity-0 max-h-0 overflow-hidden",
            "transition-all duration-300",
            "group-hover:opacity-100 group-hover:max-h-40",
            open ? "opacity-100 max-h-40" : "",
          ].join(" ")}
        >
          {local}
        </p>

        <button
          type="button"
          className="mt-8 inline-flex items-center gap-3 font-barlow uppercase tracking-wide text-white font-semibold"
        >
          Saiba mais <span className="text-2xl leading-none">→</span>
        </button>
      </div>
    </div>
  );
}

export default function Cases() {
  const cases: CaseItem[] = [
    {
      title: "NOVA PLANTA DE PRODUÇÃO DE SABORES",
      desc: "Projeto e construção de uma planta de fabricação de sabores de classe mundial. Projeto executado durante a pandemia, trouxe desafios novos e exigiu extensa coordenação remota, entregue com sucesso e mínimos atrasos. ",
      local: "Localidade: México",
      bgClass: "c1",
    },
    {
      title: "CONVERSÃO DE MATRIZ ENERGÉTICA",
      desc: "Projeto de substituição de óleo BPF por GNL, incluindo conversão de fornos e caldeiras. Projeto com forte apelo ambiental, trouxe como benefício principal a redução da pegada de carbono do site em 30%. Outros benefícios foram a maior previsibilidade do preço do combustível e possibilidade de projetos futuros para reaproveitamento de calor.",
      local: "Localidade: Brasil",
      bgClass: "c1",
    },
    {
      title: "EVAPORADOR MVR PARA SORO DE LEITE",
      desc: "Aquisição e instalação da tecnologia de Evaporação MVR para o processamento de soro de leite. Este projeto foi um marco singular, sendo um dos primeiros modelos no Brasil implementado para processamento de soro de leite. Ele permitiu avançar notavelmente os esforços de descarbonização, antecipando tendências ambientais em mais de uma década e meia, e marcando um passo significativo em inovação sustentável.",
      local: "Localidade: Brasil",
      bgClass: "c1",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="maxW">
        <p className="uppercase text-Primary text-center tracking-wider">
          PROJETOS DE SUCESSO
        </p>

        <h1 className="text-textP text-4xl font-barlow text-center font-semibold mt-2">
          Alguns dos nossos projetos sustentáveis de destaque
        </h1>

        <p className="mt-6 text-[#666] text-center max-w-[780px] mx-auto">
          Atuamos em projetos industriais de alta complexidade, entregando soluções técnicas que combinam engenharia, inovação e sustentabilidade. Cada projeto reflete nosso compromisso com eficiência operacional, segurança, qualidade e impacto positivo de longo prazo.
        </p>

        {/* ✅ Mantive seu espaçamento mt-12 e gap visual com spaceBetween */}
        <div className="mt-12">
          <Swiper
            spaceBetween={32} // equivalente ao "gap-8"
            slidesPerView={1}
            breakpoints={{
              1024: { slidesPerView: 3 }, // igual seu lg:grid-cols-3
            }}
          >
            {cases.map((item, idx) => (
              <SwiperSlide key={idx}>
                <CaseCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
