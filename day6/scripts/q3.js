const name = prompt("Enter your name","Anonymous");

const title = document.getElementById('title');

title.innerText += `Welcome  ${name}!`;



const ctime = document.getElementById('time');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerHTML = time;
}

setInterval(clock,1000);


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

// const dmode = document.getElementById('dark');

// dmode.onclick = myFunction();

// function myFunction() {
//     var element = document.body;

   
//     element.classList.toggle("dark-mode");
//   }

// function changeColor(){
    
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white'; 
// }

// const dmode = document.getElementById('dark');

// dmode.onclick.classList.toggle('blue');


// dmode.classList.toggle(dmode.onclick = changeColor());
