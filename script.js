function makeSound(key) {
    switch (key) {
        case "w": // crash
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a": // tom 1
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break
        case "s": // tom 2
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break
        case "d": // snare
            var tom2 = new Audio("sounds/snare.mp3");
            tom2.play();
            break
        case "j": // tom 3
            var tom2 = new Audio("sounds/tom-3.mp3");
            tom2.play();
            break
        case "k": // tom 4
            var tom2 = new Audio("sounds/tom-4.mp3");
            tom2.play();
            break
        case "l": // kick
            var tom2 = new Audio("sounds/kick-bass.mp3");
            tom2.play();
            break
        default:
            break;
    }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    //Button press
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

//Keyboard press
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
})

// '() => {}' and 'function () {}' are different