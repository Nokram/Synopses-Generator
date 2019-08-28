// ici je mets de côté la partie récupération du fichier JSON
// sur le serveur, on part direct avec un objet JS :
const json = {
   // Dictionnaire
   "Nombre": ["Un", "Une", "Un groupe de"],
   "Acteur": ["Homin", "Homine", "Fyros", "Matis", "Tryker", "Zorai", "Maraudeur", "Ranger"],
   "Action-FR": ["était en prospection", "étudiait les plantes", "combattait un kitin", "buvait une bière"],
   "Problème": ["mais fut interrompu", "et se retrouva à terre subitement", "et perdit connaissance"],
   "Quête": ["Il faut découvrir ce qu'il s'est passé"],
   // Dictrionnary
   "Number": ["A", "A group of"],
   "Actor": ["Homin", "Homina", "Fyros", "Matis", "Tryker", "Zorai", "Maraudeur", "Ranger"],
   "Action-EN": ["was prospecting", "was studying plants", "was fighting a kitin", "was drinking a beer"],
   "Problem": ["but was interrupted", "and suddenly found himself ashore", "and lost consciousness"],
   "Quest": ["We need to find out what happened"]
};

const pElement = document.getElementById('FR');
const pElementEN = document.getElementById('EN');
const buttonElement = document.querySelector('button');

function motAléatoire(type) {
   const liste = json[type];
   return liste[Math.floor(liste.length * Math.random())];
}

function phraseAléatoire() {
   return motAléatoire('Nombre') + ' ' + motAléatoire('Acteur') + ' ' + motAléatoire('Action-FR') + ' ' + motAléatoire('Problème') + '.' + motAléatoire('Quête');
}

function phraseAléatoireEN() {
   return motAléatoire('Number') + ' ' + motAléatoire('Actor') + ' ' + motAléatoire('Action-EN') + ' ' + motAléatoire('Problem') + '.' + motAléatoire('Quest');
}

buttonElement.addEventListener('click', e => {
   pElement.textContent = phraseAléatoire();
   pElementEN.textContent = phraseAléatoireEN();
})
