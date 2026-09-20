//ex1
function nombresPairs(nombres) {
  return nombres.filter((n) => n % 2 === 0);
}
console.log(nombresPairs([1, 2, 3, 4, 5, 6])); 
//ex2
function multiplesDeTrois(nombres) {
  return nombres.filter((n) => n % 3 === 0);
}
console.log(multiplesDeTrois([1, 3, 4, 6, 9, 10])); 
//ex3
function nombresPositifs(nombres) {
  return nombres.filter((n) => n > 0);
}
console.log(nombresPositifs([-3, 2, -1, 5, 0])); 
//ex4
function longueurPaire(chaines) {
  return chaines.filter((mot) => mot.length % 2 === 0);
}
console.log(longueurPaire(["chat", "chien", "lion"]));
//ex5
function nombresImpairs(nombres) {
  return nombres.filter((n) => n % 2 !== 0);
}
console.log(nombresImpairs([1, 2, 3, 4, -3])); 
//ex6
function nombresNegatifs(nombres) {
  return nombres.filter((n) => n < 0);
}
console.log(nombresNegatifs([-3, 2, -1, 5, 0])); 
//ex7
function superieursASix(nombres) {
  return nombres.filter((n) => n > 6);
}
console.log(superieursASix([3, 6, 7, 10, 2])); 
//ex8
function commenceParCaractere(chaines, caractere) {
  return chaines.filter((mot) => mot[0] === caractere);
}
var mots = "the quick brown fox jumps over the lazy dog".split(" ");
console.log(commenceParCaractere(mots, "q")); 
console.log(commenceParCaractere(mots, "t")); 
//ex9
function indexPairEtLongueurPaire(chaines) {
  return chaines.filter((mot, index) => index % 2 === 0 && mot.length % 2 === 0);
}
console.log(indexPairEtLongueurPaire(["lion", "monkey", "aardvaark", "cat", "doge"]));
console.log(indexPairEtLongueurPaire(["red", "green", "purple", "blue", "yellow"]));
//ex10
function deplacerZeros(nombres) {
  const sansZeros = nombres.filter((n) => n !== 0);
  const zeros = nombres.filter((n) => n === 0);
  return sansZeros.concat(zeros);
}
console.log(deplacerZeros([2, 0, 3, 0, 40, 3, 6, 0, 10, 11]));