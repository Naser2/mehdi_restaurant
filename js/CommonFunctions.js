//RETURNS TITLE Based on Typ
export const returnTitle = (name) => {
  var menuCategories = ["appetizer", "soup_salad", "burger", "dessert"];
  let category_name;

  menuCategories.forEach((category) => {
    if (category === name) {
      // return the category name that matches the name passed-in
      // console.log("Menu-category", name);
      category_name = name;
      category_name;
    }
    return category_name;
  });
  console.log("category_name", category_name);
  return category_name.toUpperCase();
};

//RE-ORGANIZES Object by Type
export const mapToReorganizeByCategory = (resBody) => {
  // let menu_cards;
  var category_obj = {};

  resBody.forEach((item) => {
    if (category_obj[item.type]) {
      //if the same type exists in object, just add item of same type
      category_obj[item.type].categoryItems.push(item);
    } else {
      //if the same type does Not exists in object, create a new one
      category_obj[item.type] = { categoryItems: [item] };
    }
    category_obj;
  });
  return { category_obj }; //return thge object to be used later in Main.js
};

export const formatPrice = (p) => {
  let parsed = parseFloat(p).toFixed(2);
  let price = document.createElement("span");
  price.classList.add("price");
  price.innerHTML = `$` + parsed;

  return { price };
};
