var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 3, 1, rand3(), rand3(), rand3(), rand3(), 1, rand3(), 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, rand3(), 1, rand3(), rand3(), rand3(), rand3(), 1, rand3(), 2],
    [2, rand3(), 1, rand3(), rand3(), rand3(), rand3(), 1, rand3(), 2],
    [2, rand3(), 1, rand3(), 1, rand3(), rand3(), 1, rand3(), 2],
    [2, rand3(), 1, 1, 1, 1, rand3(), 1, rand3(), 2],
    [2, rand3(), 1, rand3(), rand3(), rand3(), rand3(), 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 3, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
var score1 = 0;
var score2 = 0;
var lives1 = 3;
var lives2 = 3;

var pacman = {
    x: 1,
    y: 1,
    z: 90,
};

var cherry = {
    x: 4,
    y: 5,
    lives: 1,
};

var pumpky = {
    x: 1,
    y: 8,
};

var pacman2 = {
    x: 8,
    y: 8,
    z: 90,
};
function rand3() {
    return Math.round(Math.random() + 1);
}
function displayWorld() {
    var output = "";
    for (i = 0; i < world.length; i++) {
        output += "\n<div class='row'>";
        for (j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2) {
                output += "\n\t<div class='brick'></div>";
            }
            if (world[i][j] == 1) {
                output += "\n\t<div class='coin'></div>";
            }
            if (world[i][j] == 3) {
                output += "\n\t<div class='empty'></div>";
            }
            // output = output + world[i][j];
        }
        output += "\n</div>";
    }
    document.getElementById("world").innerHTML = output;
    console.log(output);
    // return(output)
}

function displayTitle() {
    document.getElementById("p1score").innerHTML = "P1 Score: " + score1;
    document.getElementById("p2score").innerHTML = "P2 Score: " + score2;
    document.getElementById("p1lives").innerHTML = "P1 Lives: " + lives1;
    document.getElementById("p2lives").innerHTML = "P2 Lives: " + lives2;
}
function displayPacman() {
    document.getElementById("pacman").style.top = pacman.y * 50 + 100 + "px";
    document.getElementById("pacman").style.left = pacman.x * 50 + "px";
    document.getElementById("pacman").style.transform =
        "rotate(" + pacman.z + "deg)";
}
function displayPacman2() {
    document.getElementById("pacman2").style.top = pacman2.y * 50 + 100 + "px";
    document.getElementById("pacman2").style.left = pacman2.x * 50 + "px";
    document.getElementById("pacman2").style.transform =
        "rotate(" + pacman2.z + "deg)";
}
function updateCherry() {
    var oldCherry = {
        x: cherry.x,
        y: cherry.y,
    };
    if (Math.random() > 0.5) {
        cherry.x += Math.round(Math.random()) * 2 - 1;
    } else {
        cherry.y += Math.round(Math.random()) * 2 - 1;
    }
    if (world[cherry.y][cherry.x] == 2) {
        cherry.x = oldCherry.x;
        cherry.y = oldCherry.y;
    }
}
function displayCherry() {
    document.getElementById("cherry").style.top = cherry.y * 50 + 100 + "px";
    document.getElementById("cherry").style.left = cherry.x * 50 + "px";

    if (pacman.x == cherry.x && pacman.y == cherry.y) {
        document.getElementById("cherry").style.display = "none";
        if (cherry.lives > 0) {
            score1 += 5000;
        }
        cherry.lives--;
    }
    if (pacman2.x == cherry.x && pacman2.y == cherry.y) {
        document.getElementById("cherry").style.display = "none";
        if (cherry.lives > 0) {
            score2 += 5000;
        }
        cherry.lives--;
    }
}

function updatePumpky() {
    var oldPumpky = {
        x: pumpky.x,
        y: pumpky.y,
    };
    if (Math.random() > 0.5) {
        pumpky.x += Math.round(Math.random()) * 2 - 1;
    } else {
        pumpky.y += Math.round(Math.random()) * 2 - 1;
    }
    if (world[pumpky.y][pumpky.x] == 2) {
        pumpky.x = oldPumpky.x;
        pumpky.y = oldPumpky.y;
    }
}
function displayPumpky() {
    document.getElementById("pumpky").style.top = pumpky.y * 50 + 100 + "px";
    document.getElementById("pumpky").style.left = pumpky.x * 50 + "px";

    if (pacman.x == pumpky.x && pacman.y == pumpky.y) {
        // document.getElementById("pumpky").style.display = "none";
        lives1 -= 1;
    }
    if (pacman2.x == pumpky.x && pacman2.y == pumpky.y) {
        // document.getElementById("pumpky").style.display = "none";
        lives2 -= 1;
    }
}

displayCherry();
displayWorld();
displayPacman();
displayPacman2();
displayPumpky();
displayTitle();
document.onkeydown = function (e) {
    if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
        pacman.x += 1;
        pacman.z = 0;
    }
    if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
        pacman.x -= 1;
        pacman.z = 180;
    }
    if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
        pacman.y -= 1;
        pacman.z = 270;
    }
    if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
        pacman.y += 1;
        pacman.z = 90;
    }
    if (e.keyCode == 102 && world[pacman2.y][pacman2.x + 1] != 2) {
        pacman2.x += 1;
        pacman2.z = 0;
    }
    if (e.keyCode == 100 && world[pacman2.y][pacman2.x - 1] != 2) {
        pacman2.x -= 1;
        pacman2.z = 180;
    }
    if (e.keyCode == 104 && world[pacman2.y - 1][pacman2.x] != 2) {
        pacman2.y -= 1;
        pacman2.z = 270;
    }
    if (e.keyCode == 98 && world[pacman2.y + 1][pacman2.x] != 2) {
        pacman2.y += 1;
        pacman2.z = 90;
    }
    if (world[pacman.y][pacman.x] == 1) {
        console.log("coin here");
        world[pacman.y][pacman.x] = 3;
        score1 += 50;
    } else if (world[pacman.y][pacman.x] == 2) {
        console.log("wall here");
    }
    if (world[pacman2.y][pacman2.x] == 1) {
        console.log("coin here");
        world[pacman2.y][pacman2.x] = 3;
        score2 += 50;
    } else if (world[pacman.y][pacman.x] == 2) {
        console.log("wall here");
    }
    updateCherry();
    displayWorld();
    displayCherry();
    displayPacman();
    displayPacman2();
    updatePumpky();
    displayPumpky();
    displayTitle();
    console.log(e.keyCode);
};
