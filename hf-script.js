

// Hides the container div and reveals a hidden div overlay to display additional content.
function overlayActivate(input) {

    // Opens the overlay for the closed stair image.
    if (input == 1) {
        document.getElementById("stairsClosedDivOver").className = "imgContOverlayRevealed";
    }
    // Opens the overlay for the open stair compartment image.
    else if (input == 2) {

        document.getElementById("stairsOpenDivOver").className = "imgContOverlayRevealed";
    }
    // Opens the overlay for the property layout image.
    else if (input == 3) {
        document.getElementById("hiddenPartDivOver").className = "imgContOverlayRevealed";
    }
    // Hides the primary container div that holds the content provided on page load.
    document.getElementById("container").className = "containerHide";
}


// Hides the overlay div and reveals the primary container div.
function closeOverlay(closeInput) {
    // Closes the overlay for the closed stair image.
    if (closeInput == 1) {
        document.getElementById("stairsClosedDivOver").className = "imgContOverlayHidden";
    }
    // Closes the overlay for the open stair compartment image.
    else if (closeInput == 2) {
        document.getElementById("stairsOpenDivOver").className = "imgContOverlayHidden";
    }
    // Closes the overlay for the property layout image.
    else if (closeInput == 3) {
        document.getElementById("hiddenPartDivOver").className = "imgContOverlayHidden";
    }
    // Shows the primary container div.
    document.getElementById("container").className = "containerVis";
}