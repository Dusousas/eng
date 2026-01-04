"use client";

import { MdEngineering } from "react-icons/md";

export default function Cards() {
    return (
        <>
            <section className="bgCards py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA]/100 to-[#F8F9FA]/95" />
                <div className="maxW relative z-10">
                    <h2 className="uppercase text-Primary text-center tracking-wider">
                        NOSSAS SOLUÇÕES EM ENGENHARIA
                    </h2>

                    <h1 className="text-textP text-4xl font-barlow text-center font-semibold mt-2">
                        Projetos de engenharia pensados para o futuro
                    </h1>

                    <p className="mt-6 text-[#666] text-center max-w-[780px] mx-auto">
                        Atuamos de forma integrada em todas as etapas do projeto, combinando engenharia, gestão, eficiência operacional e inovação para entregar soluções técnicas sólidas, sustentáveis e alinhadas aos objetivos estratégicos de cada cliente.
                    </p>

                    {/* CARDS */}
                    <article className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

                        <div className="bg-white">
                            <MdEngineering />
                            <h2>Engenharia Conceitual, Básica e Detalhada</h2>
                            <p>Desenvolvimento completo da engenharia do projeto, desde a concepção da ideia até a entrega dos projetos executivos.</p>
                        </div>



                    </article>
                </div>
            </section>
        </>
    );
}
