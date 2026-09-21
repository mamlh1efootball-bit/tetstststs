import { useState } from 'react';

export default function App() {
  const [started, setStarted] = useState(false);
  const [name, setName] = useState('');

  return (
    <div id="welcome-container" style={{ padding: '24px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <header id="welcome-header">
        <h1 id="welcome-title">خوش آمدید</h1>
        <h2 id="welcome-subtitle">Welcome</h2>
      </header>

      <main id="welcome-main">
        <p id="welcome-description">
          این یک صفحه خوشآمدگویی ساده برای اپلیکیشن موبایل شماست.
        </p>
        <p id="welcome-description-en">
          This is a simple welcome screen for your mobile application.
        </p>

        <hr id="welcome-divider" style={{ margin: '20px 0' }} />

        <div id="welcome-input-section" style={{ margin: '16px 0' }}>
          <label htmlFor="user-name-input" id="name-label" style={{ display: 'block', marginBottom: '8px' }}>
            نام شما (اختیاری) / Your Name (optional):
          </label>
          <input
            id="user-name-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="مثال: علی / Example: Ali"
            style={{ padding: '8px', width: '100%', maxWidth: '300px', marginBottom: '12px' }}
          />
        </div>

        <button
          id="start-button"
          onClick={() => setStarted(!started)}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          {started ? 'بازنشانی / Reset' : 'شروع کنید / Get Started'}
        </button>

        {started && (
          <div id="started-message" style={{ marginTop: '16px', padding: '12px', border: '1px solid #ccc' }}>
            <p id="greeting-text">
              {name ? `سلام ${name} عزیز! به برنامه خوش آمدید.` : 'سلام! به برنامه خوش آمدید.'}
            </p>
            <p id="greeting-text-en">
              {name ? `Hello, ${name}! Welcome to the app.` : 'Hello! Welcome to the app.'}
            </p>
          </div>
        )}

        <hr id="instructions-divider" style={{ margin: '24px 0' }} />

        <details id="apk-instructions-details" style={{ marginTop: '16px' }}>
          <summary id="apk-instructions-summary" style={{ cursor: 'pointer', fontWeight: 'bold' }}>
            راهنمای خروجی APK در گیت‌هاب (GitHub Actions)
          </summary>
          <div id="apk-instructions-content" style={{ marginTop: '12px', fontSize: '14px', lineHeight: '1.6' }}>
            <p>
              برای ساخت و دریافت فایل <strong>APK</strong> کافیست این پروژه را در مخزن گیت‌هاب (GitHub) خود قرار دهید (Push کنید).
            </p>
            <ol>
              <li>پروژه را به گیت‌هاب Push کنید.</li>
              <li>در تب <strong>Actions</strong> گیت‌هاب، جریان کاری <code>Build Android APK</code> به طور خودکار اجرا می‌شود.</li>
              <li>پس از پایان اجرا، فایل <code>app-debug.apk</code> را به عنوان Artifact دانلود و روی گوشی نصب کنید.</li>
            </ol>
            <p>
              تنظیمات در فایل <code>.github/workflows/build-apk.yml</code> و <code>capacitor.config.json</code> آماده شده است.
            </p>
          </div>
        </details>
      </main>
    </div>
  );
}
