'use strict'

var shoppingCart = false;

$("#basket").click(function() {
    shoppingCart = !shoppingCart;

    if (shoppingCart) {
        $(".cart").fadeIn(250, function(){
            $(".cart").css("display", "block");
        })
    } else {
        $(".cart").fadeOut(100, function(){
            $(".cart").css("display", "none");
        })
    }
});


var product = {
    0: {
        title: "Black Maxi Dress",
        price: 499,
        qty: 0,
    },
    1: {
        title: "Cassidy Brown Bib Dungaree",
        price: 699,
        qty: 0,
    },
    2: {
        title: "Utility Lilac Crop Hoodie",
        price: 499,
        qty: 0,
    },
    3: {
        title: "High Waisted Jeans",
        price: 599,
        qty: 0,
    }
}

var cart = [];
var cartSorted = [];
var priceTotal = 0;

function getCart() {
    priceTotal = 0
    $.each(product, function(key, value){
        priceTotal += (value.price * value.qty);
        return priceTotal;
    });  
    $("#basketCount").text(cart.length);
    $("#priceTotal").text("R" + priceTotal + ".00");
    if (cart.length == 1) {
        $("#itemCount").text("(" + cart.length + " item)");
    } else {
        $("#itemCount").text("(" + cart.length + " items)");
    }

    $(".products").html("");
    cartSorted = [];
    $.each(cart, function(key, value){
        if($.inArray(value, cartSorted) === -1) cartSorted.push(value);
    });  
    $.each(cartSorted, function(key, value) {
        $(".products").append(
            `
            <section class="cart-product">
             <img src="images/product${value + 1}.jpg">
                <div class="cart-product-description">
                    <p class="shop-title">${product[value].title}</p>
                    <p class="qty">Qty: ${product[value].qty}</p>
                </div>
                <p class="product-total">
                <p class="icon-delete" name="${value}"><i class="fas fa-times"></i></p>
            </section>

            `
        )
    });
    $(".icon-delete").on("click", function(){
        console.log($(this).attr("name"));
        deleteFromCart($(this).attr("name"));
    })
}

function addToCart(itemIndex) {
    cart.push(itemIndex);
    getCart()
    console.log(priceTotal);
}

function deleteFromCart(itemIndex) {
    product[itemIndex].qty = 0;
    cart = jQuery.grep(cart, function(value){
        return value != itemIndex;
    });
    getCart()
}

$(".icon-delete").on("click", function(){
    console.log("clicked");
    deleteFromCart($("icon-delete").attr("name"));
})


$(".add-to-cart").click(function(){
    product[$(".add-to-cart").index(this)].qty++;
    addToCart($(".add-to-cart").index(this));

})