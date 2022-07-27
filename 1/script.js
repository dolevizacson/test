let loveDisplay = document.querySelector('.display-love');
let notLoveDisplay = document.querySelector('.display-not-love');

let loveDisplayButton = document.querySelector('.button-love');
let notLoveDisplayButton = document.querySelector('.button-not-love');

let loveCount = 0;
let notLoveCount = 0;

function updateCount(element, count){
    element.innerHTML = count + 1;
};

loveDisplayButton.addEventListener("click",()=>{
    updateCount(loveDisplay, loveCount++);
});

notLoveDisplayButton.addEventListener("click",()=>{
    updateCount(notLoveDisplay, notLoveCount++);
});


