//Sets an array that contains the file location of two .svg files. These serve as icons for the dropdown menu.
var navMenuBurgerArray = ['/images/default-menu-burger.svg', '/images/active-menu-burger.svg'];

//Global variable declared and initialized as 0. This is used to check both the position in the array and the current state of the menu. It's also used to change navMenuToggle's source image.
var menuToggle = 0;


//When dropButton is clicked, menuToggle's value is checked against the length of the array, and then either the menu opens and the button changes its image and background color, or the menu closes and the button reverts back to its default state.
function dropMenu() {

    //Opens the menu.
    if (menuToggle == navMenuBurgerArray.length - 2) {
        menuToggle++;

        document.getElementById("navMenuToggle").src = navMenuBurgerArray[menuToggle];
        document.getElementById("navMenuCont").className = "openedMenuCont";
        document.getElementById("dropButton").style.background = "#20572b";
    }

    //Closes the menu.
    else if (menuToggle == navMenuBurgerArray.length - 1) {
        menuToggle--;

        document.getElementById("navMenuToggle").src = navMenuBurgerArray[menuToggle];
        document.getElementById("navMenuCont").className = "closedMenuCont";
        document.getElementById("dropButton").style.backgroundColor = null;
        //Setting style.backgroundColor to anything else would break the :hover style effect, so we clear the property instead with null.
    }

}
