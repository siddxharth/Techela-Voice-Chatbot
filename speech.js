// Get Speech to Text
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

let utterance = new SpeechSynthesisUtterance(
    "Hi, I am your Voice Assistant. Welcome to Tekella 7.0!"
);
function sayHi(){
    $(document).ready(function() {
        speechSynthesis.speak(utterance);
    });
}

setTimeout(sayHi, 2000);
recognition.start();

// start listening
recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    console.log(transcript);
    // check if user said "Hi Tekella"
    // If transcript is equal to "events"
    console.log(transcript);
    if (transcript.toLowerCase().includes("events")) {
        // console log "events"
        // console.log("events");
        // show the events section
        let utterance = new SpeechSynthesisUtterance(
            "Showing all the Tech Fest events now..."
        );
        speechSynthesis.speak(utterance);
        $(".pre-techfest-events").hide();
        $(".techfest-news").hide();
        $(".techfest-date-container").hide();
        $(".techfest-time-container").hide();
        $(".hello-container").hide();
        $(".main-techfest-events").show();
        $(".floor-map-container").show();
    } else if (transcript.toLowerCase().includes("pre")) {
        let utterance = new SpeechSynthesisUtterance(
            "Showing all the Pre Tech Fest events now..."
        );
        speechSynthesis.speak(utterance);
        $(".main-techfest-events").hide();
        $(".techfest-news").hide();
        $(".techfest-date-container").hide();
        $(".techfest-time-container").hide();
        $(".hello-container").hide();
        $(".pre-techfest-events").show();
        $(".floor-map-container").show();
    } else if (transcript.toLowerCase().includes("news")) {
        let utterance = new SpeechSynthesisUtterance(
            "Showing the latest news now..."
        );
        speechSynthesis.speak(utterance);
        $(".main-techfest-events").hide();
        $(".techfest-date-container").hide();
        $(".techfest-time-container").hide();
        $(".hello-container").hide();
        $(".floor-map-container").hide();
        $(".pre-techfest-events").hide();
        $(".techfest-news").show();
    } else if (transcript.toLowerCase().includes("date")) {
        let utterance = new SpeechSynthesisUtterance("Today is..." + getDate());
        speechSynthesis.speak(utterance);
        $(".main-techfest-events").hide();
        $(".techfest-news").hide();
        $(".techfest-time-container").hide();
        $(".hello-container").hide();
        $(".floor-map-container").hide();
        $(".pre-techfest-events").hide();
        $(".techfest-date-container").show();
    } else if (transcript.toLowerCase().includes("help")) {
        let utterance = new SpeechSynthesisUtterance(
            "Hi, I am your Voice Assistant. Welcome to Tekella 7.0! I can help you with the following commands: events, pre-events, news, date, time, help"
        );
        speechSynthesis.speak(utterance);
        $(".main-techfest-events").hide();
        $(".techfest-news").hide();
        $(".techfest-time-container").hide();
        $(".floor-map-container").hide();
        $(".pre-techfest-events").hide();
        $(".techfest-date-container").hide();
        $(".hello-container").show();
    } else if (transcript.toLowerCase().includes("time")) {
        let utterance = new SpeechSynthesisUtterance(
            "The time is..." + getTime()
        );
        speechSynthesis.speak(utterance);
        $(".main-techfest-events").hide();
        $(".techfest-news").hide();
        $(".hello-container").hide();
        $(".floor-map-container").hide();
        $(".pre-techfest-events").hide();
        $(".techfest-date-container").hide();
        $(".techfest-time-container").show();
    } else if(transcript.toLowerCase().includes("floor")){
        let utterance = new SpeechSynthesisUtterance(
            "Showing the floor map now..."
        );
        speechSynthesis.speak(utterance);
        $(".main-techfest-events").hide();
        $(".techfest-news").hide();
        $(".techfest-time-container").hide();
        $(".hello-container").hide();
        $(".pre-techfest-events").hide();
        $(".techfest-date-container").hide();
        $(".floor-map-container").show();
    }else {
        let utterance = new SpeechSynthesisUtterance(
            "Sorry, I didn't understand that. Please try again."
            );
            
        $(".hello-container").show();
        speechSynthesis.speak(utterance);
    }
};
// display event details if it is in events array

/* Hello user, I am <bot name> welcome to Techela 7.0. How may I help you!?*/
