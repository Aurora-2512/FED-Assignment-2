const listings = [
    { image: "image/smartphone.jpeg", alt: "Electronics", title: "Samsung Galaxy A52", price: "$250" },
    { image: "https://via.placeholder.com/150", alt: "Home & Garden", title: "Garden Tools", price: "$50" },
    { image: "https://via.placeholder.com/150", alt: "Fashion", title: "Designer Jacket", price: "$100" },
    { image: "https://via.placeholder.com/150", alt: "Vehicles", title: "Bicycle", price: "$200" },
    { image: "https://via.placeholder.com/150", alt: "Vehicles", title: "Bicycle", price: "$200" },
];

const featuredListingsContainer = document.getElementById("featuredListings");

listings.forEach(listing => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
        <div class="card">
            <img src="${listing.image}" class="card-img-top" alt="${listing.alt}">
            <div class="card-body">
                <h5 class="card-title">${listing.title}</h5>
                <p class="card-text">${listing.price}</p>
            </div>
        </div>
    `;
    featuredListingsContainer.appendChild(col);
});




