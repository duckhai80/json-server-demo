const faker = require("faker");
const fs = require("fs");

faker.locale = "vi";

console.log(faker.commerce.department());
console.log(faker.commerce.productName());
console.log(faker.commerce.productDescription());

console.log(faker.random.uuid());
console.log(faker.image.imageUrl());
console.log(faker.name.findName());

(() => {
  const db = {
    categories: [],
    products: [],
    profile: {},
  };
})();
