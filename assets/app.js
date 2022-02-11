/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';


//** Au survole bouton play un popover indique "Lire la vidéo" avec un délai avant l'affichage */
const play = document.getElementById('play');
document.getElementById('popover').style.display = 'none';

function afficher() {
    document.getElementById('popover').style.display = 'block';   
}

play.addEventListener('mouseover', function() { // délai de 1 seconde pour afficher si pas de click
    setTimeout(afficher, 1000);
});  

play.addEventListener('mouseout', function() {
    document.getElementById('popover').style.display = 'none';
});

//** Au click de l'icon lecteur lancement de la vidéo */
play.addEventListener('click', function() {
    document.getElementById('miniature').style.display = 'none';
    document.getElementById('video').play();
});

//** En dessous de 1024px de largeur les titres de produits sont complet */
const screenWidth = screen.width;

if(screenWidth <= 1023) {
    document.getElementById('textCut').style.display = 'none';
    document.getElementById('textCut').nextElementSibling.style.display = 'block';
}else {
    document.getElementById('textCut').style.display = 'block';
    document.getElementById('textCut').nextElementSibling.style.display = 'none';
};

//** En dessous de 815px de largeur header mobile affiché */
document.getElementById('header-mobile').style.display = 'none';

if(screenWidth <= 814) {
    document.getElementById('header').style.display = 'none';
    document.getElementById('header-mobile').style.display = 'block';
};

//** Au scroll de la page sur Y au top ... */
window.addEventListener('scroll', function() {
    var blockHead = document.getElementById('block-head'); 
    var logoHeader = document.getElementById('logo-header');
    var header = document.querySelector('header');
    var headerMobile = document.getElementById('header-mobile');

    blockHead.classList.toggle('none', window.scrollY > 0); // Mini entête du header disparait
    logoHeader.classList.toggle('up', window.scrollY > 0);
    header.classList.toggle('Shadow', window.scrollY > 0); // Ombre dessous de la navbar s'affiche
    headerMobile.classList.toggle('Shadow', window.scrollY > 0); // Ombre dessous de la navbar-mobile s'affiche
});


document.getElementById('input-search').onclick = function() {
    SearchGrowfunction();
};

function SearchGrowfunction() {
    document.getElementById('search').classList.add('grow');   
    document.getElementById('logo-header').classList.add('d-none');   
}
