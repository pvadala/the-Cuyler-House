console.log("Running...");

let cart = document.querySelectorAll('.addToCartBtn');

/*   CREATE AN ARRAY OF PRODUCTS TO KEEP TRACK OF ITEMS IN THE CART    */
let products = [
    {
        name: 'Shirt-Douglass-Black',       
        tag:'Shirt-Douglass-Black',                     //tag and img filename must match?
        price: 20,
        inCart: 0
    },
    {
        name: 'Shirt-Douglass-Tan',        
        tag: 'Shirt-Douglass-Tan',
        price: 20,
        inCart: 0
    },
    {
        name: 'Shirt-Tubman-PopArt',
        tag: 'Shirt-Tubman-PopArt',
        price: 20,
        inCart: 0
    },
    {
        name: 'Shirt-Tubman-Light',        
        tag: 'Shirt-Tubman-Light',
        price: 20,
        inCart: 0
    },
    {                                                        // name is what is displayed in the cart
        name: 'Shirt-Truth-PopArt',                          
        tag: 'Shirt-Truth-PopArt',                           // tag is the product name of the object        
        price: 20,
        inCart: 0
    },
    {
        name: 'Book-Railroad-Bundle',
        tag: 'Book-Railroad-Bundle',
        price: 25,
        inCart: 0
    },    
    {
        name: 'Book-Sweet-Clara',
        tag: 'Book-Sweet-Clara',
        price: 15,
        inCart: 0
    },
    {
        name: 'Book-Escape-to-Freedom',
        tag: 'Book-Escape-to-Freedom',
        price: 15,
        inCart: 0
    },
    {
        name: 'Book-Gateway-to-Freedom',
        tag: 'Book-Gateway-to-Freedom',
        price: 15,
        inCart: 0
    },
    {
        name: 'Book-Follow-the-Drinking-Gourd',
        tag: 'Book-Follow-the-Drinking-Gourd',
        price: 15,
        inCart: 0
    },
    {
        name: 'Book-Hidden-in-Plain-View',
        tag: 'Book-Hidden-in-Plain-View',
        price: 20,
        inCart: 0
    },
    {
        name: 'Book-If-You-Traveled',
        tag: 'Book-If-You-Traveled',
        price: 15,
        inCart: 0
    },
    {
        name: 'Book-The-Great-Migration',
        tag: 'Book-The-Great-Migration',
        price: 20,
        inCart: 0
    },
    {
        name: 'Book-History-of-Quilts-and-Slavery',
        tag: 'Book-History-of-Quilts-and-Slavery',
        price: 25,
        inCart: 0
    },
    {
        name: 'Book-Henrys-Freedom-Box',
        tag: 'Book-Henrys-Freedom-Box',
        price: 15,
        inCart: 0
    },
    {
        name: 'Poster-Truth-Quilt',
        tag: 'Poster-Truth-Quilt',
        price: 25,
        inCart: 0
    },
    {
        name: 'Poster-Quilt-Map',
        tag: 'Poster-Quilt-Map',
        price: 15,
        inCart: 0
    },
    {
        name: 'Poster-Douglass-Depth',
        tag: 'Poster-Douglass-Depth',
        price: 15,
        inCart: 0
    },
    {
        name: 'Poster-Build-Strong-Children',
        tag: 'Poster-Build-Strong-Children',
        price: 25,
        inCart: 0
    },
    {
        name: 'Poster-Douglass-Reading',
        tag: 'Poster-Douglass-Reading',
        price: 15,
        inCart: 0
    },
    {
        name: 'Poster-Tubman-Ringgold-Quilt',
        tag: 'Poster-Tubman-Ringgold-Quilt',
        price: 25,
        inCart: 0
    },
    {
        name: 'Poster-Tubman-Ringgold-Red-Quilt',
        tag: 'Poster-Tubman-Ringgold-Red-Quilt',
        price: 20,
        inCart: 0
    },
    {
        name: 'Poster-Aint-I-A-Woman',
        tag: 'Poster-Aint-I-A-Woman',
        price: 15,
        inCart: 0
    },
    {
        name: 'Poster-Truth-Prevails',
        tag: 'Poster-Truth-Prevails',
        price: 15,
        inCart: 0
    },
    {
        name: 'Poster-Truth-Pop-Art',
        tag: 'Poster-Truth-Pop-Art',
        price: 20,
        inCart: 0
    },
    {
        name: 'Poster-Tubman-Pop-Art',
        tag: 'Poster-Tubman-Pop-Art',
        price: 20,
        inCart: 0
    },
    {
        name: 'Poster-Tubman-Dream',
        tag: 'Poster-Tubman-Dream',
        price: 15,
        inCart: 0
    },
    {
        name: 'Poster-Tubman-Dream2',
        tag: 'Poster-Tubman-Dream2',
        price: 15,
        inCart: 0
    },
    {
        name: 'Poster-Tubman-Light',
        tag: 'Poster-Tubman-Light',
        price: 15,
        inCart: 0
    },   
    {
        name: 'Map-NYC-Freedom-Trail',
        tag: 'Map-NYC-Freedom-Trail',
        price: 15,
        inCart: 0
    },
    {
        name: 'Map-Syracuse-1852',
        tag: 'Map-Syracuse-1852',
        price: 15,
        inCart: 0
    },
    {
        name: 'Map-US-Freedom-Trail',
        tag: 'Map-US-Freedom-Trail',
        price: 15,
        inCart: 0
    }

 

 ]

/*         LISTEN FOR THE ADD TO CART BUTTON BEING CLICKED AND UPDATE        */
/*         THE ITEMS IN THE CART AND THE TOTAL COST.                          */
for (let i = 0; i < cart.length; i++) {

    cart[i].addEventListener('click', () => {
        inBasket(products[i]);
        calculateTotalCost(products[i]);
    })
}



/*      RETRIEVE THE DATA STORED IN THE LOCAL STORAGE, WHEN THE PAGE IS LOADED      */
function onLoadCart() {
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
    
    setItems(product);

}


/*  CHECK FOR ITEMS IN THE CART, CONVERT THE STRING TO A JAVASCRIPT OBJECT,
/*  ADD ITEMS TO THE CART.  iF A SIMILAR ITEM IS ALREADY IN THE CART, INCREMENT IT. */
function setItems(product) {    
    let cartItems = localStorage.getItem('productsInCart');                         // Check for items in cart   

    cartItems = JSON.parse(cartItems);                                              // Convert the string into javascript object
    
    if (cartItems != null) {                                                        // Items in the cart
        if(cartItems[product.tag] == undefined) {                                   // Clicked on item is not already in the cart
            cartItems = {                                                           // Add the new object
        ...cartItems,                                                               // Grab the other items and add the new product
                [product.tag]: product
            } 
        }
       cartItems[product.tag].inCart+=1;                                            // increment the inCart value                            
    } else {                                                                        // cart is empty, so add item to the cart
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));  //convert the values to a JSON string

}

function calculateTotalCost(product){
    
    let cartTotal = localStorage.getItem('totalCost');
    
    if(cartTotal != null){
        cartTotal = parseInt(cartTotal);
        localStorage.setItem("totalCost", cartTotal + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
    
}

/*  GET THE ITEMS IN THE LOCAL STORAGE, BUILD THE HTML FOR THE CART ROWS USING JQUERY, 
/*  CALCULATE THE TOTAL AND ADD THE HTML TO CART.HTML */
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");     // get the products in Cart from local storage
    cartItems = JSON.parse(cartItems);                          // convert to js objects

    let cartContainer = document.querySelector(".productRows");
    let cartTotal = localStorage.getItem('totalCost');
    
    //console.log("Here's the cart items: ", cartItems);
    if( cartItems  && cartContainer ) {                         // if there's items in the cart and there is a cart container
        cartContainer.innerHTML = '';                           // initialize the innerHTML
        Object.values(cartItems).map(item => {                  // get the values from the cartItems
                      
            // build the HTML for the cart page
            cartContainer.innerHTML += `
                <div class="productCol">
                    <ion-icon name="close-circle"></ion-icon> 
                    <img src="./images/${item.tag}.png">                                
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

    removeItems();                                                  // removeItems from the cart if necessary
    changeProductQty();                                             // change the qty in the cart if necessary
}


/*      REMOVEITEMS LISTENS FOR THE DELETE BUTTONS TO BE CLICKED, AND IF THEY ARE CLICKED, REMOVES THE PRODUCTS        */
/*      FROM THE CART, DELETES THE ROW, AND RECALCULATES THE TOTALS AND UPDATES THE LOCAL STORAGE AND CART BUTTON      */

function removeItems() {
    // Get all the delete buttons
    let deleteBtns = document.querySelectorAll('.productCol ion-icon');
    let productName;
    let totalProducts = localStorage.getItem('qtyInCart');          // get the total number of products in the cart     
    
    let productInfo = localStorage.getItem('productsInCart');    
    productInfo = JSON.parse(productInfo);                          // convert to javascript
    console.log('Product info ', productInfo);

    let cartCost = localStorage.getItem('totalCost');               // get the totalCost
    

    // Listen for the delete button to be clicked, and remove the product from the cart
    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', ()  =>  {
            //productText = deleteBtns[i].parentElement.textContent.trim()
            //.toLowerCase().replace(/ /g, '');

            //Remove whitespace from the product name
            productName = deleteBtns[i].parentElement.textContent.trim().replace(/ /g, '');
            console.log("Product name is " + productName);     

            console.log("How many in cart? ", productInfo[productName].name + " " + productInfo[productName].inCart);            
            
            //Use the product name to update the qty in cart and the total Cost
            localStorage.setItem('qtyInCart', totalProducts - productInfo[productName].inCart);
            localStorage.setItem('totalCost', cartCost - productInfo[productName].price * productInfo[productName].inCart);

            // Remove the row of products, and put the remaining items back in storage
            delete productInfo[productName];
            localStorage.setItem('productsInCart', JSON.stringify(productInfo));

            //update the cart
            displayCart();
            onLoadCart();
        });
        
    }

}

function changeProductQty() {
    let decreaseBtns = document.querySelectorAll('.decrease');
    let increaseBtns = document.querySelectorAll('.increase');

    for( let i=0; i< decreaseBtns.length; i++) {
        decreaseBtns[i].addEventListener('click', () => {
            console.log("Decrease button clicked");
        })
    }

    for( let i=0; i< increaseBtns.length; i++) {
        increaseBtns[i].addEventListener('click', () => {
            console.log("Increase button clicked");
        })
    }

}
/* CALLS THE FUNCTION TO RETRIEVE THE DATA STORED IN THE LOCAL STORAGE, WHEN THE PAGE IS LOADED  */
onLoadCart();
displayCart();