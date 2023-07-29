// Exercice 2 - Implémenter l'algorithme de tri par sélection :

// Sur un tableau de n éléments(numérotés de 0 à n - 1, attention un tableau de 5 valeurs(5 cases) sera numéroté de 0 à 4 et non de 1 à 5),
// le principe du tri par sélection est le suivant:
// rechercher le plus petit élément du tableau, et l'échanger avec l'élément d'indice 0 ;
// rechercher le second plus petit élément du tableau, et l'échanger avec l'élément d'indice 1 ;
// continuer de cette façon jusqu'à ce que le tableau soit entièrement trié.

function tri_selection(T) {
  for (let i = 0; i < T.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < T.length; j++) {
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
}

let monTableau = [5, 7, 9, 6, 8, 24, 21];
console.log("Tableau initial : ", monTableau);

tri_selection(monTableau);

console.log("Tableau trié : ", monTableau);
