
        let limit = 100;

        text.addEventListener("input", function () {

            if (text.value.length > limit) {
                text.value = text.value.substring(0, limit); 
            }

            let remaining = limit - text.value.length;
            count.textContent = "Characters left: " + remaining;

            if (remaining > 60) {
                count.style.color = "green";
            }
            else if (remaining > 30) {
                count.style.color = "orange";
            }
            else {
                count.style.color = "red";
            }
        });
