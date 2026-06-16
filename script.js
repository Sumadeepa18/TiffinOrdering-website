function addToCart(item, price){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        item: item,
        price: price,
        quantity: 1
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    window.location.href = "cart.html";
}