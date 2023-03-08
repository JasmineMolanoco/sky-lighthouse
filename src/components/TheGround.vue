<script setup>
import { ref, watch } from 'vue';
const allAssetsLoaded = ref(false);
</script>

<template>
    <a-entity>

        <a-circle radius="18" rotation="-90 0 0" src="#ground"></a-circle>
    </a-entity>
</template>