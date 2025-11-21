
    const images = [
        "https://picsum.photos/id/1015/400/250",
        "https://picsum.photos/id/1025/400/250",
        "https://picsum.photos/id/1035/400/250",
        "https://picsum.photos/id/1045/400/250",
        "https://picsum.photos/id/1055/400/250"
    ];

    let index = 0;
    const slide = document.getElementById("slide");

    function showNext() {
        index = (index + 1) % images.length;
        slide.src = images[index];
    }

    function showPrev() {
        index = (index - 1 + images.length) % images.length;
        slide.src = images[index];
    }
    document.getElementById("next").addEventListener("click", showNext);
    document.getElementById("prev").addEventListener("click", showPrev);

    let autoSlide = setInterval(showNext, 3000);

    const carousel = document.getElementById("carousel");

    carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
    carousel.addEventListener("mouseleave", () => {
        autoSlide = setInterval(showNext, 3000);
    });