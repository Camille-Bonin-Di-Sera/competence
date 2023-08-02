// // //exo 6 tri par fusion  (merge sort)

// Il s’agit à nouveau d’un tri suivant le paradigme diviser pour régner. Le principe du tri fusion (ou tri par interclassement) en est le suivant :

// On divise en deux moitiés la liste à trier (en prenant par exemple, un élément sur deux pour chacune des listes).
// On trie chacune d’entre elles.
// On fusionne les deux moitiés obtenues pour reconstituer la liste triée.

// Code source du tri "fusion"
// fusion(tableau T,entier premier1,entier dernier1,entier dernier2)
//     debut
//         tableau Tbis
//         entier premier2, compteur1, compteur2, i

//         premier2<-dernier1+1
//         compteur1<-premier1
//         compteur2<-premier2

//         taille(T)<-(dernier1-premier1+1) //taille du premier sous tableau

//         //on recopie dans T les éléments du premier sous tableau
//         pour i=premier1 à dernier1 faire
//             Tbis(i-premier1)<-T(i)
//         fin pour

//         //on fusionne ensuite les deux sous tableaux
//         pour i=premier1 à dernier2 faire
//             si compteur1=premier2 alors //tous les éléments du premier sous tableau ont été utilisés
//                 arret pour //tous les éléments sont donc classés
//             sinon si compteur2=(dernier2+1) alors //tous les éléments du second sous tableau ont été utilisés
//                 T(i)=Tbis(compteur1-premier1) //on recopie à la fin du tableau les éléments du premier sous tableau
//                 compteur1<-compteur1+1
//             sinon si Tbis(compteur1-premier1)<T(compteur2) alors //l'élément du premier sous tableau est le plus petit
//                 T(i)<-Tbis(compteur1-premier1) //on ajoute un élémnt du premier sous tableau
//                 compteur1<-compteur1+1 //on progresse dans le premier sous tableau
//             sinon //c'est l'élément du second sous tableau qui est le plus petit
//                 T(i)<-T(compteur2) //on recopie cette élément à la suite du tableau
//                 compteur2<-compteur2+1 //on progresse dans le second tableau
//             fin si
//         fin pour
//     fin

// tri_fusion_bis(tableau T,entier premier,entier dernier)
//     debut
//         entier milieu;

//         si premier<>dernier alors
//             //si l'indice du premier et du dernier élément à traiter
//             //est différent (condition d'arret de l'algorithme)
//             milieu<-(premier+dernier)/2
//             tri_fusion_bis(T,premier,milieu) //tri de la premiére moitiée du sous tableau
//             tri_fusion_bis(T,milieu+1,dernier) //tri de la seconde moitiée du sous tableau
//             fusion(T,premier,milieu,dernier) //fusion des deux sous moitiées
//         fin si
//     fin

// tri_fusion(tableau T)
//     debut
//         entier longueur
//         longueur<-taille(T)

//         si longueur>0 alors
//             tri_fusion_bis(T,0,longueur-1)
//         fin si
//     fin

function fusion(T, premier1, dernier1, dernier2) {
  let Tbis = [];
  let premier2, compteur1, compteur2, i;
  let iterations = 0;

  premier2 = dernier1 + 1;
  compteur1 = premier1;
  compteur2 = premier2;

  let taille = dernier1 - premier1 + 1; //taille du premier sous tableau

  //on recopie dans Tbis les éléments du premier sous tableau
  for (i = premier1; i <= dernier1; i++) {
    Tbis[i - premier1] = T[i];
  }

  //on fusionne ensuite les deux sous tableaux
  for (i = premier1; i <= dernier2; i++) {
    iterations++;
    if (compteur1 === premier2) {
      //tous les éléments du premier sous tableau ont été utilisés
      break; //tous les éléments sont donc classés
    } else if (compteur2 === dernier2 + 1) {
      //tous les éléments du second sous tableau ont été utilisés
      T[i] = Tbis[compteur1 - premier1]; //on recopie à la fin du tableau les éléments du premier sous tableau
      compteur1++;
    } else if (Tbis[compteur1 - premier1] < T[compteur2]) {
      //l'élément du premier sous tableau est le plus petit
      T[i] = Tbis[compteur1 - premier1]; //on ajoute un élément du premier sous tableau
      compteur1++; //on progresse dans le premier sous tableau
    } else {
      //c'est l'élément du second sous tableau qui est le plus petit
      T[i] = T[compteur2]; //on recopie cet élément à la suite du tableau
      compteur2++; //on progresse dans le second tableau
    }
  }

  return iterations;
}

function tri_fusion_bis(T, premier, dernier) {
  let milieu;
  let iterations = 0;

  if (premier !== dernier) {
    //si l'indice du premier et du dernier élément à traiter est différent (condition d'arrêt de l'algorithme)
    milieu = Math.floor((premier + dernier) / 2);
    iterations += tri_fusion_bis(T, premier, milieu); //tri de la première moitié du sous tableau
    iterations += tri_fusion_bis(T, milieu + 1, dernier); //tri de la seconde moitié du sous tableau
    iterations += fusion(T, premier, milieu, dernier); //fusion des deux sous-moitiés
  }

  return iterations;
}

function tri_fusion(T) {
  let longueur = T.length;
  let iterations = 0;

  if (longueur > 0) {
    iterations = tri_fusion_bis(T, 0, longueur - 1);
  }

  return iterations;
}

// Exemple avec un tableau à trier
let tableauATrier = [64, 34, 25, 12, 22, 11, 90];
console.log("Tableau non trié:", tableauATrier);

let iterations = tri_fusion(tableauATrier);
console.log("Tableau trié:", tableauATrier);
console.log("Nombre d'itérations:", iterations);
