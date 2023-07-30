//exo 4 - Le tri par shell :

// Shell, constitue une variante optimisée du tri par insertion.
// Le tri par insertion provoquait le décalage de tous les éléments plus grands que l’élément à insérer.
// Dans le tri Shell, les éléments ne sont pas décalés d’un élément à la fois, mais de plusieurs éléments,
// dont la différence d’indice est appelée "pas".

// PROCEDURE tri_insertion(T, gap)
//     POUR i VARIANT DE gap À longueur(T) FAIRE
//         elementCourant <- T[i]
//         j <- i - gap

//         TANT QUE j >= 0 ET T[j] > elementCourant FAIRE
//             T[j + gap] <- T[j]
//             j <- j - gap
//         FIN TANT QUE

//         T[j + gap] <- elementCourant
//     FIN POUR
// FIN PROCEDURE

// PROCEDURE tri_shell(T)
//     ECARTS <- [5, 3, 1] // Séquence d'écarts (par exemple)

//     POUR chaque gap DANS ECARTS FAIRE
//         tri_insertion(T, gap)
//     FIN POUR
// FIN PROCEDURE

function tri_insertion(T, gap) {
  let iterations = 0;
  for (let i = gap; i < T.length; i++) {
    let elementCourant = T[i];
    let j = i - gap;

    while (j >= 0 && T[j] > elementCourant) {
      T[j + gap] = T[j];
      j = j - gap;
      iterations++;
    }

    T[j + gap] = elementCourant;
  }
  return iterations;
}

function tri_shell(T) {
  const ecarts = [5, 3, 1];
  let totalIterations = 0;

  for (let gap of ecarts) {
    totalIterations += tri_insertion(T, gap);
  }
  return totalIterations;
}

const monTableau = [64, 34, 25, 12, 22, 11, 90];
console.log("Tableau initial : ", monTableau);

const iterationsTotales = tri_shell(monTableau);

console.log("Tableau trié : ", monTableau);
console.log("Nombre total d'itérations  tri_shell : ", iterationsTotales);
