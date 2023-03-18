function toggleMenu() {
    document.querySelector("#nav").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn")
x.onclick = toggleMenu;

const year = document.querySelector('#currentyear');
year.textContent = `${new Date().getFullYear()}`;

document.querySelector("#date").textContent = document.lastModified;

const datefieldUK = document.querySelector("#currentdate");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`


const visitsDisplay = document.querySelector("#visits");
let numVisits = Number(window.localStorage.getItem("visits-ls"));
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}
numVisits++;
localStorage.setItem("visits-ls", numVisits);