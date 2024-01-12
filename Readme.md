# Project to use Typescript and make some tests

## Setup

- Install js dependencies with `npm install`
- Run the dev server with `npm run dev`
- Run tests with `npm run test`

## Basic TS & Unit tests

- [ ] First, add more tests into `simple_functions.test.ts` to better test the function `sum`
- [ ] For the following, create the function in `simple_functions.ts` and add the corresponding tests:

```js
// double(3) --> 6
// triple(3) --> 9
// minutesToSecond(2) --> 120
// mult(2, 3) --> 6
// max(2, 3) --> 3
// saison(1) --> "Printemps"
```

- [ ] For the following, create the functions in a new file `list_functions.ts` and test them in a new file:

```js
// longueur([1, 2, 3, 4, 5]) --> 5
// total([1, 2, 3, 4, 5]) --> 15
```

- [ ] For the following, create the functions in a new file `complex_list_functions.ts` and test them in a new file:

```ts
type Person = {
  name: string;
  age: number;
  zipcode: number;
};
const data: ? = [
  { name: "Zoe", age: 12, zipcode: 75 },
  { name: "Tommy", age: 17, zipcode: 42 },
  { name: "Joe", age: 18, zipcode: 75 },
  { name: "Tom", age: 76, zipcode: 93 },
];

// filter if age >= 18
// keepMajeurs(data) --> [
//   { name: "Joe", age: 18, zipcode: 75 },
//   { name: "Tom", age: 76, zipcode: 93 },
// ];

// filter if age < 18
// keepMineurs(data) --> [
//   { name: "Zoe", age: 12, zipcode: 75 },
//   { name: "Tommy", age: 17, zipcode: 42 },
// ];

// filter if zipcode is either one of 75, 91, 92, 93, 94, 95, 77, 78
// keepIleDeFrance(data) --> [
//   { name: "Zoe", age: 12, zipcode: 75 },
// ];

// filter if name starts with search variable
// filterByName(data, "Tom") --> [
//   { name: "Tommy", age: 17, zipcode: 42 },
//   { name: "Tom", age: 76, zipcode: 93 },
// ];

const data_bis: ? = [
  { firstname: "Zoe", lastname: "Dupont" },
  { firstname: "Tommy", lastname: "Toto" },
  { firstname: "Joe", lastname: "Jojo" },
  { firstname: "Tom", lastname: "Titi" },
];

// computeFullName(data_bis) -->
// [
//   { fullname: "Zoe Dupont" },
//   { fullname: "Tommy Toto" },
//   { fullname: "Joe Jojo" },
//   { fullname: "Tom Titi" },
// ]
```

## Typescript further

- [ ] Complete the types in `typing_exercice.ts`

- https://typescript-exercises.github.io/

## Typescript

### Integration tests

- [ ] Create a first integration tests that checks that the page header is the good one
- [ ] Create a test that clicks on the counter and checks that the increment has gone up
