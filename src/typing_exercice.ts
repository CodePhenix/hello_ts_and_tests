
type Address = {
    street: string,
    number_street: number,
    street_bis: string | null,
    zipcode: number,
}
const address: Address = {
    street: "rue Heurtault",
    number_street: 99,
    street_bis: null,
    zipcode: 93300,
}

type Person = {
    firstname: string,
    middlename: null,
    lastname: string,
    age: number,
    address: Address
}
const person: Person = {
    firstname: "Warda",
    middlename: null,
    lastname: "Laacher",
    age: 25,
    address: {
        street: "rue Heurtault",
        number_street: 99,
        street_bis: null,
        zipcode: 93300,
    },
}

type Day = "Lundi" | "Mardi" | "Mercredi" | "Jeudi";
const day: Day = "Lundi"
const day_bis: Day = "Jeudi"

type ACI_student = "Raouf" | "Ibrahim" | "Zina";
const student: ACI_student = "Raouf"
const student_B: ACI_student = "Ibrahim"
const student_C: ACI_student = "Zina"

type ACI_teacher = "Brieuc" | "Sofien";
const teacher: ACI_teacher = "Brieuc"
const teacher_bis: ACI_teacher = "Sofien"

type ACI_member = ACI_student | ACI_teacher;  // either student or teacher

type Team = Person[];
const team: Team = [
    {
        firstname: "Warda",
        middlename: null,
        lastname: "Laacher",
        age: 25,
        address: {
            street: "rue Heurtault",
            number_street: 99,
            street_bis: null,
            zipcode: 93300,
        },
    }, {
        firstname: "Warda",
        middlename: null,
        lastname: "Laacher",
        age: 25,
        address: {
            street: "rue Heurtault",
            number_street: 99,
            street_bis: null,
            zipcode: 93300,
        },
    }
]

