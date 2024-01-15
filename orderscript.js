let cart = [];

        function addToCart() {
            const pizzaType = document.getElementById("pizzaType").value;
            const pizzaSize = document.getElementById("pizzaSize").value;
            const quantity = parseInt(document.getElementById("quantity").value);

            const pizzaPrices = {
                small: 109,
                medium: 259,
                large: 479
                // Add more size prices as needed
            };

            const totalCost = pizzaPrices[pizzaSize] * quantity;

            cart.push({ type: pizzaType, size: pizzaSize, quantity, cost: totalCost });

            updateCart();
        }

        function updateCart() {
            const cartList = document.getElementById("cartList");
            const totalCostElement = document.getElementById("totalCost");

            // Clear previous items
            cartList.innerHTML = "";

            // Display items in the cart
            cart.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = `${item.quantity} ${item.size} ${item.type} - ₹${item.cost.toFixed(2)}`;
                cartList.appendChild(listItem);
            });

            // Calculate total cost
            const total = cart.reduce((acc, item) => acc + item.cost, 0);
            totalCostElement.textContent = `Total Cost: ₹${total.toFixed(2)}`;
        }