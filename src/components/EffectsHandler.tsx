'use client';

import { useEffect } from 'react';

export default function EffectsHandler() {
    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        // 1. Kinetic Parallax
        const handleMouseMove = (e: MouseEvent) => {
            const lines = document.querySelectorAll('.bg-lines .line') as NodeListOf<HTMLElement>;
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            lines.forEach((line, index) => {
                const speed = (index + 1) * 15;
                line.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        // 2. Intersection Observer (Reveal)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const selectors = [
            '.feature-card',
            '.showcase-card',
            '.faq-item',
            '.price-card',
            '.alert-icon',
            '.alert-title',
            '.alert-quote',
            'h1',
            '.badge'
        ];

        document.querySelectorAll(selectors.join(', ')).forEach(el => {
            el.classList.add('reveal-element');
            observer.observe(el);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            observer.disconnect();
        };
    }, []);

    return null;
}
