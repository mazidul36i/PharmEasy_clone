// let newLaunches = [
// {
//     name: ,
//     imgUrl: ,
//     mrp: ,
//     discount:
// },
// ];

let trendingProdList = [
    {
        name: "Supradyn Daily Multivitamin Tablets 15s",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/T70695/supradyn-daily-multivitamin-tablets-15s-1-1641793954.jpg?dim=320x320&dpr=1&q=100",
        mrp: 54,
        discount: 5,
    },
    {
        name: "Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1654234653.jpg?dim=320x320&dpr=1&q=100",
        mrp: 399,
        discount: 48,
    },
    {
        name: "Dr Morepen Gluco One Bg 03 Glucometer Test Strips Box Of 50",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1654168216.jpg?dim=1024x0",
        mrp: 840,
        discount: 24,
    },
    {
        name: "Dettol Antiseptic Liquid Bottle Of 550 Ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/I40695/dettol-antiseptic-liquid-bottle-of-550-ml-2-1656923531.jpg?dim=1024x0",
        mrp: 194.6,
        discount: 7,
    },
    {
        name: "Liveasy Essentials Copper Bottle - Ayurvedic Health Benefits - Leak Proof Cap - 950ml",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/W00450/liveasy-essentials-copper-bottle-ayurvedic-health-benefits-leak-proof-cap-950ml-1-1641793079.jpg?dim=1024x0",
        mrp: 1100,
        discount: 30,
    },
    {
        name: "Vicks Vaporub 25ml, Relief From Cold, Cough, Headache And Body Pain",
        imgUrl: "https://cdn01.pharmeasy.in/dam/products_otc/181135/vicks-vaporub-25ml-relief-from-cold-cough-headache-and-body-pain-2-1654078746.jpg?dim=1024x0",
        mrp: 85,
        discount: 11,
    },
];

let freqBookedLabTestList = [
    {
        discount: 60,
        name: "Post Pradndial Blood Sugar (PPBS)",
        description: "Measure your blood sugar levels after last meal",
        mrp: 500,
        price: 199,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/b4682c3fb22d39479c6d7a4a481e5ae5.png?dim=96x0",
    },
    {
        discount: 64,
        name: "Comprehensive Full Body Checkup with Vitamin D & B12",
        description:
            "Measure Vitamin D & B12 levels and other essential parameters",
        mrp: 4199,
        price: 1499,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/9fc5a0ab225a3ca2bc1702149e07f311.png?dim=96x0",
    },
    {
        discount: 71,
        name: "Random Blood Sugar (RBS)",
        description: "Testing of the blood sugar level at any time of the day",
        mrp: 350,
        price: 99,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/1d842b1450b53455922a5b6de3a3a980.png?dim=96x0",
    },
    {
        discount: "PSP-D",
        name: "",
        description:
            "To assess the renal function for early detection of any kidney disease",
        mrp: "",
        price: 99,
        imgUrl: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/d0c1ca33ee2637239dfed1645ed02aa8.png?dim=96x0",
    },
];

let trendingContainer = document.querySelector(".trending > .product-cards");
createProductList(trendingProdList, trendingContainer);

let freqBookedLabTestContainer = document.querySelector(
    ".freq-booked-lab-tests > .product-banner"
);
createProductBannerList(freqBookedLabTestList, freqBookedLabTestContainer);

function createProductList(list, container) {
    list.forEach(function (el) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("h4");
        let mrp = document.createElement("p");
        let price = document.createElement("h4");

        img.setAttribute("src", el.imgUrl);
        name.innerText = el.name;
        mrp.innerHTML = "MRP <span>₹" + el.mrp + "</span>";
        let p = (el.mrp / 100) * (100 - el.discount);
        p = (Math.round(p * 100) / 100).toFixed(2);
        price.innerHTML = "₹" + p + "<span>" + el.discount + "% OFF";

        div.append(img, name, mrp, price);
        container.append(div);
    });
}

function createProductBannerList(list, container) {
    list.forEach(function (el) {
        let div = document.createElement("div");
        let discount = document.createElement("h4");
        let name = document.createElement("h4");
        let description = document.createElement("p");

        let div2 = document.createElement("div");
        let price = document.createElement("h4");
        let img = document.createElement("img");

        if (typeof el.discount == "number") {
            discount.innerText = el.discount + "% OFF";

            price.innerHTML =
                "<span>₹" + el.mrp + "</span><br>" + "₹" + el.price;
        } else {
            discount.innerText = el.discount;
            discount.setAttribute("class", "no-discount");
            price.innerHTML = "₹" + el.price;
        }
        name.innerText = el.name;
        description.innerText = el.description;

        img.setAttribute("src", el.imgUrl);

        div2.append(price, img);
        div.append(discount, name, description, div2);
        container.append(div);
    });
}
