import { defineConfig } from 'vite'



export default defineConfig({
    root: 'src',
    server: {
        host: true
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
})