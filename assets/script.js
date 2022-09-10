let time = moment().format("H");
let saveBtns = document.querySelectorAll(".saveBtn");
let appointment= document.querySelectorAll(".time-block")
let past = document.querySelector(".past")

function displayTime() {
    var rightNow = moment().format('H');
    setInterval(1000);
    

};
console.log(time)

for (let i = 0; i < saveBtns.length; i++) {

    if (appointment[i].getAttribute("data-time") === time){
        $(appointment[i]).addClass("present");
    }else if(appointment[i].getAttribute("data-time") < time){
        $(appointment[i]).addClass("past");
    }else if(appointment[i].getAttribute("data-time") > time){
        $(appointment[i]).addClass("future");
    };

    $("button").click(function(){
        $(appointment[i]).addClass("future");
      });

    appointment[i].value = localStorage.getItem("appt"+i)

    saveBtns[i].addEventListener("click", (tacocat) =>{
        console.log(tacocat.target);
        console.log(appointment[i].value);
        localStorage.setItem("appt"+i, appointment[i].value)
    })


}
