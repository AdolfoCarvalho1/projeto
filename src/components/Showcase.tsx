export default function Showcase() {
    const styles = [
        {
            id: "technoir",
            tag: "DETERMINANTE",
            tagBg: "var(--accent-green)",
            tagColor: "#000",
            previewClass: "preview-technoir",
            title: "PROTOCOLO AUTORIDADE",
            sub: "(Tech Noir)",
            desc: "Presença sombria e tecnológica. Bordas cortantes, neon verde, domínio total.",
            mockup: (
                <>
                    <div className="mini-nav">
                        <div className="mini-logo"></div>
                        <div className="mini-links"><span></span><span></span><span></span></div>
                    </div>
                    <div className="mini-hero-text">
                        <div className="mini-line lg"></div>
                        <div className="mini-line md green"></div>
                        <div className="mini-line sm"></div>
                    </div>
                    <div className="mini-btn green"></div>
                    <div className="mini-grid-3">
                        <div className="mini-card"></div>
                        <div className="mini-card"></div>
                        <div className="mini-card"></div>
                    </div>
                </>
            )
        },
        {
            id: "minimal",
            tag: "ESSENCIAL",
            tagBg: "#fff",
            tagColor: "#000",
            previewClass: "preview-minimal",
            title: "PROTOCOLO EFICIÊNCIA",
            sub: "(Minimalista)",
            desc: "O poder do essencial. Limpo, rápido e letal. Cada pixel conta.",
            mockup: (
                <>
                    <div className="mini-nav">
                        <div className="mini-logo dark"></div>
                        <div className="mini-links"><span></span><span></span><span></span></div>
                    </div>
                    <div className="mini-hero-text center">
                        <div className="mini-line lg dark"></div>
                        <div className="mini-line sm dark"></div>
                    </div>
                    <div className="mini-btn dark"></div>
                    <div className="mini-divider"></div>
                    <div className="mini-grid-2">
                        <div className="mini-card light"></div>
                        <div className="mini-card light"></div>
                    </div>
                </>
            )
        },
        {
            id: "glass",
            tag: "ELITE",
            tagBg: "rgba(255,255,255,0.2)",
            tagColor: "#fff",
            previewClass: "preview-glass",
            title: "PROTOCOLO SEDUÇÃO",
            sub: "(Glassmorphism)",
            desc: "Elegância translúcida que prende o olhar e conquista no detalhe.",
            mockup: (
                <>
                    <div className="glass-orb orb-1"></div>
                    <div className="glass-orb orb-2"></div>
                    <div className="mini-nav glass-nav">
                        <div className="mini-logo"></div>
                        <div className="mini-links"><span></span><span></span></div>
                    </div>
                    <div className="glass-card">
                        <div className="mini-line lg"></div>
                        <div className="mini-line sm"></div>
                        <div className="mini-btn glass-btn"></div>
                    </div>
                </>
            )
        },
        {
            id: "corporate",
            tag: "BLINDADO",
            tagBg: "#0056b3",
            tagColor: "#fff",
            previewClass: "preview-corporate",
            title: "PROTOCOLO DOMÍNIO",
            sub: "(Corporate)",
            desc: "Seriedade máxima para consultorias e empresas B2B. Confiança blindada.",
            mockup: (
                <>
                    <div className="mini-nav corp-nav">
                        <div className="mini-logo corp"></div>
                        <div className="mini-links"><span></span><span></span><span></span></div>
                    </div>
                    <div className="mini-hero-text">
                        <div className="mini-line lg"></div>
                        <div className="mini-line md"></div>
                    </div>
                    <div className="mini-btn corp-btn"></div>
                    <div className="mini-stats">
                        <div className="stat-item">
                            <div className="stat-num">98%</div>
                            <div className="stat-bar"></div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">24/7</div>
                            <div className="stat-bar"></div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">500+</div>
                            <div className="stat-bar"></div>
                        </div>
                    </div>
                </>
            )
        }
    ];

    return (
        <section id="estilos" style={{ background: "var(--bg-dark)" }}>
            <div className="container" style={{ textAlign: "center" }}>
                <div className="section-header">
                    <h2>ESCOLHA SUA <span className="highlight">ARMA</span></h2>
                </div>

                <div className="showcase-grid">
                    {styles.map((style) => (
                        <div key={style.id} className="showcase-card">
                            <div className={`showcase-preview ${style.previewClass}`}>
                                <div className="style-tag" style={{ background: style.tagBg, color: style.tagColor }}>
                                    {style.tag}
                                </div>
                                {style.mockup}
                            </div>
                            <div className="showcase-info">
                                <h4>{style.title}</h4>
                                <div className="protocol-sub">{style.sub}</div>
                                <p>{style.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
