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
const play = document.getElementById('play')
document.getElementById('popover').style.display = 'none'

function afficher() {
    document.getElementById('popover').style.display = 'block'   
}

play.addEventListener('mouseover', function() { // délai de 1 seconde pour afficher si pas de click
    setTimeout(afficher, 1000)
}) 

play.addEventListener('mouseout', function() {
    document.getElementById('popover').style.display = 'none'
})

//** Au click de l'icon lecteur lancement de la vidéo */
play.addEventListener('click', function() {
    document.getElementById('miniature').style.display = 'none'
    document.getElementById('video').play()
})

//** En dessous de 1024px de largeur les titres de produits sont complet */
const screenWidth = screen.width

if(screenWidth <= 1023) {
    document.getElementById('textCut').style.display = 'none'
    document.getElementById('textCut').nextElementSibling.style.display = 'block'
}else {
    document.getElementById('textCut').style.display = 'block';
    document.getElementById('textCut').nextElementSibling.style.display = 'none'
}

// //** En dessous de 815px de largeur header mobile affiché */
// document.getElementById('header-mobile').style.display = 'none';

// if(screenWidth <= 814) {
//     document.getElementById('header').style.display = 'none';
//     document.getElementById('header-mobile').style.display = 'block';
// };

//** Au scroll de la page sur Y au top ... */
window.addEventListener('scroll', function() {
    var blockHead = document.getElementById('block-head')
    var logoHeader = document.getElementById('logo-header')
    var header = document.querySelector('header')
    var blockDropdown = document.getElementById('search-dropdown-background')

    blockHead.classList.toggle('none', window.pageYOffset > 0) // Mini entête du header au top 0 disparaît
    logoHeader.classList.toggle('up', window.pageYOffset > 0)
    header.classList.toggle('Shadow', window.pageYOffset > 0) // Ombre dessous de la navbar s'affiche
    blockDropdown.classList.toggle('up', window.pageYOffset > 0) // Fermeture jour entre input search et block suggestions
})

//** Fonction pour la bar de recherche qui s'ouvre au click et se ferme au click de la croix */
document.getElementById('input-search').onclick = function() {
    SearchGrowfunction()
}

document.getElementById('cross').onclick = function() {
    SearchClosefunction()
}

function SearchGrowfunction() {
    document.getElementById('search').classList.add('grow') // Ouverture de la bar de recherche effet slide
    document.getElementById('cross').classList.add('show') // Affichage de la croix dans la bar de recherche
    document.getElementById('search').classList.remove('close') // fermeture de la bar de recherche effet slide
    document.getElementById('logo-header').classList.add('d-none') // logo disparaît sous la bar de recherche  
    document.getElementById('search-dropdown-background').classList.add('dropdown') // Affiche bakcground dropdown en plein largeur de l'écran
    document.getElementById('dropdown-list').classList.add('dropright') // Slide droite des textes de suggestion de la bar de recherche
}

function SearchClosefunction() {
    document.getElementById('search').classList.remove('grow')  
    document.getElementById('cross').classList.remove('show')   
    document.getElementById('search').classList.add('close')
    document.getElementById('logo-header').classList.remove('d-none')
    document.getElementById('search-dropdown-background').classList.remove('dropdown')   
    document.getElementById('dropdown-list').classList.remove('dropright')    
}

//** Fonction pour la bar de recherche qui s'ouvre au click et se ferme au click de la croix pour mobile */
document.getElementById('icon-search').onclick = function() {
    SearchGrowMobilefunction();

}

//** Fonction pour la bar de recherche qui s'ouvre au click et se ferme au click de la croix pour mobile */
document.getElementById('cross-mobile').onclick = function() {
    SearchCloseMobilefunction();

}

function SearchGrowMobilefunction() {
    document.getElementById('logo-header').classList.add('hide')
    document.getElementById('nav-header').classList.add('hide')
    document.getElementById('nav-search').classList.add('show')
    document.getElementById('dropdown-list-m').classList.add('dropright')
}

function SearchCloseMobilefunction() {
    document.getElementById('logo-header').classList.remove('hide')
    document.getElementById('nav-header').classList.remove('hide')
    document.getElementById('nav-search').classList.remove('show')
}

//** Pour un effet d'apparation des éléments au scroll de la page sur Y */
const ratio = .1 // (10%) 
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const callback = function(entries, observer) { 
    entries.forEach(entry => {
        if(entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(callback, options)
    document.querySelectorAll('[class*="reveal').forEach( e => {
    observer.observe(e);
})

// Ouverture et fermeture des menus et sous-menu avec changement d'icon + & -
document.getElementById('sub-btn1').onclick = function() {
    document.getElementById('plus1').classList.toggle('hide');
    document.getElementById('dash1').classList.toggle('show');
}

document.getElementById('sub-btn2').onclick = function() {
    document.getElementById('plus2').classList.toggle('hide');
    document.getElementById('dash2').classList.toggle('show');
}

document.getElementById('sub-btn3').onclick = function() {
    document.getElementById('plus3').classList.toggle('hide');
    document.getElementById('dash3').classList.toggle('show');
}

document.getElementById('sub-btn4').onclick = function() {
    document.getElementById('plus4').classList.toggle('hide');
    document.getElementById('dash4').classList.toggle('show');
}

document.getElementById('sub-btn5').onclick = function() {
    document.getElementById('plus5').classList.toggle('hide');
    document.getElementById('dash5').classList.toggle('show');
}

document.getElementById('sub-btn6').onclick = function() {
    document.getElementById('plus6').classList.toggle('hide');
    document.getElementById('dash6').classList.toggle('show');
}

document.getElementById('sub-btn7').onclick = function() {
    document.getElementById('plus7').classList.toggle('hide');
    document.getElementById('dash7').classList.toggle('show');
}

document.getElementById('sub-btn8').onclick = function() {
    document.getElementById('plus8').classList.toggle('hide');
    document.getElementById('dash8').classList.toggle('show');
}


document.getElementById('btn-menu').onclick = function() {
    document.querySelector('body').classList.add('modalOpen'); // pour bloquer le scroll de la page principal quan le menu et ouvert
    document.querySelector('aside').classList.add('open'); // pour afficher le fond en opacité 30% 
    document.getElementById('sideBar').classList.add('open'); // pour ouvrir le menu vertical
}


document.getElementById('MenuCross').onclick = function() {
    document.querySelector('body').classList.remove('modalOpen'); 
    document.querySelector('aside').classList.remove('open'); 
    document.getElementById('sideBar').classList.remove('open'); 
}
