<script setup>
import { ref } from 'vue';
import TheOnboarding from './components/TheOnboarding.vue';
import TheOverlay from './components/TheOverlay.vue';
import TheScene from './components/TheScene.vue';
import ThSkyScene from './components/ThSkyScene.vue';
import TheEndScreen from './components/TheEndScreen.vue';

const scale = ref(1);
const loaded = ref(false);

</script>

<template>
  <TheOnboarding :loaded="loaded" />

  <!-- The DOM element of the overlay must be mounted before the A-Frame Scene is mounted -->
  <!-- Otherwise the "webxr system" of the A-Frame scene wont find the DOM Element -->
  <TheOverlay v-model="scale" id="overlay" />

  <ThSkyScene overlay-selector="#overlay" @loaded="loaded = true" />

  <TheEndScreen :loaded="loaded" />

</template>