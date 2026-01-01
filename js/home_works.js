

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

let pixel = 0;

parendBlock.onclick = () => {
    const count = () => {
        pixel++ ;
        childBlock.style.left = pixel + 'px';
        console.log(pixel)
        if(pixel < 450){
            requestAnimationFrame(count);
        };
    };
    count();

    
};