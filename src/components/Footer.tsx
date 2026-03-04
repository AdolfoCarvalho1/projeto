export default function Footer() {
    return (
        <footer>
            <div className="container" style={{ textAlign: "center" }}>
                <h3 className="footer-brand">
                    MÉTODO AC23 &copy; {new Date().getFullYear()}. DOMINE OU SEJA DOMINADO.
                </h3>
                <div className="footer-links">
                    <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">WHATSAPP DO SUPORTE</a>
                    <span className="footer-sep">|</span>
                    <a href="#">TERMOS DE USO & PRIVACIDADE</a>
                </div>
            </div>
        </footer>
    );
}
