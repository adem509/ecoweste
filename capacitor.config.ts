import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.organiclinkup',
  appName: 'EcoWest',
  webDir: 'dist',
  server: {
    // التطبيق SSR، لذا نحمّل الموقع المنشور مباشرة بدلاً من ملفات ثابتة.
    url: 'https://organic-link-up.lovable.app',
    cleartext: false,
    androidScheme: 'https',
  },
};

export default config;
