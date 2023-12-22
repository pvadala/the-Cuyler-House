


function overlayActivate(input) {

    if (input == 1) {

        document.getElementById("stairsClosedDiv").className = "imgContOverlayRevealed";


    }

    else if (input == 2) {

        document.getElementById("stairsOpenDiv").className = "imgContOverlayRevealed";


    }

    else if (input == 3) {

        document.getElementById("hiddenPartDiv").className = "imgContOverlayRevealed";


    }
}

function close(closeInput) {

    if (closeInput == 1) {
        document.getElementById("stairsClosedDiv").className = "imgContOverlayHidden";
    }

    else if (closeInput == 2) {
        document.getElementById("stairsOpenDiv").className = "imgContOverlayHidden";
    }

    else if (closeInput == 3) {
        document.getElementById("hiddenPartDiv").className = "imgContOverlayHidden";
    }
}