



// Tab slider

const tabContentBlocks = document.querySelectorAll(".tab_content_block")
const tabContentItems = document.querySelectorAll(".tab_content_item")
const tabContentItemsParent = document.querySelector(".tab_content_items")

const hideTapeContent = () => {
    tabContentBlocks.forEach((block) => {
        block.style.display = "none"
    })
    tabContentItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTapeContent = (i = 0) => {
    tabContentBlocks[i].style.display = 'block'
    tabContentItems[i].classList.add("tab_content_item_active")

} 

hideTapeContent()
showTapeContent()

tabContentItemsParent.onclick = (event) => {
    if (event.target.classList.contains("tab_content_item")) {
        tabContentItems.forEach((item, index) => {
            if (event.target === item) {
                hideTapeContent()
                showTapeContent(index)
            }
        })
    } 
}

let tabContentIndex = 0

const showTab = (index) => {
    tabContentItems.forEach(item => item.classList.remove("tab_content_item_active"))

    tabContentItems[index].classList.add("tab_content_item_active")
    tabContentIndex = index

    tabContentBlocks.forEach(item => item.style.display = "none")
    tabContentBlocks[index].style.display = "block"
    tabContentBlocks = index
}

const nextSlide = () => {
    let nextIndex = (tabContentIndex + 1) % tabContentItems.length
    showTab(nextIndex)
}

tabContentItems.forEach((button, index) => {
    button.onclick = () => {
        showTab(index)
    }
})

tabContentBlocks.forEach((button, index) => {
    button.onclick = () => {
        showTab(index)
    }
})

setInterval(nextSlide, 5000)

// weather

const searchInput = document.querySelector("#searchInput")
const searchButtom = document.querySelector("#search")
const citi = document.querySelector(".city")
const temp = document.querySelector(".temp")

const base_url = "https://api.openweathermap.org/data/2.5/weather"
const api_key = "e417df62e04d3b1b111abeab19cea714"

searchButtom.onclick = () => {
    fetch(`${base_url}?q=${searchInput.value}&units=metric&lang=ru&appi`)
    .then(Response => Response.json())
    .then(data => {
        console.log(data.name, data.main.temp)
        citi.innerHTML = data.name
        temp.innerHTML = data.main.temp
    })
    searchInput.value = ""
}