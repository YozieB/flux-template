import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],
    output: {
        distPath: {
            root: 'build',
        },
    },
    source: {
        // Compile all JS files and exclude core-js
        include: [{ not: /[\\/]core-js[\\/]/ }],
        entry: {
            index: './src/main.tsx',
        },
    },
    tools: {
        cssExtract: {
            loaderOptions: {},
        },
    },
    html: {
        template: './src/index.html',
    },
});
