const btn = document.querySelector(".modalButton")
const container = document.querySelector(".modalContainer")
const modal = document.getElementsByClassName("modal");

btn.addEventListener("click", (e) => {
    toggleModal(true)
})

function toggleModal (toggle) {
    container.style.display = toggle ? "flex" : "none"
}

container.addEventListener("click", (e) => {
    if(e.target.className !== "modal")
        toggleModal(false);
})