
//! Setup function fires automatically
function setup() {

    var socket = io();
    var side = 30;
    var matrix = [];

    //! Getting DOM objects (HTML elements)

    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let predEaterCountElement = document.getElementById('predCount');
    let beastEaterCountElement = document.getElementById('beastCount');
    let weatherElement = document.getElementById('weather');
    //! adding socket listener on "data" <-- name, after that fire 'drawCreatures' function 

    socket.on("data", drawCreatures);
    function drawCreatures(data) {
        //! after getting data pass it to matrix variable
        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.eaterCounter;
        predEaterCountElement.innerText = data.predCounter;
        beastEaterCountElement.innerText = data.beastCounter;
       
        //! Every time it creates new Canvas woth new matrix size
        createCanvas(matrix[0].length * side, matrix.length * side)
        //! clearing background by setting it to new grey color
        background('#acacac');
        //! Draw grassCount and grassEaterCount to HTML (use DOM objects to update information, yes, and use .innerText <- function)
       
        //! Drawing and coloring RECTs
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("green");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("orange");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('black');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('blueviolet');
                    rect(j * side, i * side, side, side);
                }

                if (data.weather == 1) {
                    document.body.style.backgroundColor = "#6591d8";
                    weatherElement.innerText = "Spring";
                    if (matrix[i][j] == 1) {
                        fill("#66ff66");
                        rect(j * side, i * side, side, side);
                    }
                }
                if (data.weather == 2) {
                  
                    document.body.style.backgroundColor = "yellow";
                    if (matrix[i][j] == 1) {
                        weatherElement.innerText = "Summer"
                        fill("#ffbf80");
                        rect(j * side, i * side, side, side);
                    }
                }
                if (data.weather == 3) {
                   weatherElement.innerText = "Autumn";
                    document.body.style.backgroundColor = "#ad8130";
                    if (matrix[i][j] == 1) {
                        fill("green");
                        rect(j * side, i * side, side, side);
                    }
                }
                if (data.weather == 4) {
                   weatherElement.innerText = "Winter";
                    document.body.style.backgroundColor = "#c5dbda";
                    if (matrix[i][j] == 1) {
                        fill("#757557");
                        rect(j * side, i * side, side, side);
                    }
                    else if (matrix[i][j] == 3) {
                        fill('#0000cc');
                        rect(j * side, i * side, side, side);
                    }
                }

            }
        }
    }
}