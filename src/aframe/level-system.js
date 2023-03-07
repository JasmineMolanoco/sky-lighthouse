import * as Dom from '../utils/dom.js';
import { nbOfStars, score, youWin, youLoose, countdown } from './store';

AFRAME.registerSystem('level-system', {

    init: function () {
        this.secondsRemaining = 60;
        this.timmerIsRunning = false;
        this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);

        // if a star change-color is emitted, increment score and check if you win
        Dom.on('[data-role="star"]', 'change-color', (evt) => {
            if (evt && evt.target && evt.target.getAttribute('data-counted') !== '1') {
                evt.target.setAttribute('data-counted', '1');
                score.value++;
            }

            // Check if you win
            if (score.value === nbOfStars.value) {
                youWin.value = true;
                console.log('you win!' + youWin.value);
            }
        });
    },

    tick: function (dt) {
        // start the timer
        this.timmerIsRunning = true;
        this.secondsRemaining = 60;

        // update the timer
        if (this.timmerIsRunning) {
            this.secondsRemaining = Math.round(this.secondsRemaining - dt / 1000);
            countdown.value = this.secondsRemaining
            if (this.secondsRemaining <= 0) {
                youLoose.value = true;
                console.log('Game Over' + youLoose.value);
                countdown.value = 0;
                score.value= score.value
            }
        }
    },


}); 