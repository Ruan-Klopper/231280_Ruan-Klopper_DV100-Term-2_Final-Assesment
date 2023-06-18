let orders = [];

getOrders = () => {
  let savedOrders = localStorage.getItem("orders");
  if (savedOrders) {
    orders = JSON.parse(savedOrders);
    showOrder();
  }
};

window.addEventListener("load", getOrders);

showOrder = () => {
  if (orders.length >= 3) {
    let dispArea = document.getElementById("s-o-m");
    dispArea.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      let name = orders[i].name;
      let size = orders[i].size;
      let type = orders[i].type;
      let toast = orders[i].toast;
      let toppings = orders[i].toppings;
      let sauce = orders[i].sauce;

      dispArea.innerHTML += `
      <div class="col-4">
        <div class="sub-box">
          <h1>Sub name: ${name}</h1>
          <div class="spacer-sml"></div>
          <h2>Sub size: ${size}</h2>
          <h2>Sub type: ${type}</h2>
          <h2>Sub toast: ${toast}</h2>
          <h2>Sub toppings: ${toppings}</h2>
          <h2>Sub sauce: ${sauce}</h2>
        </div>
      </div>
              `;
    }
  }
};
