const date = now.getDay();
if (date == 1 || date == 2) {
    document.querySelector(".banner").style.display = "block";
}else {
    document.querySelector(".banner").style.display = "none";
};

    document.querySelector(".banner-close").addEventListener("click", function() {
        this.closest(".banner").style.display = "none";
});
