import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    server: {
        // allowedHosts: ['127.0.0.1', 'glowing-rich-locust.ngrok-free.app'],
    },
    base:"/portfolio",
    plugins: [react()],
})
