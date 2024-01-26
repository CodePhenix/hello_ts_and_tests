
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



// filter if zipcode is either one of 75, 91, 92, 93, 94, 95, 77, 78
// keepIleDeFrance(data) --> [
//   { name: "Zoe", age: 12, zipcode: 75 },
// ];

const botte = [1, 2, 4]
const une_aiguille = 6
function estDansListe(botte, une_aiguille) {
    for (const el of botte) {
        if (une_aiguille == el) {
            return true;
        }

    }
    return false;
}

console.log(estDansListe(botte, une_aiguille))



const idf = [75, 91, 92, 93, 94, 95, 77, 78];

function keepIleDeFrance(humans) {
    let francil = [];
    for (const human of humans) {
        // if human.zipcode est dans idf 
        if (estDansListe(idf, human.zipcode)) {
            //  console.log(human);

            francil.push(human);
        }
    }
    return francil;
}

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