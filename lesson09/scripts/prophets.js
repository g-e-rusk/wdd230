const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards");

    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let portrait = document.createElement("img");

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        let orderSuffix = "";
        if (prophet.order != 1 && prophet.order != 2 && prophet.order != 3) {
            orderSuffix = "th";
        } 
        if (prophet.order == 1) {
            orderSuffix = "st";
        }
        if (prophet.order == 2) {
            orderSuffix = "nd";
        }
        if (prophet.order == 3) {
            orderSuffix = "rd";
        }
        h3.textContent = `${prophet.order}${orderSuffix} Prophet of the Restoration`;

        p1.textContent = `Date of Birth: ${prophet.birthdate}`;
        p2.textContent = `Place of Birth: ${prophet.birthplace}`;
        p3.textContent = `Date of Death: ${prophet.death}`;
        
        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${orderSuffix} Prophet of the Restoration`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}