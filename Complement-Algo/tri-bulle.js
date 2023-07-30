// Exercice 1 - Le tri par bulles :

//Le tri à bulle consiste à parcourir un tableau, par exemple de gauche à droite,
// en comparant les éléments côte à côte et en les permutant s’ils ne sont pas dans le bon ordre.
//Au cours d’une passe du tableau, les plus grands éléments remontent de proche en proche vers la droite comme des bulles vers la surface.

//Exemple :

// les éléments e1 et e2 consécutifs d'un tableau et d'effecteur une permutation si e1 > e2.
//On continue de trier jusqu'à ce qu'il n'y ait plus de permutation.

//Comment je l'ai compris : Tant que les elements ne sont pas dans l'ordre croissant i va parcourir le tableau et comparer e1 et e2
// Si e2 est plus petit que e1 alors ils echange de position

// tri_à_bulles(Tableau T)
//    pour i allant de taille de T - 1 à 1
//        pour j allant de 0 à i - 1
//            si T[j+1] < T[j]
// échanger(T[j + 1], T[j])

function tri_a_bulles(T) {
  let iterations = 0; // Compteur d'itérations
  for (let i = T.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (T[j + 1] < T[j]) {
        let temp = T[j];
        T[j] = T[j + 1];
        T[j + 1] = temp;
      }
      iterations++;
    }
  }
  return iterations;
}

let monTableau = [64, 90, 25, 12, 22, 11, 34];
console.log("Tableau initial : ", monTableau);

const iterationsTotales = tri_a_bulles(monTableau);

console.log("Tableau trié : ", monTableau);
console.log("Nombre total d'itérations tri_a_bulles : ", iterationsTotales);
