const updateElementText = (id) => {
    return function (text) {
        document.querySelector("#" + id).innerText = text;
    }
}

updateElementText("header")("Namaste GitHub Ppl")