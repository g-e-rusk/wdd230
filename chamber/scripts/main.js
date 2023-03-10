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


const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 50px 0px'
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver ((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imageOptions);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
