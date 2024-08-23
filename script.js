let slider = document.querySelector(".slider");
let checked = false;
slider.addEventListener("click", () => {
    if (!checked) {
        document.querySelectorAll("#price").forEach(e => {
            let totalAmount = (e.innerHTML * 12) * 0.75;
            e.innerHTML = totalAmount;
        });
        document.querySelectorAll("#month").forEach(e => {
            e.innerHTML = "year"
        })
        checked = true;
    } else {
        if (checked) {
            document.querySelectorAll("#price").forEach(e => {
                let totalAmount = (e.innerHTML / 12) / 0.75;
                e.innerHTML = totalAmount;
            })
        } document.querySelectorAll("#month").forEach(e => {
            e.innerHTML = "month"
        })
        checked = false;
    }
})