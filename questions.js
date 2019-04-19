/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    var result = texte.replace('e',' ');
    return result;
}
var concatString = function (texte1, texte2) {
    return texte1 + texte2;
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.substring(10,14);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {

    return isNaN(texte);
}
var AfficherExtensionString = function (texte) {
    // return  texte.slice(-3);
    var ext = texte.split('.').pop();
    return ext;
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x,y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
  // for(var i = 0; i < array.length; i++){
  //   array[i]=Math.abs(array[i]);
  // }
  //   return array;
  var valeurAbsolue = array.map(Math.abs);
  return valeurAbsolue;
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI * rayon * rayon);
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab,ac);
}
var calculIMC = function (poids, taille) {
      var IMC = (poids / ( taille * taille )).toFixed(2);
     return Number(IMC);
}
