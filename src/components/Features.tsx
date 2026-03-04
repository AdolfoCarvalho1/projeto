export default function Features() {
    const protocols = [
        {
            icon: "fas fa-broadcast-tower",
            title: "VISIBILIDADE",
            sub: "(O Radar)",
            desc: "Indexação forçada no Google para você ser encontrado por quem quer comprar agora. Não esperamos o Google te achar, nós obrigamos ele a te ver."
        },
        {
            icon: "fas fa-crown",
            title: "AUTORIDADE",
            sub: "(O Trono)",
            desc: "Visual Tech Noir que faz sua pequena empresa parecer uma multinacional. Respeito instantâneo no primeiro clique."
        },
        {
            icon: "fas fa-bullseye",
            title: "CONVERSÃO",
            sub: "(A Armadilha)",
            desc: "Botões de WhatsApp estratégicos e Gatilhos Mentais que impedem o cliente de sair sem comprar. Cada pixel é um vendedor."
        }
    ];

    return (
        <section id="solucao">
            <div className="container" style={{ textAlign: "center" }}>
                <div className="section-header">
                    <h2>O QUE NÓS INSTALAMOS EM <span className="highlight">96 HORAS:</span></h2>
                    <div className="priority-badge">PRIORIDADE MÁXIMA ATIVADA</div>
                </div>

                <div className="grid-3">
                    {protocols.map((protocol, index) => (
                        <div key={index} className="feature-card protocol-card">
                            <div className="protocol-icon"><i className={protocol.icon}></i></div>
                            <h3>{protocol.title}</h3>
                            <div className="protocol-sub">{protocol.sub}</div>
                            <p>{protocol.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
