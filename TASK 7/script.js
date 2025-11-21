
window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("gallery").classList.remove("hidden");
    }, 2000);
};
