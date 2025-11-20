let form = document.getElementById("myForm");
let cards = document.getElementById("cards");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let photo = document.getElementById("photo").files[0];
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let info = document.getElementById("info").value;

    if (!photo || name === "" || role === "" || info === "") {
        alert("Please fill all fields.");
        return;
    }

    let reader = new FileReader();

    reader.onload = function (event) {
        let card = document.createElement("div");
        card.classList.add("card");
        let profile = document.createElement("div");
        profile.classList.add("profile");
        let img = document.createElement("img");
        img.src = event.target.result;
        let h2 = document.createElement("h2");
        h2.textContent = name;
        let h3 = document.createElement("h3");
        h3.textContent = role;
        let p = document.createElement("p");
        p.textContent = info;

        profile.appendChild(img);
        card.appendChild(profile);
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(p);

        cards.appendChild(card);

        form.reset();
    }

    reader.readAsDataURL(photo);
});



