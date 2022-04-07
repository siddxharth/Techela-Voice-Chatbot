function getTime(){
    var d = new Date();
    const hours = d.getHours(); // => 9
    const mins = d.getMinutes(); // =>  30
    const secs = d.getSeconds(); // => 51
    const time = hours + ":" + mins + ":" + secs;
    const displayTime = hours + ":" + mins + ":" + secs;
    // if(hours>=12){
    //     hours = hours-12;
    // }
    // if(mins<10){
    //     mins = "0"+mins;
    // }
    // if(secs<10){
    //     secs = "0"+secs;
    // }
    const timeDiv = document.getElementById("time");
    timeDiv.textContent = displayTime;
    return time;
}

getTime();

