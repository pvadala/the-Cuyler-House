


function overlayActivate(input) {

    if (input == 1) {
        document.getElementById("stairsClosedDivOver").className = "imgContOverlayRevealed";
    }

    else if (input == 2) {

        document.getElementById("stairsOpenDivOver").className = "imgContOverlayRevealed";
    }

    else if (input == 3) {
        document.getElementById("hiddenPartDivOver").className = "imgContOverlayRevealed";
    }
}

function closeOverlay(closeInput) {

    if (closeInput == 1) {
        document.getElementById("stairsClosedDivOver").className = "imgContOverlayHidden";
    }

    else if (closeInput == 2) {
        document.getElementById("stairsOpenDivOver").className = "imgContOverlayHidden";
    }

    else if (closeInput == 3) {
        document.getElementById("hiddenPartDivOver").className = "imgContOverlayHidden";
    }
}