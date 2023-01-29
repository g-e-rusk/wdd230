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