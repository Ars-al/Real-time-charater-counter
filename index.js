const textAreaEl = document.getElementById("text-area");
const totalCounterEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");

textAreaEl.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter() {
    totalCounterEl.innerText = textAreaEl.value.length;

    remainingEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}