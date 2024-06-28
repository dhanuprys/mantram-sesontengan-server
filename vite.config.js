import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import laravel, { refreshPaths } from 'laravel-vite-plugin'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/js/mantram-accordion.js',
                'resources/js/mantram-audio.js',
                'resources/js/sidebar.js',
                'resources/react/app.jsx'
            ],
            refresh: [
                ...refreshPaths,
                'app/Filament/**',
                'app/Forms/Components/**',
                'app/Livewire/**',
                'app/Infolists/Components/**',
                'app/Providers/Filament/**',
                'app/Tables/Columns/**',
            ],
        }),
        react()
    ],
})
