class SoundManager {
    constructor() {
        this.currentSound = null;
    }

    playSound(sound) {
        if (this.currentSound && this.currentSound !== sound) {
            this.currentSound.pause();
            this.currentSound.currentTime = 0;
        }

        if (sound === this.currentSound) {
            sound.pause();
            sound.currentTime = 0;
            this.currentSound = null;
        } else {
            sound.play();
            this.currentSound = sound;
        }
    }
}

const soundManager = new SoundManager();

const bleach = document.getElementById("bleach");
const onepiece = document.getElementById("onepiece");
const naruto = document.getElementById("naruto");
const dbz = document.getElementById("dbz");

const Overtaken = document.getElementById("Overtaken");
const SadnessSorrow = document.getElementById("SadnessSorrow");
const UnmeiNoHi = document.getElementById ("UnmeiNoHi");
const NumberOne = document.getElementById ("NumberOne");

document.addEventListener('keypress', (press) => {
    if (press.key == "o" ) {
        Overtaken.style.animation = "btn1 0.1s linear"
        setTimeout(() => {
            Overtaken.style.removeProperty('animation')
        }, 100)
        soundManager.playSound(onepiece);
    } else if (press.key == "n") {
        SadnessSorrow.style.animation = "btn3 0.1s linear"
        setTimeout(() => {
            SadnessSorrow.style.removeProperty('animation')
        }, 100)
        soundManager.playSound(naruto);
    } else if (press.key == "d") {
        UnmeiNoHi.style.animation = "btn2  0.1s linear"
        setTimeout(() => {
            UnmeiNoHi.style.removeProperty('animation')
        }, 100)
        soundManager.playSound(dbz);
    } else if (press.key == "b") {
        NumberOne.style.animation = "btn4 0.1s linear"
        setTimeout(() => {
            NumberOne.style.removeProperty('animation')
        }, 100)
        soundManager.playSound(bleach);
    }
})

Overtaken.addEventListener("click", () => {
    Overtaken.style.animation = "btn1 0.25s linear"
        setTimeout(() => {
            Overtaken.style.removeProperty('animation')
        }, 250)
        soundManager.playSound(onepiece);
})

UnmeiNoHi.addEventListener("click", () => {
    UnmeiNoHi.style.animation = "btn2 0.25s linear"
        setTimeout(() => {
            UnmeiNoHi.style.removeProperty('animation')
        }, 250)
        soundManager.playSound(dbz);
})

SadnessSorrow.addEventListener("click", () => {
    SadnessSorrow.style.animation = "btn3 0.25s linear"
        setTimeout(() => {
            SadnessSorrow.style.removeProperty('animation')
        }, 250)
        soundManager.playSound(naruto);
})

NumberOne.addEventListener("click", () => {
    NumberOne.style.animation = "btn4 0.25s linear"
        setTimeout(() => {
            NumberOne.style.removeProperty('animation')
        }, 250)
        soundManager.playSound(bleach);
})
