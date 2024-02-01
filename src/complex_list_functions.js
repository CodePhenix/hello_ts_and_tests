
const data = [

    { name: "Zoe", age: 12, zipcode: 75 }, // human
    { name: "Tommy", age: 17, zipcode: 42 },
    { name: "Joe", age: 18, zipcode: 75 },
    { name: "Tom", age: 76, zipcode: 93 },
];




function keepMajeurs(humans) {
    let majeurs = [];

    for (const human of humans) {
        if (human.age >= 18) {
            // (console.log(human))

            majeurs.push(human);


        }
    }
    return majeurs;
};
// --------------------Exerciced avec methode .filter---- le .filter fait office de boucle for ---
function keepMajeurs2(humans) {
    let majeurs = humans.filter(function (human) {
        return human.age >= 18
    })
    return majeurs
}
function keepMajeurs3(humans) {
    let majeurs = humans.filter((human) => (
        human.age >= 18
    ))
    return majeurs
}

console.log(keepMajeurs(data))

// ______________________________________________________________
// filter if age < 18
// keepMineurs(data) --> [
//   { name: "Zoe", age: 12, zipcode: 75 },
//   { name: "Tommy", age: 17, zipcode: 42 },
// ];


function keepMineurs(humans) {
    let mineurs = [];
    for (const human of humans) {
        if (human.age < 18) {
            // console.log(human);

            mineurs.push(human);
        }

    }

    return mineurs;
}

console.log(keepMineurs(data));

// --------------------Exercice avec methode .filter---- le .filter fait office de boucle for ---

function keepMineurs2(humans) {

    let mineurs = humans.filter((human) => (
        human.age < 18))

    return mineurs;
}
console.log(keepMineurs2(data));


// filter if zipcode is either one of 75, 91, 92, 93, 94, 95, 77, 78
// keepIleDeFrance(data) --> [
//   { name: "Zoe", age: 12, zipcode: 75 },
// ];

// const botte = [1, 2, 4]
// const une_aiguille = 6
function estDansListe(botte, une_aiguille) {
    for (const el of botte) {
        if (une_aiguille == el) {
            return true;
        }

    }
    return false;
}

console.log(estDansListe(botte, une_aiguille))

// -------------------estdanslaliste2 .filter ------------------

const botte = [1, 4, 6]
const une_aiguille = 8
function estDanslaliste2(botte, une_aiguille) {
    let aiguilles = botte.filter((el) => (
        une_aiguille === el))
    // console.log(une_aiguille);
    // Si aiguilles est vide return false
    // sinon return true-è_çà)

    if (aiguilles.length === 0) {
        return false;
    } else {
        return true;

    }

}

console.log(estDanslaliste2(botte, une_aiguille))

// ------------------------------------------------------------

// const idf = [75, 91, 92, 93, 94, 95, 77, 78];

// function keepIleDeFrance(humans) {
//     let francil = [];
//     for (const human of humans) {
//         // if human.zipcode est dans idf 
//         if (estDansListe(idf, human.zipcode)) {
//             //  console.log(human);

//             francil.push(human);
//         }
//     }
//     return francil;
// }
// -----------------------exercice sans la boucle for--------------


// function estDansListe(botte, une_aiguille) {
//     for (const el of botte) {
//         if (une_aiguille == el) {
//             return true;
//         }

//     }
//     return false;
// }

// console.log(estDansListe(botte, une_aiguille))
// ====================Methode filter==============================
const idf = [75, 91, 92, 93, 94, 95, 77, 78];
// const idf = [18, 25, 35, 49];
function keepIleDeFrancebis(humans, idf) {
    let francil = humans.filter(human => idf.includes(human.zipcode))

    if (francil.length === 0) {
        // Nous sommes dans le cas où aucun  habitant n'habite dans les départements cités
        return "Aucun habitant en Île de France";

    }
    return francil;
}


console.log(keepIleDeFrancebis(data, idf));

//--------------------------------------------------------------------------------
function keepIleDeFrance2(humans) {
    let francil = [];
    for (const human of humans) {
        // if human.zipcode est dans idf 
        if (idf.includes(human.zipcode)) {
            //  console.log(human);

            francil.push(human);
        }
    }
    return francil;
}

console.log(keepIleDeFrance2(data));

// // filter if name starts with search variable
// // filterByName(data, "Tom")-- > [
//     { name: "Tommy", age: 17, zipcode: 42 },
//     { name: "Tom", age: 76, zipcode: 93 },
// ];
// ========================================================================================
const data_ter = [
    { name: "Zoe", age: 12, zipcode: 75 }, // human
    { name: "Tommy", age: 17, zipcode: 42 },
    { name: "Joe", age: 18, zipcode: 75 },
    { name: "Tom", age: 76, zipcode: 93 },
];

function filterByName(humans, str1) {
    let humanNames = [];
    // if humanName contient "Tom" est dans la data
    for (const human of humans) {
        console.log("log", human.name, str1.includes(human.name))
        if (human.name.includes(str1)) {
            // (str1.startsWith(str1, humanNames.push(human)));
            // on push human dans humanNames
            humanNames.push(human);
        };

    }
    // humanNames.push(humans);
    return humanNames
}
console.log(filterByName(data_ter, "Tom"));

// ------------------exercice methode filter data_ter------------------------

const data_tera = [
    { name: "Zoe", age: 12, zipcode: 75 }, // human
    { name: "Tommy", age: 17, zipcode: 42 },
    { name: "Joe", age: 18, zipcode: 75 },
    { name: "Tom", age: 76, zipcode: 93 },
];
const stra = 'Tom';

function filterByName(humans, stra) {
    let humanName = humans.filter(human => stra.includes(human.name))

    if (humanName.lenght === 0) {
        return "aucun nom inclus ou commence par Tom";
    }

    return humanName;

}

console.log(data_tera, "Tom")


// -----------------------------------------------------------------------------
// const entier = data_full.firstname.concat('', lastname);
// const concat = concat("", "");
const data_full = [
    { firstname: "Zoe", lastname: "Dupont" },
    { firstname: "Tommy", lastname: "Toto" },
    { firstname: "Joe", lastname: "Jojo" },
    { firstname: "Tom", lastname: "Titi" },
];

function computerFullName(humans) {
    let fullNames = [];

    for (const human of humans) {
        // console.log(humans)
        // ici je créeer une nouvelle variable newHuman pour pouvoir réaliser une concat "nom+prenom"
        newHuman = human.firstname.concat(' ', human.lastname);
        // newHuman = human.firstname + " " + human.lastname
        // console.log(newHuman);

        // fullNames.push(('fullname:'), (newHuman));

        fullNames.push({ 'fullname': newHuman });
    };


    return fullNames
}
console.log(computerFullName(data_full));

// computeFullName(data_bis)-- >
//     [
//         { fullname: "Zoe Dupont" },
//         { fullname: "Tommy Toto" },
//         { fullname: "Joe Jojo" },
//         { fullname: "Tom Titi" },
//     ]