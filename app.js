document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations (Centralized)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const initAnimations = () => {
        document.querySelectorAll('.animate-scroll').forEach(el => {
            if (!el.dataset.observed) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'all 0.6s ease-out';
                observer.observe(el);
                el.dataset.observed = 'true';
            }
        });
    };

    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile Hamburger Menu
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Data Definitions
    const stations = [
        { name: '篠山城下町ホテル NIPPONIA', coords: [135.2165, 35.0725], address: '兵庫県丹波篠山市西町25' },
        { name: '丹波篠山市役所 城東支所', coords: [135.2530, 35.0780], address: '兵庫県丹波篠山市日置383-1' },
        { name: '丹波篠山市役所 多岐支所', coords: [135.1250, 35.1150], address: '兵庫県丹波篠山市多紀浄174' },
        { name: '丹波篠山ハートピア', coords: [135.2150, 35.0750], address: '兵庫県丹波篠山市杉68' },
        { name: '丹波篠山観光協会', coords: [135.2191, 35.0755], address: '兵庫県丹波篠山市北新町97' },
        { name: 'JR篠山口駅', coords: [135.1776, 35.0562], address: '兵庫県丹波篠山市大沢640' },
        { name: '兵庫県立丹波並木道中央公園', coords: [135.1606, 35.0755], address: '兵庫県丹波篠山市大沢611-3' },
        { name: '篠山チルドレンミュージアム', coords: [135.2750, 35.0720], address: '兵庫県丹波篠山市小立727' }
    ];

    const spots = [
        { name: '篠山城跡', coords: [135.2170, 35.0734], description: '歴史的観光名所', icon: 'landmark' },
        { name: 'かかしの里', coords: [135.2600, 35.0600], description: 'ユニークな案山子が見られるスポット', icon: 'camera' }
    ];

    // Render Station List/Grid in HTML
    const stationContainer = document.querySelector('.station-list');
    if (stationContainer) {
        stationContainer.innerHTML = ''; // Clear static content
        stations.forEach((station, index) => {
            const card = document.createElement('div');
            card.className = 'station-card animate-scroll';
            card.style.transitionDelay = `${index * 0.1}s`;

            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${station.coords[1]},${station.coords[0]}`;

            card.innerHTML = `
                <div class="station-card-image">
                    <i class="fas fa-bicycle"></i>
                </div>
                <div class="station-card-info">
                    <h3 class="station-card-name">${station.name}</h3>
                    <p class="station-card-address">
                        <i class="fas fa-map-marker-alt" style="color: var(--color-secondary);"></i>
                        ${station.address}
                    </p>
                    <div class="station-card-actions">
                        <a href="${mapsUrl}" target="_blank" class="station-card-btn">
                            <i class="fas fa-map-marked-alt"></i> Google Mapsで見る
                        </a>
                    </div>
                </div>
            `;
            stationContainer.appendChild(card);
        });
    }

    // Initial call for animations (handles static and dynamically added items)
    initAnimations();
});
