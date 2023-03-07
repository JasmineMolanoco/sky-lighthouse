<script setup>
import '../aframe/disable-in-vr';
import '../aframe/hide-in-vr';
import '../aframe/simple-navmesh-constraint';
import '../aframe/blink-controls';
import TheLight from './TheLight.vue';
import ColisionSphere from './ColisionSphere.vue';
import  { countdown, nbOfStars, score }  from '../aframe/store';
import TheEndScreen from './TheEndScreen.vue';

</script>

<template>
  <a-entity id="camera-rig" movement-controls="camera: #head;"  position="1 1.5 0.2" disable-in-vr="component: movement-controls;">

    <a-entity id="head" look-controls="pointerLockEnabled: true"
      simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 3.5;"
      disable-in-vr="component: simple-navmesh-constraint;" camera>
      <a-entity geometry="primitive: circle; radius: 0.0003;" material="shader: flat; color: white;" cursor
        raycaster="far: 25; objects: [clickable]; showLine: true;" position="0 0 -0.1"
        disable-in-vr="component: raycaster; disableInAR: false;" hide-in-vr="hideInAR: false">
        
        <!-- Show timer and score -->
        <a-entity id="countdown" :text="`value: Timer: ${countdown} s; width: 30; tabSize: 4;`" position="-20 20 -26" ></a-entity>
        <a-entity class="score" :text="`value: Your score: ${score}; width: 30; tabSize: 4;`" position="-20 18 -26" ></a-entity>
        
        <ColisionSphere hide-in-vr/>
      </a-entity>
      <TheLight hide-in-vr />
      <TheEndScreen />
    </a-entity>

    <a-entity id="hand-left" hand-controls="hand: left" blink-controls="
              cameraRig: #camera-rig;
              teleportOrigin: #head;
              collisionEntities: [data-role='nav-mesh'];
              snapTurn: false;
            ">
    </a-entity>

    <a-entity id="hand-right" hand-controls="hand: right" laser-controls="hand: right"
      raycaster="far: 25; objects: [clickable]; showLine: true;">
      <ColisionSphere />
    <a-entity gltf-model="#flashlight"></a-entity>
      <TheLight />
    </a-entity>

  </a-entity>
</template>