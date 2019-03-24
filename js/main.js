function Clothing(image, caption, price, details) {
    this.image = image;
    this.caption = caption;
    this.price = price;
    this.details = details;
}

    let maxiDress = new Clothing ('<img src="images/0131265647443_001_d.jpg">',"Black Maxi Dress", "R499", "Slip into this ultra-luxe maxi dress. Satin-look fabric cut in a classic slip silhouette with seamed triangle cups at the empire waist. Topped skinny shoulder straps at the v-neckline that tie at the open back.");
    // ===============================
    dungaree = new Clothing('<img src="images/0180621400087_020_b.jpg">',"Cassidy Brown Bib Dungaree", "R699", "Essential workwear-look dungarees. Features a classic bib style front pocket. Allover contrast stitch detailing. Topped with adjustable shoulder straps. ");
     // ===============================
    purpleHoodie = new Clothing('<img src="images/0115090559984_055_d.jpg">',"Utility Lilac Crop Hoodie", "R499", "A cropped style utility jacket with front silver zip-through and adjustable hood. Allover pocket detailing, complete with elasticated cuffs and hem.");
     // ===============================
    highJeans = new Clothing('<img src="images/2003128-15-2 (1).jpg">',"High Waisted Jeans", "R599", "Throw it back in style with the High Rise 90s Stretch Jean. A relaxed fit with room to move, the high rise jean has distressed detail throughout for that perfetct worn-in look."); 
     // ===============================  
    // bomberJacket = new Clothing('<img src="images/image_7dc79e50-6224-4d55-bbef-1c5778e22f11_1024x1024.jpg">','Retro Unisex Oversized Colourful Bomber Jacket', "R999", "One of a kind item! Awesome colourful bomber jacket. Perfect for festivals and for those cooler summer days coming up" ); 
    //  // ===============================
    // vestCrop = new Clothing('<img src="images/0114441548209_000_b.jpg">',"Multicolor Knit Vest Crop", "R399", "Cropped vest with a knit construction in a multicolor look. Sleeveless style with a crew neck and cut with a cropped hem.");
    //  // ===============================
    // insetDress = new Clothing('<img src="images/0115090559984_055_d.jpg">',"Color Block Inset Dress", 499); 
    //  // ===============================   
    // denimCoat = new Clothing('<img src="images/0115090559984_055_d.jpg">',"Denim Coat Jacket", 1599);

let image = document.getElementById("image");
    caption = document.getElementById("caption");
    price = document.getElementById("price");
    details = document.getElementById("details");


// 1. Black Maxi Dress 
image.innerHTML = maxiDress.image;
caption.innerHTML = maxiDress.caption;
price.innerHTML = maxiDress.price;
details.innerHTML = maxiDress.details;

// 2. Brown Dungaree
image1.innerHTML = dungaree.image;
caption1.innerHTML = dungaree.caption;
price1.innerHTML = dungaree.price;
details1.innerHTML = dungaree.details;

// 3. Purple Cropped Hoodie
image2.innerHTML = purpleHoodie.image;
caption2.innerHTML = purpleHoodie.caption;
price2.innerHTML = purpleHoodie.price;
details2.innerHTML = purpleHoodie.details;

// 4. High Waisted Jeans
image3.innerHTML = highJeans.image;
caption3.innerHTML = highJeans.caption;
price3.innerHTML = highJeans.price;
details3.innerHTML = highJeans.details;

// // 5. Bomber Jacket
// image4.innerHTML = bomberJacket.image;
// caption4.innerHTML = bomberJacket.caption;
// price4.innerHTML = bomberJacket.price;
// details4.innerHTML = bomberJacket.details;

// // 
// image5.innerHTML = vestCrop.image;
// caption5.innerHTML = vestCrop.caption;
// price5.innerHTML = vestCrop.price;
// details5.innerHTML = vestCrop.details;

// image6.innerHTML = purpleHoodie.image;
// caption6.innerHTML = purpleHoodie.caption;
// price6.innerHTML = purpleHoodie.price;
// details6.innerHTML = purpleHoodie.details;

// image7.innerHTML = purpleHoodie.image;
// caption7.innerHTML = purpleHoodie.caption;
// price7.innerHTML = purpleHoodie.price;
// details7.innerHTML = purpleHoodie.details;


// Heart "like" button

$('.lnr-heart').click(function(){
    $('#heart').toggleClass('color1');
    $('#heart').toggleClass('color2');
});