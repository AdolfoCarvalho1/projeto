'use client';

import { useState } from 'react';

export default function Showcase() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const styles = [
        {
            id: "technoir",
            image: "/showcase/showcase_technoir_1772650678975.png",
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
            image: "/showcase/showcase_minimal_1772650696085.png",
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
            image: "/showcase/showcase_glass_1772650715171.png",
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
            image: "/showcase/showcase_corporate_1772650735168.png",
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
                        <div
                            key={style.id}
                            className={`showcase-card ${expandedId === style.id ? 'expanded' : ''}`}
                            onClick={() => setExpandedId(expandedId === style.id ? null : style.id)}
                            onMouseLeave={() => setExpandedId(null)}
                        >
                            <div className={`showcase-preview ${style.previewClass} ${expandedId === style.id ? 'preview-expanded' : ''}`}>
                                <div className="style-tag" style={{ background: style.tagBg, color: style.tagColor }}>
                                    {style.tag}
                                </div>
                                {expandedId === style.id ? (
                                    <div className="expanded-content fade-in">
                                        <div className="expanded-nav-real">
                                            <div className={`mini-logo ${style.id}`}></div>
                                            <div className="expanded-nav-links">
                                                <span>Início</span>
                                                <span>Serviços</span>
                                                <span>Contato</span>
                                            </div>
                                            <div className="expanded-nav-cta" style={{ background: style.tagBg, color: style.tagColor }}>Ação</div>
                                        </div>
                                        <div className="expanded-hero-real">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={style.image} alt={style.title} className="expanded-hero-img" />
                                            <div className="expanded-hero-overlay">
                                                <div className="expanded-line-title"></div>
                                                <div className="expanded-line-sub"></div>
                                                <div className="expanded-btn" style={{ background: style.tagBg }}></div>
                                            </div>
                                        </div>
                                        <div className="expanded-body-real">
                                            <div className="expanded-section-title"></div>
                                            <div className="expanded-grid-real">
                                                <div className="expanded-feature-card"></div>
                                                <div className="expanded-feature-card"></div>
                                                <div className="expanded-feature-card"></div>
                                            </div>
                                        </div>
                                        <div className="expanded-chat-widget">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="currentColor" /></svg>
                                        </div>
                                    </div>
                                ) : (
                                    style.mockup
                                )}
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
