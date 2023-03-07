import { ref } from "vue";

const nbOfStars =ref(10);
const score = ref(0);
const countdown = ref(0);
const youWin = ref(false);
const youLoose = ref(false);

export { nbOfStars, score, youWin, youLoose, countdown}