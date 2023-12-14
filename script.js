var navMenuBurgerArray = ['/images/default-menu-burger.svg', '/images/active-menu-burger.svg'];
var imgToggle = 0;

//Initializes on page load

/*
new function init() {
    var clickEvent = document.getElementById();
}
*/


function dropMenu() {
imgToggle++;
document.getElementById("navMenuToggle").src = navMenuBurgerArray[imgToggle];
if (imgToggle == navMenuBurgerArray.length) {
    imgToggle = -1;
}

document.getElementById("navMenuCont").idList.toggle("show");
}


// window.onclick = dropMenu(event)