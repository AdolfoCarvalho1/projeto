export default function Pricing() {
    const plans = [
        {
            step: "PASSO 1",
            name: "FUNDAÇÃO DIGITAL",
            price: "479,99",
            sub: "Pagamento único",
            features: [
                "Site Profissional de Alta Performance",
                "Ajuda com Parte Burocrática",
                "30 Dias de Ajustes Sem Custo",
                "Botão de WhatsApp Rastreado",
                "SEO Sniper: Domínio do Google"
            ],
            cta: "ATIVAR PASSO 1",
            ctaClass: "cta-plan",
            ctaIcon: "fas fa-lock",
            link: "https://buy.stripe.com/test_5kQdR8dHge7k6Iy6rm2VG02",
            optional: {
                title: "Assinatura Manutenção",
                price: "R$ 29,99/mês",
                features: ["Manutenção contínua + suporte", "10 alterações por mês", "Atualização do site 3x/mês"]
            }
        },
        {
            step: "PASSO 2",
            name: "DOMÍNIO TOTAL",
            price: "979,99",
            sub: "Pagamento único",
            featured: true,
            features: [
                "Tudo do Passo 1 +",
                "Hospedagem Premium Inclusa",
                "Grupo Restrito de Ajuda 24/7",
                "Manual \"O Príncipe Digital\"",
                "Prioridade Máxima no Atendimento"
            ],
            cta: "ATIVAR PASSO 2",
            ctaClass: "cta-plan cta-pix",
            ctaIcon: "fas fa-bolt",
            link: "https://buy.stripe.com/test_fZu7sK8mW3sGeb03fa2VG03",
            optional: {
                title: "Assinatura Premium",
                price: "R$ 69,99/mês",
                features: ["Tudo do Passo 1 — 3x mais", "30 alterações por mês", "Atualização do site 9x/mês"]
            }
        },
        {
            step: "PASSO 3",
            name: "EXTRA PREMIUM",
            price: "A COMBINAR",
            sub: "Sob consulta personalizada",
            priceFontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            features: [
                "Tudo do Passo 2 +",
                "Experiência Extra Premium",
                "Projeto 100% Personalizado",
                "Reunião de Estratégia 1-a-1",
                "Suporte Dedicado Exclusivo"
            ],
            cta: "FALAR COM ESTRATEGISTA",
            ctaClass: "cta-plan cta-consult",
            ctaIcon: "fas fa-comments",
            link: "https://wa.me/5599999999999"
        }
    ];

    return (
        <section id="preco" className="offer-section">
            <div className="container" style={{ textAlign: "center" }}>
                <div className="section-header">
                    <h2 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", marginBottom: 0 }}>
                        A <span className="highlight">OFERTA</span>
                    </h2>
                    <div className="priority-badge" style={{ marginBottom: "3rem" }}>ESCOLHA SEU PROTOCOLO DE ATAQUE</div>
                </div>

                <div className="coupon-notice" style={{ marginBottom: "2rem" }}>
                    <span className="badge-new"><i className="fas fa-percent"></i> DESCONTO ATIVO</span>
                    <p>Use o cupom <strong style={{ color: "var(--accent-green)" }}>DOMINIO10</strong> no checkout para ganhar desconto!</p>
                </div>

                <div className="pricing-grid three-col">
                    {plans.map((plan, index) => (
                        <div key={index} className={`price-card ${plan.featured ? "featured-card" : ""}`}>
                            {plan.featured && <div className="pix-badge"><i className="fas fa-crown"></i> MAIS POPULAR</div>}
                            <div className="card-step" style={{ color: plan.featured ? "var(--accent-green)" : "" }}>{plan.step}</div>
                            <h4 className="card-name" style={{ color: plan.featured ? "var(--accent-green)" : "" }}>{plan.name}</h4>
                            <div className="price-value">
                                {plan.price !== "A COMBINAR" && <span className="currency" style={{ color: plan.featured ? "var(--accent-green)" : "" }}>R$</span>}
                                <span className="amount" style={{
                                    color: plan.featured ? "var(--accent-green)" : "",
                                    fontSize: plan.priceFontSize
                                }}>{plan.price}</span>
                            </div>
                            <p className="price-sub">{plan.sub}</p>
                            <ul className="plan-features">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex}>
                                        <i className="fas fa-check"></i> {feature.includes("+") ? <strong>{feature}</strong> : feature}
                                    </li>
                                ))}
                            </ul>
                            <a href={plan.link} target="_blank" rel="noopener noreferrer" className={plan.ctaClass}>
                                {plan.cta} <i className={plan.ctaIcon}></i>
                            </a>

                            {plan.optional && (
                                <div className={`sub-offer ${plan.featured ? "sub-featured" : ""}`}>
                                    <div className="sub-offer-label"><i className="fas fa-plus-circle"></i> OPCIONAL NO CHECKOUT</div>
                                    <div className="sub-offer-title">{plan.optional.title}</div>
                                    <div className="sub-offer-price" style={{ color: plan.featured ? "var(--accent-green)" : "" }}>
                                        {plan.optional.price.split("/")[0]}<span>/{plan.optional.price.split("/")[1]}</span>
                                    </div>
                                    <ul className="sub-features">
                                        {plan.optional.features.map((sf, sfIndex) => (
                                            <li key={sfIndex}>{sf.includes("3x") ? <strong>{sf}</strong> : sf}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <p className="offer-disclaimer">
                    <i className="fas fa-shield-alt"></i> Pagamento seguro via Stripe. <i className="fas fa-ticket-alt"></i> Cupons aceitos no checkout.
                </p>
            </div>
        </section>
    );
}
