// Initialization of exit mobile navbar button
let navbarExitButton = document.getElementById('exit');
//Make exit mobile button to not display
navbarExitButton.style.display = 'none';

//Function that runs when user clicks on button that shows the mobile navbar
function navbarResponsive() {
    let navbar = document.getElementById('mobileNav');

    /*The navbar and the exit button display*/
    navbar.style.display = 'block';
    navbarExitButton.style.display = 'block';

}

//Function that runs when user clicks on button that exits the mobile navbar
function navbarExit() {
    let navbar = document.getElementById('mobileNav');

    /* The navbar and the exit button don't display */
    navbarExitButton.style.display = 'none';
    navbar.style.display = 'none';

}