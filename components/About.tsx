"use client";

import { FaGlobeAmericas } from "react-icons/fa";
import { MdPunchClock } from "react-icons/md";

export default function About() {
    return (
        <>
            <section id="sobre-nos" className="py-20 bgAbout">
                <div className="maxW">
                    <p className="uppercase text-Primary text-center tracking-wider">
                        LIDERANÇA EM ENGENHARIA E INOVAÇÃO
                    </p>

                    <h1 className="text-textP text-4xl font-barlow text-center font-semibold mt-2">
                        Engenharia orientada por experiência, visão estratégica e sustentabilidade
                    </h1>

                    <p className="mt-6 text-[#666] text-center max-w-[1000px] mx-auto">
                        Com mais de duas décadas de atuação em engenharia industrial, nossa liderança combina conhecimento técnico profundo, visão multicultural e compromisso com soluções eficientes, seguras e sustentáveis para ambientes produtivos complexos.
                    </p>

                    <article className="flex mt-20 justify-center items-center gap-20 flex-col lg:flex-row">
                        <div className="lg:w-1/2">
                            <img className="border-8 border-Primary" src="/image-24.jpg" alt="" />
                        </div>

                        <div className="lg:w-1/2">
                            <p className="uppercase text-Primary font-semibold tracking-wider">
                                EDGAR A. RAMOS JR. — Chief Engineer
                            </p>
                            <p className="text-[#666]  mt-2">Atuando há mais de 20 anos nos setores de alimentos, bebidas e farmacêutico, Edgar construiu uma trajetória sólida em engenharia, manutenção, gestão de riscos, manufatura enxuta e projetos de expansão industrial. Sua experiência internacional na América Latina — incluindo México, Argentina, Guatemala, Costa Rica, Panamá e Colômbia — proporciona uma visão ampla e estratégica aplicada a cada projeto.</p>
                            <p className="text-[#666]  mt-2">Com forte liderança na gestão de projetos de engenharia, Edgar atua de forma colaborativa entre diferentes áreas e equipes multidisciplinares, sempre com foco em eficiência operacional, otimização de processos e excelência na execução. Seu domínio dos princípios de Lean Manufacturing é um diferencial essencial no desenvolvimento de layouts industriais e na transformação da cadeia de valor.</p>
                            <p className="text-[#666]  mt-2">A sustentabilidade é um pilar central da sua atuação. O compromisso com eficiência energética, uso responsável dos recursos naturais e impacto ambiental positivo orienta a busca contínua por soluções técnicas mais inteligentes — em benefício dos clientes, das comunidades e do planeta.</p>
                        </div>
                    </article>
                    <div className="mt-20 flex flex-col gap-10 lg:flex-row">
                        <div className="bg-hf py-6 px-8 outline outline-white/40 rounded-xl flex-1 min-h-[140px] flex flex-col justify-between">
                            <p className="font-medium uppercase">Anos de Experiência</p>
                            <h3 className="text-Primary text-5xl font-bold font-barlow mt-2 flex gap-4 items-center">
                                <MdPunchClock />20+
                            </h3>
                        </div>

                        <div className="bg-hf py-6 px-8 outline outline-white/40 rounded-xl flex-1 min-h-[140px] flex flex-col justify-between">
                            <p className="font-medium uppercase">Países Atendidos</p>
                            <h3 className="text-Primary text-5xl font-bold font-barlow mt-2 flex gap-4 items-center">
                                <FaGlobeAmericas />6+
                            </h3>
                        </div>

                        <div className="bg-hf py-6 px-8 outline outline-white/40 rounded-xl flex-1 min-h-[140px] flex flex-col justify-between">
                            <p className="font-medium uppercase">Anos de Experiência</p>
                            <h3 className="text-Primary text-5xl font-bold font-barlow mt-2 flex gap-4 items-center">
                                <MdPunchClock />20+
                            </h3>
                        </div>

                        <div className="bg-hf py-6 px-8 outline outline-white/40 rounded-xl flex-1 min-h-[140px] flex flex-col justify-between">
                            <p className="font-medium uppercase">Países Atendidos</p>
                            <h3 className="text-Primary text-5xl font-bold font-barlow mt-2 flex gap-4 items-center">
                                <FaGlobeAmericas />6+
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
