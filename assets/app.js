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

//** Au click du lecteur lancement de la vidéo */
play.addEventListener('click', function() {
    document.getElementById('miniature').style.display = 'none';
    document.getElementById('video').play();
});
