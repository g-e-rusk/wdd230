function toggleMenu() {
    document.querySelector("#nav").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
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


const url = "data/data.json";

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinessData(data.businesses);
}
getBusinessData();

const displayBusinessData = (businesses) => {
    const cards = document.querySelector("div.cards");

    businesses.forEach((business) => {
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let a = document.createElement("a");
        
        logo.setAttribute('src', business.businessLogo);
        logo.setAttribute('alt', `${business.businessName} contact card`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');

        h3.textContent = `${business.businessName}`;
        h4.textContent = `Contact Person: ${business.contactFName} ${business.contactLName}`;
        p1.textContent = `${business.businessStreet}`;
        p2.textContent = `${business.city}, CA ${business.zip}`;
        p3.textContent = `${business.businessPhone}`;
        a.textContent = `${business.businessUrl}`;
        a.href = `${business.businessUrl}`;
               
        card.appendChild(logo);
        card.appendChild(h3);
        card.appendChild(h4);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(a);

        cards.appendChild(card);
    })
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("div.cards");

gridbutton.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
