'use client';

import { useState, useEffect } from 'react';

export default function Countdown() {
    const [timeStr, setTimeStr] = useState('00:00:00');

    useEffect(() => {
        let targetTime = localStorage.getItem('ac23_offer_target');

        if (!targetTime) {
            targetTime = (Date.now() + (2 * 60 * 60 + 14 * 60 + 38) * 1000).toString();
            localStorage.setItem('ac23_offer_target', targetTime);
        }

        const t = parseInt(targetTime);

        const updateTimer = () => {
            const remaining = Math.max(0, Math.floor((t - Date.now()) / 1000));
            const hrs = Math.floor(remaining / 3600);
            const mins = Math.floor((remaining % 3600) / 60);
            const secs = remaining % 60;

            setTimeStr(`${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="float-offer">
            <div className="timer-label"><i className="fas fa-stopwatch"></i> OFERTA EXPIRA EM:</div>
            <div className="timer-display">{timeStr}</div>
            <a href="#preco" className="offer-btn">DESCONTO ATIVADO — CLIQUE AQUI</a>
        </div>
    );
}
