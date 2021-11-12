const faker = require("faker");
const fs = require("fs");

faker.locale = "vi";

// console.log(faker.commerce.department());
// console.log(faker.commerce.productName());
// console.log(faker.commerce.productDescription());

// console.log(faker.random.uuid());
// console.log(faker.image.imageUrl());
// console.log(faker.name.findName());

const randomCategoryList = (numberOfCategories) => {
  if (numberOfCategories <= 0) return [];
  const categoryList = [];

  Array.from(new Array(numberOfCategories)).forEach(() => {
    const category = {
      id: faker.random.uuid(),
      name: faker.commerce.department(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    categoryList.push(category);
  });

  return categoryList;
};

const randomProductList = (categoryList, numberOfProducts) => {
  if (numberOfProducts <= 0) return [];
  const productList = [];

  for (const category of categoryList) {
    Array.from(new Array(numberOfProducts)).forEach(() => {
      const product = {
        categoryId: category.id,
        id: faker.random.id(),
        name: faker.commerce.productName(),
        color: faker.commerce.color(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        thumbnailUrl: faker.image.imageUrl(400, 400),
      };

      productList.push(product);
    });
  }

  return productList;
};

(() => {
  const categoryList = randomCategoryList(4);
  const productList = randomProductList(categoryList, 5);

  const db = {
    categories: categoryList,
    products: productList,
    profile: {
      name: "Po",
    },
  };

  fs.writeFile("./db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully");
  });
})();
