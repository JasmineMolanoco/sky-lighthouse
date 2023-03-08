<script setup>
import '../aframe/disable-in-vr';
import '../aframe/hide-in-vr';
import '../aframe/simple-navmesh-constraint';
import '../aframe/blink-controls';
import TheLight from './TheLight.vue';
import ColisionSphere from './ColisionSphere.vue';
import TheEndScreen from './TheEndScreen.vue';
import { countdown, nbOfStars, score, youLoose, youWin } from '../aframe/store';
import { watch } from 'vue';



const props = defineProps({
  loaded: Boolean,
});

// watch the prob loaded and hide the head colision sphere for VR
watch(() => props.loaded, (value) => {
  if (value) {
    if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
      document.querySelector('#colision-sphere-head').setAttribute('position', '0 1000 0');
    }
  }
});


</script>

<template>
  <a-entity id="camera-rig" movement-controls="camera: #head;" position="0 1.5 0.2"
    disable-in-vr="component: movement-controls;">

    <a-entity id="head" look-controls="pointerLockEnabled: true"
      simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 1.5;"
      a-disable-in-vr="component: simple-navmesh-constraint;" camera>
      <a-entity geometry="primitive: circle; radius: 0.0003;" material="shader: flat; color: white;" cursor
        raycaster="far: 25; objects: [clickable]; showLine: true;" position="0 0 -0.1"
        disable-in-vr="component: raycaster; disableInAR: true;" hide-in-vr="hideInAR: false">

        <!-- Show timer and score -->
        <a-entity data-role="timer" :text="`value: Timer: ${countdown} s; width: 30; tabSize: 4;`" position="-20 20 -26"
          hide-in-vr></a-entity>
        <a-entity data-role="score" :text="`value: Your score: ${score}; width: 30; tabSize: 4;`" position="-20 18 -26"
          hide-in-vr></a-entity>

        <ColisionSphere id="colision-sphere-head" hide-in-vr />
      </a-entity>
      <TheLight hide-in-vr />
    </a-entity>

    <a-entity id="hand-left" hand-controls="hand: left"
      blink-controls="cameraRig: #camera-rig; teleportOrigin: #head; collisionEntities: [data-role='nav-mesh']; snapTurn: false;">

      <a-entity scale="1 1 1" gltf-model="assets/sci-fi_tablet_display.glb" rotation="90 180 0"
        position="0.050 0 0"></a-entity>

      <a-entity :text="`value: Timer: ${countdown} s; width: 1; tabSize: 4;`" rotation="0 90 -90"
        position="0.050 -0.37 -0.04"></a-entity>
      <a-entity :text="`value: Your score: ${score}; width: 1; tabSize: 4;`" rotation="0 90 -90"
        position="0.050 -0.37 0.03"></a-entity>
    </a-entity>

    <a-entity id="hand-right" hand-controls="hand: right" laser-controls="hand: right"
      raycaster="far: 25; objects: [clickable]; showLine: true;">
      <a-entity scale="0.1 0.1 0.1" gltf-model="assets/horror_game_flashlight_download_game-ready.glb" rotation="0 90 0"
        position="-0.020 0 0"></a-entity>
      <ColisionSphere id="colision-sphere-hand" />
      <TheLight />
    </a-entity>

  </a-entity>
</template>