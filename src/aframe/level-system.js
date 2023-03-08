import * as Dom from '../utils/dom.js';
import { nbOfStars, score, youWin, youLoose, countdown, showOnboarding, restartGame } from './store';
import { watch } from 'vue';


AFRAME.registerSystem('level-system', {

    init: function () {
        this.secondsRemaining = 60;
        this.timmerIsRunning = false;
        this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);
        this.spotlight = document.querySelector('#spotlight');

        // same code with a watch
        watch(showOnboarding, (value) => {
            if (!value) {
                // start the timer
                this.timmerIsRunning = true;

            }
        });

        watch(restartGame, (value) => {
            if (!value) return;
            // reset the score
            score.value = 0;
            // reset the timer
            this.secondsRemaining = 60;
            this.timmerIsRunning = true;
            // reset the stars
            const stars = document.querySelectorAll('[data-role="star"]');
            stars.forEach(star => {
                star.setAttribute('data-counted', '0');
                star.setAttribute('visible', 'false');
            });
            // reset the youWin and youLoose
            youWin.value = false;
            youLoose.value = false;
            restartGame.value = false;
            // reset the spotlight
            // this.spotlight.setAttribute('visible', 'true');
        });


        // if a star change-color is emitted, increment score. Mark counted stars
        Dom.on('[data-role="star"]', 'change-color', (evt) => {
            if (evt && evt.target && evt.target.getAttribute('data-counted') !== '1') {
                evt.target.setAttribute('data-counted', '1');
                score.value++;
            }

            // Check if you win
            if (score.value === nbOfStars.value) {
                youWin.value = true;
                // this.spotlight.setAttribute('visible', 'false');
                this.timmerIsRunning = false;
                countdown.value = 60 - this.secondsRemaining;
                console.log('you win! ' + countdown.value);

            }
        });

    },

    tick: function (t, dt) {
    
        // update the timer
        if (this.timmerIsRunning) {
            this.secondsRemaining = Math.round(this.secondsRemaining - dt / 1000);
            countdown.value = this.secondsRemaining
            if (this.secondsRemaining <= 0) {
                youLoose.value = true;
                this.timmerIsRunning = false;
                countdown.value = 0;
                console.log('Game Over' + score.value);
            }
        }
    },


}); 