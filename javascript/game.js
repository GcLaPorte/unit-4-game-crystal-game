$(document).ready(function () {
   

    var price = Math.floor(Math.random() * 101) + 19;
    document.getElementById("randomPrice").innerHTML = price;

    console.log(price);

});


function reset() {

    var price = Math.floor(Math.random() * 101) + 19;
    document.getElementById("randomPrice").innerHTML = price;
    var wins = 0;
   var losses = 0;
   var counter = 0;
   document.querySelector("#win").innerHTML = wins;
   document.querySelector("#losses").innerHTML = losses;
   document.querySelector("#score").innerHTML = counter;
  
   
   var rupeePrice1 = Math.floor(Math.random() * 11) + 1;
   var rupeePrice2 = Math.floor(Math.random() * 11) + 1;
   var rupeePrice3 = Math.floor(Math.random() * 11) + 1;
   var rupeePrice4 = Math.floor(Math.random() * 11) + 1;
   var rupeePrice5 = Math.floor(Math.random() * 11) + 1;
   };

 

var wins = 0;
var losses = 0;
var counter = 0;

var price = Math.floor(Math.random() * 101) + 19;

var rupeePrice1 = Math.floor(Math.random() * 11) + 1;
var rupeePrice2 = Math.floor(Math.random() * 11) + 1;
var rupeePrice3 = Math.floor(Math.random() * 11) + 1;
var rupeePrice4 = Math.floor(Math.random() * 11) + 1;
var rupeePrice5 = Math.floor(Math.random() * 11) + 1;





$("#rupee1").on('click', function() {

   counter= counter + rupeePrice1;

   console.log(counter);
    
    document.querySelector("#score").innerHTML = counter;

    if (counter == price){
        alert('You win!');
        wins++;
        document.querySelector("#win").innerHTML = wins;

        reset();
    }
    if (counter > price){
        alert('You lose!');
        losses++;
        document.querySelector("#losses").innerHTML = losses;

    }
});



// $("#rupee2").on('click', function() {
   

//     counter = counter + rupee2;
//     $("#score").text(counter);
//     if (counter == price){
//         alert('You win!');
//         wins++;
//         document.querySelector("#win").innerHTML = wins;

//         reset();
//     }
//     else if (counter > price){
//         alert('You lose!');
//         losses++;
//         document.querySelector("#losses").innerHTML = losses;

//         reset();
//     }
// })



// $("#rupee3").on('click', function() {
   

//     counter = counter + rupee3;
//     $("#score").text(counter);
//     if (counter == price){
//         alert('You win!');
//         wins++;
//         document.querySelector("#win").innerHTML = wins;

//         reset();
//     }
//     else if (counter > price){
//         alert('You lose!');
//         losses++;
//         document.querySelector("#losses").innerHTML = losses;

//         reset();
//     }
// })


// $("#rupee4").on('click', function() {
   

//     counter = counter + rupee4;
//     $("#score").text(counter);
//     if (counter == price){
//         alert('You win!');
//         wins++;
//         document.querySelector("#win").innerHTML = wins;

//         reset();
//     }
//     else if (counter > price){
//         alert('You lose!');
//         losses++;
//         document.querySelector("#losses").innerHTML = losses;

//         reset();
//     }
// })



// $("#rupee5").on('click', function() {
   

//     counter = counter + rupee5;
//     $("#score").text(counter);
//     if (counter == price){
//         alert('You win!');
//         wins++;
//         document.querySelector("#win").innerHTML = wins;

//         reset();
//     }
//     else if (counter > price){
//         alert('You lose!');
//         losses++;
//         document.querySelector("#losses").innerHTML = losses;

//         reset();
//     }
// })

