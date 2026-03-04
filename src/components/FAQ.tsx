'use client';

import { useState } from 'react';

export default function FAQ() {
    const faqs = [
        {
            q: "Quanto tempo leva para ficar pronto?",
            a: "Nossa entrega padrão é de 2 a 5 dias úteis, dependendo da velocidade de envio do briefing e aprovações."
        },
        {
            q: "Vou precisar pagar mensalidade?",
            a: "Não. O pagamento é único e o site é 100% seu. Você só precisará manter seu domínio e hospedagem ativos."
        },
        {
            q: "A página funciona em celulares?",
            a: "Sim, todas as nossas páginas são 100% responsivas e otimizadas para a melhor experiência mobile."
        },
        {
            q: "Como funciona a integração com WhatsApp?",
            a: "Configuramos botões inteligentes que direcionam o lead com uma mensagem pré-definida direto para o seu número."
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq">
            <div className="container">
                <div className="section-header" style={{ textAlign: "center" }}>
                    <h2>Perguntas <span className="highlight">Frequentes</span></h2>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                {faq.q}
                                <i className="fas fa-chevron-down" style={{
                                    transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s'
                                }}></i>
                            </div>
                            <div className="faq-answer" style={{
                                maxHeight: activeIndex === index ? '200px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 0.3s ease-out'
                            }}>
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
