// Get Speech to Text
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.start();

// start listening
recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    console.log(transcript);
    // If transcript is equal to "events"
    if (transcript.toLowerCase().includes("events")) {
        // console log "events"
        // console.log("events");
        // show the events section
        $(".pre-techfest-events").hide();
        $(".main-techfest-events").show();
    } else if (transcript.toLowerCase().includes("pre")){
        $(".main-techfest-events").hide();
        $(".pre-techfest-events").show();
    }
}