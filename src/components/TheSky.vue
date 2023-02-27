<script setup>
import TheGround from './TheGround.vue';
</script>

<template>
  <a-assets>
    <img id="sky" src="../utils/imgs/1567215018748-ESA_Gaia_DR2_AllSky_Brightness_Colour_Cartesian_2000x1000.png">
  </a-assets>
  <a-sky src="#sky"></a-sky>
</template>