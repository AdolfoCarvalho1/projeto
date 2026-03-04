import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <div className="container">
                <Link href="/" className="logo">
                    MÉTODO<span>AC23</span>
                </Link>
                <div className="nav-links">
                    <Link href="#problema">O PROBLEMA</Link>
                    <Link href="#solucao">O MÉTODO</Link>
                    <Link href="#estilos">ESTILOS</Link>
                    <Link href="#preco">OFERTA</Link>
                    <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" className="nav-btn">
                        ATIVAR AGORA
                    </a>
                </div>
            </div>
        </nav>
    );
}
