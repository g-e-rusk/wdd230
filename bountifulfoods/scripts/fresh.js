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
    //console.table(data);
    data.forEach(fruit => {
        fruit1.insertAdjacentHTML('beforeend', `<option value="fruit.name">${fruit.name}</option>`);
        fruit2.insertAdjacentHTML('beforeend', `<option value="fruit.name">${fruit.name}</option>`);
        fruit3.insertAdjacentHTML('beforeend', `<option value="fruit.name">${fruit.name}</option>`);
    });
}
getFruitData();


function orderFunction() {
    const fname = document.getElementById("orderForm").elements[1].value;
    document.getElementById("order_fname").innerText = fname;

    const email = document.getElementById("orderForm").elements[3].value;
    document.getElementById("order_email").innerText = email;

    const cellphone = document.getElementById("orderForm").elements[4].value;
    document.getElementById("order_phone").innerText = cellphone;

    const store = document.querySelector("#locations");
    const storeLocation = store.options[store.selectedIndex].getAttribute('value');
    document.getElementById("order_store").textContent = storeLocation;

    const choice1 = document.querySelector("#fruit1");
    const fruitChoice1 = choice1.options[choice1.selectedIndex].getAttribute('value');
    document.getElementById("order_fruit1").innerText = fruitChoice1;

    const choice2 = document.querySelector("#fruit2");
    const fruitChoice2 = choice2.options[choice2.selectedIndex].getAttribute('value');
    document.getElementById("order_fruit2").innerText = fruitChoice2;

    const choice3 = document.querySelector("#fruit3");
    const fruitChoice3 = choice3.options[choice3.selectedIndex].getAttribute('value');
    document.getElementById("order_fruit3").innerText = fruitChoice3;

    const instruct = document.getElementById("orderInstructions").value;
    document.getElementById("order_instruct").innerText = instruct;
}
