//challenge1
fetch("http://localhost:3000/menu")
  .then((response) => response.json())
  .then((menu) => {
    menu.forEach((item) => {
      addMenuItems(item);
    });
    displayMenu(menu[0]);
  });

function addMenuItems(item) {
  const menuDisplay = document.getElementById("menu-items");
  const span = document.createElement("span");
  span.textContent = item.name;
  menuDisplay.appendChild(span);
  span.addEventListener("click", (event) => {
    displayMenu(item); // when you click the menu items on the left, you'll see all the details for spesific menu item.
  });
}
//challenge 2
function displayMenu(item) {
  let itemName = document.getElementById("dish-name");
  itemName.textContent = item.name;
  let itemPrice = document.getElementById("dish-price");
  itemPrice = item.price;
  let itemDescrip = document.getElementById("dish-description");
  itemDescrip.textContent = item.description;
  let itemPict = document.getElementById("dish-image");
  itemPict.src = item.image;
}
//challenge 4
const cartForm = document.getElementById("cart-form");
cartForm.addEventListener("submit", addToCart);

function addToCart(event) {
  event.preventDefault();
  const cartDisplay = document.getElementById("number-in-cart");
  let userInput = document.getElementById("cart-amount").value;
  userInput = Number(userInput);
  totalCount +=userInput
  cartDisplay.textContent = totalCount
  cartForm.reset() 
}