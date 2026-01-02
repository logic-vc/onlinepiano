import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'online-piano',
  web: {
    host: 'localhost',
    port: 3000,
    commands: {
      dev: 'vite',
      build: 'vite build',
    },
  },
  permissions: [],
  outdir: 'dist',
  brand: {
    displayName: '온라인 피아노',
    icon: 'https://static.toss.im/icons/png/4x/icon-toss-logo.png',
    primaryColor: '#1F2937',
    bridgeColorMode: 'inverted',
  },
  webViewProps: {
    type: 'partner',
  },
});
