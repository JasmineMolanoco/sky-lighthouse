<script setup>
import '../aframe/disable-in-vr';
import '../aframe/hide-in-vr';
import '../aframe/simple-navmesh-constraint';
import '../aframe/blink-controls';
import TheLight from './TheLight.vue';
import ColisionSphere from './ColisionSphere.vue';
</script>

<template>
  <a-entity id="camera-rig" movement-controls="camera: #head;" disable-in-vr="component: movement-controls;">

    <a-entity id="head" look-controls="pointerLockEnabled: true"
      simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 3.5;"
      disable-in-vr="component: simple-navmesh-constraint;" camera position="1 1.5 0.2">
      <a-entity geometry="primitive: circle; radius: 0.0003;" material="shader: flat; color: white;" cursor
        raycaster="far: 25; objects: [clickable]; showLine: true;" position="0 0 -0.1"
        disable-in-vr="component: raycaster; disableInAR: false;" hide-in-vr="hideInAR: false">
        <ColisionSphere hide-in-vr/>
      </a-entity>
      <TheLight hide-in-vr />
    </a-entity>

    <a-entity id="hand-left" hand-controls="hand: left" blink-controls="
              cameraRig: #camera-rig;
              teleportOrigin: #head;
              collisionEntities: [data-role='nav-mesh'];
              snapTurn: false;
            ">
    </a-entity>

    <a-entity id="hand-right" hand-controls="hand: right" laser-controls="hand: right"
      raycaster="far: 2; objects: [clickable]; showLine: true;">
      <ColisionSphere />
      <TheLight />
    </a-entity>

  </a-entity>
</template>