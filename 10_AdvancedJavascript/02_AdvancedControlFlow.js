//Ternary operator

//condition ? exp1 : exp2;

function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "You can't enter";

//If condition is true the first expression will execute otherwise second will execute





//Switch
function moveCommand(direction){
    var whatHappen;
    switch (direction) {
        case "forward":
            whatHappen = "You can go forward";
            break;
        case "backward":
            whatHappen = "You can go backward";
            break;
        case "left":
            whatHappen = "You can go left";
            break;
        case "right":
            whatHappen = "You can go right";
            break;
        
        default:
            whatHappen = "Stay right there";
            break;
    }
    return whatHappen;
}