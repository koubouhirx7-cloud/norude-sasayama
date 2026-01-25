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

    // Data Definitions
    const stations = [
        { name: '篠山城下町ホテル NIPPONIA', coords: [135.2165, 35.0725], icon: 'bicycle' },

        { name: '丹波篠山市役所 城東支所', coords: [135.2530, 35.0780], icon: 'bicycle' },
        { name: '丹波篠山市役所 多岐支所', coords: [135.1250, 35.1150], icon: 'bicycle' },
        { name: '丹波篠山ハートピア', coords: [135.2150, 35.0750], icon: 'bicycle' },
        { name: '丹波篠山観光協会', coords: [135.2191, 35.0755], icon: 'bicycle' },
        { name: 'JR篠山口駅', coords: [135.1776, 35.0562], icon: 'bicycle' },
        { name: '兵庫県立丹波並木道中央公園', coords: [135.1606, 35.0755], icon: 'bicycle' },
        { name: '篠山チルドレンミュージアム', coords: [135.2750, 35.0720], icon: 'bicycle' }
    ];

    const spots = [
        { name: '篠山城跡', coords: [135.2170, 35.0734], description: '歴史的観光名所', icon: 'landmark' },
        { name: 'かかしの里', coords: [135.2600, 35.0600], description: 'ユニークな案山子が見られるスポット', icon: 'camera' }
    ];

    // Render Station List in HTML
    const stationListContainer = document.querySelector('.station-list');
    if (stationListContainer) {
        stationListContainer.innerHTML = ''; // Clear static content
        stations.forEach(station => {
            const item = document.createElement('div');
            item.className = 'station-item animate-scroll';

            // Create Google Maps link
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${station.coords[1]},${station.coords[0]}`;

            item.innerHTML = `
                <i class="fas fa-parking text-primary"></i> 
                <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">
                    ${station.name}
                </a>
            `;
            stationListContainer.appendChild(item);
        });
    }

    // Mobile "Start Ride" button
    const startRideBtn = document.getElementById('btn-start-ride');
    const mapIframe = document.getElementById('map');
    if (startRideBtn && mapIframe) {
        startRideBtn.addEventListener('click', () => {
            const currentSrc = mapIframe.src.split('?')[0];
            mapIframe.src = `${currentSrc}?mode=ride`;
            // Scroll to map
            mapIframe.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Initial call for animations (handles static and dynamically added items)
    initAnimations();
});

