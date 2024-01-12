export function sum(a: number, b: number): number {
  return a + b;
}



export function double(a: number): number {
  return a * 2;


}



export function triple(a: number): number {
  return a * 3;

}

export function minutesToSecond(a: number): number {
  return a * 60;

}

export function mult(a: number, b: number): number {

  return a * b;


}

export function max(a: number, b: number): number {
  if (a > b) {
    return a
  } else {
    return b;

  }


}


type Saison = "été" | "automne" | "hiver" | "printemps"
export function saison(a: number): Saison {
  if (a <= 3) {
    return "hiver"

  } else if (a <= 6) {
    return "printemps"
  }
  else if (a <= 9) {
    return "été"

  } else {

    return "automne";
  }


}

// Union
type SaisonBis = "hiver" | "été"
type Variable = number | null


// Merge
type Person = {
  name: string,
  age: number,
}

type Address = {
  zipcode: string,
  regrion: string,
}
type PersonWithAdress = Person & Address

type PersonWithTelephone = Person & {
  tel: number
}