
function tri_insertion(T, gap) {
  for (let i = gap; i < T.length; i++) {
    let elementCourant = T[i];
    let j = i - gap;

    while (j >= 0 && T[j] > elementCourant) {
      T[j + gap] = T[j];
      j = j - gap;
    }

    T[j + gap] = elementCourant;
  }
}

function tri_shell(T) {
  const ecarts = [5, 3, 1];

  for (let gap of ecarts) {
    tri_insertion(T, gap);
  }
}

// Exemple d'utilisation :
const monTableau = [64, 34, 25, 12, 22, 11, 90];
console.log("Tableau initial : ", monTableau);

tri_shell(monTableau);

console.log("Tableau trié : ", monTableau);