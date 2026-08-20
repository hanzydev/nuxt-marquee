<template>
    <Marquee
        ref="marqueeRef"
        v-bind="props"
        @cycle-complete="emit('cycleComplete')"
        @finish="emit('finish')"
    >
        <slot />
    </Marquee>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Marquee, type MarqueeProps } from 'vue-fast-marquee';

const props = defineProps<MarqueeProps>();

const emit = defineEmits<{
    finish: [];
    cycleComplete: [];
}>();

defineOptions({
    name: 'NuxtMarquee',
});

const marqueeRef = ref<InstanceType<typeof Marquee>>();

defineExpose({
    play: () => marqueeRef.value?.play(),
    pause: () => marqueeRef.value?.pause(),
    toggle: () => marqueeRef.value?.toggle(),
    reset: () => marqueeRef.value?.reset(),
    isPlaying: computed(() => marqueeRef.value?.isPlaying),
    isPaused: computed(() => marqueeRef.value?.isPaused),
});
</script>
