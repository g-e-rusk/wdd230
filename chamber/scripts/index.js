function toggleMenu() {
    document.querySelector("#nav").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn")
x.onclick = toggleMenu;

const datefieldUK = document.querySelector("#currentdate");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`

const date = now.getDay();
if (date == 1 || date == 2) {
    document.querySelector(".banner").style.display = "block";
}else {
    document.querySelector(".banner").style.display = "none";
};

    document.querySelector(".banner-close").addEventListener("click", function() {
        this.closest(".banner").style.display = "none";
});

const spotlightUrl = "data/data.json";

async function getBusinesses() {
    const response = await fetch(spotlightUrl);
    const data = await response.json();
    displayBusinesses(data.businesses);
}
getBusinesses();

const displayBusinesses = (businesses) => {
    const spotlight = document.querySelector("#spotlight-cards");

    const spotlights = [];

    businesses.forEach((business) => {
        if (business.membershipLevel == "Gold" || business.membershipLevel == "Non-Profit") {
            spotlights.push(business);
            console.log(spotlights)
        }
    });


        for (i = 0; i < 3; i++) {
            let randomNumber = Math.floor(Math.random() * spotlights.length)
            spotlightCard(spotlights[randomNumber]);
            spotlights.splice(randomNumber, 1);
        };

        function spotlightCard(business) {
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let h5 = document.createElement("h5");
        let p = document.createElement("p");
        let a = document.createElement("a");
        
        logo.setAttribute('src', business.businessLogo);
        logo.setAttribute('alt', `${business.businessName} contact card`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');


        h5.textContent = `${business.businessName}`;
        p.textContent = `${business.spotlightBlurb}`;
        a.textContent = `${business.businessUrl}`;
        a.href = `${business.businessUrl}`;
               
        card.appendChild(h5);
        card.appendChild(logo);
        card.appendChild(p);
        card.appendChild(a);

        spotlight.appendChild(card);
    };
};

    






const year = document.querySelector('#currentyear');
year.textContent = `${new Date().getFullYear()}`;

document.querySelector("#date").textContent = document.lastModified;
