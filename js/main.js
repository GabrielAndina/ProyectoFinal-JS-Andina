
// Escuchamos los clics en los botones "Agregar artículo"
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach(button => {
      button.addEventListener("click", function() {
        const productId = button.getAttribute("data-product-id");
        addToCart(productId);
      });
    });
  });

  // Función para agregar un producto al carrito
  function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ productId });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartView();
  }



  document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    const cartElement = document.getElementById("cart");
    const totalElement = document.getElementById("total");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const userForm = document.getElementById("userForm");
    const confirmPurchaseBtn = document.getElementById("confirmPurchaseBtn");

        const products = [
            { id: 1, name: "Camiseta Titular 2023", price: 20000 },
            { id: 2, name: "Camiseta Suplente 2023", price: 17000 },
            { id: 3, name: "Short Titular Blanco", price: 13000 },
            { id: 4, name: "Short Suplente Azul", price: 13000 },
            { id: 5, name: "Remera Training", price: 15000 },
            { id: 6, name: "Remera Training 2", price: 15000 },
            { id: 7, name: "Campera Rompeviento", price: 18000 },
            { id: 8, name: "Campera de Algodón 1", price: 17000 },
            { id: 9, name: "Campera de Algodón 2", price: 17000 },
            { id: 10, name: "Buzo Impermeable", price: 14000 },
            { id: 11, name: "Buzo de Algodón", price: 12000 },
            { id: 12, name: "Pantalón Impermeable", price: 15000 },
        ];

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        function updateCartView() {
            cartElement.innerHTML = "";
            let totalPrice = 0;
    
            cart.forEach(item => {
                const product = products.find(p => p.id === item.productId);
                const itemElement = document.createElement("div");
                itemElement.textContent = `${product.name} - $${product.price}`;
                const removeButton = document.createElement("button");
                removeButton.textContent = "Eliminar";
                removeButton.addEventListener("click", function () {
                    removeFromCart(cart.indexOf(item));
                });
                itemElement.appendChild(removeButton);
                cartElement.appendChild(itemElement);
                totalPrice += product.price;
            });
    
            totalElement.textContent = totalPrice;
        }
    
        function removeFromCart(index) {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartView();
        }
    
        addToCartButtons.forEach((button, index) => {
            button.addEventListener("click", function () {
                const productId = parseInt(button.getAttribute("data-product-id"));
                cart.push({ productId });
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartView();
            });
        });
    
        checkoutBtn.addEventListener("click", function () {
            userForm.style.display = "block";
        });
    
        userForm.addEventListener("submit", function (event) {
            event.preventDefault();
            userForm.style.display = "none";
            // Aquí podrías enviar los datos del usuario y la compra a tu servidor si lo deseas
            // Mostrar un mensaje de agradecimiento al usuario
            alert("¡Gracias por tu compra! Esperamos que disfrutes tus productos.");
            // Limpiar el carrito y actualizar la vista
            cart = [];
            localStorage.removeItem("cart");
            updateCartView();
        });
    
        updateCartView();
    });
