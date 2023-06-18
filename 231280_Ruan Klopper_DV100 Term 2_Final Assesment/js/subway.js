let order = [];

createOrder = (event) => {
  event.preventDefault();
  let price = 0;

  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;

  let vsize = document.querySelector('input[name="breadSize"]:checked');
  let vtype = document.querySelector('input[name="breadType"]:checked');
  let vtoast = document.querySelector('input[name="breadToast"]:checked');

  if (!vsize || !vtype || !vtoast) {
    alert(
      "You can't submit a blank order, select one option from: bread size, bread type, bread toast"
    );
    return;
  } else {
    let breadsize = document.getElementsByName("breadSize");
    let size;
    for (let i = 0; i < breadsize.length; i++) {
      if (breadsize[i].checked) {
        size = breadsize[i].value;
        price = price + +breadsize[i].dataset.cost;
      }
    }

    let breadtype = document.getElementsByName("breadType");
    let type;
    for (let i = 0; i < breadtype.length; i++) {
      if (breadtype[i].checked) {
        type = breadtype[i].value;
        price = price + +breadtype[i].dataset.cost;
      }
    }

    let breadtoast = document.getElementsByName("breadToast");
    let toast;
    for (let i = 0; i < breadtoast.length; i++) {
      if (breadtoast[i].checked) {
        toast = breadtoast[i].value;
        price = price + +breadtoast[i].dataset.cost;
      }
    }

    let topping = document.getElementsByName("btoppings");
    let toppingsArray = [];
    for (let i = 0; i < topping.length; i++) {
      if (topping[i].checked) {
        toppingsArray.push(topping[i].value + " ");
        price = price + +topping[i].dataset.cost;
      }
    }

    let sauce = document.getElementsByName("bsauce");
    let sauceArray = [];
    for (let i = 0; i < sauce.length; i++) {
      if (sauce[i].checked) {
        sauceArray.push(sauce[i].value + " ");
        price = price + +sauce[i].dataset.cost;
      }
    }

    order.push({
      name: name,
      address: address,
      size: size,
      type: type,
      toast: toast,
      toppings: toppingsArray,
      sauce: sauceArray,
      price: price,
    });

    document.getElementById("breadForm").reset();
    localStorage.setItem("orders", JSON.stringify(order));
    showOrder();
  }
};

showOrder = () => {
  let dispArea = document.getElementById("order-list");

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
    <div class="col-6">
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

checkout = () => {
  window.location.href = "../pages/cart.html";
};

getTotalCost = () => {
  let totalCost = 0;

  for (let i = 0; i < order.length; i++) {
    totalCost = totalCost + +order[i].price;
  }

  let dispArea = document.getElementById("totalCost");

  dispArea.innerHTML = "";

  dispArea.innerHTML = `
  <h4>Your total cost is: <strong>R${totalCost}.00</strong></h4>
  `;
};
