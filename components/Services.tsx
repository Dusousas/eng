"use client";

import { SiVerizon } from "react-icons/si";

export default function Services() {
    return (
        <>
            <section className="py-20 bg-white">
                <div className="maxW flex flex-col justify-center items-center gap-20 lg:flex-row">

                    <article>
                        <img className="border-12 border-Primary border-r-0 border-b-0" src="/img-services.jpg" alt="" />
                    </article>

                    <article className="lg:w-1/2">
                        <h2 className="uppercase text-Primary tracking-wider text-center lg:text-left">
                            CONSULTORIA EM ENGENHARIA INDUSTRIAL
                        </h2>

                        <h1 className="text-textP font-barlow text-2xl font-semibold mt-2 text-center lg:text-left lg:text-4xl">
                            Transformamos desafios industriais em soluções eficientes e sustentáveis
                        </h1>

                        <p className="mt-4 text-[#666] text-center lg:text-left">
                            Atuamos na indústria de alimentos e farmacêutica apoiando empresas na superação de gargalos produtivos, redução de perdas, otimização de layouts e melhoria da eficiência energética. Nossa abordagem combina Lean Manufacturing, análise de dados e visão holística do ambiente fabril para gerar resultados consistentes, seguros e sustentáveis ao longo do tempo.
                        </p>
                        {/* ICONES */}
                        <div className="mt-8 text-textP font-semibold grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                            <p className="flex items-center gap-4">
                                <SiVerizon className="text-Primary shrink-0" />
                                Eliminação de Gargalos Produtivos
                            </p>

                            <p className="flex items-center gap-4">
                                <SiVerizon className="text-Primary shrink-0" />
                                Lean Manufacturing e Processos Enxutos
                            </p>

                            <p className="flex items-center gap-4">
                                <SiVerizon className="text-Primary shrink-0" />
                                Eficiência Energética Industrial
                            </p>

                            <p className="flex items-center gap-4">
                                <SiVerizon className="text-Primary shrink-0" />
                                Sustentabilidade dos Processos
                            </p>

                            <p className="flex items-center gap-4">
                                <SiVerizon className="text-Primary shrink-0" />
                                Layout e Zoneamento Fabril
                            </p>

                            <p className="flex items-center gap-4">
                                <SiVerizon className="text-Primary shrink-0" />
                                Diagnóstico Técnico Industrial
                            </p>
                        </div>


                        <div className="flex mt-10 justify-center lg:justify-start">
                            <a className="font-barlow uppercase bg-Primary duration-300 tracking-wide font-semibold text-white px-10 rounded-sm py-4 hover:bg-hf hover:text-white cursor-pointer transition-colors" href="">
                                Saiba mais
                            </a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
