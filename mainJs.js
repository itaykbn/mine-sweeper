var grid;
var mine;
var mines;



function init() {

    //mines = 60;
    document.getElementById("grid").style.display = "block";

    window.addEventListener('contextmenu', function (e) {

        e.preventDefault();
    }, false);
    grid = document.getElementById("grid");
    grid.innerHTML = "";
    for (var i = 0; i < 20; i++) {
        row = grid.insertRow(i);
        for (var j = 0; j < 20; j++) {
            cell = row.insertCell(j);
            cell.onmousedown = function () { clickOnCell(this, getMouseEvent(event)); };
            mine = document.createAttribute("meta-mine");
            mark = document.createAttribute("mark-mine");
            mark.value = "false";
            mine.value = "false";
            cell.setAttributeNode(mine);
            cell.setAttributeNode(mark);
        }
    }
    function getMouseEvent(event) {
        //alert(event.which);
        // alert(cell.getAttribute("mark-mine") == "false");
        switch (event.which) {
            case 1:
                    return 1

                break;
            case 3:
                
                return 3;
                break;
            default:
                console.log("key not Bound")
                return null;

                
        }
    }
    generateMines();



    function clickOnCell(cell, buttonclick) {
        if (cell.getAttribute("inactive") == "true") {

        }
        else if (buttonclick == 1) {
            if (cell.getAttribute("mark-mine") == "false") {
                //alert(cell.getAttribute("meta-mine") + " onClickCell");
                cell.setAttribute("inactive", "true");
                if (cell.getAttribute("meta-mine") == "true") {

                    alert("game-over");

                    
                    
                    revealBombs();

                }

                else {

                    var mineCount = 0;
                    var cellRow = cell.parentNode.rowIndex;
                    var cellCol = cell.cellIndex;
                    //alert(cellRow + " " + cellCol);
                    for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 19); i++) {
                        for (var j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, 19); j++) {
                            if (grid.rows[i].cells[j].getAttribute("meta-mine") == "true") {
                                mineCount++;
                            }
                        }
                    }

                    //cell.innerHTML = mineCount;               
                    switch (mineCount) {
                        case 0:
                            cell.className = "zero";
                            break;
                        case 1:
                            cell.className = "one";
                            break;
                        case 2:
                            cell.className = "two";
                            break;
                        case 3:
                            cell.className = "three";
                            break;
                        case 4:
                            cell.className = "four";
                            break;
                        case 5:
                            cell.className = "five";
                            break;
                        case 6:
                            cell.className = "six";
                            break;
                        case 7:
                            cell.className = "seven";
                            break;
                        case 8:
                            cell.className = "eight";
                            break;
                    }
                    if (mineCount == 0) {
                        //Reveal all near cells as they do not have a mine
                        for (var i = Math.max(cellRow - 1, 0); i <= Math.min(cellRow + 1, 19); i++) {
                            for (var j = Math.max(cellCol - 1, 0); j <= Math.min(cellCol + 1, 19); j++) {
                                if (grid.rows[i].cells[j].innerHTML == "") {
                                    //alert(grid.rows[i].cells[j]);
                                    cell.innerHTML = " ";
                                    clickOnCell(grid.rows[i].cells[j], 1);


                                }
                            }
                        }


                    }
                    

                    checkWin();

                }
            }

        }
        else if (buttonclick == 3) {
            if (cell.getAttribute("mark-mine") == "true") {
                cell.innerHTML = "";
                cell.setAttribute("mark-mine", "false");
                cell.className = "block";
                cell.classList.remove("flagged");
            }
            else {
                //cell.innerHTML = "X";
                cell.setAttribute("mark-mine", "true");
                cell.className = "flagged";
            }
        }
    }
    function checkWin() {
        var win = true;
        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < 20; j++) {
                if ((grid.rows[i].cells[j].getAttribute("meta-mine") == "false") && (grid.rows[i].cells[j].innerHTML == "")) {
                    win = false;
                }

            }
        }
        if (win) {

            alert("winner");
            revealBombs();

        }
    }

    function generateMines() {

        var rnd1 = Math.floor(Math.random() * 20);
        var rnd2 = Math.floor(Math.random() * 20);
        var cell1 = grid.rows[rnd1].cells[rnd2];
        if (cell1.getAttribute("meta-mine") == "false") {
            cell1.setAttribute("meta-mine", "true");
            // alert(cell.getAttribute("meta-mine") + " generateMines");
            
           // cell1.innerHTML = "X";
            mines--;
            if (mines > 0) {
                generateMines();
            }
        }
        else {
            generateMines();
        }

    }
    function revealBombs() {
        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < 20; j++) {
                var cell = grid.rows[i].cells[j];
                inactive = document.createAttribute("inactive");
                inactive.value = "true";


                if (cell.getAttribute("meta-mine") == "true") {
                    //cell.innerHTML = "X";
                    cell.className = "mine";
                }

                cell.setAttributeNode(inactive);
                
                document.getElementById("easy").style.display = "block";
                document.getElementById("medium").style.display = "block";
                document.getElementById("hard").style.display = "block";
                


            }

        }
    }


}
function difficulty(diff) {
    if (diff == "ez") {
        mines = 40;
    }
    else if (diff == "mid") {
        mines = 60;
    }
    else {
        mines = 100;
    }
    //alert(mines);
    document.getElementById("easy").style.display = "none";
    document.getElementById("medium").style.display = "none";
    document.getElementById("hard").style.display = "none";

    init();


}