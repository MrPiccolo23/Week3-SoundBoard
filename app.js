
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
            main.style.removeProperty('animation')
        }, 100)
        onepiece.pause();
        onepiece.currentTime = 0;
        onepiece.play();
    } else if (press.key == "n") {
        SadnessSorrow.style.animation = "btn3 0.1s linear"
        setTimeout(() => {
            SadnessSorrow.style.removeProperty('animation')
        }, 100)
        naruto.pause();
        naruto.currentTime = 0;
        naruto.play();
    } else if (press.key == "d") {
        UnmeiNoHi.style.animation = "btn2  0.1s linear"
        setTimeout(() => {
            UnmeiNoHi.style.removeProperty('animation')
        }, 100)
        dbz.pause();
        dbz.currentTime = 0;
        dbz.play();
    } else if (press.key == "b") {
        NumberOne.style.animation = "btn4 0.1s linear"
        setTimeout(() => {
            NumberOne.style.removeProperty('NumberOne')
        }, 100)
        bleach.pause();
        bleach.currentTime = 0;
        bleach.play();
        
    }
})

let count = 0


Overtaken.addEventListener("click", () => {
    Overtaken.style.animation = "btn1 0.25s linear"
        setTimeout(() => {
            Overtaken.style.removeProperty('animation')
        }, 250)
        onepiece.pause();
        onepiece.currentTime = 0;
        onepiece.play();
})

UnmeiNoHi.addEventListener("click", () => {
    UnmeiNoHi.style.animation = "btn2 0.25s linear"
        setTimeout(() => {
            UnmeiNoHi.style.removeProperty('animation')
        }, 250)
        dbz.pause();
        dbz.currentTime = 0;
        dbz.play();
})

SadnessSorrow.addEventListener("click", () => {
    SadnessSorrow.style.animation = "btn3 0.25s linear"
        setTimeout(() => {
            SadnessSorrow.style.removeProperty('animation')
        }, 250)
        naruto.pause();
        naruto.currentTime = 0;
        naruto.play();
})

NumberOne.addEventListener("click", () => {
    NumberOne.style.animation = "btn4 0.25s linear"
        setTimeout(() => {
            NumberOne.style.removeProperty('animation')
        }, 250)
        bleach.pause();
        bleach.currentTime = 0;
        bleach.play();
})
