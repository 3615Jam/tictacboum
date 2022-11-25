// définition des constantes
const timeMin = document.getElementById("time_min");
const timeMax = document.getElementById("time_max");
const timeMinValue = document.getElementById("time_min_value");
const timeMaxValue = document.getElementById("time_max_value");
const timeValuesZone = document.getElementById("time_values_zone");
const launchTimerButton = document.getElementById("launch_timer");
const clearTimerButton = document.getElementById("clear_timer");
const bombElement = document.getElementById("bomb");
const tictacSound = new Audio("sounds/tictac.mp3");
const boomSound = new Audio("sounds/boom.mp3");

// définition des variables
let randomTime;
let timer;

// gestion de l'affichage de la zone de préférences
function togglePrefVisibility() {
    timeValuesZone.classList.toggle("visibility");
    console.log("test pref");
}

/**
 * Fonction qui a pour but de retourner un entier compris entre 'min' et 'max' inclus
 *
 * @param {int} min     un nombre entier qui servira de valeur minimum à notre timer
 * @param {int} max     un nombre entier qui servira de valeur maximum à notre timer
 * @returns             un nombre entier compris entre la valeur de 'min' et celle de 'max' incluses
 */
function getRandomTime(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Objectifs de la fonction getTimer() :
 *      - mettre à jour les zones de texte contenant la valeur des curseurs 'time_min' et 'time_max'
 *      - empêcher que la valeur mini de 'time_max' soit inférieure à la valeur actuelle de 'time_min'
 *      - définir la durée du timer (en millisecondes) grâce à la fonction 'getRandomTime()'
 */
function getTimer() {
    timeMinValue.value = timeMin.value;
    timeMaxValue.value = timeMax.value;

    // --------------------------------------------
    // ... test in progress ...

    // let minTimePossible = 10;
    // let maxTimePossible = 120;
    let minMaxGap = 10;
    let maxGap = Number(timeMax.value) - minMaxGap;
    let minGap = Number(timeMin.value) + minMaxGap;
    timeMin.setAttribute("max", maxGap);
    timeMax.setAttribute("min", minGap);
    // --------------------------------------------

    randomTime = getRandomTime(timeMin.value, timeMax.value) * 1000;
    console.log(randomTime);
}

// animation de l'explosion ; survient à la fin du timer aléatoire
function boom() {
    bombElement.src = "img/boom.gif";
    boomSound.play();
    tictacSound.pause();
    console.log("BOOOOOOOM !!!!!!!!!!!!!");
}

/**
 * Objectifs de la fonction launchTimer() :
 *      - récupérer le 'randomTime' à jour avec les réglages 'time_min' et 'time_max' actuels
 *      - régler le timer avec la valeur de 'randomTime'
 *      - faire disparaitre le bouton 'launch_timer' et apparaitre 'clear_timer'
 */
function launchTimer() {
    getTimer();
    timer = setTimeout(boom, randomTime);
    launchTimerButton.setAttribute("style", "display : none");
    clearTimerButton.removeAttribute("style");
    bombElement.src = "img/bomb.gif";
    tictacSound.play();
    tictacSound.loop = true;
    console.log("Timer launched !");
}

/**
 * Objectifs de la fonction clearTimer() :
 *      - annuler le timer en cours
 *      - faire disparaitre le bouton 'clear_timer' et réapparaitre 'launch_timer'
 */
function clearTimer() {
    clearTimeout(timer);
    launchTimerButton.removeAttribute("style");
    clearTimerButton.setAttribute("style", "display: none");
    bombElement.src = "img/bomb.png";
    tictacSound.pause();
    console.log("Timer cleared !");
}

// on met à jour les valeurs 'time_min' et 'time_max' au chargement de la page
getTimer();

// #################################################################################
// #################################################################################
// #################################################################################

// ----------[ noUiSlider ]----------
// let slider = document.getElementById("slider_test");
// let range = {
//     min: [10],
//     max: [120],
// };

// noUiSlider.create(slider, {
//     start: [30, 90],
//     connect: true,
//     tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
//     margin: 10,
//     range: range,
//     pips: {
//         mode: "range",
//         density: 10,
//     },
// });

// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################

// function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
//     const [from, to] = getParsed(fromInput, toInput);
//     fillSlider(fromInput, toInput, "#C6C6C6", "#25daa5", controlSlider);
//     if (from > to) {
//         fromSlider.value = to;
//         fromInput.value = to;
//     } else {
//         fromSlider.value = from;
//     }
// }

// function controlToInput(toSlider, fromInput, toInput, controlSlider) {
//     const [from, to] = getParsed(fromInput, toInput);
//     fillSlider(fromInput, toInput, "#C6C6C6", "#25daa5", controlSlider);
//     setToggleAccessible(toInput);
//     if (from <= to) {
//         toSlider.value = to;
//         toInput.value = to;
//     } else {
//         toInput.value = from;
//     }
// }

// function controlFromSlider(fromSlider, toSlider, fromInput) {
//     const [from, to] = getParsed(fromSlider, toSlider);
//     fillSlider(fromSlider, toSlider, "#C6C6C6", "#25daa5", toSlider);
//     if (from > to) {
//         fromSlider.value = to;
//         fromInput.value = to;
//     } else {
//         fromInput.value = from;
//     }
// }

// function controlToSlider(fromSlider, toSlider, toInput) {
//     const [from, to] = getParsed(fromSlider, toSlider);
//     fillSlider(fromSlider, toSlider, "#C6C6C6", "#25daa5", toSlider);
//     setToggleAccessible(toSlider);
//     if (from <= to) {
//         toSlider.value = to;
//         toInput.value = to;
//     } else {
//         toInput.value = from;
//         toSlider.value = from;
//     }
// }

// function getParsed(currentFrom, currentTo) {
//     const from = parseInt(currentFrom.value, 10);
//     const to = parseInt(currentTo.value, 10);
//     return [from, to];
// }

// function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
//     const rangeDistance = to.max - to.min;
//     const fromPosition = from.value - to.min;
//     const toPosition = to.value - to.min;
//     controlSlider.style.background = `linear-gradient(
//       to right,
//       ${sliderColor} 0%,
//       ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
//       ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
//       ${rangeColor} ${(toPosition / rangeDistance) * 100}%,
//       ${sliderColor} ${(toPosition / rangeDistance) * 100}%,
//       ${sliderColor} 100%)`;
// }

// function setToggleAccessible(currentTarget) {
//     const toSlider = document.querySelector("#toSlider");
//     if (Number(currentTarget.value) <= 0) {
//         toSlider.style.zIndex = 2;
//     } else {
//         toSlider.style.zIndex = 0;
//     }
// }

// const fromSlider = document.querySelector("#fromSlider");
// const toSlider = document.querySelector("#toSlider");
// const fromInput = document.querySelector("#fromInput");
// const toInput = document.querySelector("#toInput");
// fillSlider(fromSlider, toSlider, "#C6C6C6", "#25daa5", toSlider);
// setToggleAccessible(toSlider);

// fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
// toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
// fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
// toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);

// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################
// #################################################################################
