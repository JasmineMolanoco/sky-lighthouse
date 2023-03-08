import { ref } from "vue";

const nbOfStars =ref(30);
const score = ref(0);
const countdown = ref(0);
const youWin = ref(false);
const youLoose = ref(false);
const showOnboarding = ref(true);
const restartGame = ref(false);

export { nbOfStars, score, youWin, youLoose, countdown, showOnboarding, restartGame}