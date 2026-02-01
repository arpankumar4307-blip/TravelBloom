const destinations = [
    { name: "Paris", description: "The city of lights and love." },
    { name: "Tokyo", description: "A blend of tradition and futuristic life." },
    { name: "New York", description: "The city that never sleeps." },
    { name: "Bali", description: "Tropical paradise with beautiful beaches." }
];

function searchDestination() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    const matches = destinations.filter(dest => 
        dest.name.toLowerCase().includes(input)
    );

    if (matches.length === 0) {
        resultsDiv.innerHTML = "<p>No destinations found.</p>";
        return;
    }

    matches.forEach(dest => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${dest.name}</h3><p>${dest.description}</p>`;
        resultsDiv.appendChild(div);
    });
}

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

function searchPlaces() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");
    results.innerHTML = "";

    let places = [];

    if (input.includes("beach")) places = data.beach;
    else if (input.includes("temple")) places = data.temple;
    else if (input.includes("country")) {
    const countryName = prompt("Enter a country name:");
    if (countryName) fetchCountry(countryName);
    return;
}
    else {
        results.innerHTML = "<h3>No recommendations found. Try beach, temple, or country.</h3>";
        return;
    }

    places.forEach(place => {
        results.innerHTML += `
            <div class="card">
                <img src="${place.img}" alt="${place.name}">
                <h3>${place.name}</h3>
            </div>
        `;
    });
}
// 🔍 Search Suggestions
const keywords = ["beach", "temple", "country"];

function showSuggestions() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const box = document.getElementById("suggestions");
    box.innerHTML = "";

    if (!input) return;

    const filtered = keywords.filter(k => k.includes(input));

    filtered.forEach(word => {
        const div = document.createElement("div");
        div.textContent = word;
        div.onclick = () => {
            document.getElementById("searchInput").value = word;
            box.innerHTML = "";
        };
        box.appendChild(div);
    });
}

// 🧳 Booking Popup
function openBooking() {
    document.getElementById("bookingModal").style.display = "block";
}

function closeBooking() {
    document.getElementById("bookingModal").style.display = "none";
}

// Close modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById("bookingModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
// 🌄 Hero Image Slider
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);
// 🌎 Fetch Country Info
async function fetchCountry(countryName) {
    const results = document.getElementById("results");
    results.innerHTML = "<p>Loading country info...</p>";

    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const data = await res.json();

        const country = data[0];

        results.innerHTML = `
            <div class="card">
                <img src="${country.flags.png}" alt="flag">
                <h3>${country.name.common}</h3>
                <p><strong>Capital:</strong> ${country.capital}</p>
                <p><strong>Region:</strong> ${country.region}</p>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            </div>
        `;
    } catch {
        results.innerHTML = "<p>Country not found.</p>";
    }
}
