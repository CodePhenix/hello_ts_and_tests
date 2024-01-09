import { double, minutesToSecond, mult, sum, triple, max, saison } from "../simple";

// test (j'inscris le déroulé puis fonction fléchée Expect fonction (nom de la fonction) et toBe (j'attends le resultat)
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 0 + 0 to equal 0", () => {
  expect(sum(0, 0)).toBe(0);
});


test("dble 2  to equal 4", () => {
  expect(double(2)).toBe(4);
});


test("trple 3  to equal 9", () => {
  expect(triple(3)).toBe(9);
});


test("minute en secondes to equal 60", () => {
  expect(minutesToSecond(2)).toBe(120);
});



test("multiple a*b to equal 6", () => {
  expect(mult(2, 3)).toBe(6);
});



test("max  a>b to equal 3", () => {
  expect(max(2, 3)).toBe(3);
});



test("saison a>=x to equal Saison", () => {
  expect(saison(1)).toBe("hiver");
}



// // test("longa>=x to equal Saison", () => {
//   expect(saison(1)).toBe("hiver");
// }















