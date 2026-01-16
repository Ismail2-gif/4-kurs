

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

// characters

const argus = document.querySelector(".argus")
const argusName = document.querySelector("#argus_name")
const argusAge = document.querySelector("#argus_age")

const dyrroth = document.querySelector(".dyrroth")
const dyrrothName = document.querySelector("#dyrroth_name")
const dyrrothAge = document.querySelector("#dyrroth_age")

const alice = document.querySelector(".alice")
const aliceName = document.querySelector("#alice_name")
const aliceAge = document.querySelector("#alice_age")

const thamuz = document.querySelector(".thamuz")
const thamuzName = document.querySelector("#thamuz_name")
const thamuzAge = document.querySelector("#thamuz_age")


const xhr = new XMLHttpRequest()
xhr.open("GET", ("../data/data.json"))
xhr.setRequestHeader("Content-type", "application/json")
xhr.send()

xhr.onload = () => {
    const data = JSON.parse(xhr.responseText)
    argus.style.backgroundImage = `url(${data.argus.imageUrl})`
    argusName.textContent = "Имя: " + data.argus.name
    argusAge.textContent = "Возраст: " + data.argus.age

    dyrroth.style.backgroundImage = `url(${data.dyrroth.imageUrl})`
    dyrrothName.innerText = "Имя: " + data.dyrroth.name
    dyrrothAge.innerText = "Возраст: " + data.dyrroth.age

    alice.style.backgroundImage = `url(${data.alice.imageUrl})`
    aliceName.innerText = "Имя: " + data.alice.name
    aliceAge.innerText ="Возраст: " +  data.alice.age

    thamuz.style.backgroundImage = `url(${data.thamuz.imageUrl})`
    thamuzName.innerText = "Имя: " + data.thamuz.name
    thamuzAge.innerText = "Возраст: " + data.thamuz.age
    console.log(typeof data)
    console.log(data.argus)

}