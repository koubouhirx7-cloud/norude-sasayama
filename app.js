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
            ports: '5台',
            bikeType: '電動アシスト自転車',
            description: '城下町の中心に位置し、観光の拠点に最適です。歴史的な街並みを楽しみながら巡るのに便利なステーションです。'
        },
        {
            name: '丹波篠山市役所 城東支所',
            coords: [135.2530, 35.0780],
            address: '兵庫県丹波篠山市日置383-1',
            hours: '24時間',
            price: '800円/3時間（以降翌日AM9時まで1,500円）、翌日以降繰り返し',
            ports: '3台',
            bikeType: '電動アシスト自転車',
            description: '城東地区の拠点となるステーションです。周辺の里山風景を楽しみながらのサイクリングにおすすめです。'
        },
        {
            name: '丹波篠山市役所 多岐支所',
            coords: [135.1250, 35.1150],
            address: '兵庫県丹波篠山市多紀浄174',
            hours: '24時間',
            price: '800円/3時間（以降翌日AM9時まで1,500円）、翌日以降繰り返し',
            ports: '3台',
            bikeType: '電動アシスト自転車',
            description: '多紀地区の観光や移動に便利なスポットです。自然豊かなコースが周辺に広がっています。'
        },
        {
            name: '丹波篠山ハートピア',
            coords: [135.2150, 35.0750],
            address: '兵庫県丹波篠山市杉68',
            hours: '24時間',
            price: '800円/3時間（以降翌日AM9時まで1,500円）、翌日以降繰り返し',
            ports: '4台',
            bikeType: '電動アシスト自転車',
            description: '市民の憩いの場であるハートピアに設置。文化施設へのアクセスも良好です。'
        },
        {
            name: '丹波篠山観光協会',
            coords: [135.2191, 35.0755],
            address: '兵庫県丹波篠山市北新町97',
            hours: '9:00 - 17:00',
            price: '¥800 / 3時間',
            ports: '6台',
            bikeType: '電動アシスト自転車',
            description: '観光案内のすぐそば。最新の観光情報を手に入れてから、すぐに旅を始められます。'
        },
        {
            name: 'JR篠山口駅',
            coords: [135.1776, 35.0562],
            address: '兵庫県丹波篠山市大沢640',
            hours: '24時間',
            price: '800円/3時間（以降翌日AM9時まで1,500円）、翌日以降繰り返し',
            ports: '10台',
            bikeType: '電動アシスト自転車',
            description: '丹波篠山の玄関口。電車を降りてすぐに自転車を借りて、市内中心部へ向かうことができます。'
        },
        {
            name: '兵庫県立丹波並木道中央公園',
            coords: [135.1606, 35.0755],
            address: '兵庫県丹波篠山市大沢611-3',
            hours: '24時間',
            price: '800円/3時間（以降翌日AM9時まで1,500円）、翌日以降繰り返し',
            ports: '4台',
            bikeType: '電動アシスト自転車',
            description: '広大な公園内だけでなく、周辺のサイクリングロードを楽しむ拠点として最適です。'
        },
        {
            name: '篠山チルドレンミュージアム',
            coords: [135.2750, 35.0720],
            address: '兵庫県丹波篠山市小立727',
            hours: '24時間',
            price: '800円/3時間（以降翌日AM9時まで1,500円）、翌日以降繰り返し',
            ports: '3台',
            bikeType: '電動アシスト自転車',
            description: '家族連れに人気のミュージアムに併設。少し足を伸ばして大芋地区の散策にも便利です。'
        }
    ];

    const mannedStations = [
        {
            name: 'JR篠山口駅レンタサイクル',
            coords: [135.1776, 35.0562],
            hours: '9:00 - 17:00',
            holidays: '年末年始',
            description: 'JR篠山口駅のすぐそば。電車でのアクセスに最も便利な有人レンタサイクルです。'
        },
        {
            name: '兵庫県立丹波並木道中央公園',
            coords: [135.1606, 35.0755],
            hours: '9:00 - 17:00',
            holidays: '年末年始',
            description: '公園内のサイクリングコースを楽しむのに最適。自然豊かな環境でリフレッシュできます。'
        },
        {
            name: '篠山チルドレンミュージアム',
            coords: [135.2750, 35.0720],
            hours: '10:00 - 17:00',
            holidays: '水・木曜日（祝日は翌日）、12月〜3月中旬',
            description: 'ミュージアムの開館時間に合わせて利用可能。少し離れた「かかしの里」への観光にも便利です。'
        },
        {
            name: '立杭陶の郷',
            coords: [135.1118, 35.0210],
            hours: '10:00 - 16:00',
            holidays: '火曜日（祝日は営業）、年末年始',
            description: '陶芸の里、今田地区を巡る拠点。坂道の多い地区なので、周辺散策には自転車が便利です。'
        },
        {
            name: '丹波篠山市観光協会',
            coords: [135.2191, 35.0755],
            hours: '9:00 - 17:00',
            holidays: '年末年始',
            description: '観光案内のすぐそば。スタッフからおすすめルートを聞いてから旅を始められます。'
        },
        {
            name: 'ハイランダー / 里山の自転車店',
            coords: [135.1500, 35.0800],
            hours: '10:00 - 18:00',
            holidays: '水曜日',
            description: '本格的な自転車も取り扱うプロショップ。里山を巡るのに最適な自転車を選べます。'
        },
        {
            name: 'ユニトピアささやま',
            coords: [135.1950, 35.0930],
            hours: '9:00 - 17:00',
            holidays: '年中無休（点検休園あり）',
            description: '大型レジャー施設内から出発。広大な敷地の散策や周辺観光におすすめです。'
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

        // Conditional rows: Hours
        const hoursRow = document.getElementById('modal-hours-row');
        const hoursText = document.getElementById('modal-hours');
        if (hoursRow && hoursText) {
            if (station.hours) {
                hoursText.textContent = station.hours;
                hoursRow.style.display = 'table-row';
            } else {
                hoursRow.style.display = 'none';
            }
        }

        // Conditional rows: Holidays
        const holidaysRow = document.getElementById('modal-holidays-row');
        const holidaysText = document.getElementById('modal-holidays');
        if (holidaysRow && holidaysText) {
            if (station.holidays) {
                holidaysText.textContent = station.holidays;
                holidaysRow.style.display = 'table-row';
            } else {
                holidaysRow.style.display = 'none';
            }
        }

        document.getElementById('modal-price').textContent = station.price || '窓口にて確認';
        document.getElementById('modal-ports').textContent = station.ports || '-';
        document.getElementById('modal-bike-type').textContent = station.bikeType || '普通自転車 / 電動自転車';
        document.getElementById('modal-description').textContent = station.description || '有人窓口にて貸出を行っています。詳細は直接お問い合わせください。';
        document.getElementById('modal-address-text').textContent = station.address || '';

        // Dynamic Map Embed
        const mapContainer = document.getElementById('modal-map-container');
        if (mapContainer) {
            const lat = station.coords[1];
            const lng = station.coords[0];
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

    // Render Function
    const renderStations = (containerId, dataList, iconClass, useModal = true) => {
        const container = document.getElementById(containerId) || document.querySelector(`.${containerId}`);
        if (!container) return;

        container.innerHTML = '';
        dataList.forEach((item, index) => {
            const el = document.createElement('div');
            el.className = 'station-item animate-scroll';
            el.style.transitionDelay = `${index * 0.1}s`;
            el.style.cursor = 'pointer';

            el.innerHTML = `
                <i class="fas ${iconClass}"></i> 
                <span style="font-weight: 500;">${item.name}</span>
            `;

            if (useModal) {
                el.addEventListener('click', () => openModal(item));
            } else {
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${item.coords[1]},${item.coords[0]}`;
                el.addEventListener('click', () => window.open(mapsUrl, '_blank'));
            }
            container.appendChild(el);
        });
    };

    // Initial Render
    renderStations('managed-stations', stations, 'fa-parking text-primary');
    renderStations('manned-stations', mannedStations, 'fa-bicycle text-secondary');

    // Initial call for animations (handles static and dynamically added items)
    initAnimations();
});
