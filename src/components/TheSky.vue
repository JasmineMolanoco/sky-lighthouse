<script setup>
import './Star.vue';
import Star from './Star.vue';
// import Mainloop from '../utils/mainloop.js';
import { getRandomNb } from '../utils/number.js';
import { getRandomTexture } from '../utils/textures.js';
import { ref, watch } from 'vue';
import { nbOfStars } from '../aframe/store';


// create sphere points
const points = (new THREE.SphereGeometry(25,15,30,0,2*Math.PI,0,2.38761041672824)).attributes.position.array;
  const vectorsOnSphere = new Map();
  for (let i = 0; i < points.length; i += 3) {
    vectorsOnSphere.set(`${points[i]}-${points[i+1]}-${points[i+2]}`, 
    new THREE.Vector3(points[i], points[i+1], points[i+2]));
  }

  const randomPoints = [...vectorsOnSphere.values()];
  // shuffle the random points with Fisher-Yates
  for (let i = randomPoints.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomPoints[i], randomPoints[j]] = [randomPoints[j], randomPoints[i]];
  }
</script>

<template>

  <a-sky src="#sky" geometry.radius="25" shader="standard"></a-sky>
<!-- draw x stars -->
  <a-entity id="stars" v-for="i in nbOfStars" rotation="-90 0 0">
    <Star :src="getRandomTexture()" :radius="getRandomNb(0.5,2)" :position="`${randomPoints[i].x} ${randomPoints[i].y} ${randomPoints[i].z}`" />
  </a-entity>
</template>