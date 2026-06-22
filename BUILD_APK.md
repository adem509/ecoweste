# بناء ملف APK للتطبيق

تطبيقك من نوع **SSR** (TanStack Start على Cloudflare). Capacitor لا يستطيع تشغيله كملفات ثابتة، لذا نستخدم وضع **Remote URL**: التطبيق يفتح موقعك المنشور `https://organic-link-up.lovable.app` داخل WebView.

> ✅ هذا يحل مشكلة الصفحة البيضاء.
> ⚠️ يتطلب أن يكون الموقع منشورًا ومتصلًا بالإنترنت.

## المتطلبات على جهازك

1. [Node.js 18+](https://nodejs.org)
2. [Android Studio](https://developer.android.com/studio) (Android SDK + Gradle)
3. Java JDK 17

## الخطوات

```bash
# 1. استنسخ المشروع بعد ربطه بـ GitHub
git clone <repo-url>
cd <project>

# 2. ثبّت الحزم
npm install

# 3. (اختياري لكن مطلوب لأول مرة فقط) ابنِ الويب — حتى ولو فارغ
npm run build

# 4. أضف منصة Android (أول مرة فقط)
npx cap add android

# 5. زامن الإعدادات
npx cap sync android

# 6. ابنِ APK
cd android
./gradlew assembleDebug
```

## مكان APK

```
android/app/build/outputs/apk/debug/app-debug.apk
```

## بعد أي تعديل على capacitor.config.ts

```bash
npx cap sync android
```
ثم أعد بناء APK.

## ملاحظات

- لتعمل **الكاميرا/الإشعارات** native لاحقًا أضف Capacitor plugins المناسبة.
- لـ APK موقّع للنشر: `./gradlew assembleRelease` بعد إعداد keystore.
- إذا أردت لاحقًا تطبيقًا يعمل **بدون إنترنت** ستحتاج إعادة بناء المشروع كـ SPA ثابت (بدون SSR) ووضع الملفات في `dist/` وإزالة `server.url`.
