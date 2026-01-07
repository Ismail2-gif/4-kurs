

const checkGgml = document.querySelector("#gmail_input");
const gmlBtn = document.querySelector("#gmail_button");
const spanResult = document.querySelector("#gmail_result");

const regExp = /^[a-z0-9._%+-]+@gmail\.com$/;

gmlBtn.onclick = () => {
    if (regExp.test(checkGgml.value)){
        spanResult.innerHTML = "ok";
        spanResult.style.color = "green";
    }else {
        spanResult.innerHTML = "error";
        spanResult.style.color = "red";
    };
};

const parendBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0;
let positionY = 0;

const offsetWidth = parendBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parendBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock = () => {
    
    if (positionX < offsetWidth && positionY === 0){
        positionX++;
    childBlock.style.left = positionX + 'px';
        requestAnimationFrame(moveBlock);   
        
    }
    else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY++;
        childBlock.style.top = positionY + 'px';
        requestAnimationFrame(moveBlock);
    }
    else if (positionY >= offsetHeight && positionX > 0) {
        positionX--;
        childBlock.style.left = positionX + 'px'
        requestAnimationFrame(moveBlock);
    }else if (positionX <= 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = positionY + 'px'
        requestAnimationFrame(moveBlock);
    };

};moveBlock();
console.log(childBlock);

const time = document.querySelector("#seconds");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let sec = 0;
let interval = null;

start.addEventListener("click", () => {
    if (interval !== null) return;
    interval = setInterval(() => {
        sec++;
        time.innerHTML = sec;
    }, 1000);
});

stop.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

reset.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    sec = 0;
    time.innerHTML = sec;
});