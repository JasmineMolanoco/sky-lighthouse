<script setup>
import { ref } from 'vue';
import { showOnboarding } from '../aframe/store';


defineProps({
  loaded: Boolean,
});



function enterScene() {
  showOnboarding.value = false;
  if (AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()) {
    document.querySelector('a-scene').enterVR();
  }
}
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>The sky lighthouse</h1>
      <p>In this video game, you find yourself in the midst of a vast, empty space, 
        with nothing but the void surrounding you. 
        However, you soon realize that all the stars in your solar system have disappeared, 
        leaving you alone and adrift.</p>
        <p>Your objective is to locate the missing stars, 
        using a special light that you can point towards the sky to make them reappear. 
        Use your pad on your left hand for more information on the state of your mission.</p>
        <p>Only by finding all the stars can you restore your solar system to its former glory.</p>
      <p v-if="!loaded">loading...</p>
      <button id="play" v-if="loaded" @click="enterScene()">Play</button>
      <div class="licences">
        <dl>
          <dt>
            <i>Included</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">Aframe-extras controls and
              animation-mixer</a>
          </dt>
          <dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">Aframe-blink-controls</a>
          </dt>
          <dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate"
              target="_blank">Simple-navmesh-constraint</a>
          </dt>
          <dd>
            By Ada Rose Cannon under MIT License
          </dd>

          <dt>
            <a href="https://polyhaven.com/a/snow_field_aerial" target="_blank"> Snow Field Aerial by Rob Tuytel</a>
          </dt>
          <dd><a href="https://polyhaven.com/license" target="_blank"> licensed under CC Attribution</a>
          </dd>

          <dt>
            <a href="https://skfb.ly/5i3g2e10ba" target="_blank">Kickelhahn Tower by 3DHaupt is</a>
          </dt>
          <dd><a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"> licensed under CC Attribution</a>
          </dd>

          <dt><a
              href="https://pixabay.com/users/lesfm-22579021/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=125566">Music
              by Lesfm</a></dt>
          <dd>from <a
              href="https://pixabay.com/music//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=125566">Pixabay</a>
          </dd>
          <dt>"Sci-fi Tablet, display <a href="https://skfb.ly/oDJ9J">by Tronin Dmitry</a></dt>
          <dd> <a href="http://creativecommons.org/licenses/by/4.0/"> is licensed under Creative Commons
              Attribution</a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  text-align: left;
}
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