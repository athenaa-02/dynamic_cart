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
    const ID = Number(event.target.getAttribute("name"));

    const chosen = clothes.find((item) => ID === item.id);
    const existingElement = cartArray.find((product) => product.id === ID);

    if (existingElement) {
      existingElement.quantity += 1;
    } else {
      cartArray.push({ ...chosen, quantity: 1 });
    }

    // console.log(cartArray)

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
          <div class="name_delete" >
            <h3>${product.name}</h3>
            <img class="delete_button" name='${product.id}'  src="./images/Frame.png" alt="">
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
  <button class="decrease" name='${product.id}'>-</button>
  <span>${product.quantity}</span>
  <button class="increase" name='${product.id}'>+</button>
</div>
          </div>
        </div>`;

    cartElement.append(div);
  });
}

cartElement.addEventListener("click", (e) => {
  const clickedElement = e.target;
  const ID = Number(clickedElement.getAttribute("name"));

  const chosenItem = cartArray.find((p) => p.id === ID);
  // console.log(chosenItem)

  if (chosenItem) {
    if (clickedElement.classList.contains("increase")) {
      chosenItem.quantity += 1;
      render();
    }
    if (clickedElement.classList.contains("decrease")) {
      chosenItem.quantity -= 1;
      if (chosenItem.quantity === 0) {
        cartArray = cartArray.filter((item) => item.id !== ID);
      }
      render()
    }
  }
  if (clickedElement.classList.contains("delete_button")) {
    cartArray = cartArray.filter((item) => item.id !== ID);
    render();
  }
});

// const fruits = ['apple', 'banana', 'orange']

// const fruitsArray = [...fruits, 'pineapple']
// console.log(fruitsArray)

// const obj = {
//   name: 'car',
//   year: 1990,
// }
// const newObj = {...obj, model: 'sedan'}
// console.log(newObj)

// let Arr = [12, 44, 67, 658765, 34, 123]

// const newArr = Arr.filter((item) => item < 50)
// console.log(newArr)
// console.log(Arr)
