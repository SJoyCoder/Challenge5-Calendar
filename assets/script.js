// declaring my variables
let time = 14;
// let time = moment().format("HH");
let dateInput = document.querySelector("#currentDay");
let saveBtns = document.querySelectorAll(".saveBtn");
let appointment= document.querySelectorAll(".time-block")
let past = document.querySelector(".past")
let currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");


// function to for time to update automatically and in the format I want
function displayTime() {
    dateInput.textContent = currentDate;
    setInterval(1000);
};
displayTime();
console.log(time);
// for loop to streamline my color changes and save buttons

for (let i = 0; i < saveBtns.length; i++) {
    
    if (appointment[i].getAttribute("data-time") == time){
        $(appointment[i]).addClass("present");
    }else if(appointment[i].getAttribute("data-time") > time){
        $(appointment[i]).addClass("future");
    }else if(appointment[i].getAttribute("data-time") < time){
        $(appointment[i]).addClass("past");
     };
    
    appointment[i].value = localStorage.getItem("appt"+i)
    
    saveBtns[i].addEventListener("click", (save) =>{
        console.log(save.target);
        console.log(appointment[i].value);
        localStorage.setItem("appt"+i, appointment[i].value)
    }); 
}

