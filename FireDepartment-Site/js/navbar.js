let navbarExitButton = document.getElementById('exit');
navbarExitButton.style.display = 'none';

function navbarResponsive() {
    let navbar = document.getElementById('mobileNav');
    navbar.style.display = 'block';
    navbarExitButton.style.display = 'block';

}

function navbarExit() {
    let navbar = document.getElementById('mobileNav');
    let navbarExitButton = document.getElementById('exit');
    navbarExitButton.style.display = 'none';
    navbar.style.display = 'none';

}