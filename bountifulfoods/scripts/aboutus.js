const year = document.querySelector('#currentyear');
year.textContent = `${new Date().getFullYear()}`;

document.querySelector("#date").textContent = document.lastModified;

function toggleMenu() {
    document.querySelector("#nav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;




function moreFunction() {
    let cont = document.querySelector("#continue");
    let readMore = document.querySelector("#readmore");
    let buttonText = document.querySelector("#contBtn");

    if (cont.style.display === "none") {
        cont.style.display = "inline";
        buttonText.innerHTML = "Read more";
        readMore.style.display = "none";
    } else {
        cont.style.display = "none";
        buttonText.innerHTML = "Read less";
        readMore.style.display = "inline";
    }
}