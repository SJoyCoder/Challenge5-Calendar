let time = moment().format("LT");
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
    setInterval(displayTime, 1000);

console.log(time);
