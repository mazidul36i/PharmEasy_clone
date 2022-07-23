let navbar = document.querySelector(".navbar");
let searchbarConatiner = document.querySelector(
    ".search-layout > div:first-child"
);
let featuresConatiner = document.querySelector(
    ".search-layout > div:last-child"
);
let features = document.querySelector(".features");
let offer = document.querySelector(".features > li:first-child");

let prevScrollDist = 0;
window.onscroll = function () {
    var distanceScrolled = document.documentElement.scrollTop;
    if (prevScrollDist < distanceScrolled && distanceScrolled > 50) {
        // Scroll down

        navbar.style.height = "78px";
        features.remove();
        offer.style.display = "none";
        searchbarConatiner.append(features);
        featuresConatiner.style.display = "none";
    } else {
        // Scroll up

        navbar.style.height = "120px";
        features.remove();
        offer.style.display = "flex";
        featuresConatiner.append(features);
        featuresConatiner.style.display = "flex";
    }
    prevScrollDist = distanceScrolled;
};

// Offer list
let offerList = [
    {
        title: "Flat 22% OFF + up to Rs.1000 surprise cashback",
        description:
            "Flat 22% OFF + up to Rs.1000 surprise cashback on your first medicine order. Hurry! Order now, offer valid only on cart value above Rs.999",
        type: "Medicine",
        code: "22MEDI",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/9504ed92881-flat22offer.jpg",
    },
    {
        title: "Flat 25% OFF",
        description:
            "Flat 25% OFF on purchase of Diabetics & Gestro medicines & healt products",
        type: "Medicine",
        code: "GIFT25",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/37c262d84a5-25.jpg?dim=60x0&dpr=0.6666666865348816&q=100",
    },
    {
        title: "Order medicines and get FLAT 400 OFF on Comprehensive Full Body checkup with Vitamin D and B12.",
        description:
            "Order medicines and get FLAT 400 OFF on Comprehensive Full Body checkup with Vitamin D and B12.",
        type: "Medicine",
        code: "CARE4U",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/2846076d5d2-Diagnostics-10-min.png",
    },
    {
        title: "Order medicines worth Rs.1000 and get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12.",
        description:
            "Order medicines worth Rs.1000 and get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12.",
        type: "Medicine",
        code: "GET1000",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/40ef59a3196-Diagnostics-11-min.png",
    },
    {
        title: "Get FLAT Rs.400 OFF on orders above Rs 1499.",
        description: "Get FLAT Rs.400 OFF on orders above Rs 1499.",
        type: "Diagnostic",
        code: "LABTEST400",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/b964e016470-Diagnostics-09-min.png",
    },

    {
        title: "Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packages.",
        description:
            "Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packages.",
        type: "Diagnostic",
        code: "GRAND1000",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png",
    },

    {
        title: "Get FLAT Rs.300 cashback on PharmEasy Labtests booked above Rs.999",
        description:
            "Get FLAT Rs.300 cashback on PharmEasy Labtests booked above Rs.999",
        type: "Diagnostic",
        code: "FIT300",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/6b979e67782-Diagnostics-02-min.png",
    },
    {
        title: "Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699.",
        description:
            "Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699",
        type: "Diagnostic",
        code: "CSHB200",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/a39f3a0b277-Diagnostics-01-min.png",
    },
    {
        title: "Get FLAT Rs.600 OFF on booking 2 Advance Health Packages.",
        description:
            "Get FLAT Rs.600 OFF on booking 2 Advance Health Packages.",
        type: "Diagnostic",
        code: "HEALTH600",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/35699674fb6-Diagnostics-11-min.png",
    },
    {
        title: "Get FLAT Rs.2000 OFF on booking 4 Comprehensive Full Body checkup with Vitamin D and B12 Packages.",
        description:
            "Get FLAT Rs.2000 OFF on booking 4 Comprehensive Full Body checkup with Vitamin D and B12 Packages.",
        type: "Diagnostic",
        code: "WECARE2000",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/beff77d2d65-Diagnostics-11-min.png",
    },
    {
        title: "Get a health checkup and FREE doctor consultation. Use code FREECONSULT.",
        description:
            "Get a health checkup and FREE doctor consultation. Use code FREECONSULT.",
        type: "Diagnostic",
        code: "FREECONSULT",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/f99f81a36bd-1X1_Log_PE.png",
    },
    {
        title: "On Time Or Free",
        description:
            "Our Phlebotomist will reach your home on time or before, otherwise you will get 100% cashback on your cart value.",
        type: "Diagnostic",
        code: "~",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/0c2c10949e5-ontime_400_400-min.jpg",
    },
    {
        title: "Get upto Rs.300 Paytm cashback",
        description: "Valid once per user on transactions above ₹600.",
        type: "Payment",
        code: "~",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/e11270f3e3f-paytmcashbackoptimized.png",
    },
    {
        title: "Get up to Rs.500 cashback via Amazon Pay",
        description: "Offer valid on transactions above ₹100.",
        type: "Payment",
        code: "~",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/79c9e323814-AMAZON.jpg",
    },
    {
        title: "Get up to ₹500 cashback via Mobikwik. Use code MBK500 on Mobikiwik",
        description:
            "Use code MBK500 while paying on Mobikwik, enjoy up to ₹500 cashback on PharmEasy (valid on transactions above ₹500).",
        type: "Payment",
        code: "~",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/8cdf65ac110-mobiwiklogo.png",
    },
    {
        title: "Get minimum ₹50 and up to ₹750 cashback via OlaMoney Postpaid+",
        description: "Offer valid on transactions above ₹499.",
        type: "Payment",
        code: "~",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/61f3dfe3705-OlaMoney.png",
    },
    {
        title: "Get flat ₹35 cashback on minimum transaction of ₹499 , Valid once per user",
        description: "Offer applicable once per user.",
        type: "Payment",
        code: "~",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/29e0c8c1469-LOGO_Freecharge%20(1).png",
    },
    {
        title: "Get FLAT ₹80 cashback via Airtel Payments Bank.",
        description:
            "Offer valid on transactions above ₹600 for first-time users of Airtel Payments Bank/Airtel Money Wallet on Pharmeasy.",
        type: "Payment",
        code: "~",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/66c681514ce-LOGO-32.png",
    },
    {
        title: "Get extra 10% Off on Everherb, Liveasy or PharmEasy products",
        description:
            "Buy any 2 products of Everherb or Liveasy or PharmEasy and get additional 10% Off",
        type: "Healthcare",
        code: "ELP10",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/60165886431-ten_per.jpg?dim=60x0&dpr=0.6666666865348816&q=100",
    },
    {
        title: "Get extra 5% off on Just Herbs",
        description: "Get additional 5% off on Just Herbs products.",
        type: "Healthcare",
        code: "JH5",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/f5ae46c9390-JustHerbsLogo.jpg",
    },
    {
        title: "Get extra 5% off on Sugar Pop products",
        description: "Get additional 5% off on Sugar Pop products.",
        type: "Healthcare",
        code: "POP5",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/f1f4cea3c96-POP5.jpg",
    },
    {
        title: "Get Flat 50% off on Plum",
        description: "Get Flat 50% off on 3 or more Plum products",
        type: "Healthcare",
        code: "B3G50",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/94fa2133c15-Plum_logo2.jpg",
    },
    {
        title: "Flat 25% OFF + up to Rs.5000 surprise cashback",
        description:
            "Flat 25% OFF + up to Rs.5000 surprise cashback on your first medicine order. Hurry! Order now, offer valid only for medicine",
        type: "Medicine",
        code: "--",
        imgUrl: "https://cms-contents.pharmeasy.in/offer/f61d2bc026f-FridayOfferMin.jpg?dim=60x0&dpr=0.6666666865348816&q=100",
    },
];

// FAQ list
let FAQList = [
    {
        query: "What are the latest offers & coupon codes applicable on PharmEasy?",
        ans: "Will replace by list of offers",
    },
    {
        query: "How to get updates about PharmEasy offers and discount?",
        ans: "Visit the Offers section on the PharmEasy website to explore the latest offers and discounts. You can also download the PharmEasy app from Google Play or Apple App Store to receive notifications on offers and discounts.",
    },
    {
        query: "How do I use coupon code on PharmEasy?",
        ans: "Follow these steps to use a coupon code on PharmEasy -\n1. Download the PharmEasy app or visit the website.\n2. Select the products you want and add them to the cart.\n3.Visit the cart page and click on Apply Coupon.\n4. Enter the coupon code and click Apply.\n5. Proceed to checkout to avail the discount.",
    },
    {
        query: "Do I get a special discount when ordering for the 1st time?",
        ans: "Yes, PharmEasy offers a special discount when you place your 1st order. Additionally, you also get exciting wallet offers and cashbacks.",
    },
    {
        query: "Can I apply more than one PharmEasy coupon code at the same time?",
        ans: "No, you can only apply one PharmEasy coupon at once. You can remove one coupon code and replace it with another one if you wish.",
    },
    {
        query: "How to cancel a coupon/promo code?",
        ans: "To cancel a coupon/promo code, you have to follow these steps -\n● Go to the cart page.\n● Click on ‘Remove’ in the coupon section to remove the coupon/promo code.",
    },
];

let offersListContainer = document.querySelector(".offer-list");
createOfferList(offerList, offersListContainer);

let FAQContainer = document.querySelector(".FAQ");
createFAQList(FAQList, FAQContainer);

function createOfferList(list, container) {
    let count = document.querySelector("#cards-count");
    count.innerText = list.length;
    container.innerHTML = "";
    list.forEach(function (el) {
        let mainDiv = document.createElement("div");
        let row1 = document.createElement("div");
        let row2 = document.createElement("div");

        let img = document.createElement("img");
        let div = document.createElement("div");

        let textDiv = document.createElement("div");
        let more = document.createElement("i");

        let title = document.createElement("h3");
        let description = document.createElement("p");

        let code = document.createElement("h2");

        img.setAttribute("src", el.imgUrl);
        title.innerText = el.title;
        description.innerText = el.description;
        more.setAttribute("class", "fa-solid fa-angle-right");

        if (el.code == "--") {
            code.innerHTML =
                "<p style='color: red'>Offer Expired</p><span></span>";
            img.style.filter = "grayscale(100%)";
            img.style.webkitFilter = "grayscale(100%)";
        } else if (el.code == "~") {
            code.innerHTML =
                "<p>No Code Required</p>" + "<span>Continue</span>";
        } else {
            code.innerHTML =
                "<p>Code: </p>" + el.code + "<span>Copy Code</span>";
        }

        code.lastChild.addEventListener("click", function () {
            copyToClipboard(el.code);
        });

        textDiv.append(title, description);
        div.append(textDiv, more);
        row1.append(img, div);
        row2.append(code);

        mainDiv.append(row1, row2);
        container.append(mainDiv);
    });
}

function createFAQList(list, container) {
    list.forEach(function (el) {
        let mainDiv = document.createElement("div");
        let div = document.createElement("div");
        let query = document.createElement("h4");
        let i = document.createElement("i");
        let ans = document.createElement("p");

        query.innerText = el.query;
        i.setAttribute("class", "fa-solid fa-angle-up");
        ans.innerText = el.ans;

        div.addEventListener("click", function () {
            hideShowAns(ans, i);
        });

        div.append(query, i);
        mainDiv.append(div, ans);
        container.append(mainDiv);
    });
}

function hideShowAns(ans, i) {
    let display = getComputedStyle(ans).display;
    if (display == "block") {
        ans.style.display = "none";
        i.setAttribute("class", "fa-solid fa-angle-down");
    } else {
        ans.style.display = "block";
        i.setAttribute("class", "fa-solid fa-angle-up");
    }
}

var filter = document.querySelector(".filter-offers");
// var log = document.querySelector("#log");

filter.addEventListener("change", function (event) {
    let data = new FormData(filter);
    let choice = "";
    for (const entry of data) {
        choice = choice + entry[1];
    }
    filterOfferList(choice);
});

function filterOfferList(choice) {
    if (choice == "All") {
        createOfferList(offerList, offersListContainer);
    } else {
        let newList = offerList.filter(function (el) {
            return el.type == choice;
        });
        createOfferList(newList, offersListContainer);
    }
}

function copyToClipboard(text) {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
        function () {
            alert("Copied successfully!");
        },
        function () {
            alert("Failed to copy!");
        }
    );
}
