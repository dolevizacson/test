let mouthDisplay = document.querySelector('.mouth');

let happyDisplayButton = document.querySelector('.button-happy');
let sadDisplayButton = document.querySelector('.button-sad');

let happySad = true;

happyDisplayButton.addEventListener("click",()=>{
    if (!happySad) {
        happySad = !happySad
        mouthDisplay.classList.add("happy");
        happyDisplayButton.classList.add("red");
        sadDisplayButton.classList.remove("red");
    }
});

sadDisplayButton.addEventListener("click",()=>{
    if (happySad) {
        happySad = !happySad
        mouthDisplay.classList.remove("happy");
        sadDisplayButton.classList.add("red");
        happyDisplayButton.classList.remove("red");
    }
});