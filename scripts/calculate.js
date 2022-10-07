//RANGE
let highSeason = false;

let d = new Date("july 4 2022"); //start date

let y = d.getFullYear();

let rangeStart = new Date("june 1 " + y); //range start 
let rangeEnd = new Date("august 31 " + y); //range end

//RATE
let roomRate = 150
let daysVisit = 1
let visitorNum = 1

let hasQueen = false;
let hasKing = false;
let hasTwoBed = false;

document.getElementById("queen").addEventListener("click", (e) => {
    console.log("QUEEN: " + e.target.checked);
    container = "queen";
    visitorNum = 5
});

document.getElementById("king").addEventListener("click", (e) => {
    console.log("KING: " + e.target.checked);
    container = "king";
    visitorNum = 2
});

document.getElementById("twoBed").addEventListener("click", (e) => {
    console.log("TWOBEDS: " + e.target.checked);
    container = "twoBed";
    visitorNum = 6
});




function getRoomRate() {
    //HTML VARIABLES
    hasQueen = document.getElementById("queen").checked;
    hasKing = document.getElementById("queen").checked;
    hasTwoBed = document.getElementById("queen").checked;

    daysVisit = document.getElementById("daysVisit").value;
    adults = document.getElementById("adultNum").value;
    kids = document.getElementById("kidNum").value;
    visitorNum = Number(adults + kids);
    //OUTPUT VARIABLES
    let basePrice = 0;
    let tax = 0;
    let discountPrice = 0;
    let total = 0;
    const TAX_RATE = 0.12;

    basePrice = 1
    basePrice += daysVisit * 150 //150 per day
    
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

    //PRICING PER ROOM
    if ("queen" == container && d >= rangeStart && d < rangeEnd) {
        basePrice += 100
    }
    if ("king" == container && d >= rangeStart && d < rangeEnd) {
        basePrice += 100
    }
    if ("twoBed" == container && d >= rangeStart && d < rangeEnd) {
        basePrice += 200
    }else if("twoBed" == container){
        basePrice += 60
    }

    //DISCOUNTS
    

};
