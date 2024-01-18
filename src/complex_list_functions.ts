

type Human = {

    name: string;
    age: number;
    zipcode: number;
};
const data: Human[] = [

    { name: "Zoe", age: 12, zipcode: 75 },
    { name: "Tommy", age: 17, zipcode: 42 },
    { name: "Joe", age: 18, zipcode: 75 },
    { name: "Tom", age: 76, zipcode: 93 },
];

export const keepMajeur = (Human: Human): Human is KeepMajeur => Human.age === 'Human';
export function logMajeur(Human: Human[]) {

    if (KeepMajeur(Human)) {
        // Human.age >= 18;
    }

    console.log(` - ${Human.name}, ${Human.age}, ${Human.zipcode}, ${keepMajeur}`);
};


