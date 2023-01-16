// # Instructions :
// >*Les exercices suivants doivent être résolus en utilisant getElementsByTagName*, mis à part s'il est précisé d'utiliser une autre chose*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Affiche le h3 qui est le premier enfant de la div content

let content = document.getElementById('content');
console.log(content.firstElementChild.innerHTML);

// // ### 2. Affiche l'élément qui a pour Id le titreNiv3 et pour balise h3. affiche h3

let titreNiv3 = document.getElementById('titreNiv3');
console.log(titreNiv3.tagName);

let titreNiv3 = document.getElementById('titreNiv3');
console.log(titreNiv3.innerHTML);

// ### 3. Affiche l'élément qui précède le titreNiv3. le titreNiv3 a pour Id :titreNiv3 et pour balise h3. Console log l'élément qui précède le titreNiv3. l'élément qui précède le titreNiv3 est p id="textGeneral". Récupère le 4eme enfant de la Div id="content".

let content = document.getElementById('content');
let contentChild = content.childNodes[3];
console.log(contentChild);

// // ### 4. Affiche l'élément qui succède à la balise p  = petitParagraphe en utilisant la méthode nextElementSibling

let petitParagraphe = document.getElementById('petitParagraphe');
let petitParagrapheNextSibling = petitParagraphe.nextElementSibling;
console.log(petitParagrapheNextSibling);

// ### 5. Affiche le tag du parent = <ul id="listElements"> =  des éléments <li class="important">
// Affiche le 10 enfant de la <div id="content">

let content = document.getElementById('content');
console.log(content.childNodes[10]);

let important = document.getElementsByClassName('important');
for (let i = 0; i < important.length; i++) {
  if (important[i].parentNode.id == 'listElements') {
    console.log(important[i].parentNode.tagName);
  }
}

// ### 6. Affiche le premier enfant, du parent de "listElements".

//  Récupère le <ul id="listElements"> qui a des <li class="important"></li>. Affiche le tag et contenu du premier enfant de ul en utilisant par Tagname.

let listElements = document.getElementsByTagName('ul');
console.log(listElements[0].firstChild.innerHTML);

// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important", il s'agit du 5eme enfant de <ul>

let listElements = document.getElementsByTagName('ul');
console.log(listElements[0].children[4].innerHTML);

// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral". Il s'agit du 7eme enfant.

let textGeneral = document.getElementById("textGeneral");
let textGeneralSuivant = textGeneral.nextSibling.nextSibling;
console.log(textGeneralSuivant);

let div = document.getElementsByTagName("div")[0];
let septiemeEnfant = div.childNodes[6];
console.log(septiemeEnfant.innerHTML);

// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)

let footer = document.getElementById('footer');
let h1 = footer.getElementsByTagName('h1')[0];
console.log(h1);
let p = h1.nextElementSibling;
console.log(p);
let span = p.getElementsByTagName('span')[0];
console.log(span);
let b = span.getElementsByTagName('b')[0];
console.log(b);

let footer = document.getElementById('footer');
let child = footer.children[2];
console.log(child);

// ### 10. En partant de Nicolas, affiche Primo

let primo = document.querySelector('p > span > b').parentNode.parentNode.nextSibling.nextSibling.querySelector('span > b');
primo.innerHTML = 'Primo';
console.log(primo);

// // ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"

let grandParagraphe = document.querySelector('.grandParagraphe');
console.log(grandParagraphe);

// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dans une boucle

let liste = document.querySelectorAll('li');
for (let i = 0; i < liste.length; i++) {
  console.log(liste[i]);
}