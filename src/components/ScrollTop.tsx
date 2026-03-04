'use client';

import { useState, useEffect } from 'react';

export default function ScrollTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            id="scroll-top"
            className={`scroll-top-btn ${visible ? 'visible' : ''}`}
            aria-label="Voltar ao topo"
            onClick={scrollToTop}
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
}
