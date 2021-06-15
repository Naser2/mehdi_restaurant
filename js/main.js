import { DynamicHtml } from "./DynamicHtml.js";
import { mapToReorganizeByCategory, returnTitle } from "./CommonFunctions.js";
var Div = document.createElement("div");
document.body.backgroundColor = "#45678";

fetch("../items.json")
  .then((res) => res.json())
  .then((resBody) => {
    var { category_obj } = mapToReorganizeByCategory(resBody);
    console.log("Category-OBJ", category_obj);

    DynamicHtml(category_obj, "appetizer");
    // document
    //   .getElementById("menu-wrapper")
    //   .children[0].prepend(returnTitle("appetizer"));

    DynamicHtml(category_obj, "burger");
    DynamicHtml(category_obj, "soup_salad");
    DynamicHtml(category_obj, "dessert");
  });

export function text(words) {
  return document.createTextNode(words);
}

export function createElement(type, ...children) {
  const newElement = document.createElement(type);
  children.forEach((child) => newElement.appendChild(child));
  return newElement;
}

export function div(...children) {
  return createElement("div", ...children);
}

export function article(...children) {
  return createElement("article", ...children);
}

export function h1(...children) {
  return createElement("h1", ...children);
}

export function h3(...children) {
  return createElement("h3", ...children);
}

export function nav(...children) {
  return createElement("nav", ...children);
}

export function ul(...children) {
  return createElement("ul", ...children);
}

export function li(...children) {
  return createElement("li", ...children);
}

export function i(...children) {
  return createElement("i", ...children);
}

export function span(...children) {
  return createElement("span", ...children);
}

export function section(...children) {
  return createElement("section", ...children);
}

export function footer(...children) {
  return createElement("footer", ...children);
}

export function p(...children) {
  return createElement("p", ...children);
}

export function img(source) {
  const image = createElement("img");
  image.src = source;
  return image;
}

export function button(...children) {
  return createElement("button", ...children);
}

export function addId(element, id) {
  const newElement = element.cloneNode(true);
  return Object.assign(newElement, { id });
}

export function addClass(element, ...klasses) {
  const newElement = element.cloneNode(true);
  klasses.forEach((klass) => newElement.classList.add(klass));
  return newElement;
}

export function menuList(headline, items = []) {
  const menuItems = items.map(menuItem);

  const title = addClass(h1(text(headline)), "title");

  return addClass(div(title, ...menuItems), "collection");
}

// global variables
let rotation = 0;

// event handlers
function toggleGritty() {
  console.log("FIRING");
  const gritty = document.getElementById("toggle-gritty");
  toggleVisibility(gritty);
}

function rotateGritty(event) {
  const gritty = document.getElementById("small-gritty");
  rotate(gritty, event);
}

function addGreet(event) {
  event.preventDefault();
  const greet = gritterForm.greet.value;
  const newGreetLi = document.createElement("li");
  const newGreetAvatar = document.createElement("div");
  newGreetAvatar.className = "avatar";
  const newGreetText = document.createElement("span");
  newGreetText.innerText = greet;
  const greets = document
    .getElementById("greets")
    .getElementsByTagName("ul")[0];
  const newerGreetLi = greets.appendChild(newGreetLi);
  newerGreetLi.appendChild(newGreetAvatar);
  newerGreetLi.appendChild(newGreetText);
  gritterForm.greet.value = "";
}

// helpers
// given a DOM element, change it's visibilty style property from hidden to visible
function toggleVisibility(element) {
  if (element.style.visibility === "hidden") {
    element.style.visibility = "visible";
  } else {
    element.style.visibility = "hidden";
  }
}

// given a DOM element and a direction, rotate the element that direction
function rotate(element, event) {
  if (event.target.id === "rotate-left-button") {
    rotation = rotation - 15;
  } else {
    rotation = rotation + 15;
  }
  element.style.transform = "rotate(" + rotation + "deg)";
}

// add event handlers when mouse events are triggered
// grittyBorder.onmouseenter = toggleGritty;
// grittyBorder.onmouseleave = toggleGritty;
// rotateLeftButton.onclick = rotateGritty;
// rotateRightButton.onclick = rotateGritty;
// gritterForm.onsubmit = addGreet;

function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

// export default function menuItem(itemData = {}) {
//   const name = addClass(h3(text(itemData.name)), "name");
//   const price = addClass(
//     span(text(`$${formatPrice(itemData.price)}`)),
//     "price",
//     "is-pulled-right"
//   );
//   const description = addClass(p(text(itemData.description)), "desc");
//   const addToCart = addClass(
//     button(text("Add to Cart")),
//     "button",
//     "is-pulled-right",
//     "add-to-cart"
//   );

//   const mediaContent = addClass(
//     div(name, price, description, addToCart),
//     "media-content"
//   );

//   const item = addClass(article(mediaContent), "media", "menu_item");
//   item.dataset.key = itemData.id;

//   return item;
// }

// function filterByType(map, type) {
//   return Object.keys(map)
//     .filter((key) => map[key].type === type)
//     .map((key) => map[key]);
// }

// function addClass(klass) {
//   elements.forEach((ele) => {
//     ele.classList.add(klass);
//   });
// }
