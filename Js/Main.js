// Scripte principale pour le site de procrastination

// Fonction pour le menu Burger s'affiche et se cache
const navToggle = document.querySelector('#nav-toggle');
const nav = document.querySelector('.nav-principale');
const contenu = document.querySelector('main');
const liensNav = document.querySelectorAll('.nav-principale a');

function synchroniserMenu() {
	const ouvert = navToggle.checked;

	document.body.style.overflow = ouvert ? 'hidden' : '';
	contenu.style.pointerEvents = ouvert ? 'none' : '';
	nav.style.pointerEvents = ouvert ? 'auto' : '';
}

navToggle.addEventListener('change', synchroniserMenu);

liensNav.forEach((lien) => {
	lien.addEventListener('click', () => {
		navToggle.checked = false;
		synchroniserMenu();
	});
});