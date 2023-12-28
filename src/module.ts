import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { defineNuxtModule, addComponentsDir } from '@nuxt/kit';

export default defineNuxtModule({
    meta: {
        name: 'nuxt-marquee',
        compatibility: {
            nuxt: '>=3.0.0',
        },
    },
    async setup(_, nuxt) {
        const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
        nuxt.options.build.transpile.push(runtimeDir);

        addComponentsDir({ path: join(runtimeDir, 'components') });
    },
});
