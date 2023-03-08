<script setup>
import { ref } from 'vue';
import { youWin, score, youLoose, countdown, nbOfStars, restartGame } from '../aframe/store.js';
import '../aframe/emit-when-near';
import '../aframe/event-set';
import '../aframe/clickable';

defineProps({
  loaded: Boolean,
});

</script>

<template>
  <template id="winScreen" v-if="youWin">
    <a-entity data-role="timer"
      :text="`value: Your score: ${countdown} s; width: 30; tabSize: 4; align: center; color: #fdceff;`"
      position="0 7 -10"></a-entity>
    <a-box data-role="restart" color="#1c5d78" position="0 2 -5" depth="0.3" height="1" width="5"
      :text="`value: Press trigger to restart; width: 10; tabSize: 4; align: center; zOffset: 0.3;  color: #fdceff;`"
      clickable emit-when-near="event: reset-game; distance: 4; target: #colision-sphere"
      @click="restartGame = true"></a-box>
  </template>

  <template id="looseScreen" v-if="youLoose">
    <a-entity data-role="timer"
      :text="`value: Oupsi you only found ${score} stars out of ${nbOfStars}; width: 30; tabSize: 4; align: center; color: #fdceff;`"
      position="0 7 -10"></a-entity>
    <a-box data-role="restart" color="#1c5d78" position="0 2 -5" depth="0.3" height="1" width="5"
      :text="`value: Press trigger to restart; width: 10; tabSize: 4; align: center; zOffset: 0.3;  color: #fdceff;`"
      clickable emit-when-near="event: reset-game; distance: 4; target: #colision-sphere"
      @click="restartGame = true"></a-box>
  </template>
</template>

<style scoped>
h1 {
  font-size: 1.5rem
}

a {
  color: #eee;
  text-decoration: none;
}

.licences {
  margin: 2rem 0;
  font-size: 1rem;
  text-align: left;
}

.licences dt {
  padding-top: 0.75rem;
  font-size: 0.9rem;
  font-weight: bold;
}

.licences dd {
  margin-left: 0;
  font-size: 0.8rem;
}

#onboarding {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #333;
  color: #ccc;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  font-family: monospace;
  z-index: 10000;
  overflow: auto;
}

#onboarding>* {
  margin: 0 auto;
  max-width: 50rem;
  width: calc(100vw - 10rem);
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem;
  font-size: 1.3rem;
}

#onboarding button {
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
}
</style>