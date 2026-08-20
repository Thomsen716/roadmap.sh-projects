let baggrundsFarve = "white";
let andenBaggrundsFarve = "black";
let nuværendeBaggrundsFarve = baggrundsFarve;

function skiftBaggrundsFarve() {
    if (nuværendeBaggrundsFarve === baggrundsFarve) {
        document.body.style.backgroundColor = andenBaggrundsFarve;
        nuværendeBaggrundsFarve = andenBaggrundsFarve;
    }
    else {
        document.body.style.backgroundColor = baggrundsFarve;
        nuværendeBaggrundsFarve = baggrundsFarve;
    }
}