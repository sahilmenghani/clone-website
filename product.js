let scrollY = 0;
const cartBtn = document.querySelector(".cart-btn");
const buyBtn = document.querySelector(".buy-btn");
const sizes = document.querySelectorAll(".size");

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

const products = [
    {
        id: 1,
        name: "Top Fragger Acid Wash T shirt",
        price: 899,
        stock: 10, // 👈 0 = out of stock
        images: [
            "images/acid/acid_1.jpg",
            "images/acid/acid_2.jpg",
            "images/acid/acid_3.jpg",
            "images/acid/close img.JPG"
        ]
    },
    {
        id: 2,
        name: "Clutch Master Oversized Tshirt",
        price: 599,
        stock: 10,
        images: [
            "images/green/green1.jpg",
            "images/green/green_2.jpg",
            "images/green/green_1_close.jpg"
        ]
    },
    {
        id: 3,
        name: "Oversized Box Fit Shirt-Brown",
        price: 999,
        stock: 10,
        images: [
            "images/brown/brown2.jpg",
            "images/brown/brown1.jpg",
            "images/brown/brown_1_close.jpg"
        ]
    },
    {
        id: 4,
        name: "GGEZ Oversized Black Tshirt",
        price: 599,
        stock: 10,
        images: [
            "images/GGEZ/ggez_1.jpg",
            "images/GGEZ/ggez2.jpg",
            "images/GGEZ/ggez3.jpg",
            "images/GGEZ/ggez_close_2.jpg"
        ]
    },
    {
        id: 5,
        name: "Oversized Box Fit Shirt-Brown",
        price: 999,
        stock: 10,
        images: [
            "images/brown-shirt/1_d927e8b8-29c3-4791-8571-580e9f21e9b9.jpg",
            "images/brown-shirt/UniversalUpscaler_82ff40ef-bbfc-4bc8-8b88-d6202401f365.jpg",
            "images/brown-shirt/2_48c3fea0-056f-48c5-8b5a-e6bf37e474e5.jpg",
            "images/brown-shirt/box_type_size_d8ff288c-fbca-4b0a-b7cd-8edb131a3e16.jpg"
        ]
    },
    {
        id: 6,
        name: "AltF4 Oversized Tshirt-Navy  Blue",
        price: 999,
        stock: 10,
        images: [
            "images/navy-blue/2.jpg",
            "images/navy-blue/3.jpg",
            "images/navy-blue/4.jpg"
        ]
    },
    {
        id: 7,
        name: "GOATED Sweatpants",
        price: 899,
        stock: 10,
        images: [
            "images/goat/23.jpg",
            "images/goat/1_1c851f70-491f-4f5c-bcfc-c42f84fc7859.jpg",
            "images/goat/12_f0e280e0-2036-44f7-9c6f-d82bc0d25ea9.jpg",
            "images/goat/pant_size.jpg"
        ]
    },
    {
        id: 8,
        name: "Headshot Oversized Tshirt-Grey",
        price: 899,
        stock: 10,
        images: [
            "images/headshot/12.jpg",
            "images/headshot/13.jpg",
            "images/headshot/11.jpg",
            "images/headshot/viper_79.jpg"
        ]
    },
    {
        id: 9,
        name: "One More Game Sweatpants",
        price: 699,
        stock: 10,
        images: [
            "images/one more/7.jpg",
            "images/one more/8.jpg",
            "images/one more/6.jpg",
            "images/one more/pant_size.jpg"
        ]
    },
    {
        id: 10,
        name: "Viper Puffed Oversized Tshirt (Limited Edition)",
        price: 899,
        stock: 10,
        images: [
            "images/viper/viper_4.jpg",
            "images/viper/viper_9_8bc275f0-6bbf-4bfd-8ca3-f369f575443a.jpg",
            "images/viper/viper1.jpg",
            "images/viper/viper2.jpg",
            "images/headshot/viper_79.jpg"
        ]
    },
    {
        id: 11,
        name: "Paav Gang Tshirt",
        price: 799,
        stock: 0,
        images: [
            "images/paav gang/paav_112_1.jpg",
            "images/paav gang/paav_112_3.jpg",
            "images/paav gang/paav_1111_022306f2-e95b-4d13-8812-e963308d08c1.jpg",
            "images/paav gang/paav_112.jpg",
            "images/paav gang/oversized_tshirt_chart.jpg"

        ]
    },
    {
        id: 12,
        name: "Rush B Oversized Tshirt",
        price: 799,
        stock: 0,
        images: [
            "images/rush b/lockin_front1.jpg",
            "images/rush b/lockin_back1.jpg",
            "images/rush b/lockin_back2.jpg",
            "images/rush b/lockin_front2.jpg",
            "images/rush b/lockin_front3.jpg",
            "images/rush b/oversized_tshirt_chart.jpg"
        ]
    },
    {
        id: 13,
        name: "AFK HOODIE",
        price: 1299,
        stock: 0, // 👈 0 = out of stock
        images: [
            "images/AFK HOODIE/3_7b3dc114-3a1d-4c61-8c78-067e3d58991b.jpg",
            "images/AFK HOODIE/1_0f62ae86-3000-44ae-bc80-c5e781719040.jpg",
            "images/AFK HOODIE/4_ae49eb8b-2587-481e-b55d-e5f01f052da8.jpg",
            "images/AFK HOODIE/6_3eb853b0-12ba-4404-a6ab-12696ea34515.jpg",
            "images/AFK HOODIE/hood.jpg"
        ]
    },
    {
        id: 14,
        name: "Alt F4 Sky Blue Hoodie",
        price: 1299,
        stock: 0, // 👈 0 = out of stock
        images: [
            "images/sky blue hoodie/1_b51e4fe0-b789-4e7e-8cc7-cd3894792a09.jpg",
            "images/sky blue hoodie/5_f2333b23-1bd3-41d3-9a8e-b40aecfb813a.jpg",
            "images/sky blue hoodie/4_b25eda30-f4da-4c17-8546-b3b623b34969.jpg",
            "images/sky blue hoodie/hood.jpg"
        ]
    },
    {
        id: 15,
        name: "G.O.A.T Gamer Sweatshirt Blue - PRE ORDER | Limited Edition",
        price: 1499,
        images: [
            "images/goatie/goatimerch1.jpg",
            "images/goatie/goatimerch11.jpg",
            "images/goatie/goatimerch111.jpg",
            "images/goatie/goati_merch_11111.jpg",
            "images/goatie/oversized_sweatshirt_chart.jpg"
        ]
    },
    {
        id: 16,
        name: "GG - Black Double Zipper",
        price: 1499,
        images: [
            "images/zipper/1_7578b4e9-81bc-437d-bca3-71362fde6f5c.jpg",
            "images/zipper/5_1cde6b99-e94e-4196-a594-717ea96f899f.jpg",
            "images/zipper/2_79fbc5bc-d77f-4aa1-bb08-b316e39b4629.jpg",
            "images/zipper/7_ee8c5b55-7899-46db-ad02-870edd96bff4.jpg",
            "images/zipper/hood (1).jpg"
        ]
    },
    {
        id: 17,
        name: "Speed Run - Beige Hoodie",
        price: 1299,
        images: [
            "images/speed run/1_7f2eb942-d43e-425b-9c26-8b545c06fcbf.jpg",
            "images/speed run/2_fe6fef41-e142-4004-89ef-d289447250b8.jpg",
            "images/speed run/4_df3070d2-43f6-4cc3-904f-4fb89e91ffdf.jpg",
            "images/speed run/hood (1).jpg"
        ]
    },
    {
        id: 18,
        name: "Legend Acid Wash Hoodie",
        price: 1499,
        stock:0,
        images: [
            "images/acid wash/1.jpg",
            "images/acid wash/5_33e22a3a-3d89-43a4-90fd-51b36d00a7e2 (1).jpg",
            "images/acid wash/4_abbab2f9-e9e8-43e2-aeaa-e2158225eddc.jpg",
            "images/acid wash/hood.jpg"
        ]
    },
    {
        id: 19,
        name: "WASD White Hoodie",
        price: 1299,
        images: [
            "images/wasd/1_12b83826-259d-46ae-ad97-6b397ace2e04.jpg",
            "images/wasd/3_a093b622-a86a-4eba-9726-baccf574a0df.jpg",
            "images/wasd/4_bd2c1ef9-5e3f-40fa-be36-c87cc1f9973b.jpg",
            "images/wasd/hood.jpg"
        ]
    },
    {
        id: 20,
        name: "G.O.A.T Gamer Sweatshirt Black",
        price: 1499,
        images: [
            "images/goatgg/goatimerch.jpg",
            "images/goatgg/goati_merch_222.jpg",
            "images/goatgg/goati_merch_2222.jpg",
            "images/goatgg/oversized_sweatshirt_chart.jpg"
        ]
    }
];

let productData = products.find(p => p.id === productId);

// ✅ fallback (important)
if (!productData) {
    productData = products[0];
}

// NAME
document.querySelector(".product-info h1").innerText = productData.name;

// PRICE
document.querySelector(".price").innerText = "Rs. " + productData.price;

// MAIN IMAGE
const productImagesContainer = document.querySelector(".product-images");

productImagesContainer.innerHTML = "";

productData.images.forEach((img, index) => {
    productImagesContainer.innerHTML += `
<div class="img-box">
    <img src="${img}" onclick="openGallery(${index})">
    <div class="zoom-icon">
        <i class="fa-solid fa-magnifying-glass-plus"></i>
    </div>
</div>`;
});
document.querySelectorAll(".img-box").forEach((box, index) => {
    if (productData.images[index]) {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
});
const galleryContainer = document.getElementById("galleryContainer");

galleryContainer.innerHTML = "";

productData.images.forEach(img => {
    galleryContainer.innerHTML += `<img src="${img}">`;
});
/* ========================
GLOBAL STATE
======================== */
let qty = 1;
let selectedSize = "S";



/* ========================
QUANTITY
======================== */
function inc() {
    qty++;
    document.getElementById("qty").innerText = qty;
}

function dec() {
    if (qty > 1) {
        qty--;
        document.getElementById("qty").innerText = qty;
    }
}

/* ========================
GALLERY
======================== */
const gallery = document.getElementById("gallery");




function openGallery(index) {
    gallery.style.display = "block";

    const images = galleryContainer.querySelectorAll("img");

    if (images[index]) {
        images[index].scrollIntoView({
            behavior: "instant",
            block: "start"
        });
    }
}
function closeGallery() {
    gallery.style.display = "none";
    gallery.scrollTop = 0; // reset scroll
}
function loadRecommended() {
    const grid = document.getElementById("recommendGrid");

    // copy products & remove current product
    let otherProducts = products.filter(p => p.id !== productData.id);

    // shuffle (random order)
    otherProducts.sort(() => 0.5 - Math.random());

    // pick first 4 random products
    let selected = otherProducts.slice(0, 4);

    grid.innerHTML = "";

    selected.forEach(p => {
        grid.innerHTML += `
<div class="product">
    <div class="product-img">
        <img src="${p.images[0]}" class="img1">
        <a href="product.html?id=${p.id}">
            <img src="${p.images[1] || p.images[0]}" class="img2">
        </a>
    </div>
    <a href="product.html?id=${p.id}">${p.name}</a>
    <p class="price">Rs. ${p.price}</p>
</div>
`;
    });
}
/* ========================
ADD TO CART
======================== */
function applyStockUI() {
const cartBtn = document.querySelector(".cart-btn");
const buyBtn = document.querySelector(".buy-btn");
const sizes = document.querySelectorAll(".size");

if (productData.stock === 0) {

// 🔴 Disable Add to Cart
cartBtn.innerText = "Out of Stock";
cartBtn.style.background = "#ccc";
cartBtn.style.color = "#000";
cartBtn.style.border = "3px solid black"; // 👈 FIXED
cartBtn.style.cursor = "not-allowed";
cartBtn.disabled = true;

// 🔴 Disable Buy Now
buyBtn.innerText = "Buy Now";
buyBtn.style.background = "#ccc";
buyBtn.style.color = "#000";
cartBtn.style.border = "3px solid #ccc"; // 👈 FIXED
buyBtn.style.cursor = "not-allowed";
buyBtn.disabled = true;

// 🔴 Strike all sizes
sizes.forEach(size => {
    size.classList.add("disabled");
});

selectedSize = null;
}
}
sizes.forEach(size => {
size.addEventListener("click", () => {

if (productData.stock === 0) return; // block if out of stock

sizes.forEach(s => s.classList.remove("active"));
size.classList.add("active");

selectedSize = size.innerText;
});
});
function addToCart() {

if (!selectedSize) {
alert("Please select a size");
return;
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const product = {
id: productData.id,
name: productData.name,
image: productData.images[0],
size: selectedSize,
qty: qty,
price: productData.price
};

let existing = cart.find(item =>
item.id === product.id && item.size === product.size
);

if (existing) {
existing.qty += qty;
} else {
cart.push(product);
}

localStorage.setItem("cart", JSON.stringify(cart));

showPopup(product, cart.length);
}



function showPopup(product, count) {

    document.getElementById("popupImg").src = product.image;
    document.getElementById("popupName").innerText = product.name;
    document.getElementById("popupSize").innerText = "Size: " + product.size;

    document.getElementById("viewCartBtn").innerText =
        "View cart (" + count + ")";

    document.getElementById("cartPopup").classList.add("active");
}
/* ========================
CART DISPLAY
======================== */
function displayCart() {

    const container = document.getElementById("cartItems");
    if (!container) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    container.innerHTML = "";

    cart.forEach((item, index) => {

        container.innerHTML += `
<div class="cart-item">
    <img src="${item.image}" width="60">
    <p>${item.name}</p>
    <p>Size: ${item.size}</p>
    <p>Qty: ${item.qty}</p>
    <button onclick="removeItem(${index})">Remove</button>
</div>
`;
    });
}
/* ========================
      REMOVE ITEM
      ======================== */
function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart(); // refresh UI
}



function closePopup() {
    document.getElementById("cartPopup").classList.remove("active");
}

/* click outside popup */
document.getElementById("cartPopup").addEventListener("click", function (e) {
    if (e.target.id === "cartPopup") closePopup();
});

/* ========================
SHARE
======================== */
function shareProduct() {
    if (navigator.share) {
        navigator.share({
            title: "ALTF4 Product",
            text: "Check out this product",
            url: window.location.href
        });
    } else {
        alert("Sharing not supported");
    }
}
let scrollPosition = 0;

function toggleMenu() {
const menu = document.getElementById("menuOverlay");
const icon = document.getElementById("menuIcon");
const deliveryBar = document.querySelector(".Delivery-bar");

const isOpen = menu.classList.contains("active");

if (!isOpen) {
scrollY = window.scrollY;

document.body.classList.add("no-scroll");
document.body.style.top = `-${scrollY}px`;

menu.classList.add("active");
icon.classList.replace("fa-bars", "fa-xmark");
deliveryBar.style.display = "none";

} else {
menu.classList.remove("active");
icon.classList.replace("fa-xmark", "fa-bars");
deliveryBar.style.display = "flex";

document.body.classList.remove("no-scroll");
document.body.style.top = "";

window.scrollTo(0, scrollY);
}
}
/* ========================
INIT
======================== */
window.onload = () => {
displayCart();
loadRecommended();
applyStockUI(); // 👈 ADD THIS
};
setTimeout(() => {
    closePopup();
}, 10000);
const slider = document.getElementById("slider");
const dotsContainer = document.getElementById("dots");

function createDots() {
    dotsContainer.innerHTML = "";
    productData.images.forEach((_, i) => {
        dotsContainer.innerHTML += `<span ${i === 0 ? 'class="active"' : ''}></span>`;
    });
}

function updateDots() {
    const index = Math.round(slider.scrollLeft / slider.clientWidth);
    document.querySelectorAll("#dots span").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}
createDots();
    slider.addEventListener("scroll", updateDots);
    
// =========================
// SEARCH OVERLAY OPEN/CLOSE
// =========================
function openSearch() {
scrollY = window.scrollY;

document.body.classList.add("no-scroll");
document.body.style.top = `-${scrollY}px`;

document.getElementById("searchOverlay").classList.add("active");
document.getElementById("searchInput").focus();
}

function closeSearch(e) {
if (!e || e.target.id === "searchOverlay") {

document.getElementById("searchOverlay").classList.remove("active");

document.body.classList.remove("no-scroll");
document.body.style.top = "";

window.scrollTo(0, scrollY); // restore position

const input = document.getElementById("searchInput");
const results = document.getElementById("resultsContainer");

input.value = "";
results.innerHTML = "";
results.style.display = "none";
}
}

// =========================
// SEARCH DATA
// =========================
const searchProducts = [
    {
        name: "Top Fragger Acid Wash T shirt",
        image: "/images/acid/acid_1.jpg",
        link: "product.html?id=1"
    },
    {
        name: "Clutch Master Oversized Tshirt",
        image: "/images/green/green1.jpg",
        link: "product.html?id=2"
    },
    {
        name: "Alt F4 Oversized Tshirt Brown",
        image: "/images/brown/brown2.jpg",
        link: "product.html?id=3"
    },
    {
        name: "GGEZ Oversized Black Tshirt",
        image: "/images/GGEZ/ggez_1.jpg",
        link: "product.html?id=4"
    },
    {
        name: "Oversized Box Fit Shirt-Brown",
        image: "/images/brown-shirt/1_d927e8b8-29c3-4791-8571-580e9f21e9b9.jpg",
        link: "product.html?id=5"
    },
    {
        name: "AltF4 Oversized Tshirt-Navy Blue",
        image: "/images/navy-blue/3.jpg",
        link: "product.html?id=6"
    },
    {
        name: "GOATED Sweatpants",
        image: "/images/goat/1_1c851f70-491f-4f5c-bcfc-c42f84fc7859.jpg",
        link: "product.html?id=7"
    },
    {
        name: "HeadShot Oversized Tshirt-Grey",
        image: "/images/headshot/13.jpg",
        link: "product.html?id=8"
    },
    {
        name: "One More Game Sweatpants",
        image: "/images/one more/6.jpg",
        link: "product.html?id=9"
    },
    {
        name: "Viper Puffed Oversized Tshirt (Limited Edition)",
        image: "/images/viper/viper1.jpg",
        link: "product.html?id=10"
    },
    {
        name: "Paav Gang Tshirt",
        image: "/images/paav gang/paav_112_1.jpg",
        link: "product.html?id=11"
    },
    {
        name: "Rush B Oversized Tshirt",
        image: "/images/rush b/lockin_back1.jpg",
        link: "product.html?id=12"
    },
    {
        name: "AFK HOODIE",
        image: "/images/AFK HOODIE/1_0f62ae86-3000-44ae-bc80-c5e781719040.jpg",
        link: "product.html?id=13"
    },
    {
        name: "Alt F4 Sky Blue Hoodie",
        image: "/images/sky blue hoodie/1_b51e4fe0-b789-4e7e-8cc7-cd3894792a09.jpg",
        link: "product.html?id=14"
    },
    {
        name: "GOAT Gamer Sweatshirt Blue - PRE ORDER | Limited Edition",
        image: "/images/goatie/goatimerch11.jpg",
        link: "product.html?id=15"
    },
    {
        name: "GG - Black Double Zipper",
        image: "/images/zipper/1_7578b4e9-81bc-437d-bca3-71362fde6f5c.jpg",
        link: "product.html?id=16"
    },
    {
        name: "Speed Run - Beige Hoodie",
        image: "/images/speed run/2_fe6fef41-e142-4004-89ef-d289447250b8.jpg",
        link: "product.html?id=17"
    },
    {
        name: "Legend Acid Wash Hoodie",
        image: "/images/acid wash/1.jpg",
        link: "product.html?id=18"
    },
    {
        name: "WASD White Hoodie",
        image: "/images/wasd/1_12b83826-259d-46ae-ad97-6b397ace2e04.jpg",
        link: "product.html?id=19"
    },
    {
        name: "GOAT Gamer Sweatshirt Black",
        image: "/images/goatgg/goati_merch_2222.jpg",
        link: "product.html?id=20"
    }
];

// =========================
// INIT (RUN AFTER PAGE LOAD)
// =========================
document.addEventListener("DOMContentLoaded", () => {

    // =====================
    // SEARCH FUNCTIONALITY
    // =====================
    const input = document.getElementById("searchInput");
    const results = document.getElementById("resultsContainer");

    if (input && results) {
        input.addEventListener("input", function () {
            const value = this.value.toLowerCase().trim();

            results.innerHTML = "";

            if (!value) {
                results.style.display = "none";
                return;
            }

            const filtered = searchProducts.filter(product =>
                product.name.toLowerCase().includes(value)
            );

            results.style.display = "block";

            if (filtered.length === 0) {
                results.innerHTML = `<p style="color:#888;padding:10px;">No products found</p>`;
                return;
            }

            filtered.forEach(product => {
                const item = document.createElement("div");
                item.className = "product-item";

                item.innerHTML = `
                    <img src="${product.image}" alt="">
                    <span>${product.name}</span>
                `;

                item.onclick = () => {
                    window.location.href = product.link;
                };

                results.appendChild(item);
            });
        });
    }

    // =====================
    // FILTER SAFETY (ONLY IF EXISTS)
    // =====================
    const availabilityChecks = document.querySelectorAll(".availability-check");

    availabilityChecks.forEach(cb => {
        cb.addEventListener("change", () => {
            updateSelectedCount();
            applyFilters();
        });
    });

});

// =========================
// FILTER FUNCTIONS (SAFE)
// =========================
function applyFilters() {
    const products = document.querySelectorAll(".product");
    if (!products.length) return;

    const min = parseInt(document.getElementById("minPriceDesktop")?.value) || 0;
    const max = parseInt(document.getElementById("maxPriceDesktop")?.value) || Infinity;

    const selectedStock = Array.from(document.querySelectorAll(".availability-check:checked"))
        .map(cb => cb.value);

    products.forEach(product => {
        const price = parseInt(product.dataset.price);
        const stock = product.dataset.stock;

        let show = true;

        if (price < min || price > max) show = false;
        if (selectedStock.length && !selectedStock.includes(stock)) show = false;

        product.style.display = show ? "" : "none";
    });

    updateProductCount();
}

function updateProductCount() {
    const countEl = document.getElementById("productCount");
    const products = document.querySelectorAll(".product:not([style*='display: none'])");

    if (countEl) {
        countEl.innerText = products.length + " products";
    }
}

function updateSelectedCount() {
    const count = document.querySelectorAll(".availability-check:checked").length;
    const el = document.getElementById("selectedCount");

    if (el) {
        el.innerText = count + " selected";
    }
}
// =========================
// REVIEW SYSTEM (FIXED)
// =========================
let activeStarFilter = 0; // 0 = show all
// use SAME productId from top (DON'T redeclare)
let reviewProductId = productId; // reuse existing

// get storage
let allReviews = JSON.parse(localStorage.getItem("allReviews")) || {};

// create bucket
if (!allReviews[reviewProductId]) {
    allReviews[reviewProductId] = [];
}

let reviews = allReviews[reviewProductId];

// popup
function openReview() {
    document.getElementById("reviewFormBox").classList.add("active");
    document.getElementById("reviewFormBox").scrollIntoView({
        behavior: "smooth"
    });
}

function closeReview() {
    document.getElementById("reviewFormBox").classList.remove("active");
}

// submit
function submitReview() {
    
    let name = document.getElementById("name").value.trim();
    let text = document.getElementById("message").value.trim();
    let title = document.getElementById("reviewTitle").value.trim();
    let email = document.getElementById("email").value.trim();

if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address");
    return;
}
    let rating = selectedRating;

    // 🚨 VALIDATION
    if (!rating) {
        document.getElementById("formStars").style.border = "1px solid red";
        alert("Please select a rating");
        return;
    }

    if (!title) {
        alert("Review title is required");
        return;
    }

    if (!text) {
        alert("Review content is required");
        return;
    }

    if (!name) {
        alert("Display name is required");
        return;
    }

    if (!email) {
        alert("Email is required");
        return;
    }

    // ✅ CREATE REVIEW
    let review = {
        name,
        title,
        rating,
        text,
        email,
        date: new Date().toLocaleDateString(),
        verified: true,
        image: uploadedImage
    };

    reviews.unshift(review);
    console.log("Popup triggered");
    allReviews[reviewProductId] = reviews;
    localStorage.setItem("allReviews", JSON.stringify(allReviews));
    renderReviews();
    closeReview();

    document.getElementById("reviewSuccess").classList.add("active");

// optional: scroll to it
document.getElementById("reviewSuccess").scrollIntoView({
    behavior: "smooth"
});
renderReviews();
updateReviewStats();
}
let selectedRating = 0; // ❌ was 5

// STAR CLICK SYSTEM
document.querySelectorAll("#formStars span").forEach(star => {
    star.addEventListener("click", () => {
        selectedRating = parseInt(star.dataset.value);

        document.querySelectorAll("#formStars span").forEach(s => {
            s.textContent = s.dataset.value <= selectedRating ? "★" : "☆";
        });
    });
});
// render
function renderReviews() {
    let list = document.getElementById("reviewList");
    if (!list) return;

    list.innerHTML = "";

    let filteredReviews = activeStarFilter
        ? reviews.filter(r => r.rating === activeStarFilter)
        : reviews;

    filteredReviews.forEach(r => {

        let stars = "★".repeat(r.rating) + "☆".repeat(5 - r.rating);

        list.innerHTML += `
        <div class="review-card">

            <div class="review-top">
                <div class="review-stars">${stars}</div>
                <div class="review-date">${r.date}</div>
            </div>

            <div class="review-user">
                <div class="review-user-icon">
                    <i class="fa-regular fa-user"></i>
                </div>

                <div class="user-info">
                    <span class="name">${r.name}</span>
                    ${r.verified ? `<span class="verified">Verified</span>` : ""}
                </div>
            </div>

            <h3 class="review-title">${r.title || "Review"}</h3>

            <p class="review-text">${r.text}</p>

            ${r.image ? `<img src="${r.image}" class="review-img">` : ""}
        </div>
        `;
    });
}
function filterByStars(star) {

    // toggle filter
    if (activeStarFilter === star) {
        activeStarFilter = 0; // reset
    } else {
        activeStarFilter = star;
    }

    // remove active from all
    document.querySelectorAll(".bar").forEach(bar => {
        bar.classList.remove("active");
    });

    // highlight clicked
    if (activeStarFilter) {
        document.querySelectorAll(".bar")[5 - star].classList.add("active");
    }

    renderReviews();
    updateReviewStats();

    // 🔥 SCROLL TO REVIEWS LIST
    const reviewList = document.getElementById("reviewList");

    if (reviewList) {
        setTimeout(() => {
            reviewList.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100); // slight delay so DOM updates first
    }
}
// init
renderReviews();
// ======================
// CALCULATE REVIEW STATS
// ======================

let total = reviews.length;

let starCount = [0, 0, 0, 0, 0]; // 1⭐ → 5⭐

// count ratings
reviews.forEach(r => {
    starCount[r.rating - 1]++;
});

// average
let avg = 0;
if (total > 0) {
    let sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    avg = (sum / total).toFixed(2);
}
function updateReviewStats() {

    let total = reviews.length;

    let starCount = [0, 0, 0, 0, 0]; // index 0 = 1⭐

    reviews.forEach(r => {
        starCount[r.rating - 1]++;
    });

    let avg = 0;
    if (total > 0) {
        let sum = reviews.reduce((acc, r) => acc + r.rating, 0);
        avg = (sum / total).toFixed(1);
    }

    document.getElementById("avgRating").innerText = avg;
    document.getElementById("totalReviews").innerText = total;

    document.getElementById("avgStars").innerText =
        "★".repeat(Math.round(avg)) + "☆".repeat(5 - Math.round(avg));

    // ✅ IMPORTANT PART
    for (let i = 1; i <= 5; i++) {
        let count = starCount[i - 1];

        document.getElementById("count" + i).innerText = count;

        let percent = total ? (count / total) * 100 : 0;
        document.getElementById("bar" + i).style.width = percent + "%";
    }
}
renderReviews();
updateReviewStats();
let uploadedImage = "";

document.getElementById("reviewImage").addEventListener("change", function () {
    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        uploadedImage = e.target.result;

        const preview = document.getElementById("imagePreview");
        preview.src = uploadedImage;
        preview.style.display = "block";
    };

    reader.readAsDataURL(file);
});

function toggleSortDropdown() {
    const dropdown = document.getElementById("sortDropdown");
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
}

function selectSort(type) {
    document.getElementById("selectedSort").innerText = type;
    document.getElementById("sortDropdown").style.display = "none";

    sortReviews(type);
}
function sortReviews(type) {

    if (type === "Most Recent") {
        reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    if (type === "Highest Rating") {
        reviews.sort((a, b) => b.rating - a.rating);
    }

    if (type === "Lowest Rating") {
        reviews.sort((a, b) => a.rating - b.rating);
    }

    renderReviews(); // your existing function
}