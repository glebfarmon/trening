import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), VitePWA({ registerType: 'autoUpdate' })],
	base: '/trening/',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
