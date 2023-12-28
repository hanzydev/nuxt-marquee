<script lang="ts">
import 'vue-fast-marquee/style.css';

import { h } from 'vue';
import { Marquee } from 'vue-fast-marquee';

export default {
    name: 'NuxtMarquee',
    emits: ['finish', 'cycleComplete'],
    props: [
        'style',
        'class',
        'autoFill',
        'play',
        'pauseOnHover',
        'pauseOnClick',
        'direction',
        'speed',
        'delay',
        'loop',
        'gradient',
        'gradientColor',
        'gradientWidth',
    ],
    setup(props, { slots, emit }) {
        return () =>
            h(
                Marquee,
                {
                    ...props,
                    onCycleComplete: () => emit('cycleComplete'),
                    onFinish: () => emit('finish'),
                },
                slots,
            );
    },
} as typeof Marquee;
</script>
