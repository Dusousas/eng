"use client";

export default function Navbar() {
    return (
        <>
            <nav>
                <ul className="flex gap-8 uppercase font-roboto text-textP text-lg">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Portfólio</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </>
    );
}
