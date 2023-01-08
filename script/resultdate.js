const year = document.querySelector('#currentyear');
year.textContent = `${new Date().getFullYear()}`;

const oLastModif = new Date(document.lastModified);
document.getElementById("resultdate").innerHTML = oLastModif

