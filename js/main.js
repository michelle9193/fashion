function Clothing(image, caption, price, details) {
    this.image = image;
    this.caption = caption;
    this.price = price;
    this.details = details;
}


// first product
let maxiDress = new Clothing ('<img src="images/0131265647443_001_d.jpg">',"Black Maxi Dress", "R499", "Slip        into this ultra-luxe maxi dress. Satin-look fabric cut in a classic slip silhouette with seamed triangle cups at the empire waist. Topped skinny shoulder straps at the v-neckline that tie at the open back.");

//second product
    dungaree = new Clothing('<img src="images/0180621400087_020_b.jpg">',"Brown Dungaree", "R699", "Lorem ");



    // purpleHoodie = new Clothing("Purple Crop Hoodie", 499);
    // highJeans = new Clothing("High Waisted Jeans", 599);
    // bomberJacket = new Clothing("Bomber Jacket", 999);
    // colorfulCrop = new Clothing("Colorful Crop Top", 399);
    // insetDress = new Clothing("Color Block Inset Dress", 499);
    // denimCoat = new Clothing("Denim Coat Jacket", 1599);

let image = document.getElementById("image");
    caption = document.getElementById("caption");
    price = document.getElementById("price");
    details = document.getElementById("details");


// First Product
image.innerHTML = maxiDress.image;
caption.innerHTML = maxiDress.caption;
price.innerHTML = maxiDress.price;
details.innerHTML = maxiDress.details;

// Second Product
image1.innerHTML = dungaree.image;
caption1.innerHTML = dungaree.caption;
price1.innerHTML = dungaree.price;
details1.innerHTML = dungaree.details;