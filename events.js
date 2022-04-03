techelaPreEvents.forEach((element, i) => {
    const events_main = document.querySelector(".pre-events-main");

    // create card
    const card = document.createElement("div");
    card.classList.add("card");

    const eventCard = `
        <div class="event-card">
            <div class="event-title">${techelaPreEvents[i].title}</div>
            <div class="event-venue">${techelaPreEvents[i].venue}</div>
            <div class="event-date">${techelaPreEvents[i].date}</div>
            <div class="event-time">${techelaPreEvents[i].time}</div>
        </div>
    `;

    card.innerHTML += eventCard;

    events_main.appendChild(card);
});

techelaEvents.forEach((element, i) => {
    const events_main = document.querySelector(".main-events-main");

    // create card
    const card = document.createElement("div");
    card.classList.add("card");

    const eventCard = `
        <div class="event-card">
            <div class="event-title">${techelaEvents[i].title}</div>
            <div class="event-venue">${techelaEvents[i].venue}</div>
            <div class="event-date">${techelaEvents[i].date}</div>
            <div class="event-time">${techelaEvents[i].time}</div>
        </div>
    `;

    card.innerHTML += eventCard;

    events_main.appendChild(card);
});