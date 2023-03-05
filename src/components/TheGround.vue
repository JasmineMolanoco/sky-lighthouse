<script setup>
import { ref, watch } from 'vue';
const allAssetsLoaded = ref(false);
</script>

<template>
    <a-entity>

        <a-circle radius="20" rotation="-90 0 0" src="#grass"></a-circle>
    </a-entity>
</template>