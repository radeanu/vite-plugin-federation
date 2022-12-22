import { fileURLToPath, URL } from 'node:url';
import federation from '@originjs/vite-plugin-federation';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        federation({
            name: 'remote-app',
            filename: 'remoteEntry.js',
            // Modules to expose
            exposes: {
                './PdvButton': './src/components/pdv-button.vue'
            },
            shared: ['vue']
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
});
