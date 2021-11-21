const cartButton = document.querySelector(".cart-button");
const closeCartButton = document.querySelector(".close-cart");
const clearCartButton = document.querySelector(".clear-cart");
const cartDisplay = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDisplay = document.querySelector(".products-center");

let productsInCart = 0;
let productsTotalAmount = 0;
var items;

async function getProducts() {
    try {
        let result = await fetch('products.json');
        let data = await result.json();
        let products = data.items;
        products = products.map(item => {
            const {title,price,room} = item.fields;
            const {id} = item.sys;
            const image = item.fields.image.fields.file.url;
            return {title,price,room,id,image};
        })
        return products;
    } catch (error) {
        console.log(error);
    }
}

function displayProducts(products) {
    let result = '';
    products.forEach(product => {
        result +=`
            <article class="product ${product.room}">
                    <div class="img-container">
                        <img 
                        src=${product.image} 
                        alt="product" 
                        class="product-img"
                        >
                        <button class="bag-button" data-id=${product.id}>
                            <i class="fas fa-shopping-cart"></i>ADD TO CART
                        </button>
                    </div>
                    <h3>${product.title}</h3>
                    <h4>${product.price}$</h4>
            </article>
        `;
    });
    productsDisplay.innerHTML = result;

    items = products.map(function(product) {return product});
}

function filter() {
    const filterAll = document.getElementById("all");

    const bedroom = document.querySelectorAll(".bedroom");
    const filterBedroom = document.getElementById("bedroom");

    const kitchen = document.querySelectorAll(".kitchen");
    const filterKitchen = document.getElementById("kitchen");

    const bathroom = document.querySelectorAll(".bathroom");
    const filterBathroom = document.getElementById("bathroom");

    const livingRoom = document.querySelectorAll(".living-room");
    const filterLivingRoom = document.getElementById("living-room");
    
    // show all
    filterAll.addEventListener('click', () => {
        for (var i = 0; i < bedroom.length; i++) {
            bedroom[i].classList.remove('hidden');
        }
        for (var i = 0; i < kitchen.length; i++) {
            kitchen[i].classList.remove('hidden');
        }
        for (var i = 0; i < bathroom.length; i++) {
            bathroom[i].classList.remove('hidden');
        }
        for (var i = 0; i < livingRoom.length; i++) {
            livingRoom[i].classList.remove('hidden');
        }
    });

    // filter by bedroom
    filterBedroom.addEventListener('click', () => {
        for (var i = 0; i < kitchen.length; i++) {
            kitchen[i].classList.add('hidden');
        }
        for (var i = 0; i < bathroom.length; i++) {
            bathroom[i].classList.add('hidden');
        }
        for (var i = 0; i < livingRoom.length; i++) {
            livingRoom[i].classList.add('hidden');
        }
        for (var i = 0; i < bedroom.length; i++) {
            bedroom[i].classList.remove('hidden');
        }
    });

    // filter by kitchen
    filterKitchen.addEventListener('click', () => {
        for (var i = 0; i < bedroom.length; i++) {
            bedroom[i].classList.add('hidden');
        }
        for (var i = 0; i < bathroom.length; i++) {
            bathroom[i].classList.add('hidden');
        }
        for (var i = 0; i < livingRoom.length; i++) {
            livingRoom[i].classList.add('hidden');
        }
        for (var i = 0; i < kitchen.length; i++) {
            kitchen[i].classList.remove('hidden');
        }
    });

    // filter by bathroom
    filterBathroom.addEventListener('click', () => {
        for (var i = 0; i < bedroom.length; i++) {
            bedroom[i].classList.add('hidden');
        }
        for (var i = 0; i < kitchen.length; i++) {
            kitchen[i].classList.add('hidden');
        }
        for (var i = 0; i < livingRoom.length; i++) {
            livingRoom[i].classList.add('hidden');
        }
        for (var i = 0; i < bathroom.length; i++) {
            bathroom[i].classList.remove('hidden');
        }
    });

    // filter by living room
    filterLivingRoom.addEventListener('click', () => {
        for (var i = 0; i < bedroom.length; i++) {
            bedroom[i].classList.add('hidden');
        }
        for (var i = 0; i < bathroom.length; i++) {
            bathroom[i].classList.add('hidden');
        }
        for (var i = 0; i < kitchen.length; i++) {
            kitchen[i].classList.add('hidden');
        }
        for (var i = 0; i < livingRoom.length; i++) {
            livingRoom[i].classList.remove('hidden');
        }
    });
}

function addButtonEvents(products) {
    cartButton.addEventListener('click', showCart);
    closeCartButton.addEventListener('click', hideCart);
    clearCartButton.addEventListener('click', clearCart);

    var addButtons = document.querySelectorAll(".bag-button");
    addButtons.forEach(button => {
        var buttonId = button.getAttribute('data-id');
        button.addEventListener("click", function() {
            addProductToTheCart(products, buttonId);
            button.innerText = "in cart";
            button.disabled = true;
        })
    })
}

function addProductToTheCart(products, buttonId) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == buttonId) {
            products[i].amount = 1;
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = `
                <img src=${products[i].image} alt="product">
            <div>
                <h4>${products[i].title}</h4>
                <h5>${products[i].price}$</h5>
                <span class="remove-item" data-id=${products[i].id}>remove</span>
            </div>
            <div>
                <i class="fas fa-chevron-up" data-id=${products[i].id}></i>
                <p class="item-amount">${products[i].amount}</p>
                <i class="fas fa-chevron-down" data-id=${products[i].id}></i>
            </div>`;
            cartContent.appendChild(div);
            removeProductFromTheCart();
            showCart();
            countCurrentAmount(1, products[i].id, 1);
        }
    } 
    addAnotherProduct();
    deleteAnotherProduct()

    productsInCart++;
    cartItems.innerText = productsInCart;
    
}

function removeProductFromTheCart() {
    var removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            var buttonClicked = event.target;
            buttonClicked.parentElement.parentElement.remove();
            buttonId = buttonClicked.getAttribute("data-id");
            var addButtons = document.querySelectorAll(".bag-button");
            addButtons.forEach(button => {
                var currentButtonId = button.getAttribute('data-id');
                if (currentButtonId == buttonId) {
                    button.innerHTML = '<i class="fas fa-shopping-cart"></i>ADD TO CART';
                    button.disabled = false;
                }
            })
        })
    })
    
}

function showCart() {
    cartOverlay.classList.add('transparentBcg');
    cartDisplay.classList.add('showCart');
}

function hideCart() {
    cartOverlay.classList.remove('transparentBcg');
    cartDisplay.classList.remove('showCart');
}

function addAnotherProduct() {
    var addButtons = document.querySelectorAll(".fa-chevron-up");
    addButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            var buttonClicked = event.target;
            var buttonId = buttonClicked.getAttribute("data-id");
            var currentAmount = 1 + parseInt(buttonClicked.nextElementSibling.innerHTML);
            buttonClicked.nextElementSibling.innerHTML = currentAmount;
            countCurrentAmount(currentAmount, buttonId, 1);
            productsInCart++;
            cartItems.innerText = productsInCart;
        })
    })
}

function deleteAnotherProduct() {
    var deleteButtons = document.querySelectorAll(".fa-chevron-down");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            var buttonClicked = event.target;
            var buttonId = buttonClicked.getAttribute("data-id");
            var currentAmount = parseInt(buttonClicked.previousElementSibling.innerHTML) - 1;
            buttonClicked.previousElementSibling.innerHTML= currentAmount;
            countCurrentAmount(currentAmount, buttonId, (-1));
            productsInCart--;
            cartItems.innerText = productsInCart;

            if (currentAmount == 0) {
                buttonClicked.parentElement.parentElement.remove();
                var addButtons = document.querySelectorAll(".bag-button");
                addButtons.forEach(button => {
                    var currentButtonId = button.getAttribute('data-id');
                    if (currentButtonId == buttonId) {
                        button.innerHTML = '<i class="fas fa-shopping-cart"></i>ADD TO CART';
                        button.disabled = false;
                    }
                })
            }
        })
    })
}

function clearCart() {
    var removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach(button => {
        button.parentElement.parentElement.remove();
        
    });
    hideCart();
    productsTotalAmount = 0;
    cartTotal.innerHTML = 0;
    productsInCart = 0;
    cartItems.innerText = productsInCart;
    var addButtons = document.querySelectorAll(".bag-button");
    addButtons.forEach(button => {
        button.innerHTML = '<i class="fas fa-shopping-cart"></i>ADD TO CART';
        button.disabled = false;
    })
}

function countCurrentAmount(currentAmount, buttonId, multiplier) {
    let tempTotalAmount = 0;
    items.forEach(product => {
        if (product.id == buttonId) {
            tempItemPrice = product.price;
        }
    })
    tempTotalAmount = currentAmount * tempItemPrice;

    var removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach(button => {
        var clickedButtonId = button.getAttribute("data-id");
        if (clickedButtonId == buttonId) {
            button.previousElementSibling.innerHTML = tempTotalAmount;
        }
    })

    tempTotalAmount = multiplier * tempItemPrice;
    productsTotalAmount = Number(productsTotalAmount);
    productsTotalAmount += tempTotalAmount;
    
    productsTotalAmount = parseFloat(productsTotalAmount).toFixed(2);
    cartTotal.innerHTML = productsTotalAmount;

}

getProducts().then(products => {
    displayProducts(products); addButtonEvents(products); filter();
});

