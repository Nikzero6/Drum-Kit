
//detecting button press

var numOfDrumBtns = document.querySelectorAll(".drum").length;

for(var i=0; i<numOfDrumBtns; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var btnInnerHTML = this.innerHTML
    //what to do on click
    makeSound(btnInnerHTML);

    btnAnimation(btnInnerHTML);
  });
}


//detecting key press

document.addEventListener("keydown", function(event) {
    makeSound(event.key);

    btnAnimation(event.key);
});


//makeSound function

function makeSound(char) {

  switch (char) {

    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    default: console.log(btnInnerHTML);

  }

}

//button animation

function btnAnimation(currenKey) {

  var activeBtn = document.querySelector("." + currenKey);
  activeBtn.classList.add("pressed");

  setTimeout(function() {
    activeBtn.classList.remove("pressed");
  }, 100);
}
