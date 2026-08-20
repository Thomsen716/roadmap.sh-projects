let baggrundsFarve = "#ffffff";
let andenBaggrundsFarve = "#141715";
let nuværendeBaggrundsFarve = baggrundsFarve;

function skiftBaggrundsFarve() {
    const themeIcon = document.getElementById("theme-icon");

    if (nuværendeBaggrundsFarve === baggrundsFarve) {
        document.body.style.backgroundColor = andenBaggrundsFarve;
        document.body.classList.add("dark-theme");
        nuværendeBaggrundsFarve = andenBaggrundsFarve;
        themeIcon.src = "light-theme-button.png";
        themeIcon.alt = "Switch to dark theme";

    }
    else {
        document.body.style.backgroundColor = baggrundsFarve;
        document.body.classList.remove("dark-theme");
        nuværendeBaggrundsFarve = baggrundsFarve;
        themeIcon.src = "dark-theme-button.png";
        themeIcon.alt = "Switch to light theme";
    }
}