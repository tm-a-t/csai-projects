import {defineConfig} from 'vitepress';
import tailwindcss from '@tailwindcss/vite';
import projects from './projects';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'CSAI Projects',
    description: 'Term and thesis projects by CSAI students.',
    srcDir: 'pages',
    cleanUrls: true,
    markdown: {
        math: {
            tex: {tags: 'ams'}
        },
    },
    themeConfig: {
        projects: projects,
    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
});
