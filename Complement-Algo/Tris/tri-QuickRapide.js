// Tri rapide

// L’algorithme de tri rapide, "quick sort" en anglais, est un algorithme de type dichotomique.Son
// principe consiste à séparer l’ensemble des éléments en deux parties.
//   s.La différence par rapport au tri fusion, vu précédemment,
//     est que la séparation des différentes valeurs ne s’effectue pas n’importe comment.

// partition(tableau T, entier premier, entier dernier)
//     debut
//         entier compteur, pivot, i
//         compteur<-premier
//         pivot<-T(premier)

//         pour i=deb+1 à dernier faire
//             si T(i)<pivot alors //si l'élément est inférieur au pivot
//                 compteur<-compteur+1 //on incrémente le compteur (modification de la place finale du pivot)
//                 echanger(T,compteur,i) //on place l'élément à la position finale du pivot
//             fin si
//         fin pour

//         echanger(T,compteur,premier) //on place le pivot à sa place
//         retourner(compteur) //on renvoie la position finale du pivot
//     fin

// tri_rapide_bis(tableau T, entier premier, entier dernier)
//     debut
//         entier pivot

//         si premier<dernier alors //condition d'arret de la récursivité
//             pivot<-partition(T,premier,dernier) //partition du tableau en 2
//             tri_rapide_bis(T,premier,pivot-1) //tri de la premiére partition
//             tri_rapide_bis(T,pivot+1,dernier) //tri de la seconde partition
//         fin si
//     fin

// tri_rapide(tableau T)
//     debut
//         tri_rapide_bis(T,0,taille(T)-1)) //tri du tableau entier
//     fin

function partition(T, premier, dernier) {
  let compteur = premier;
  let pivot = T[premier];

  for (let i = premier + 1; i <= dernier; i++) {
    if (T[i] < pivot) {
      compteur++;
      [T[compteur], T[i]] = [T[i], T[compteur]];
    }
  }

  [T[compteur], T[premier]] = [T[premier], T[compteur]];
  return compteur;
}

function tri_rapide_bis(T, premier, dernier) {
  if (premier < dernier) {
    const pivot = partition(T, premier, dernier);
    tri_rapide_bis(T, premier, pivot - 1);
    tri_rapide_bis(T, pivot + 1, dernier);
  }
}

function tri_rapide(T) {
  tri_rapide_bis(T, 0, T.length - 1);
}

// Exemple d'utilisation :
const tableau = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Tableau initial : ", tableau);
tri_rapide(tableau);
console.log("Tableau trié par tri rapide :", tableau);
