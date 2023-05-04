import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        minify: false,
        lib: {
            entry: resolve(__dirname, 'src/my-element.ts'),
            name: 'KevCard',
            fileName: (format) => `my-element.${format}.js`,
            minify: false,
            emptyOutDir: true,
        },
        rollupOptions: {
            external: ['lit-element', 'lit-html', 'lit', 'lit/decorators.js'],
        }
    },
});