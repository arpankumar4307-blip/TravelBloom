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
    else if (input.includes("country")) places = data.country;
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
