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