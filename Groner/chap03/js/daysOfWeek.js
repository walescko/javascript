function daysOfWeekF() {

    daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    console.log(daysOfWeek.length);

    for (let i = 0; i < daysOfWeek.length; i++) {
        console.log(daysOfWeek[i]);
    }
}

let btDaysOfWeek = document.getElementById("btDaysOfWeek");
btDaysOfWeek.addEventListener("click", daysOfWeekF);

