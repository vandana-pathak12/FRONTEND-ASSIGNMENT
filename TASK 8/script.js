let imageLinks = [
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Monarch_Butterfly_resting_on_fennel,_at_the_Pismo_Butterfly_Grove,_California.jpg",
    "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
    "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
    "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
];


window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
        document.getElementById("gallery").classList.remove("hidden");
        loadImages(6);
    }, 1500);
};

function loadImages(count = 6) {
    let gallery = document.getElementById("gallery");

    for (let i = 0; i < count; i++) {
        let img = document.createElement("img");
        img.src = imageLinks[Math.floor(Math.random() * imageLinks.length)];
        gallery.appendChild(img);
    }
}

document.getElementById("loadMore").addEventListener("click", function () {
    loadImages(3);
});


