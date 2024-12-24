import { defineConfig } from 'vite'



export default defineConfig({
    root: 'src',
    base: "./",
    server: {
        host: true
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
})