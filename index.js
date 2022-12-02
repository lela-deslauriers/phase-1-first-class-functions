function receivesAFunction (postMeditationActivity) {
    meditate();
    postMeditationActivity();
}

function meditate() {
    console.log("Meditate for 20 minutes");
}

function returnsANamedFunction() {
    return function sculptSociety() {
        console.log("Sculpt Society workout for 30 minutes");
    }
}

const returnsAnAnonymousFunction = function () {
    return function () {
        console.log("Write in gratitude journal for 5 minutes")
    };
}