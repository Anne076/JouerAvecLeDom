// 1) on appelle la fonction de mise en place des écouteurs lorsque l'arbre DOM est prêt
document.addEventListener("DOMContentLoaded", ajouterLesEcouteurs);


// 2) on met en place des écouteurs pour détecter quand l'utilisateur clique dans la zone de texte, saisit du texte, sort de la zone d'input et clique sur le bouton
function ajouterLesEcouteurs() {
    // La liste des évènements écoutable est dispo sur le mdn
    // https://developer.mozilla.org/fr/docs/Web/Events

    // on ajoute un écouteur lorsque l'utlisateur entre dans le champ de pseudo
    document.querySelector("#pseudo").addEventListener("focus", mettreAJourLeContenuDuParagrapheInfo);


    // on ajoute un écouteur lorsque l'utlisateur entre dans le champ de contenu
    document.querySelector("#leContenu").addEventListener("focus", mettreAJourLeContenuDuParagrapheInfo);

    // on ajoute un écouteur lorsque l'utilisateur clique sur le bouton
    document.querySelector("#envoi").addEventListener("click", insererCeQueLUtilisateurASaisi);

}


// 3) on définit les fonctions d'actions à mener lorsque l'utilisateur interagit

// On met à jour la zone d'information
function mettreAJourLeContenuDuParagrapheInfo(e) {
    console.log("on a cliqué dans un des input");
    // on récupère le paragraphe de la zone d'information dans le DOM
    // https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector

    var cible = document.querySelector('#parInfo');
    // on met à jour le contenu avec la propriété textContent
    // https://developer.mozilla.org/fr/docs/Web/API/Node/textContent
    // on sait quel input a été cliqué grâce à l'attribut target de l'évènement
    // https://developer.mozilla.org/fr/docs/Web/API/Event/target
    cible.textContent = `L'utilisateur a cliqué dans l'input ${e.target.id}`;

}

// on insère dans le DOM le texte saisi par l'utilisateur
function insererCeQueLUtilisateurASaisi(e) {
    console.log("on a cliqué sur le bouton");
    // on bloque l'envoi du formulaire au serveur
    e.preventDefault();
    // on envoie l'info à  la zone d'info
    document.querySelector('#parInfo').textContent="L'utilisateur a cliqué sur le bouton";
    // on récupère le contenu des 2 input grâce à l'attribut value
    // https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input#Attributs_communs_%C3%A0_lensemble_des_types
    var textePseudo = document.querySelector("#pseudo").value;
    var texteContenu = document.querySelector("#leContenu").value;
    // on créé une chaine de caractères avec le contenu à ajouter dans la zone cible
    var chaineContenu = `${textePseudo} a écrit : ${texteContenu}`;
    // on créé un nouveau paragraphe
    var nouveauParagraphe=document.createElement('p');
    // on insère la chaine de caractère comme contenu du paragraphe
    nouveauParagraphe.textContent=chaineContenu;
    // on injecte le paragraphe dans la section cible
    document.querySelector("#zoneCible").appendChild(nouveauParagraphe);
}




