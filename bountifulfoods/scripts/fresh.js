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
        fruit1.insertAdjacentHTML('beforeend', `<option value="fruit1.name">${fruit.name}</option>`);
        fruit2.insertAdjacentHTML('beforeend', `<option value="fruit2.name">${fruit.name}</option>`);
        fruit3.insertAdjacentHTML('beforeend', `<option value="fruit3.name">${fruit.name}</option>`);
    });
}
getFruitData();

const orderList = document.querySelector("#orderinfo");
const nutritionList = document.querySelector("#nutrition");
const fname = document.getElementById("orderForm").elements[0].value;
const email = document.getElementById("orderForm").elements[2].value;
const cellphone = document.getElementById("orderForm").elements[3].value;
const store = document.getElementById("orderForm").elements[4].value;
const choice1 = document.getElementById("orderForm").elements[5].value;
const choice2 = document.getElementById("orderForm").elements[6].value;
const choice3 = document.getElementById("orderForm").elements[7].value;
const instruct = document.getElementById("orderForm").elements[8].value;

document.querySelector("#submitBtn").addEventListener('click', () => {

        let card = document.createElement("section");
        let h3 = document.createElement("h3");
        //let h4 = document.createElement("h4");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let p4 = document.createElement("p");
        let p5 = document.createElement("p");
        let p6 = document.createElement("p");
        // let p7 = document.createElement("p");
        // let p8 = document.createElement("p");
        // let p9 = document.createElement("p");
        // let p10 = document.createElement("p");
        // let p11 = document.createElement("p");
        let p12 = document.createElement("p");


        h3.textContent = `Order Summary:`;
        p1.textContent = `${fname}`;
        p2.textContent = `${email}`;
        p3.textContent = `${cellphone}`;
        p4.textContent = `Pickup Location: ${location}`;
        p5.textContent = `Fruit Choices: ${choice1}, ${choice2}, ${choice3}`;
        p6.textContent = `Special Instructions: ${instruct}`;


        // h4.textContent = `Nutrition Information:`;
        // p7.textContent = `Calories: ${calories}`;
        // p8.textContent = `Fat: ${fats}`;
        // p9.textContent = `Carbohydrates: ${carbs}`;
        // p10.textContent = `Protein: ${protein}`;
        // p11.textContent = `Sugar: ${sugar}`;

        p12.textContent = `Have a BOUNTIFUL day!`;
               
        card.appendChild(h3);
        // //card.appendChild(h4);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(p5);
        card.appendChild(p6);
        card.appendChild(p12);

        order.appendChild(card);

        // const listItem = document.createElement('li');
        // const listText = document.createElement('span');
        // const listBtn = document.createElement('button');

        // listItem.appendChild(listText);
        // listText.textContent = myItem;
        // listItem.appendChild(listBtn);
        // listBtn.innerHTML = '❌';
        // list.appendChild(listItem);

        // listBtn.addEventListener('click', () => {
        //     list.removeChild(listItem);
        // });
        // input.value = '';
        // input.focus();
        });


// const orderFunction = () => {
//     const order = document.querySelector("#orderinfo");

        
        
//         console.log(fname)
//         console.log(email)
//         console.log(cellphone)
//         console.log(location)
//         console.log(choice1)
//         console.log(choice2)
//         console.log(choice3)
//         console.log(instruct)

        
    
// }

//document.querySelector(".submitBtn").addEventListener("click", orderFunction);