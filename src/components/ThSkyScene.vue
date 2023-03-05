<script setup>
  import { ref } from 'vue';
import TheSky from './TheSky.vue';
import TheGround from './TheGround.vue';
import TheCameraRig from './TheCameraRig.vue';
import '../aframe/animation-mixer';

const allAssetsLoaded = ref(false);
</script>

<template>
    <a-scene>
        <a-assets @loaded="allAssetsLoaded = true">
            <a-asset  id="lighthouse" src="assets/maidens_tower.glb"></a-asset>
            <!-- sky background image -->
            <img id="sky"
                src="../../public/assets/imgs/1567215018748-ESA_Gaia_DR2_AllSky_Brightness_Colour_Cartesian_2000x1000.png">
            <img id="grass" src="../../public/assets/textures/coast_sand_rocks_02_diff_4k.jpg">
            <!-- <img id="texture" src="../../public/assets/planetes/"> -->
            <audio id="music" src="assets/music/organ-ic-awsome-pink-floydish-outro-4602.mp3" autoplay="true"></audio>
        </a-assets>
        <a-entity light="type: ambient; color: white; intensity: 0.15">
        </a-entity>
        <a-entity light="type: point; color: white; intensity: 0.0015; position: 0 1.6 0">
        </a-entity>
        <a-entity v-if="allAssetsLoaded" scale="2 2 2" rotation="0 0 0"  animation-mixer gltf-model="#lighthouse"
            position="0 -5.788 0"></a-entity>
            <a-sound v-if="allAssetsLoaded" src="#music" autoplay="true" loop="true" position="0 0 0"></a-sound>
        <TheSky />
        <!-- <TheGround /> -->
        <TheCameraRig />
    </a-scene>
</template>