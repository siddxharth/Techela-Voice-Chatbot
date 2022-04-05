// // Get Speech to Text
// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// recognition.start();

// // start listening
// recognition.onresult = (event) => {
//     const current = event.resultIndex;
//     const transcript = event.results[current][0].transcript;
//     console.log(transcript);
//     // If transcript is equal to "events"
//     if (transcript.toLowerCase().includes("events")) {
//         // console log "events"
//         // console.log("events");
//         // show the events section
//         let utterance = new SpeechSynthesisUtterance("Showing all the Tech Fest events now...");
//         speechSynthesis.speak(utterance);
//         $(".pre-techfest-events").hide();
//         $(".techfest-date").hide();
//         $(".main-techfest-events").show();
//     } else if (transcript.toLowerCase().includes("pre")){
//         let utterance = new SpeechSynthesisUtterance("Showing all the Pre Tech Fest events now...");
//         speechSynthesis.speak(utterance);
//         $(".main-techfest-events").hide();
//         $(".techfest-date").hide();
//         $(".pre-techfest-events").show();
//     } else if( transcript.toLowerCase().includes("news")){
//         let utterance = new SpeechSynthesisUtterance("Showing all the Tech Fest news now...");
//         speechSynthesis.speak(utterance);
//         $(".main-techfest-events").hide();
//         $(".pre-techfest-events").hide();
//         $(".techfest-date").hide();
//         $(".techfest-news").show();
//     } else if(transcript.toLowerCase().includes("date")){
//         let utterance = new SpeechSynthesisUtterance("Today is..." + getDate());
//         speechSynthesis.speak(utterance);
//         $(".main-techfest-events").hide();
//         $(".pre-techfest-events").hide();
//         $(".techfest-news").hide();
//         $(".techfest-date").show();
//     }
// }

// /* Hello user, I am <bot name> welcome to Techela 7.0. How may I help you!?*/