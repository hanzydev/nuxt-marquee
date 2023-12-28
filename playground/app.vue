<template>
    <NuxtMarquee :speed="100" direction="right" gradient auto-fill pause-on-hover>
        <div class="content">
            <p>some content</p>
        </div>
    </NuxtMarquee>
</template>

<style scoped>
.content {
    padding: 1rem;
}
</style>
