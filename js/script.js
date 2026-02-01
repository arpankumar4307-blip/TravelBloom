// 🌍 DATA
const data = {
    beach: [
        { name: "Maldives Beach", img: "images/beach1.jpg" },
        { name: "Bali Beach", img: "images/beach2.jpg" }
    ],
    temple: [
        { name: "Golden Temple", img: "images/temple1.jpg" },
        { name: "Angkor Wat", img: "images/temple2.jpg" }
    ],
    country: [
        { name: "Switzerland", img: "images/country1.jpg" },
        { name: "Japan", img: "images/country2.jpg" }
    ]
};



// 🔎 LIVE SEARCH WHILE TYPING
function handleSearchTyping() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const resultsBox = document.getElementById("liveResults");
    resultsBox.innerHTML = "";

    if (input.length < 2) {
        resultsBox.style.display = "none";
        return;
    }

    let matches = [];

    Object.values(data).forEach(category => {
        category.forEach(place => {
            if (place.name.toLowerCase().includes(input)) {
                matches.push(place);
            }
        });
    });

    if (matches.length === 0) {
        resultsBox.style.display = "none";
        return;
    }

    matches.forEach(place => {
        resultsBox.innerHTML += `
            <div class="live-card" onclick="fillSearch('${place.name}')">
                <img src="${place.img}" alt="${place.name}">
                <span>${place.name}</span>
            </div>
        `;
    });

    resultsBox.style.display = "block";
}



// ✏️ FILL INPUT WHEN CLICK SUGGESTION
function fillSearch(name) {
    document.getElementById("searchInput").value = name;
    document.getElementById("liveResults").style.display = "none";
}



// ❌ CLOSE RESULTS WHEN CLICK OUTSIDE
document.addEventListener("click", function(e) {
    if (!e.target.closest(".search-bar")) {
        document.getElementById("liveResults").style.display = "none";
    }
});



// 🔍 SEARCH BUTTON RESULT (BIGGER CARDS BELOW HERO)
function searchPlaces() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsBox = document.getElementById("results");
    resultsBox.innerHTML = "";

    let places = [];

    if (input.includes("beach")) places = data.beach;
    else if (input.includes("temple")) places = data.temple;
    else if (input.includes("country")) places = data.country;
    else {
        resultsBox.innerHTML = "<h3>No recommendations found.</h3>";
        return;
    }

    places.forEach(place => {
        resultsBox.innerHTML += `
            <div class="card">
                <img src="${place.img}" alt="${place.name}">
                <h3>${place.name}</h3>
            </div>
        `;
    });
}



// 🧳 BOOKING POPUP
function openBooking() {
    document.getElementById("bookingModal").style.display = "block";
}

function closeBooking() {
    document.getElementById("bookingModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("bookingModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};



// 🌄 HERO IMAGE SLIDER
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);



// 🌙 DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
