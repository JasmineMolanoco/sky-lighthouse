<script setup>
import { ref, watchEffect } from 'vue';
import TheSky from './TheSky.vue';
import TheGround from './TheGround.vue';
import TheCameraRig from './TheCameraRig.vue';
import '../aframe/animation-mixer';
import '../aframe/level-system.js';
import { nbOfStars, score, youWin, youLoose } from '../aframe/store';
import TheEndScreen from './TheEndScreen.vue';
import TheNavMesh from './TheNavMesh.vue';

defineProps({
    overlaySelector: String,
});



const allAssetsLoaded = ref(false);
</script>

<template>
    <a-scene level-system>
        <a-assets id="assets" @loaded="allAssetsLoaded = true">
            <a-asset id="lighthouse" src="assets/kickelhahn_tower.glb"></a-asset>

            <!-- sky background image -->
            <img id="sky" src="/assets/imgs/1567215018748-ESA_Gaia_DR2_AllSky_Brightness_Colour_Cartesian_2000x1000.png">
            <img id="ground" src="/assets/textures/snow_field_aerial_col_4k.jpg">

            <a-asset-item id="music" response-type="arraybuffer" src="assets/music/please-calm-my-mind-125566.mp3"
                preload="auto"></a-asset-item>
        </a-assets>

        <a-entity light="type: ambient; color: white; intensity: 0.15">
        </a-entity>
        <a-entity light="type: point; color: white; intensity: 0.0015;">
        </a-entity>
        <a-entity v-if="allAssetsLoaded" scale="0.7 0.7 0.7" rotation="0 0 0" animation-mixer gltf-model="#lighthouse"
            position="-0.670 -16.750 0"></a-entity>
        <TheNavMesh />
        <a-sound v-if="allAssetsLoaded" src="#music" autoplay="true" loop="true" position="0 0 0"></a-sound>
        <TheSky />
        <TheCameraRig />
        <TheGround position="0 -16.620 0" />
        <!-- show TheEndScreen when you win or loose -->
        <TheEndScreen />
    </a-scene>
</template>