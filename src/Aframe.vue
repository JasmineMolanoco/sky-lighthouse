<script setup>
import { ref } from 'vue';
import TheOnboarding from './components/TheOnboarding.vue';
import TheOverlay from './components/TheOverlay.vue';
import TheScene from './components/TheScene.vue';
import TheSky from './components/TheSky.vue';
import TheGround from './components/TheGround.vue';
import TheCameraRig from './components/TheCameraRig.vue';

const scale = ref(1);
const loaded = ref(false);
</script>

<template>
  <!-- <TheOnboarding :loaded="loaded" /> -->

<!-- The DOM element of the overlay must be mounted before the A-Frame Scene is mounted -->
<!-- Otherwise the "webxr system" of the A-Frame scene wont find the DOM Element -->
  <!-- <TheOverlay v-model="scale" id="overlay" /> -->
  <a-scene >
    <a-entity light="type: ambient; color: #CCC; intensity: 0.3"></a-entity>
    <TheSky />
    <TheGround />
    <TheCameraRig />
  </a-scene>


  <!-- <TheScene
      :scale="scale"
      overlay-selector="#overlay"
      @loaded="loaded = true"
    /> -->
</template>