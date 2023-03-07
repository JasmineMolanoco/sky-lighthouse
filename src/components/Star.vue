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
  <a-sphere data-role="star" :radius="`${radius}`" :position="`${posx} ${posy} ${posz}`" :material="`src: ${src}; color: #696969; roughness: 1; metalness: 0`" visible="false"
    emit-when-near="event: change-color; distance: 4; target: #colision-sphere"
    :event-set__near="`event: change-color; attribute: visible; value:true;`"></a-sphere>
</template>