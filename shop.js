console.log("Running...");

let cart = document.querySelectorAll('.addToCartBtn');

/*   CREATE AN ARRAY OF PRODUCTS TO KEEP TRACK OF ITEMS IN THE CART    */
let products = [
    {
        name: 'Douglass T-Shirt - Black',
        tag: 'Shirt-Douglas',
        price: 20,
        inCart: 0
    },
    {
        name: 'Douglass T-Shirt - Tan',
        tag: 'Shirt-Douglas2',
        price: 20,
        inCart: 0
    },
    {
        name: 'Tubman T-Shirt - Purple',
        tag: 'Shirt-Tubman',
        price: 20,
        inCart: 0
    },
    {
        name: 'Tubman T-Shirt - Blue',
        tag: 'Shirt-Tubman2',
        price: 20,
        inCart: 0
    },
    {
        name: 'Sojourner T-Shirt - Purple',
        tag: 'Shirt-Truth',
        price: 20,
        inCart: 0
    }
    /*,

    {
        name: 'Railroad Bundle',
        tag: 'Book-Bundle',
        price: 25,
        inCart: 0
    }

    */

    /***************  ADD MORE PRODUCTS LATER  ************/
]

/*         LISTEN FOR THE ADD TO CART BUTTON BEING CLICKED AND UPDATE        */
/*         THE ITEMS IN THE CART AND THE TOTAL COST.                          */
for (let i = 0; i < cart.length; i++) {

    cart[i].addEventListener('click', () => {
        inBasket(products[i]);
        totalCost(products[i]);
    })
}



/*      RETRIEVE THE DATA STORED IN THE LOCAL STORAGE, WHEN THE PAGE IS LOADED      */
function onLoadBasket() {
    let qtyInCart = localStorage.getItem('qtyInCart');

    //If there's a number in local storage, update the cart basket qty
    if (qtyInCart) {
        document.querySelector('.navButton span').textContent = qtyInCart;
        document.querySelector('.menuButton span').textContent = qtyInCart;
    }
}



/*      FIND OUT HOW MANY ITEMS ARE BEING ADDED TO THE CART AND STORE THEM     */
function inBasket(product) {

    // Get the items from local storage
    let productQty = localStorage.getItem('qtyInCart');

    productQty = parseInt(productQty);                                              //convert the string to a number

    //Check for products in local storage.... Null if empty
    if (productQty) {
        localStorage.setItem('qtyInCart', productQty + 1);                            // Increment local storage
        document.querySelector('.navButton span').textContent = productQty + 1;       // Increment the cart
        document.querySelector('.menuButton span').textContent = productQty + 1;
    } else {                                                                          // The cart is empty
        localStorage.setItem('qtyInCart', 1);                                         // Set the cart number to 1
        document.querySelector('.navButton span').textContent = 1;                    // Set the cart text to 1
        document.querySelector('.menuButton span').textContent = 1;
    }
    console.log("My product in the basket is", product)
    setItems(product);

}


function setItems(product) {
    console.log("My product is", product);
    let cartItems = localStorage.getItem('productsInCart');               //Check for items in cart   

    cartItems = JSON.parse(cartItems);                                   //Convert the string into javascript object
    //console.log("My cartItems is", cartItems);


    if (cartItems != null) {                                            // Items in the cart
        if(cartItems[product.tag] == undefined) {                        // Clicked on item is not already in the cart
            cartItems = {                                               // Add the new object
        ...cartItems,                                                   //  Grab the other items and add the new product
                [product.tag]: product
            } 
        }
       cartItems[product.tag].inCart+=1;                                // increment the inCart value                            
    } else {                                                            // cart is empty
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }


    localStorage.setItem('productsInCart', JSON.stringify(cartItems));  //convert the values to a JSON string

}

function totalCost(product){
    //console.log("Theproduct price is", product.price);
    let cartTotal = localStorage.getItem('totalCost');
    
    //console.log("My cartTotal is", cartTotal);
    //console.log(typeof cartTotal);

    if(cartTotal != null){
        cartTotal = parseInt(cartTotal);
        localStorage.setItem("totalCost", cartTotal + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
    

}


/* Get the items in the local storage, build the HTML, and put them to cart.html page  */
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");     // get the products in Cart from local storage
    cartItems = JSON.parse(cartItems);                          // convert to js objects

    let cartContainer = document.querySelector(".productRows");
    let cartTotal = localStorage.getItem('totalCost');

    console.log("Here's the cart items: ", cartItems);
    if( cartItems  && cartContainer ) {                         // if there's items in the cart and there is a cart container
        cartContainer.innerHTML = '';                           // initialize the innerHTML
        Object.values(cartItems).map(item => {                  // get the values from the cartItems
           console.log("Item tag is", item.tag );
           
            // build the HTML for the cart page
            cartContainer.innerHTML += `
                <div class="productCol">
                    <ion-icon name="close-circle"></ion-icon> 
                    <img src="./images/Shirts/${item.tag}.png">                                
                    <span class="productName">${item.name}</span>
                </div>
                <div class="priceCol">${item.price}.00</div>
                <div class="qtyCol"><ion-icon class="decrease" name="arrow-down-circle"></ion-icon>
                    <span class="productQty">${item.inCart}</span>
                    <ion-icon class="increase" name="arrow-up-circle"></ion-icon>
                </div> 
                <div class="totalCol">$${item.inCart * item.price}.00</div>    
                   
                `;
        });

        cartContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$${cartTotal}.00</h4>
                </div>
        `;
    }
}

/* CALLS THE FUNCTION TO RETRIEVE THE DATA STORED IN THE LOCAL STORAGE, WHEN THE PAGE IS LOADED  */
onLoadBasket();
displayCart();