let order = [];
let discountArray = ["Welcome10", "SUPER10", "SOCIAL10"];
let grandTotal;

getOrders = () => {
  let savedOrders = localStorage.getItem("orders");
  if (savedOrders) {
    order = JSON.parse(savedOrders);
    showOrders();
    getTotalCost();
    displayOrdersItems();
  }
};

window.addEventListener("load", getOrders);

showOrders = () => {
  let dispArea = document.getElementById("order-summary");
  dispArea.innerHTML = "";

  for (let i = 0; i < order.length; i++) {
    let name = order[i].name;
    let address = order[i].address;
    let size = order[i].size;
    let type = order[i].type;
    let toast = order[i].toast;
    let toppings = order[i].toppings;
    let sauce = order[i].sauce;
    let price = order[i].price;

    dispArea.innerHTML += `
            <div class="col-5">
              <div class="card" style="width: 18rem">
                <div class="card-body">
                  <h5 class="card-title">Order no. ${i + 1}:</h5>
                    <p class="card-text">
                      <h6>Bread size: <strong>${size}</strong></h6>
                      <h6>Bread type: <strong>${type}</strong></h6>
                      <h6>Bread toast: <strong>${toast}</strong></h6>
                      <h6>Toppings: <strong>${toppings}</strong></h6>
                      <h6>Sauces: <strong>${sauce}</strong></h6>
                      <div class="spacer"></div>
                      <h5>Order name: <strong>${name}</strong></h5>
                      <h5>Address: <strong>${address}</strong></h5>
                      <h5>Price: <strong>R${price}.00</strong></h5>
                    </p>
                </div>
              </div>
              <div class="spacer"></div>
            </div>
           
            `;
  }
};

getTotalCost = () => {
  grandTotal = 0;
  for (let i = 0; i < order.length; i++) {
    grandTotal = grandTotal + +order[i].price;
  }

  let dispArea = document.getElementById("order-total");

  dispArea.innerHTML = "";

  dispArea.innerHTML = `
    <h2>R${grandTotal}</h2>
    `;
};

resetOrder = () => {
  order = "";
  localStorage.clear();
  window.location.href = "../pages/order.html";
};

setOrder = () => {
  window.location.href = "../index.html";
};

displayOrdersItems = () => {
  let dispArea = document.getElementById("items-in-cart");
  dispArea.innerHTML = "";

  dispArea.innerHTML = `
    CART: ${order.length}
    `;
};

applyDiscount = () => {
  let code = document.getElementById("discount").value;

  let sucess = false;
  for (let i = 0; i < discountArray.length; i++) {
    if (code === discountArray[i]) {
      alert("10% Discount applied successfully!");
      grandTotal = grandTotal * 0.9;
      sucess = true;
      let dispArea = document.getElementById("order-total");

      dispArea.innerHTML = "";

      dispArea.innerHTML = `
          <h2>R${grandTotal}</h2>
          `;
    }
  }
  if (sucess === false) {
    alert("Discount code is not valid, sorry :(");
  }
};
