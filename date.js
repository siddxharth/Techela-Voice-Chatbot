function getDate() {
    // Calculate milliseconds in a year
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    // Divide Time with a year
    const d = new Date();
    let years = Math.round(d.getTime() / year);
    // Tue Apr 05 2022 14:51:29 GMT+0530 (IST)
    let months = d.getMonth();
    let weekDay = d.getDay();
    let days = d.getDate();
    // change months to words
    switch (months) {
        case 0:
            months = "January";
            break;
        case 1:
            months = "February";
            break;
        case 2:
            months = "March";
            break;
        case 3:
            months = "April";
            break;
        case 4:
            months = "May";
            break;
        case 5:
            months = "June";
            break;
        case 6:
            months = "July";
            break;
        case 7:
            months = "August";
            break;
        case 8:
            months = "September";
            break;
        case 9:
            months = "October";
            break;
        case 10:
            months = "November";
            break;
        case 11:
            months = "December";
            break;
    }

    // change weekDay to words
    switch (weekDay) {
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
    }

    // change days to words
    // switch (days) {
    //     case 1:
    //         days = "1st";
    //         break;
    //     case 2:
    //         days = "2nd";
    //         break;
    //     case 3:
    //         days = "3rd";
    //         break;
    //     default:
    //         days = days + "th";
    // }
    years = 1970 + years;
    //   change date, month and year to string
    let date = weekDay + ", " + days + " " + months + " " + years;
    // return the date
    const dateDiv = document.getElementById("date");
    dateDiv.textContent = date;
    return date;
}