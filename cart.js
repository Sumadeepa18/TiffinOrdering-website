let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

let cartItems =
document.getElementById("cart-items");

function displayCart(){

    cartItems.innerHTML = "";

    total = 0;

    cart.forEach((product,index)=>{

        total +=
        product.price * product.quantity;

        cartItems.innerHTML += `
        <div class="review-box">

            <h3>${product.item}</h3>

            <button onclick="decrease(${index})">-</button>

            ${product.quantity}

            <button onclick="increase(${index})">+</button>

            <p>
            ₹${product.price * product.quantity}
            </p>

        </div>
        `;
    });

    document.getElementById("total").innerText =
    "Total: ₹" + total;
}

function increase(index){

    cart[index].quantity++;

    saveCart();
}

function decrease(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

        saveCart();
    }
}

function saveCart(){

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}

function placeOrder(){

    alert(
        "Order Placed Successfully!\nTotal: ₹" + total
    );

    localStorage.removeItem("cart");

    location.reload();
}

displayCart();