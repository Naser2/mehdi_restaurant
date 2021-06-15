import { returnTitle, formatPrice } from "./CommonFunctions.js";
import { h1 } from "./main.js";

export const DynamicHtml = (category_obj, category_name) => {
  const collection_section = document.createElement("div");
  if (collection_section.className === category_name) {
    return;
  } else {
    collection_section.className = `${category_name}`;
    collection_section.id = `${category_name}`;
  }

  let menu_cards;
  category_obj[category_name].categoryItems.forEach((menuItem) => {
    console.log("Menu-object", category_obj);

    const el = document.getElementById("menu-wrapper");
    el.appendChild(collection_section);

    const collection = document.createElement("div");
    collection.className = "collection";

    //MENU CARDS
    menu_cards = document.createElement("SECTION");
    menu_cards.className = `section-card-wrapper ${category_name}`;
    console.log("SECTION", menu_cards);

    var menu_card = document.createElement("div");
    menu_card.classList.add("menu-card", "is-12");

    const article = document.createElement("ARTICLE");
    article.className = "media menu_item";

    const { price } = formatPrice(menuItem.price);
    const media_content = document.createElement("div");
    media_content.className = "media-content";

    //   const name = h3;
    const description = document.createElement("p");
    description.className = "desc";
    description.innerHTML = menuItem.description;

    const button = document.createElement("button");
    button.classList.add("button", "is-pulled-right", "add-to-cart");
    button.innerHTML = "add";
    //TITLE
    const name = document.createElement("h3");
    name.className = "name";
    name.innerHTML = menuItem.name;

    menu_cards.appendChild(menu_card);
    menu_card.appendChild(collection);

    console.log("FIRST CHILD:", collection.firstChild);
    collection.appendChild(article);
    article.appendChild(media_content);
    media_content.appendChild(name);
    media_content.appendChild(price);
    media_content.appendChild(description);
    media_content.appendChild(button);

    category_name === menuItem.type ? category_name : "dessert";

    if (menuItem.type === collection_section.className) {
      collection_section.appendChild(menu_cards);
    }
  });

  var theTitle = document.createElement("div");
  var title = document.createElement("h1");
  theTitle.appendChild(title);
  theTitle.className = "section-title";
  title.innerHTML = returnTitle(category_name);
  collection_section.prepend(theTitle);

  console.log("menu_cards.firstChild====", menu_cards.firstChild);

  return menu_cards;
};
