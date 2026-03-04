document.addEventListener('DOMContentLoaded', () => {

    // ═══════════════════════════════════════════
    // FAQ ACCORDION
    // ═══════════════════════════════════════════
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.fa-chevron-down');

        if (!question || !answer) return;

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');

            // Close all
            faqItems.forEach(i => {
                i.classList.remove('active');
                const a = i.querySelector('.faq-answer');
                const ic = i.querySelector('.fa-chevron-down');
                if (a) a.style.maxHeight = null;
                if (ic) ic.style.transform = 'rotate(0deg)';
            });

            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // ═══════════════════════════════════════════
    // SCROLL TO TOP
    // ═══════════════════════════════════════════
    const scrollTopBtn = document.getElementById('scroll-top');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ═══════════════════════════════════════════
    // OFFER COUNTDOWN
    // ═══════════════════════════════════════════
    function startCountdown() {
        const timerDisplays = document.querySelectorAll('.timer-display');
        if (!timerDisplays.length) return;

        // Persistent: store target in localStorage
        let targetTime = localStorage.getItem('ac23_offer_target');

        if (!targetTime) {
            // Set 2h 14m 38s from first visit
            targetTime = Date.now() + (2 * 60 * 60 + 14 * 60 + 38) * 1000;
            localStorage.setItem('ac23_offer_target', targetTime);
        } else {
            targetTime = parseInt(targetTime);
        }

        const updateTimer = () => {
            const remaining = Math.max(0, Math.floor((targetTime - Date.now()) / 1000));

            const hrs = Math.floor(remaining / 3600);
            const mins = Math.floor((remaining % 3600) / 60);
            const secs = remaining % 60;

            const timeStr = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            timerDisplays.forEach(display => display.textContent = timeStr);
        };

        updateTimer(); // initial call
        setInterval(updateTimer, 1000);
    }

    startCountdown();

    // ═══════════════════════════════════════════
    // KINETIC PARALLAX (mouse-driven bg lines)
    // ═══════════════════════════════════════════
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduced) {
        document.addEventListener('mousemove', (e) => {
            const lines = document.querySelectorAll('.bg-lines .line');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            lines.forEach((line, index) => {
                const speed = (index + 1) * 15;
                line.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    }

    // ═══════════════════════════════════════════
    // INTERSECTION OBSERVER — Staggered Reveals
    // ═══════════════════════════════════════════
    if (!prefersReduced) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target); // only animate once
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
    }
});
