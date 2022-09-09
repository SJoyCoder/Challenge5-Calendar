let time = moment().format("H");
let saveBtns = document.querySelectorAll(".saveBtn");
let appointment= document.querySelectorAll(".time-block")
function displayTime() {
    var rightNow = moment().format('H');
    setInterval(1000);
    

};
console.log(time)

for (let i = 0; i < saveBtns.length; i++) {

    console.log(appointment[i].getAttribute("data-time"));

    appointment[i].value = localStorage.getItem("appt"+i)

    saveBtns[i].addEventListener("click", (tacocat) =>{
        console.log(tacocat.target);
        console.log(appointment[i].value);
        localStorage.setItem("appt"+i, appointment[i].value)
    })


}
