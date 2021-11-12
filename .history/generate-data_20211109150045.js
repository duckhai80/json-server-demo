const faker = require("faker");
const fs = require("fs");

faker.locale = "vi";

// console.log(faker.commerce.department());
// console.log(faker.commerce.productName());
// console.log(faker.commerce.productDescription());

// console.log(faker.random.uuid());
// console.log(faker.image.imageUrl());
// console.log(faker.name.findName());

const randomCategoryList = (n) => {
  if (n <= 0) return [];
  const categoryList = [];

  Array.from(
    new Array(n).forEach(() => {
      const category = {};

      category.push(category);
    })
  );

  return categoryList;
};

(() => {
  const category = randomCategoryList(4);
  const db = {
    categories: [],
    products: [],
    profile: {},
  };

  fs.writeFile("./db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully");
  });
})();
