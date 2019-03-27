'use strict'


$('.btn_add_remove_cart').click(function(e){
    e.preventDefault();
    var self = $(this);
    if (self.hasClass('add-to-cart')){ 
        // if it's add cart button, replace add-cart class by remove-cart and change label
        self.removeClass('add-to-cart').addClass('remove-cart').text('Remove');
    } else {
        // it's remove cart button, do the inverse
        self.removeClass('remove-cart').addClass('add-to-cart').text('Add to Cart');
    }
});



$(".add-to-cart").click(function(event){
    event.preventDefault(); // prevents links from refreshing lik
    var name = $(this).attr("data-name");
    var price = Number($(this).attr("data-price"));

    addItemToCart(name, price, 1);
    displayCart();
});

function displayCart() {
    var cartArray = listCart();
    var output = "";
    for (var i in cartArray) {
        output += "<li>"+cartArray[i].name+' '+cartArray[i].count+"</li>"
    }
    $("#show-cart").html(output);
}

// Adding Item to cart
var cart = [];

var Item = function(name, price, count) {
    this.name = name,
    this.price = price,
    this.count = count
};


function addItemToCart(name, price, count) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count += count;
            return;
        }
    }
    var item = new Item(name, price, count);
    cart.push(item);
}



// remove from cart 

function removeItem(name) { // removes one item
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count --; // cart[i].count -=1
            if (cart[i].count === 0) {
                cart.splice(i, 1)
            }
            break;
        }
    }
}


// remove all of a specific item

function removeAllItemFromcart(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart.splice(i, 1);
            break;
        }
    }
}


addItemToCart("Banana", 3 , 10);
addItemToCart("Apple", 2.50 , 3);
addItemToCart("Pear", 4 , 2);
addItemToCart("Pants", 100 , 1);
addItemToCart("Gatsby", 50 , 1);
addItemToCart("Spookies", 3 , 3);
addItemToCart("Water", 12 , 1);
addItemToCart("RedBull", 30 , 1);


console.log(cart.length);
console.log(cart);
removeAllItemFromcart("RedBull");

console.log(cart.length);
console.log(cart);



// clear cart

function clearCart() {
    cart = [];
}

// clearCart();
// console.log(cart);

// cout cart -  will return a value

function countCart() {
    var totalCount = 0;
    for (var i in cart) {
        totalCount += cart[i].count;
    }

    return totalCount;
}

console.log(countCart());

// total cost of cart

function totalCart() {
    var totalCost = 0;
    for (var i in cart) {
        totalCost += cart[i].price;
    }
    return totalCost
}

console.log(totalCart());


// list cart (returns an array of what's in the shopping cart) - display cart on page

function listCart() {
    var cartCopy = [];
    for (var i in cart) {
        var item = cart[i];
        var itemCopy = {};
        for (var p in item) { // p is property
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }  
    return cartCopy;  
}



console.log(listCart());























// let addCartItems = document.getElementsByClassName('add-to-cart')
// console.log(addCartItems)
// for (var i = 0; i < addCartItems.length; i++) {
//     var button = addCartItems[i]
//     button.addEventListener('click' , function(){
//         console.log('clicked')
//     })
// }



// let removeCartItems = document.getElementsByClassName('remove')
// console.log(removeCartItems)
// for (var i = 0; i < removeCartItems.length; i++) {
//     var button = removeCartItems[i]
//     button.addEventListener('click' , function(){
//         if (addCartItems === 'clicked') {
//             console.log("hi")
//         }
//     })
// }

// const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
// addToCartButtonsDOM.forEach(addToCartButtonDOM => {
//     addToCartButtonDOM.addEventListener('click', () => {
//         const productDOM = addToCartButtonDOM.parentNode.parentNode;
//         const product = {
//             image: productDOM.querySelector('.clothing-image').getAttribute('src'),
//             caption: productDOM.querySelector('.shop-title').innerText,
//             price: productDOM.querySelector('.shop-price').innerText,
//         };
//         console.table(product);
//     });
// });