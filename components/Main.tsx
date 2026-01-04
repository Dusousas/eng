"use client";

export default function Main() {
  return (
    <>
      <section className="bgMain relative">
        <div className="absolute inset-0 bg-black/60" />

        <div className="maxW h-full relative z-10">
          <article className="h-full flex flex-col justify-center items-start">
            <div className="lg:w-2/3">
              <h2 className="uppercase text-Primary tracking-wider">
                Engenharia inteligente que transforma inovação em soluções sustentáveis
              </h2>

              <h1 className="text-white text-6xl font-barlow font-semibold mt-4">
                Inovação técnica aplicada à engenharia sustentável
              </h1>

              <p className="text-white mt-8">
                Somos uma empresa de engenharia movida pela inovação e pela sustentabilidade, com uma abordagem baseada em lean manufacturing, otimização de processos e uso responsável da tecnologia. Atuamos de forma integrada em todas as etapas do projeto, entregando soluções eficientes, seguras e alinhadas aos objetivos de cada cliente — sempre com um olhar atento para o futuro.
              </p>

              <div className="flex mt-6">
                <a className="font-barlow uppercase bg-Primary duration-300 tracking-wide font-semibold text-white px-10 rounded-sm py-4 hover:bg-hf hover:text-white cursor-pointer transition-colors" href="">
                  otimizar seu projeto
                </a>
              </div>
            </div>

          </article>
        </div>
      </section>
    </>
  );
}
