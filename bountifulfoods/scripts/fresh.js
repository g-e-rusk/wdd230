function toggleMenu() {
    document.querySelector("#nav").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}

const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;


const year = document.querySelector('#currentyear');
year.textContent = `${new Date().getFullYear()}`;

document.querySelector("#date").textContent = document.lastModified;

const url = "data/fruitdata.json";
const fruit1 = document.querySelector("#fruit1");
const fruit2 = document.querySelector("#fruit2");
const fruit3 = document.querySelector("#fruit3");

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    data.forEach(fruit => {
        fruit1.insertAdjacentHTML('beforeend', `<option value="fruit1.name">${fruit.name}</option>`);
        fruit2.insertAdjacentHTML('beforeend', `<option value="fruit1.name">${fruit.name}</option>`);
        fruit3.insertAdjacentHTML('beforeend', `<option value="fruit1.name">${fruit.name}</option>`);
    });
}
getFruitData();



//document.querySelector("form.submitBtn").addEventListener("click", orderFunction);

const orderFunction = () => {
    const order = document.querySelector("#orderinfo");

        const fname = document.querySelector("fname").value;
        const email = document.querySelector("email").value;
        const cellphone = document.querySelector("phone").value;
        const location = document.querySelector("#locations").value;
        const choice1 = document.querySelector("#fruit1").value;
        const choice2 = document.querySelector("#fruit2").value;
        const choice3 = document.querySelector("#fruit3").value;
        const instruct = document.querySelector("#order").value;
        const dateSubmit = document.querySelector("#formSubmit");
        console.log(fname);

        // let card = document.createElement("section");
        // let h3 = document.createElement("h3");
        // let h4 = document.createElement("h4");
        // let p1 = document.createElement("p");
        // let p2 = document.createElement("p");
        // let p3 = document.createElement("p");
        // let p4 = document.createElement("p");
        // let p5 = document.createElement("p");
        // let p6 = document.createElement("p");
        // let p7 = document.createElement("p");
        // let p8 = document.createElement("p");
        // let p9 = document.createElement("p");
        // let p10 = document.createElement("p");
        // let p11 = document.createElement("p");
        // let p12 = document.createElement("p");


        // h3.textContent = `Order Summary:`;
        // p1.textContent = `${fname}`;
        // p2.textContent = `${email}`;
        // p3.textContent = `${cellphone}`;
        // p4.textContent = `Pickup Location: ${location}`;
        // p5.textContent = `Fruit Choices: ${choice1}, ${choice2}, ${choice3}`;
        // p6.textContent = `Special Instructions: ${instruct}`;


        // h4.textContent = `Nutrition Information:`;
        // p7.textContent = `Calories: ${calories}`;
        // p8.textContent = `Fat: ${fats}`;
        // p9.textContent = `Carbohydrates: ${carbs}`;
        // p10.textContent = `Protein: ${protein}`;
        // p11.textContent = `Sugar: ${sugar}`;

        // p12.textContent = `Have a BOUNTIFUL day!`;
               
        // card.appendChild(h3);
        // //card.appendChild(h4);
        // card.appendChild(p1);
        // card.appendChild(p2);
        // card.appendChild(p3);
        // card.appendChild(p4);
        // card.appendChild(p5);
        // card.appendChild(p6);
        // card.appendChild(p12);

        // order.appendChild(card);
    
};
orderFunction();


// const gridbutton = document.querySelector("#grid");
// const listbutton = document.querySelector("#list");
// const display = document.querySelector("div.cards");

// gridbutton.addEventListener("click", () => {
	
// 	display.classList.add("grid");
// 	display.classList.remove("list");
// });

// listbutton.addEventListener("click", showList); 

// function showList() {
// 	display.classList.add("list");
// 	display.classList.remove("grid");
// }