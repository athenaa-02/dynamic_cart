const clothes = [
  {
    id: 1,
    image: "./images/Frame 33.png",
    name: "Gradient Graphic T-shirt",
    price: 145,
    size: "Large",
    color: "white",
  },
  {
    id: 2,
    image: "./images/Frame 34.png",
    name: "Polo with Tipping Details",
    price: 180,
    size: "Large",
    color: "pink",
  },
  {
    id: 3,
    image: "./images/Frame 38.png",
    name: "Black Striped T-shirt",
    price: 120,
    size: "Large",
    color: "white",
  },
  {
    id: 4,
    image: "./images/Frame 71.png",
    name: "SKINNY FIT JEANS",
    price: 240,
    size: "Large",
    color: "Blue",
  },
  {
    id: 5,
    image: "./images/Frame 72.png",
    name: "CHECKERED SHIRT",
    price: 180,
    size: "Medium",
    color: "red",
  },
  {
    id: 6,
    image: "./images/Frame 73.png",
    name: "SLEEVE STRIPED T-SHIRT",
    price: 130,
    size: "Small",
    color: "orange",
  },
  {
    id: 7,
    image: "./images/Frame 32.png",
    name: "VERTICAL STRIPED SHIRT",
    price: 212,
    size: "Large",
    color: "green",
  },
  {
    id: 8,
    image: "./images/Frame 72.png",
    name: "COURAGE GRAPHIC T-SHIRT",
    price: 145,
    size: "Small",
    color: "orange",
  },
  {
    id: 9,
    image: "./images/Frame 71.png",
    name: "LOOSE FIT BERMUDA SHORTS",
    price: 80,
    size: "Large",
    color: "blue",
  },
];

const productsHtml = document.querySelector(".products");
const cartButton = document.querySelector(".cart_logo");
const cartElement = document.querySelector(".cart");

clothes.forEach((item) => {
  productsHtml.innerHTML += `<div class="card">
                <img class="product_img" src="${item.image}" alt="">
                <p class="name">${item.name}</p>
                <div class="wrapper">
                    <span class="price">$${item.price}</span>
                    <button class="add_btn" name='${item.id}'>add to cart</button>
                </div>
            </div>`;
});

cartButton.addEventListener("click", () => {
  cartElement.classList.toggle("hidden");
});

let cartArray = [];

productsHtml.addEventListener("click", (event) => {
  const clickedClass = event.target.getAttribute("class");

  if (clickedClass === "add_btn") {
    const ID = event.target.getAttribute("name");

    const chosen = clothes.find((item) => Number(ID) === item.id);
    const existingElement = 


    // if(){

    // }
    
    console.log(cartArray)

    render();
  }
});

function render() {
  cartElement.innerHTML = "";
  cartArray.forEach((product) => {
    const div = document.createElement("div");
    div.setAttribute("class", "cart_product");

    div.innerHTML = ` <img class="product_image" src="${product.image}"  alt="" />
        <div class="text">
          <div class="name_delete">
            <h3>${product.name}</h3>
            <img src="./images/Frame.png" alt="">
          </div>
          <div class="detailed_info">
            <div class="size_div">
            <span class="size">Size:</span>
            <span class="dynamic_size">${product.size}</span>
            </div>
            <div class="color_div">
            <span class="color">Color:</span>
            <span class="dynamic_color">${product.color}</span>
            </div>
          </div>
          <div class="price_quantity">
           <span class="product_price">$${product.price}</span>
           <div class="quantity">
  <button class="decrease">-</button>
  <span>${product.quantity}</span>
  <button class="increase">+</button>
</div>
          </div>
        </div>`;

    cartElement.append(div);
  });
}



