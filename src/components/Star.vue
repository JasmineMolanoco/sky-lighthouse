<script setup>
import '../aframe/emit-when-near';
import '../aframe/event-set';

defineProps({
  radius: Number,
  color: String,
  src: String,
  posx: Number,
  posy: Number,
  posz: Number
});

</script>

<template>
  <a-sphere data-role="star" :radius="`${radius}`" :position="`${posx} ${posy} ${posz}`" :material="`src: ${src}; color: white; roughness: 1; metalness: 0`" visible="false"
    emit-when-near__head="event: change-color; distance: 4; target: #colision-sphere-head"
    emit-when-near__hand="event: change-color; distance: 4; target: #colision-sphere-hand"
    :event-set__near="`event: change-color; attribute: visible; value:true;`"></a-sphere>
</template>