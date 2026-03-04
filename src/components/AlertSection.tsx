export default function AlertSection() {
    return (
        <section id="problema" className="alert-section">
            <div className="container" style={{ textAlign: "center" }}>
                <div className="alert-icon">
                    <i className="fas fa-ghost"></i>
                </div>
                <h2 className="alert-title">A LEI DA INVISIBILIDADE</h2>
                <p className="alert-quote">
                    "Quem não é visto, não é respeitado. Enquanto você lê isso, seu concorrente está roubando o cliente que
                    deveria ser seu porque o site dele carrega em 1 segundo e o seu nem existe."
                </p>
                <div className="alert-footer">
                    <i className="fas fa-exclamation-triangle"></i> O SILÊNCIO DO SEU FATURAMENTO É O BARULHO DO LUCRO DELES.
                </div>
            </div>
        </section>
    );
}
