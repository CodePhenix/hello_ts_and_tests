
type Address = ?
const address: Address = {
    street: "rue Heurtault",
    number_street: 99,
    street_bis: null,
    zipcode: 93300,
}

type Person = ?
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

type Day = ?
const day: Day = "Lundi"
const day_bis: Day = "Jeudi"

type ACI_student = ?
const student:ACI_student = "Raouf"
const student_B:ACI_student = "Ibrahim"
const student_C:ACI_student = "Zina"

type ACI_teacher = ?
const teacher: ACI_teacher = "Brieuc"
const teacher_bis: ACI_teacher = "Sofien"

type ACI_member = ? // either student or teacher

type Team = ?
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
    },{
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

