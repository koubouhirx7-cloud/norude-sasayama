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

    // --- Multi-language Support (i18n) ---
    const translations = {
        ja: {
            "nav-about": "なぜNorudeなのか？",
            "nav-guide": "利用ガイド",
            "nav-terms": "利用規約",
            "nav-stations": "ステーション",
            "nav-mobility": "その他のモビリティ",
            "nav-access": "アクセス",
            "hero-title": "丹波篠山を、もっと深く、もっと自由に。",
            "hero-desc": "時間の制約も、場所の悩みも。すべてを解き放つ、新しい観光のカタチ。",
            "hero-btn-about": "Norudeで変わる旅",
            "hero-btn-stations": "自転車を探す",
            "why-title": "なぜ「Norude」なのか？",
            "why-desc": "これまでのレンタサイクルで感じていたストレスを、最新のシステムが解決します。",
            "prob-old": "これまでのレンタサイクル",
            "prob-time-title": "時間の制限",
            "prob-time-desc": "「17時までに返さないと…」閉館時間を気にして、観光を切り上げる必要がありました。",
            "prob-paper-title": "手続きの煩わしさ",
            "prob-paper-desc": "窓口での書類記入や、現金でのやり取り。出発までに時間がかかっていました。",
            "sol-new": "これからの「Norude」",
            "sol-time-title": "24時間、いつでも。",
            "sol-time-desc": "早朝の澄んだ空気の中も、夕暮れ時の情緒ある街並みも。あなたの時間で楽しめます。",
            "sol-app-title": "スマホで30秒出発。",
            "sol-app-desc": "アプリでQRを読み取るだけ。キャッシュレス決済で、思い立った瞬間に旅が始まります。",
            "usage-title": "ご利用の流れ",
            "usage-desc": "初めての方でも安心。4つのステップで簡単にご利用いただけます。",
            "step-1-title": "アプリ登録",
            "step-1-desc": "アプリをDLして、クレジットカード情報などを登録します。",
            "step-2-title": "借りる",
            "step-2-desc": "自転車のQRコードをアプリで読み取ると解錠されます。",
            "step-3-title": "乗る",
            "step-3-desc": "自由に移動。途中での一時駐輪も可能です（手動施錠）。",
            "step-4-title": "返却",
            "step-4-desc": "ポートで施錠し、アプリから返却処理を行って完了です。",
            "usage-btn": "詳しい利用ガイドを見る",
            "stations-title": "設置ステーション",
            "manned-title": "その他のレンタサイクル（有人）",
            "manned-desc": "以下の施設では、有人窓口にて自転車の貸出を行っています。<br><span style=\"font-size: 0.9rem; opacity: 0.8;\">※Norude Sasayamaアプリとは別のシステムとなります。詳細はお問い合わせください。</span>",
            "map-title": "シームレスな観光体験を。",
            "map-subtitle": "迷う時間を、楽しむ時間に。",
            "map-desc": "Norude Sasayamaのデジタルマップは、単なる地図ではありません。<br>3D地形表示で高低差を確認したり、おすすめの観光ルートをなぞったり。<br>スマートフォンのGPSと連動し、城下町の路地裏から豊かな自然の中まで、あなたを新しい発見へと導きます。",
            "map-badge-route": "おすすめルート",
            "map-badge-3d": "3D地形表示",
            "map-badge-gps": "現在地連動",
            "map-btn": "マップを全画面で開く",
            "mobility-title": "その他の移動手段",
            "tuk-tuk-title": "電動トゥクトゥク",
            "tuk-tuk-desc": "風を感じながら、城下町をゆったり巡る。3人乗りの電動トゥクトゥクで、特別な移動体験を。<br>普通自動車免許で運転可能。静かでエコな乗り物です。",
            "tuk-tuk-btn": "詳細を見る",
            "norina-title": "Norina Sasayama",
            "norina-desc": "AIデマンド交通システム。リクエストに合わせて最適なルートで運行します。<br>バス停まで歩くことなく、指定の場所で乗り降り可能。地域住民や観光客の足として活躍します。",
            "norina-btn": "利用方法はこちら",
            "access-title": "アクセス & 観光情報",
            "access-desc": "丹波篠山市へのアクセス方法と、街の魅力を知るための観光ガイド。",
            "access-train-title": "電車でのアクセス",
            "access-train-station": "JR 篠山口駅",
            "access-train-desc": "JR宝塚線（福知山線）「大阪駅」から丹波路快速で約70分。<br>駅東口にレンタサイクルポートがございます。",
            "access-tourism-title": "丹波篠山をより深く知る",
            "access-tourism-desc": "歴史ある城下町、豊かな自然、美味しい特産品。丹波篠山の最新の観光情報は公式ガイドをご確認ください。",
            "access-tourism-btn": "丹波篠山 観光ガイド",
            "footer-title": "Norude Sasayama",
            "footer-desc": "丹波篠山市の持続可能な観光と生活を支える<br>次世代モビリティネットワーク",
            "footer-owner-label": "事業主体",
            "footer-owner-name": "丹波篠山市 商工観光課",
            "footer-owner-address": "〒669-2397 兵庫県丹波篠山市北新町41<br>Tel 079-552-1111 / Fax 079-552-5665",
            "footer-operation-label": "運営・管理",
            "footer-operation-name": "ハイランダー / 里山の自転車店",
            "footer-system-label": "システム",
            "footer-system-company-line1": "神戸大学発認定ベンチャー",
            "footer-system-company-line2": "株式会社bLink Technologies",
            "footer-links-title": "Links & Contact",
            "footer-link-home": "ホーム",
            "footer-link-guide": "利用ガイド",
            "footer-link-terms": "利用規約",
            "footer-contact-title": "お問い合わせ",
            "footer-contact-info": "丹波篠山市 商工観光課<br>Tel: 079-552-1111（代表）",
            "footer-contact-btn": "市・商工観光課サイト",
            "footer-copyright": "© 2026 Norude Sasayama. All Rights Reserved.",
            "modal-guide": "ご利用案内",
            "modal-hours": "営業時間",
            "modal-holidays": "休業期間",
            "modal-price-label": "利用料金",
            "modal-ports-label": "台数",
            "modal-type-label": "自転車タイプ",
            "modal-access-label": "アクセス",
            "modal-confirm-on-site": "現地にて確認",
            "modal-default-type": "普通自転車 / 電動自転車",
            "modal-default-desc": "有人窓口にて貸出を行っています。詳細は直接お問い合わせください。",
            // Guide Page
            "guide-header-title": "ご利用ガイド",
            "guide-header-desc": "ちょっと楽して大自然を楽しもう！<br>アプリひとつで、丹波篠山の旅がもっと自由に。",
            "price-title": "ご利用料金",
            "price-subtitle": "シンプルで使いやすい料金体系 <span>（一部例外あり）</span>",
            "price-3h-label": "3時間まで",
            "price-daily-label": "翌日午前9時まで",
            "price-note": "※翌日以降は同じ料金サイクルで繰り返されます<br><span>※NIPPONIA、観光協会等の各ステーションは料金体系が異なります。詳細は現地にてご確認ください。</span>",
            "price-trial-title": "＜安心の10分間無料＞",
            "price-trial-desc": "間違えて借りてしまったり、自転車を変更したい場合も、最初の10分間は無料ですのでご安心ください。",
            "step-0-title": "ご利用の準備",
            "step-0-desc": "まずはアプリをダウンロードして、ユーザー登録を完了させましょう。",
            "step-0-detail-title": "アプリの準備",
            "step-0-detail-1": "App StoreまたはGoogle Playからアプリをダウンロードします。",
            "step-0-detail-2": "Bluetoothと位置情報の許可を必ず「許可」に設定してください。",
            "step-0-detail-3": "新規ユーザー登録を行い、決済用のクレジットカード情報を登録します。",
            "step-1-detail-title": "借り方の詳細",
            "step-1-detail-1": "アプリの「スキャン」をタップします。",
            "step-1-detail-2": "自転車に貼ってあるQRコードを読み込みます。",
            "step-1-detail-3": "「あける」を選択して自転車を解錠します。",
            "step-2-detail-title": "鍵の施錠と解錠",
            "step-2-detail-1": "<strong>再開（解錠）：</strong>アプリから「あける」を選択すると再び解錠されます。",
            "step-3-detail-title": "返却の手順",
            "step-3-detail-1": "指定のステーションに駐輪します。",
            "step-3-detail-2": "手動で鍵を施錠します。",
            "step-3-detail-3": "アプリの「返却」ボタンをタップし、次に「OK」をタップします。",
            "step-3-detail-4": "このボタンを押した時間で精算金額が確定されます。",
            "payment-title": "お支払い方法",
            "payment-desc": "面倒な現金支払いは不要。スマートに決済が完了します。",
            "payment-card-title": "クレジットカード決済",
            "payment-card-desc": "ご利用料金は、あらかじめアプリにご登録いただいたクレジットカードからの自動引き落としとなります。<br>利用履歴はアプリ内からいつでもご確認いただけます。",
            // Terms Page
            "terms-header-title": "利用規約・安全ルール",
            "terms-header-desc": "安全にご利用いただくための重要事項",
            "terms-intro": "Norude Sasayama（以下「本サービス」）をご利用いただきありがとうございます。本サービスは、丹波篠山の美しい街並みと自然を安全に守りながら楽しんでいただくためのレンタサイクルサービスです。<br>ご利用にあたっては、以下の規約および交通ルールを厳守してください。",
            "terms-crit-title": "最重要・厳守事項",
            "terms-crit-1-title": "1. 飲酒運転の絶対禁止",
            "terms-crit-1-desc": "<strong>自転車は「軽車両」であり、飲酒運転は重大な法律違反です。</strong><br>酒気を帯びた状態での走行は、本人の安全だけでなく他者の命を脅かす極めて危険な行為です。",
            "terms-crit-2-title": "2. 交通法規の遵守",
            "terms-crit-2-desc": "一時停止、信号遵守、左側通行の徹底、歩行者優先を必ず行ってください。城下町は道幅が狭く、歩行者も多いため、特に細心の注意が必要です。",
            "terms-crit-3-title": "3. 二人乗りの禁止",
            "terms-crit-3-desc": "自転車の二人乗りは法律で禁じられています。転倒や衝突の原因となるため、絶対に行わないでください。",
            "terms-crit-4-title": "4. ヘルメットの着用（努力義務）",
            "terms-crit-4-desc": "改正道路交通法の施行により、自転車利用者のヘルメット着用が努力義務化されています。安全のため、着用を推奨いたします。",
            "terms-main-title": "利用に関する規約",
            "terms-accident-title": "● 事故・故障時の対応",
            "terms-accident-1": "万が一事故が発生した場合は、速やかに警察へ連絡し、併せて市役所または車両に記載のある連絡先へ連絡してください。",
            "terms-accident-2": "利用中の故障やパンクなども放置せず、直ちに報告してください。",
            "terms-prohibit-title": "● 禁止事項",
            "terms-prohibit-1": "スマートフォンや傘を使用しながらの運転。",
            "terms-prohibit-2": "イヤホン等を装着し、安全な通行を妨げる音量での運転。",
            "terms-prohibit-3": "指定のポート以外への放置駐車。",
            "terms-privacy-title": "● 個人情報の取り扱い",
            "terms-privacy-desc": "ご登録いただいた個人情報は、本サービスの運営および事故時の対応にのみ使用し、適切、かつ厳重に管理いたします。",
            "terms-footer-note": "皆様に安全に丹波篠山を楽しんでいただくため、ルールを守ったご利用をお願い申し上げます。"
        },
        en: {
            "nav-about": "Why Norude?",
            "nav-guide": "Guide",
            "nav-terms": "Terms",
            "nav-stations": "Stations",
            "nav-mobility": "Mobility",
            "nav-access": "Access",
            "hero-title": "Explore Tamba Sasayama, Deeper and Freer.",
            "hero-desc": "Break free from time limits and location worries. Discover a new way to journey through our historic town.",
            "hero-btn-about": "Experience Norude",
            "hero-btn-stations": "Find a Bike",
            "why-title": "Why Choose Norude?",
            "why-desc": "Experience a seamless journey by solving common rental cycle frustrations through our smart system.",
            "prob-old": "Conventional Rentals",
            "prob-time-title": "Strict Time Limits",
            "prob-time-desc": "\"Must return by 5 PM...\" Tourists often had to cut their exploration short due to closing hours.",
            "prob-paper-title": "Tedious Paperwork",
            "prob-paper-desc": "Manual registration and cash-only payments often delayed the start of the adventure.",
            "sol-new": "The Norude Experience",
            "sol-time-title": "Available 24/7",
            "sol-time-desc": "Enjoy the morning mist or the sunset-lit streets at your own pace. The city is yours to explore, anytime.",
            "sol-app-title": "30-Second Start",
            "sol-app-desc": "Just scan the QR code with your app. Cashless payment means your journey begins in an instant.",
            "usage-title": "How to Use",
            "usage-desc": "Easy 4-step process to get you on the road in minutes.",
            "step-1-title": "Register",
            "step-1-desc": "Download the app and register your credit card details.",
            "step-2-title": "Unlock",
            "step-2-desc": "Scan the QR code on the bike with the app to unlock.",
            "step-3-title": "Ride",
            "step-3-desc": "Explore freely. You can manually lock the bike for temporary stops.",
            "step-4-title": "Return",
            "step-4-desc": "Park at any station, lock the bike, and complete return in the app.",
            "usage-btn": "View Detailed Guide",
            "stations-title": "Bike Stations",
            "manned-title": "Other Rental Locations (Manned)",
            "manned-desc": "Bikes are also available at the following locations via staff assistance.<br><span style=\"font-size: 0.9rem; opacity: 0.8;\">*Note: These locations use a different system from the Norude app.</span>",
            "map-title": "Seamless Tourism Experience.",
            "map-subtitle": "Turn Navigation into Exploration.",
            "map-desc": "The Norude Sasayama Digital Map is more than just a guide.<br>Check elevations with 3D views and follow curated sightseeing routes.<br>Synced with your GPS, it leads you from castle-town alleys to stunning hidden nature spots.",
            "map-badge-route": "Curated Routes",
            "map-badge-3d": "3D Terrain",
            "map-badge-gps": "GPS Synced",
            "map-btn": "Open Full Map",
            "mobility-title": "More Mobility Options",
            "tuk-tuk-title": "Electric Tuk-Tuk",
            "tuk-tuk-desc": "Feel the breeze as you cruise through the historic district. A unique 3-seater electric experience.<br>Requires a standard car license. Quiet and eco-friendly.",
            "tuk-tuk-btn": "Learn More",
            "norina-title": "Norina Sasayama",
            "norina-desc": "AI-powered on-demand transport. Request a ride and the bus will take the optimal route to your destination.<br>Door-to-door service available for residents and tourists alike.",
            "norina-btn": "How to Use",
            "access-title": "Access & Tourism Info",
            "access-desc": "How to get to Tamba Sasayama and explore the city's charm.",
            "access-train-title": "Access by Train",
            "access-train-station": "JR Sasayamaguchi Station",
            "access-train-desc": "Approx. 70 mins from JR Osaka Station via the Tambaji Rapid Service (Fukuchiyama Line).<br>Bicycle stations are located at the East Exit.",
            "access-tourism-title": "Know Tamba Sasayama",
            "access-tourism-desc": "A historic castle town with rich nature and local delicacies. Check the official guide for more info.",
            "access-tourism-btn": "Tourism Guide",
            "footer-title": "Norude Sasayama",
            "footer-desc": "Supporting sustainable tourism and local life<br>in Tamba Sasayama via Next-Gen Mobility.",
            "footer-owner-label": "Organization",
            "footer-owner-name": "City of Tamba Sasayama",
            "footer-owner-address": "41 Kitashin-machi, Tamba Sasayama, Hyogo 669-2397<br>Tel: +81-79-552-1111",
            "footer-operation-label": "Operator",
            "footer-operation-name": "Highlander / Satoyama Bicycle Shop",
            "footer-system-label": "System Provider",
            "footer-system-company-line1": "Kobe University Certified Venture",
            "footer-system-company-line2": "bLink Technologies Inc.",
            "footer-links-title": "Links & Contact",
            "footer-link-home": "Home",
            "footer-link-guide": "Guide",
            "footer-link-terms": "Terms",
            "footer-contact-title": "Contact",
            "footer-contact-info": "Commerce & Tourism Division<br>Tel: +81-79-552-1111",
            "footer-contact-btn": "Official City Site",
            "footer-copyright": "© 2026 Norude Sasayama. All Rights Reserved.",
            "modal-guide": "Information",
            "modal-hours": "Hours",
            "modal-holidays": "Closed",
            "modal-price-label": "Price",
            "modal-ports-label": "Capacity",
            "modal-type-label": "Bike Type",
            "modal-access-label": "Access",
            "modal-confirm-on-site": "Check on-site",
            "modal-default-type": "Standard / Electric Assist",
            "modal-default-desc": "Service provided via manned counter. Please contact them directly for details.",
            // Guide Page
            "guide-header-title": "Usage Guide",
            "guide-header-desc": "Effortless exploration in the heart of nature.<br>Your journey in Tamba Sasayama starts with just one app.",
            "price-title": "Fares & Pricing",
            "price-subtitle": "Simple and transparent pricing <span>(exceptions apply)</span>",
            "price-3h-label": "Up to 3 Hours",
            "price-daily-label": "Until 9:00 AM Next Day",
            "price-note": "*Rates repeat every cycle after the first day.<br><span>*Pricing at NIPPONIA, Tourism Association, and other manned spots may vary. Please check on-site.</span>",
            "price-trial-title": "<Worry-Free 10-Minute Trial>",
            "price-trial-desc": "Trial period is free. If you return or change your bike within the first 10 minutes, no charge will be applied.",
            "step-0-title": "Getting Ready",
            "step-0-desc": "Download the app and complete user registration to get started.",
            "step-0-detail-title": "App Setup",
            "step-0-detail-1": "Download the app from the App Store or Google Play.",
            "step-0-detail-2": "Ensure Bluetooth and Location Services are set to \"Allow\".",
            "step-0-detail-3": "Register as a new user and add your credit card for payment.",
            "step-1-detail-title": "How to Unlock",
            "step-1-detail-1": "Tap \"Scan\" in the app.",
            "step-1-detail-2": "Scan the QR code attached to the bicycle.",
            "step-1-detail-3": "Select \"Unlock\" to release the lock.",
            "step-2-detail-title": "Locking & Resuming",
            "step-2-detail-1": "<strong>To Resume:</strong> Select \"Unlock\" in the app to release the temporary lock.",
            "step-3-detail-title": "How to Return",
            "step-3-detail-1": "Park the bike at a designated station.",
            "step-3-detail-2": "Manually slide the lock to close.",
            "step-3-detail-3": "Tap \"Return\" in the app, then tap \"OK\".",
            "step-3-detail-4": "The final fare is calculated based on this return time.",
            "payment-title": "Payment Method",
            "payment-desc": "No cash needed. Secure and seamless digital payments.",
            "payment-card-title": "Credit Card Payment",
            "payment-card-desc": "Fares are automatically charged to your registered credit card.<br>View your ride history anytime within the app.",
            // Terms Page
            "terms-header-title": "Terms of Service & Safety",
            "terms-header-desc": "Important rules for a safe and enjoyable journey.",
            "terms-intro": "Thank you for using Norude Sasayama. This service is designed to help you explore the historic streets and nature of Tamba Sasayama while staying safe and respectful.<br>Please strictly adhere to the following terms and Japanese traffic laws.",
            "terms-crit-title": "Critical Safety Rules",
            "terms-crit-1-title": "1. Zero Tolerance for Drunk Riding",
            "terms-crit-1-desc": "<strong>Bicycles are considered vehicles. Riding under the influence is a serious crime.</strong><br>It endangers your life and the lives of others.",
            "terms-crit-2-title": "2. Obey Traffic Laws",
            "terms-crit-2-desc": "Stop at stop signs, obey signals, stay on the left side of the road, and always yield to pedestrians.",
            "terms-crit-3-title": "3. No Two-Person Riding",
            "terms-crit-3-desc": "Riding with two people on one bike is illegal in Japan and extremely dangerous.",
            "terms-crit-4-title": "4. Helmet Recommendation",
            "terms-crit-4-desc": "Wearing a helmet is an official safety recommendation in Japan. We strongly encourage it for your protection.",
            "terms-main-title": "Service Terms",
            "terms-accident-title": "● Accidents & Breakdowns",
            "terms-accident-1": "In case of an accident, call the police (110) immediately, then notify the city office or the contact listed on the bike.",
            "terms-accident-2": "Report any mechanical failures or flat tires immediately. Do not leave the bike unattended.",
            "terms-prohibit-title": "● Prohibited Acts",
            "terms-prohibit-1": "Using a smartphone or umbrella while riding.",
            "terms-prohibit-2": "Using earphones/headphones at a volume that blocks ambient noise.",
            "terms-prohibit-3": "Parking outside designated station ports.",
            "terms-privacy-title": "● Privacy Policy",
            "terms-privacy-desc": "Your personal data will only be used for service operations and accident response, handled with strict confidentiality.",
            "terms-footer-note": "Enjoy exploring Tamba Sasayama safely and responsibly. Thank you for your cooperation!"
        }
    };

    let currentLang = localStorage.getItem('norude-lang') || 'ja';

    const updateLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('norude-lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Update active state of toggle buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Re-render stations to reflect language change
        renderStations('managed-stations', stations, 'fa-parking text-primary');
        renderStations('manned-stations', mannedStations, 'fa-bicycle text-secondary');
    };

    // Add Language Switcher to DOM if not present
    const initLangSwitcher = () => {
        const navContainer = document.querySelector('.navbar .container');
        if (navContainer && !document.querySelector('.lang-switcher')) {
            const switcher = document.createElement('div');
            switcher.className = 'lang-switcher';
            switcher.innerHTML = `
                <button class="lang-btn ${currentLang === 'ja' ? 'active' : ''}" data-lang="ja">JP</button>
                <span class="lang-divider">|</span>
                <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            `;
            // Insert before mobile menu toggle if exists, else at the end
            const toggle = document.getElementById('mobile-menu');
            if (toggle) {
                navContainer.insertBefore(switcher, toggle);
            } else {
                navContainer.appendChild(switcher);
            }

            // Click events
            switcher.querySelectorAll('.lang-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    updateLanguage(btn.getAttribute('data-lang'));
                });
            });
        }

        // Initial translation trigger
        updateLanguage(currentLang);
    };

    // Mobile Hamburger Menu
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Data Definitions
    // Data Definitions
    const stations = [
        {
            name: { ja: '篠山城下町ホテル NIPPONIA', en: 'Hotel NIPPONIA' },
            coords: [135.2165, 35.0725],
            address: { ja: '兵庫県丹波篠山市西町25', en: '25 Nishi-machi, Tamba Sasayama, Hyogo' },
            hours: { ja: '24時間', en: '24 Hours' },
            price: { ja: '¥800 / 3時間', en: '¥800 / 3 Hours' },
            ports: { ja: '5台', en: '5 Bikes' },
            bikeType: { ja: '電動アシスト自転車', en: 'Electric Assist Bike' },
            description: {
                ja: '城下町の中心に位置し、観光の拠点に最適です。歴史的な街並みを楽しみながら巡るのに便利なステーションです。',
                en: 'Located in the heart of the castle town, perfect as a sightseeing base. Enjoy exploring the historic streets with ease.'
            }
        },
        {
            name: { ja: '丹波篠山市役所 城東支所', en: 'Joto Branch Office' },
            coords: [135.2530, 35.0780],
            address: { ja: '兵庫県丹波篠山市日置383-1', en: '383-1 Hioki, Tamba Sasayama, Hyogo' },
            hours: { ja: '24時間', en: '24 Hours' },
            price: {
                ja: '800円/3時間（以降翌日AM9時まで1,500円）、翌日以降繰り返し',
                en: '800 yen / 3h (1,500 yen until 9 AM next day), repeats daily'
            },
            ports: { ja: '3台', en: '3 Bikes' },
            bikeType: { ja: '電動アシスト自転車', en: 'Electric Assist Bike' },
            description: {
                ja: '城東地区の拠点となるステーションです。周辺の里山風景を楽しみながらのサイクリングにおすすめです。',
                en: 'A key hub in the Joto district. Recommended for cycling through the beautiful Satoyama (rural mountain) landscape.'
            }
        },
        {
            name: { ja: '丹波篠山市役所 多岐支所', en: 'Taki Branch Office' },
            coords: [135.1250, 35.1150],
            address: { ja: '兵庫県丹波篠山市多紀浄174', en: '174 Taki, Tamba Sasayama, Hyogo' },
            hours: { ja: '24時間', en: '24 Hours' },
            price: {
                ja: '800円/3時間（以降翌日AM9時まで1,500円）、翌日以降繰り返し',
                en: '800 yen / 3h (1,500 yen until 9 AM next day), repeats daily'
            },
            ports: { ja: '3台', en: '3 Bikes' },
            bikeType: { ja: '電動アシスト自転車', en: 'Electric Assist Bike' },
            description: {
                ja: '多紀地区の観光や移動に便利なスポットです。自然豊かなコースが周辺に広がっています。',
                en: 'Convenient for exploring the Taki district. Surrounded by routes rich in natural beauty.'
            }
        },
        {
            name: { ja: '丹波篠山ハートピア', en: 'Tamba Sasayama Heartpia' },
            coords: [135.2150, 35.0750],
            address: { ja: '兵庫県丹波篠山市杉68', en: '68 Sugi, Tamba Sasayama, Hyogo' },
            hours: { ja: '24時間', en: '24 Hours' },
            price: {
                ja: '800円/3時間（以降翌日AM9時まで1,500円）、翌日以降繰り返し',
                en: '800 yen / 3h (1,500 yen until 9 AM next day), repeats daily'
            },
            ports: { ja: '4台', en: '4 Bikes' },
            bikeType: { ja: '電動アシスト自転車', en: 'Electric Assist Bike' },
            description: {
                ja: '市民の憩いの場であるハートピアに設置。文化施設へのアクセスも良好です。',
                en: 'Located at Heartpia, a community hub. Great access to local cultural facilities.'
            }
        },
        {
            name: { ja: '丹波篠山観光協会', en: 'Tourism Association' },
            coords: [135.2191, 35.0755],
            address: { ja: '兵庫県丹波篠山市北新町97', en: '97 Kitashin-machi, Tamba Sasayama, Hyogo' },
            hours: { ja: '9:00 - 17:00', en: '9:00 AM - 5:00 PM' },
            price: { ja: '¥800 / 3時間', en: '¥800 / 3 Hours' },
            ports: { ja: '6台', en: '6 Bikes' },
            bikeType: { ja: '電動アシスト自転車', en: 'Electric Assist Bike' },
            description: {
                ja: '観光案内のすぐそば。最新の観光情報を手に入れてから、すぐに旅を始められます。',
                en: 'Right next to the information desk. Get the latest tips before starting your journey.'
            }
        },
        {
            name: { ja: 'JR篠山口駅', en: 'JR Sasayamaguchi Station' },
            coords: [135.1776, 35.0562],
            address: { ja: '兵庫県丹波篠山市大沢640', en: '640 Osawa, Tamba Sasayama, Hyogo' },
            hours: { ja: '24時間', en: '24 Hours' },
            price: {
                ja: '800円/3時間（以降翌日AM9時まで1,500円）、翌日以降繰り返し',
                en: '800 yen / 3h (1,500 yen until 9 AM next day), repeats daily'
            },
            ports: { ja: '10台', en: '10 Bikes' },
            bikeType: { ja: '電動アシスト自転車', en: 'Electric Assist Bike' },
            description: {
                ja: '丹波篠山の玄関口。電車を降りてすぐに自転車を借りて、市内中心部へ向かうことができます。',
                en: 'The gateway to the city. Rent a bike right off the train and head to the city center.'
            }
        },
        {
            name: { ja: '兵庫県立丹波並木道中央公園', en: 'Namikimichi Central Park' },
            coords: [135.1606, 35.0755],
            address: { ja: '兵庫県丹波篠山市大沢611-3', en: '611-3 Osawa, Tamba Sasayama, Hyogo' },
            hours: { ja: '24時間', en: '24 Hours' },
            price: {
                ja: '800円/3時間（以降翌日AM9時まで1,500円）、翌日以降繰り返し',
                en: '800 yen / 3h (1,500 yen until 9 AM next day), repeats daily'
            },
            ports: { ja: '4台', en: '4 Bikes' },
            bikeType: { ja: '電動アシスト自転車', en: 'Electric Assist Bike' },
            description: {
                ja: '広大な公園内だけでなく、周辺のサイクリングロードを楽しむ拠点として最適です。',
                en: 'Perfect as a base for enjoying the vast park and nearby cycling roads.'
            }
        },
        {
            name: { ja: '篠山チルドレンミュージアム', en: 'Children\'s Museum' },
            coords: [135.2750, 35.0720],
            address: { ja: '兵庫県丹波篠山市小立727', en: '727 Kodachi, Tamba Sasayama, Hyogo' },
            hours: { ja: '24時間', en: '24 Hours' },
            price: {
                ja: '800円/3時間（以降翌日AM9時まで1,500円）、翌日以降繰り返し',
                en: '800 yen / 3h (1,500 yen until 9 AM next day), repeats daily'
            },
            ports: { ja: '3台', en: '3 Bikes' },
            bikeType: { ja: '電動アシスト自転車', en: 'Electric Assist Bike' },
            description: {
                ja: '家族連れに人気のミュージアムに併設。少し足を伸ばして大芋地区の散策にも便利です。',
                en: 'Located by the popular family museum. Great for exploring the scenic Okumo district.'
            }
        }
    ];

    const mannedStations = [
        {
            name: { ja: 'JR篠山口駅レンタサイクル', en: 'JR Sasayamaguchi Manned Rental' },
            coords: [135.1776, 35.0562],
            hours: { ja: '9:00 - 17:00', en: '9:00 AM - 5:00 PM' },
            holidays: { ja: '年末年始', en: 'New Year Holidays' },
            description: {
                ja: 'JR篠山口駅のすぐそば。電車でのアクセスに最も便利な有人レンタサイクルです。',
                en: 'Right by the station. The most convenient manned rental for those arriving by train.'
            }
        },
        {
            name: { ja: '兵庫県立丹波並木道中央公園', en: 'Namikimichi Park Manned' },
            coords: [135.1606, 35.0755],
            hours: { ja: '9:00 - 17:00', en: '9:00 AM - 5:00 PM' },
            holidays: { ja: '年末年始', en: 'New Year Holidays' },
            description: {
                ja: '公園内のサイクリングコースを楽しむのに最適。自然豊かな環境でリフレッシュできます。',
                en: 'Ideal for the park\'s cycling courses. Refresh yourself in this lush natural environment.'
            }
        },
        {
            name: { ja: '立杭陶の郷', en: 'Tachikui Sue no Sato' },
            coords: [135.1118, 35.0210],
            hours: { ja: '10:00 - 16:00', en: '10:00 AM - 4:00 PM' },
            holidays: { ja: '火曜日（祝日は営業）、年末年始', en: 'Tuesdays (open if holiday), New Year' },
            description: {
                ja: '陶芸の里、今田地区を巡る拠点。坂道の多い地区なので、周辺散策には自転車が便利です。',
                en: 'A hub for exploring the pottery district of Konda. Bikes are perfect for the hilly terrain.'
            }
        },
        {
            name: { ja: '丹波篠山市観光協会', en: 'Tourism Association Manned' },
            coords: [135.2191, 35.0755],
            hours: { ja: '9:00 - 17:00', en: '9:00 AM - 5:00 PM' },
            holidays: { ja: '年末年始', en: 'New Year Holidays' },
            description: {
                ja: '観光案内のすぐそば。スタッフからおすすめルートを聞いてから旅を始められます。',
                en: 'Located near the info desk. Get local tips from staff before you start.'
            }
        },
        {
            name: { ja: 'ハイランダー / 里山の自転車店', en: 'Highlander / Satoyama Bicycle Shop' },
            coords: [135.1500, 35.0800],
            hours: { ja: '10:00 - 18:00', en: '10:00 AM - 6:00 PM' },
            holidays: { ja: '水曜日', en: 'Wednesdays' },
            description: {
                ja: '本格的な自転車も取り扱うプロショップ。里山を巡るのに最適な自転車を選べます。',
                en: 'A pro shop with a wide range of bikes. Find the best machine for exploring the countryside.'
            }
        },
        {
            name: { ja: 'ユニトピアささやま', en: 'Unitopia Sasayama' },
            coords: [135.1950, 35.0930],
            hours: { ja: '9:00 - 17:00', en: '9:00 AM - 5:00 PM' },
            holidays: { ja: '年中無休（点検休園あり）', en: 'Open daily (except for maintenance)' },
            description: {
                ja: '大型レジャー施設内から出発。広大な敷地の散策や周辺観光におすすめです。',
                en: 'Depart from this large resort facility. Highly recommended for vast grounds and nearby spots.'
            }
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

        document.getElementById('modal-name').textContent = station.name[currentLang];

        // Conditional rows: Hours
        const hoursRow = document.getElementById('modal-hours-row');
        const hoursText = document.getElementById('modal-hours');
        if (hoursRow && hoursText) {
            if (station.hours) {
                hoursText.textContent = station.hours[currentLang];
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
                holidaysText.textContent = station.holidays[currentLang];
                holidaysRow.style.display = 'table-row';
            } else {
                holidaysRow.style.display = 'none';
            }
        }

        document.getElementById('modal-price').textContent = (station.price && station.price[currentLang]) || translations[currentLang]["modal-confirm-on-site"];
        document.getElementById('modal-ports').textContent = (station.ports && station.ports[currentLang]) || '-';
        document.getElementById('modal-bike-type').textContent = (station.bikeType && station.bikeType[currentLang]) || translations[currentLang]["modal-default-type"];
        document.getElementById('modal-description').textContent = (station.description && station.description[currentLang]) || translations[currentLang]["modal-default-desc"];
        document.getElementById('modal-address-text').textContent = (station.address && station.address[currentLang]) || '';

        // Dynamic Map Embed
        const mapContainer = document.getElementById('modal-map-container');
        if (mapContainer) {
            const lat = station.coords[1];
            const lng = station.coords[0];
            const hl = currentLang === 'ja' ? 'ja' : 'en';
            mapContainer.innerHTML = `<iframe 
                width="100%" 
                height="100%" 
                frameborder="0" style="border:0" 
                src="https://www.google.com/maps?q=${lat},${lng}&hl=${hl}&z=15&output=embed" 
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
                <span style="font-weight: 500;">${item.name[currentLang]}</span>
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
    initLangSwitcher();

    // Initial call for animations (handles static and dynamically added items)
    initAnimations();
});
