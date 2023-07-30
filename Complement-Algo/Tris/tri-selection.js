// Exercice 2 - Le tri par sélection :

// Sur un tableau de n éléments(numérotés de 0 à n - 1, attention un tableau de 5 valeurs(5 cases) sera numéroté de 0 à 4 et non de 1 à 5),
// le principe du tri par sélection est le suivant:
// rechercher le plus petit élément du tableau, et l'échanger avec l'élément d'indice 0 ;
// rechercher le second plus petit élément du tableau, et l'échanger avec l'élément d'indice 1 ;
// continuer de cette façon jusqu'à ce que le tableau soit entièrement trié.

// PROCEDURE tri_selection(T)
//     iterations <- 0
//     POUR i VARIANT DE 0 À longueur(T) - 2 FAIRE
//         minIndex <- i
//         POUR j VARIANT DE i + 1 À longueur(T) - 1 FAIRE
//             iterations <- iterations + 1
//             SI T[j] < T[minIndex] ALORS
//                 minIndex <- j
//             FIN SI
//         FIN POUR

//         SI minIndex ≠ i ALORS
//             temp <- T[i]
//             T[i] <- T[minIndex]
//             T[minIndex] <- temp
//         FIN SI
//     FIN POUR
//     RETOURNER iterations
// FIN PROCEDURE

function tri_selection(T) {
  let iterations = 0;
  for (let i = 0; i < T.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < T.length; j++) {
      iterations++;
      if (T[j] < T[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = T[i];
      T[i] = T[minIndex];
      T[minIndex] = temp;
    }
  }
  return iterations;
}

let monTableau = [5, 7, 9, 6, 8, 24, 21];
console.log("Tableau initial : ", monTableau);

const iterationsTotales = tri_selection(monTableau);

console.log("Tableau trié : ", monTableau);
console.log("Nombre total d'itérations tri_selection : ", iterationsTotales);
