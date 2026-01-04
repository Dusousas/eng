"use client";

import { MdEngineering } from "react-icons/md";
import type { IconType } from "react-icons";

type CardItem = {
    title: string;
    desc: string;
    image: string;
    Icon: IconType;
};

const cards: CardItem[] = [
    {
        title: "Engenharia Conceitual, Básica e Detalhada",
        desc: "Desenvolvimento completo da engenharia do projeto, desde a concepção da ideia até a entrega dos projetos executivos.",
        image: "/card1.jpg",
        Icon: MdEngineering,
    },
    {
        title: "Gerenciamento de Projetos",
        desc: "Gestão E2E com governança, controle e foco na excelência da execução do início ao fim do projeto.",
        image: "/card1.jpg",
        Icon: MdEngineering,
    },
    {
        title: "Melhoria de Processos",
        desc: "Análise e otimização de processos produtivos com foco em eficiência, redução de desperdícios e aplicação de Lean Manufacturing.",
        image: "/card1.jpg",
        Icon: MdEngineering,
    }, {
        title: "Projetos em Sustentabilidade",
        desc: "Soluções técnicas voltadas à eficiência energética, uso racional de recursos e redução de impactos ambientais.",
        image: "/card1.jpg",
        Icon: MdEngineering,
    }, {
        title: "Masterplan Industrial",
        desc: "Planejamento estratégico do site industrial alinhado ao crescimento, integrando Lean e gerenciamento de riscos.",
        image: "/card1.jpg",
        Icon: MdEngineering,
    }, {
        title: "Inteligência Artificial aplicada à Engenharia",
        desc: "Inovação conectada à engenharia para criação de soluções mais inteligentes, eficientes e orientadas ao futuro.",
        image: "/card1.jpg",
        Icon: MdEngineering,
    },
];

function ServiceCard({ title, desc, image, Icon }: CardItem) {
    return (
        <div className="group relative bg-white shadow-2xl py-14 px-6 overflow-hidden ">
            {/* Imagem no hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                aria-hidden="true"
            />

            <div
                className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
            />


            <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
                <div className="flex justify-center items-center w-18 h-18 bg-Primary rounded-full">
                    <Icon className="text-4xl" />
                </div>

                <h2 className="text-xl text-textP font-semibold mt-6 font-roboto transition-colors duration-300 group-hover:text-white">
                    {title}
                </h2>

                <div className="border border-Primary mt-6" />

                <p className="mt-6 text-[#666] transition-colors duration-300 group-hover:text-white lg:pr-25">
                    {desc}
                </p>
            </div>
        </div>
    );
}

export default function Cards() {
    return (
        <section className="bgCards py-20 relative">
            {/* overlay do fundo (ajusta como quiser) */}
            <div className="absolute inset-0 bg-[#F8F9FA]/90" />

            <div className="maxW relative z-10">
                <p className="uppercase text-Primary text-center tracking-wider">
                    NOSSAS SOLUÇÕES EM ENGENHARIA
                </p>

                <h1 className="text-textP text-4xl font-barlow text-center font-semibold mt-2">
                    Projetos de engenharia pensados para o futuro
                </h1>

                <p className="mt-6 text-[#666] text-center max-w-[780px] mx-auto">
                    Atuamos de forma integrada em todas as etapas do projeto, combinando engenharia, gestão, eficiência operacional e inovação para entregar soluções técnicas sólidas, sustentáveis e alinhadas aos objetivos estratégicos de cada cliente.
                </p>

                {/* GRID DINÂMICA */}
                <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {cards.map((item, idx) => (
                        <ServiceCard key={idx} {...item} />
                    ))}
                </article>

                <p className="mt-10 text-center text-lg text-[#666] font-medium">Se o seu projeto exige eficiência, segurança e sustentabilidade, ele começa aqui.</p>
                <div className="flex mt-4 justify-center">
                    <a className="font-barlow uppercase bg-Primary duration-300 tracking-wide font-semibold text-white px-10 rounded-sm py-4 hover:bg-hf hover:text-white cursor-pointer transition-colors" href="">
                        Fale com nossos especialistas
                    </a>
                </div>
            </div>
        </section>
    );
}
