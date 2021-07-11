const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");

const alertButton = document.querySelector(".btn-alert");


const changeBackgroundButton = document.querySelector(".change-background");
const makeBackgroundYellow = () => {
    p2.classList.remove("blue-background")
    p2.classList.add("red-background");
};
changeBackgroundButton.addEventListener("click", makeBackgroundYellow);


const toggleColorButton = document.querySelector(".toggle-color");
const toggleBackgroundP3 = () => {
    p3.classList.toggle("silver-background");
};
toggleColorButton.addEventListener("click", toggleBackgroundP3);