// Simple password protection
(function () {
    const CORRECT_PASSWORD = '1111';
    const AUTH_KEY = 'norude_auth';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPasswordProtection);
    } else {
        initPasswordProtection();
    }

    function initPasswordProtection() {
        // Check if already authenticated
        const isAuthenticated = sessionStorage.getItem(AUTH_KEY) === 'true';

        if (!isAuthenticated) {
            document.body.classList.add('auth-locked');
            // Create overlay
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 1);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 99999;
            `;

            // Create login box
            const loginBox = document.createElement('div');
            loginBox.style.cssText = `
                background: white;
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
                text-align: center;
                max-width: 400px;
                width: 90%;
            `;

            loginBox.innerHTML = `
                <h2 style="margin: 0 0 20px 0; color: #333; font-size: 24px;">アクセス制限</h2>
                <p style="margin: 0 0 30px 0; color: #666;">このサイトは現在限定公開中です。<br>パスワードを入力してください。</p>
                <input type="password" id="passwordInput" placeholder="パスワードを入力" 
                    style="width: 100%; padding: 12px; border: 2px solid #ddd; border-radius: 6px; font-size: 16px; margin-bottom: 20px; box-sizing: border-box;">
                <button id="submitBtn" 
                    style="width: 100%; padding: 12px; background: #2c5f2d; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer; font-weight: bold;">
                    ログイン
                </button>
                <p id="errorMsg" style="margin: 15px 0 0 0; color: #d32f2f; font-size: 14px; display: none;">パスワードが正しくありません</p>
            `;

            overlay.appendChild(loginBox);
            document.body.appendChild(overlay);

            // Hide body content
            document.body.style.overflow = 'hidden';

            const passwordInput = document.getElementById('passwordInput');
            const submitBtn = document.getElementById('submitBtn');
            const errorMsg = document.getElementById('errorMsg');

            function checkPassword() {
                const enteredPassword = passwordInput.value;

                if (enteredPassword === CORRECT_PASSWORD) {
                    sessionStorage.setItem(AUTH_KEY, 'true');
                    overlay.remove();
                    document.body.classList.remove('auth-locked');
                    document.body.style.overflow = '';
                } else {
                    errorMsg.style.display = 'block';
                    passwordInput.value = '';
                    passwordInput.focus();

                    // Shake animation
                    loginBox.style.animation = 'shake 0.5s';
                    setTimeout(() => {
                        loginBox.style.animation = '';
                    }, 500);
                }
            }

            submitBtn.addEventListener('click', checkPassword);
            passwordInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    checkPassword();
                }
            });

            // Focus input
            setTimeout(() => passwordInput.focus(), 100);

            // Add shake animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-10px); }
                    75% { transform: translateX(10px); }
                }
            `;
            document.head.appendChild(style);
        }
    }
})();
