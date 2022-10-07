//RANGE
let highSeason = false;

let d = new Date("july 4 2022"); //start date

let y = d.getFullYear();

let rangeStart = new Date("june 1 " + y); //range start 
let rangeEnd = new Date("august 31 " + y); //range end

//RATE
let roomRate = 150;
let daysVisit = 1;
let visitorNum = 1;

let hasQueen = false;
let hasKing = false;
let hasTwoBed = false;
let container = "queen";

document.getElementById("queen").addEventListener("click", (e) => {
    console.log("QUEEN: " + e.target.checked);
    container = "queen";
    visitorNum = 5;
});

document.getElementById("king").addEventListener("click", (e) => {
    console.log("KING: " + e.target.checked);
    container = "king";
    visitorNum = 2;
});

document.getElementById("twoBed").addEventListener("click", (e) => {
    console.log("TWOBEDS: " + e.target.checked);
    container = "twoBed";
    visitorNum = 6;
});




function getRoomRate() {
    //HTML VARIABLES
    hasQueen = document.getElementById("queen").checked;
    hasKing = document.getElementById("king").checked;
    hasTwoBed = document.getElementById("twoBed").checked;

    daysVisit = document.getElementById("daysVisit").value;
    adults = document.getElementById("adultNum").value;
    kids = document.getElementById("kidNum").value;
    visitorNum = Number(adults) + Number(kids);

    noDiscount = document.getElementById("noDiscount").checked;
    seniorDiscount = document.getElementById("seniorDiscount").checked;
    militaryDiscount = document.getElementById("militaryDiscount").checked;
    //OUTPUT VARIABLES
    let basePrice = 0;
    let discount = 1;
    let discountOff = 0;
    let total = 0;
    const TAX_RATE = 0.12;
    let tax = 0;

    basePrice = 1;
    basePrice += daysVisit * 150; //150 per day


    //VALIDATE
    if (daysVisit < 1 || daysVisit > 28) {
        console.log("MUST CHOOSE DURATION OF VISIT");
    }

    //OCCUPANCY NUM
    if ("queen" == container && visitorNum > 5) {
        console.log("TOO MANY OCCUPANTS");
    }
    if ("king" == container && visitorNum > 2) {
        console.log("TOO MANY OCCUPANTS");
    }
    if ("twoBed" == container && visitorNum > 6) {
        console.log("TOO MANY OCCUPANTS");
    }

    //BASE PRICING PER ROOM
    if ("queen" == container && d >= rangeStart && d < rangeEnd) {
        basePrice += 100;
    }
    if ("king" == container && d >= rangeStart && d < rangeEnd) {
        basePrice += 100;
    }
    if ("twoBed" == container && d >= rangeStart && d < rangeEnd) {
        basePrice += 200;
    } else if ("twoBed" == container) {
        basePrice += 60;
    }

    //DISCOUNTS
    if (noDiscount) {
        discount = 0;
        console.log("No Changes");
    } else if (seniorDiscount) {
        discount = 0.1;
        console.log("senior discount babyyy");
    }
    else if (militaryDiscount) {
        discount = 0.2;
        console.log("Thank You For Your Service");
    }


    discountOff = basePrice*discount;
    totalBT = (basePrice - discountOff);
    tax = totalBT * TAX_RATE;
    total = totalBT - tax;

    document.getElementById("totalOutput").innerHTML = basePrice;
    document.getElementById("discountOutput").innerHTML = discount;
    document.getElementById("discountTotalOutput").innerHTML = totalBT;
    document.getElementById("taxOutput").innerHTML = tax;
    document.getElementById("finalOutput").innerHTML = total;
}
document.getElementById("submitBtn").addEventListener("click", getRoomRate);