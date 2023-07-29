//exo 3 - Implémenter l'algorithme de tri par insertion :

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
$;
