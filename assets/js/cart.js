const cartIcon = document.getElementById('cart-icon');
const cartAside = document.getElementById('cart-aside');
const cartContentAside = document.getElementById('cart-content-aside');
const cartItemsAside = document.getElementById('cart-items-aside');
const cartTotalAside = document.getElementById('cart-total-aside');
const cartCloseButton = document.getElementById('cart-close-button'); // Agrega esta línea

// Evento para hacer clic en el icono del carrito y mostrar/ocultar el aside del carrito
cartIcon.addEventListener('click', () => {
    cartAside.classList.toggle('show');
});

// Función para agregar elementos al carrito
function addToCartAside(itemName, itemPrice) {
    const li = document.createElement('li');
    li.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
    cartItemsAside.appendChild(li);

    // Incrementar el contador del carrito
    const cartItemCount = document.getElementById('cart-item-count');
    const itemCount = parseInt(cartItemCount.textContent);
    cartItemCount.textContent = itemCount + 1;

    const total = Array.from(cartItemsAside.children).reduce((acc, el) => {
        const price = parseFloat(el.textContent.match(/\$\d+\.\d{2}/)[0].substring(1));
        return acc + price;
    }, 0);
    cartTotalAside.textContent = `$${total.toFixed(2)}`;
}


// Captura de clics en los botones "Agregar" en el menú
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const menuItem = button.parentElement;
        const itemName = menuItem.getAttribute('data-name');
        const itemPrice = parseFloat(menuItem.getAttribute('data-price'));
        addToCartAside(itemName, itemPrice);
    });
});
// Evento para hacer clic en el icono del carrito y mostrar/ocultar el aside del carrito
cartIcon.addEventListener('click', () => {
    cartIcon.classList.add('hidden');
    cartAside.classList.add('show');
    cartCloseButton.style.display = 'block'; // Muestra el icono "X"
});

// Evento para hacer clic en el icono "X" y ocultar el aside del carrito
cartCloseButton.addEventListener('click', () => {
    cartIcon.classList.remove('hidden'); // Muestra el icono del carrito
    cartAside.classList.remove('show');
    cartCloseButton.style.display = 'none'; // Oculta el icono "X"
});
