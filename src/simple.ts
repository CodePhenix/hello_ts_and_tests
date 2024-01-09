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
    return a;
  } else if (b > a) {
    return b;
  } else {
    return b;
  }
}


type Saison = "été" | "automne" | "hiver" | "printemps"
export function saison(a: number): Saison {
  if (a <= 1) {
    return "hiver";

  } else if (a >= 3) {
    return "printemps";

  } else if (a >= 6) {
    return "été";

  } else {
    return "automne";

  }
}

