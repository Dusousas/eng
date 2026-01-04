"use client";

export default function Form() {
    return (
        <>
            <form action="">
                <div className="flex flex-col gap-3 w-full lg:flex-row">
                    <input type="text" className="outline outline-hf text-hf p-2 rounded-md w-full" placeholder="Seu nome" />
                    <input type="text" className="outline outline-hf text-hf p-2 rounded-md w-full" placeholder="Seu Telefone" />
                </div>

                <div className="flex flex-col gap-3 w-full mt-3 lg:flex-row">
                    <input type="text" className="outline outline-hf text-hf p-2 rounded-md w-full" placeholder="Seu nome" />
                    <input type="text" className="outline outline-hf text-hf p-2 rounded-md w-full" placeholder="Seu Telefone" />
                </div>

                <textarea placeholder="Sua Mensagem" name="" className="outline outline-hf text-hf p-2 rounded-md w-full mt-3 resize-none" id="" rows={3}></textarea>
                <div>
                    <button className="bg-Primary text-white uppercase cursor-pointer font-roboto px-6 py-3 rounded-md mt-3 hover:bg-PrimaryHover transition">Enviar Mensagem</button>
                </div>
            </form>
        </>
    );
}
