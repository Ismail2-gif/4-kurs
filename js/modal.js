// Model
const modal = document.querySelector(".modal")
const modalDialog = document.querySelector(".modal_dialog")
const modalContent = document.querySelector(".modal_content")
const btnGet = document.querySelector("#btn-get")
const modalClose = document.querySelector(".modal_close")
const scroll = document.querySelector("body")

const activeModal = () => {
    modal.style.display = "block";
    scroll.style.overflow = "hidden";
}
const deleteModal = () => {
    modal.style.display = "none";
    scroll.style.overflow = "";
}

modalClose.addEventListener("click", () => {
    deleteModal()
})

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        deleteModal()
    }
})

btnGet.addEventListener("click", () => {
    activeModal()
})

// Update model

let modelTime = 0
const modelTimeLimit = 5
let modalShown = false
let modalShownByScroll = false
const resetModel = () => {
    modelTime = 0
}
const isPageBottom = (() => {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
})

const eventScroll = ["mousemove", "keydown", "scroll", "click"].forEach(event => {
    document.addEventListener(event, resetModel)
})
setInterval(() => {
    if (modalShown) return
    modelTime ++

    if (modelTime >= modelTimeLimit) {
        activeModal()
        modalShown = true
    }
}, 1000)

document.addEventListener("scroll", () => {
    if (modalShownByScroll) return

    if (isPageBottom()) {
        activeModal()
        modalShownByScroll = true
    }
})