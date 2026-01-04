"use client";

import { FaGlobeAmericas } from "react-icons/fa";
import { MdPunchClock } from "react-icons/md";

export default function Numbers() {
    return (
        <>
            <section className="py-20 bgNumb">
                <div className="maxW flex flex-col justify-center items-center gap-20 lg:flex-row">
                    <article className="w-full lg:w-1/2">
                        <h2 className="uppercase text-Primary tracking-wider text-center lg:text-left">
                            ENGENHARIA COM VISÃO GLOBAL
                        </h2>

                        <h1 className="text-white font-barlow text-2xl font-semibold mt-2 text-center lg:text-left lg:text-4xl">
                            Experiência internacional em projetos industriais complexos
                        </h1>

                        <p className="mt-4 text-white text-center lg:text-left">
                            Com mais de duas décadas de atuação em engenharia industrial, entregamos projetos em ambientes produtivos de alta complexidade, especialmente nos setores de alimentos, bebidas e farmacêutico. Nossa abordagem integra engenharia, gestão, Lean Manufacturing e sustentabilidade para garantir soluções seguras, eficientes e alinhadas às melhores práticas globais.
                        </p>

                        <div className="mt-8 flex flex-col gap-10 lg:flex-row">
                            <div className="bg-hf/80 py-6 px-8 outline outline-white/40 rounded-xl flex-1 min-h-[140px] flex flex-col justify-between">
                                <p className="font-medium uppercase">Anos de Experiência</p>
                                <h3 className="text-Primary text-5xl font-bold font-barlow mt-2 flex gap-4 items-center">
                                    <MdPunchClock />20+
                                </h3>
                            </div>

                            <div className="bg-hf/80 py-6 px-8 outline outline-white/40 rounded-xl flex-1 min-h-[140px] flex flex-col justify-between">
                                <p className="font-medium uppercase">Países Atendidos</p>
                                <h3 className="text-Primary text-5xl font-bold font-barlow mt-2 flex gap-4 items-center">
                                    <FaGlobeAmericas />6+
                                </h3>
                            </div>
                        </div>

                    </article>

                    <article className="w-full lg:w-1/2">
                        <img className="border-12 border-Primary border-l-0 border-t-0" src="/img-services.jpg" alt="" />
                    </article>
                </div>
            </section>
        </>
    );
}
