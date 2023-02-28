// run();
// async function run() {
//   try {
//     const user = await User.create({
//       username: "wickedgames",
//       password: "password",
//       email: "wickedgames@gmail.com",
//       nom: "games",
//       prenom: "wicked",
//       numeroTel: "0657510070",
//       adresse: "alger centre",
//       role: "user",
//     });

//     console.log(user);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// run();
// async function run() {
//   try {
//     const livre = await Livre.create({
//       titre: "harry potter: la chambre des secrets",
//       auteur: "jk.rowling",
//       note: "10/10",
//       nombre_emprunt: "1",
//       nombre_copie: "5",
//     });

//     console.log(livre);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// run();
// async function run() {
//   try {
//     const emprunt = await Emprunt.create({
//       IdUser: "63fcb9d1075f9a8549b859f4",
//       IdLivre: "63fcc2d291a72d9f742aa08b",
//       date_emprunt: "2023-02-27",
//       date_retour_prevu: "2023-03-05",
//       date_retour_effective: "2023-03-05",
//     });

//     console.log(emprunt);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// run();
// async function run() {
//   try {
//     const categorie = await Categorie.create({
//       nom: "fantasy",
//     });

//     console.log(categorie);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

//  TEEST API OF CATEGORIE *********************************

// GET http://localhost:3000/categorierouter

// ###

// GET http://localhost:3000/categorierouter/63fcc8eb8ad59583bfe10d1e

// ###
// POST http://localhost:3000/categorierouter
// Content-Type: application/json

// {
//     "nom": "mathematique"
// }

// ###

// DELETE http://localhost:3000/categorierouter/63fcc8eb8ad59583bfe10d1e

// ###

// PATCH  http://localhost:3000/categorierouter/63fdebccf6e5f524e9d5c33e
// Content-Type: application/json

// {
//     "nom": "scientifique"
// }

//

//  TEEST API OF LIVRE *************************************

// GET http://localhost:3000/livrerouter

// ###

// GET http://localhost:3000/livrerouter/63fcc2d291a72d9f742aa08b

// ###
// POST http://localhost:3000/livrerouter
// Content-Type: application/json

// {
//     "titre": "ce que le jour doit a la nuit",
//     "auteur": "Yasmina khara",
//     "note":"10/10",
//     "nombre_emprunt": "2",
//     "nombre_copie": "10"
// }

// ###

// DELETE http://localhost:3000/livrerouter/63fdf50966749fc1ecde1336

// ###

// PATCH  http://localhost:3000/livrerouter/63fdf50966749fc1ecde1336
// Content-Type: application/json

// {
//     "titre": "ce que le jour doit a la nuit",
//     "auteur": "Yasmina khama",
//     "note":"10/10",
//     "nombre_emprunt": "2",
//     "nombre_copie": "10"
// }

//  TEEST API OF USER ****************************************************

// GET http://localhost:3000/userrouter

// ###

// GET http://localhost:3000/userrouter/63fcb9d1075f9a8549b859f4

// ###
// POST http://localhost:3000/userrouter
// Content-Type: application/json

// {
//     "username": "viperr",
//     "password": "viper123",
//     "email":"viperr@gmail.com",
//     "nom": "valorantr",
//     "prenom": "viperr",
//     "numeroTel": "0554575589",
//     "adresse": "france",
//     "role":"user"
// }

// ###

// DELETE http://localhost:3000/userrouter/63fdfc4c97e7a000d5125a84

// ###

// PATCH  http://localhost:3000/userrouter/63fdfc4c97e7a000d5125a84
// Content-Type: application/json

// {
//     "username": "viperRR",
//     "password": "viper123",
//     "email":"vipeRR@gmail.com",
//     "nom": "valorantR",
//     "prenom": "viperrRR",
//     "numeroTel": "0554575589",
//     "adresse": "france",
//     "role":"user"
// }

//  TEEST API OF EMPRUNT ****************************************************

// GET http://localhost:3000/empruntrouter

// ###

// GET http://localhost:3000/empruntrouter/63fdba5fbb828fa29677506a

// ###
// POST http://localhost:3000/empruntrouter
// Content-Type: application/json

// {
//     "IdUser": "63fcb9d1075f9a8549b859f4",
//     "IdLivre": "63fcc2d291a72d9f742aa08b",
//     "date_emprunt": "2023-01-15",
//     "date_retour_prevu": "2023-01-22",
//     "date_retour_effective": "2023-01-22"
// }

// ###

// DELETE http://localhost:3000/empruntrouter/63fe01ed01e4257e18a6747b

// ###

// PATCH  http://localhost:3000/empruntrouter/63fe01ed01e4257e18a6747b
// Content-Type: application/json

// {
//     "IdUser": "63fcb9d1075f9a8549b859f4",
//     "IdLivre": "63fcc2d291a72d9f742aa08b",
//     "date_emprunt": "2023-01-15",
//     "date_retour_prevu": "2023-01-22",
//     "date_retour_effective": "2023-01-23"
// }
