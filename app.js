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
        {
            name: '篠山城下町ホテル NIPPONIA',
            coords: [135.2165, 35.0725],
            address: '兵庫県丹波篠山市西町25',
            hours: '24時間',
            price: '¥800 / 3時間',
            ports: '5ポート',
            bikeType: '電動アシスト自転車',
            description: '城下町の中心に位置し、観光の拠点に最適です。歴史的な街並みを楽しみながら巡るのに便利なステーションです。'
        },
        {
            name: '丹波篠山市役所 城東支所',
            coords: [135.2530, 35.0780],
            address: '兵庫県丹波篠山市日置383-1',
            hours: '8:30 - 17:15',
            price: '¥800 / 3時間',
            ports: '3ポート',
            bikeType: '電動アシスト自転車',
            description: '城東地区の拠点となるステーションです。周辺の里山風景を楽しみながらのサイクリングにおすすめです。'
        },
        {
            name: '丹波篠山市役所 多岐支所',
            coords: [135.1250, 35.1150],
            address: '兵庫県丹波篠山市多紀浄174',
            hours: '8:30 - 17:15',
            price: '¥800 / 3時間',
            ports: '3ポート',
            bikeType: '電動アシスト自転車',
            description: '多紀地区の観光や移動に便利なスポットです。自然豊かなコースが周辺に広がっています。'
        },
        {
            name: '丹波篠山ハートピア',
            coords: [135.2150, 35.0750],
            address: '兵庫県丹波篠山市杉68',
            hours: '9:00 - 21:00',
            price: '¥800 / 3時間',
            ports: '4ポート',
            bikeType: '電動アシスト自転車',
            description: '市民の憩いの場であるハートピアに設置。文化施設へのアクセスも良好です。'
        },
        {
            name: '丹波篠山観光協会',
            coords: [135.2191, 35.0755],
            address: '兵庫県丹波篠山市北新町97',
            hours: '9:00 - 17:00',
            price: '¥800 / 3時間',
            ports: '6ポート',
            bikeType: '電動アシスト自転車',
            description: '観光案内のすぐそば。最新の観光情報を手に入れてから、すぐに旅を始められます。'
        },
        {
            name: 'JR篠山口駅',
            coords: [135.1776, 35.0562],
            address: '兵庫県丹波篠山市大沢640',
            hours: '24時間',
            price: '¥800 / 3時間',
            ports: '10ポート',
            bikeType: '電動アシスト自転車',
            description: '丹波篠山の玄関口。電車を降りてすぐに自転車を借りて、市内中心部へ向かうことができます。'
        },
        {
            name: '兵庫県立丹波並木道中央公園',
            coords: [135.1606, 35.0755],
            address: '兵庫県丹波篠山市大沢611-3',
            hours: '9:00 - 17:00',
            price: '¥800 / 3時間',
            ports: '4ポート',
            bikeType: '電動アシスト自転車',
            description: '広大な公園内だけでなく、周辺のサイクリングロードを楽しむ拠点として最適です。'
        },
        {
            name: '篠山チルドレンミュージアム',
            coords: [135.2750, 35.0720],
            address: '兵庫県丹波篠山市小立727',
            hours: '10:00 - 17:00 (水・木休)',
            price: '¥800 / 3時間',
            ports: '3ポート',
            bikeType: '電動アシスト自転車',
            description: '家族連れに人気のミュージアムに併設。少し足を伸ばして大芋地区の散策にも便利です。'
        }
    ];

    const spots = [
        { name: '篠山城跡', coords: [135.2170, 35.0734], description: '歴史的観光名所', icon: 'landmark' },
        { name: 'かかしの里', coords: [135.2600, 35.0600], description: 'ユニークな案山子が見られるスポット', icon: 'camera' }
    ];

    // Modal Elements
    const modal = document.getElementById('station-modal');
    const modalClose = document.getElementById('modal-close');

    const openModal = (station) => {
        if (!modal) return;

        document.getElementById('modal-name').textContent = station.name;
        document.getElementById('modal-hours').textContent = station.hours;
        document.getElementById('modal-price').textContent = station.price;
        document.getElementById('modal-ports').textContent = station.ports;
        document.getElementById('modal-bike-type').textContent = station.bikeType;
        document.getElementById('modal-description').textContent = station.description;
        document.getElementById('modal-address-text').textContent = station.address;

        // Dynamic Map Embed
        const mapContainer = document.getElementById('modal-map-container');
        if (mapContainer) {
            const lat = station.coords[1];
            const lng = station.coords[0];
            mapContainer.innerHTML = `<iframe 
                width="100%" 
                height="100%" 
                style="border:0" 
                loading="lazy" 
                allowfullscreen 
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_KEY&q=${lat},${lng}&zoom=15">
            </iframe>`;

            // Note: Since I don't have an API key, I'll use a search query embed which doesn't strictly require one for basic use but works better with one.
            // Alternatively, a simple search-based iframe:
            mapContainer.innerHTML = `<iframe 
                width="100%" 
                height="100%" 
                frameborder="0" style="border:0" 
                src="https://www.google.com/maps?q=${lat},${lng}&hl=ja&z=15&output=embed" 
                allowfullscreen>
            </iframe>`;
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const closeModal = () => {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Render Station List/Grid in HTML
    const stationContainer = document.querySelector('.station-list');
    if (stationContainer) {
        stationContainer.innerHTML = ''; // Clear static content
        stations.forEach((station, index) => {
            const card = document.createElement('div');
            card.className = 'station-card animate-scroll';
            card.style.transitionDelay = `${index * 0.1}s`;
            card.style.cursor = 'pointer';

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
                        <span class="station-card-btn">
                            詳細を見る
                        </span>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => openModal(station));
            stationContainer.appendChild(card);
        });
    }

    // Initial call for animations (handles static and dynamically added items)
    initAnimations();
});
