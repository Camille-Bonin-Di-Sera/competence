//exo 3 - Le tri par insertion :

// Le tri par insertion considère chaque élément du tableau et l'insère à la bonne place parmi les éléments déjà triés.
// Ainsi, au moment où on considère un élément, les éléments qui le précèdent sont déjà triés,
// tandis que les éléments qui le suivent ne sont pas encore triés.

// fonction tri_insertion(T) :
//     pour i de 1 à taille(T) faire :
//         element_courant = T[i]
//         j = i - 1
//         tant que j >= 0 et T[j] > element_courant faire :
//             T[j+1] = T[j]
//             j = j - 1
//         T[j+1] = element_courant

function tri_insertion(T) {
  let iterations = 0;
  for (let i = 0; i < T.length - 1; i++) {
    let element_courant = T[i];
    let j = i - 1;
    while (j >= 0 && T[j] > element_courant) {
      T[j + 1] = T[j];
      j = j - 1;
      T[j + 1] = element_courant;
      iterations++;
    }
  }
  return iterations;
}

let monTableau = [7, 21, 5, 24, 8, 6, 29];
console.log("Tableau initial : ", monTableau);

const iterationsTotales = tri_insertion(monTableau);

console.log("Tableau trié : ", monTableau);
console.log("Nombre total d'itérations tri_insertion : ", iterationsTotales);
