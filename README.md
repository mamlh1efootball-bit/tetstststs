# اپلیکیشن موبایل ساده (Welcome App)

این پروژه یک برنامه صفحه خوشآمدگویی ساده است که برای خروجی گرفتن فایل **APK** و انتشار در گیت‌هاب (GitHub) آماده شده است.

## نحوه اجرا و خروجی APK در گیت‌هاب (GitHub)

1. **ارسال به گیت‌هاب (Push به مخزن):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```

2. **ساخت خودکار فایل APK:**
   - پس از Push کردن، وارد مخزن خود در GitHub شوید.
   - به تب **Actions** بروید.
   - فرآیند **Build Android APK** به صورت خودکار اجرا می‌شود.
   - پس از پایان، فایل `welcome-app-debug-apk` را از بخش **Artifacts** دانلود کنید. این فایل همان `app-debug.apk` قابل نصب بر روی گوشی اندرویدی شما است.

3. **اجرای محلی در محیط توسعه:**
   ```bash
   npm install
   npm run dev
   ```

4. **ساخت نسخه وب:**
   ```bash
   npm run build
   ```
