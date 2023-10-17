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

// Agrega esta función para manejar el botón de compra
function handleCheckout() {
  const checkoutButton = document.getElementById('checkout-button');

  checkoutButton.addEventListener('click', () => {
    // Aquí puedes agregar la lógica para procesar la compra
    // Por ejemplo, redireccionar a una página de pago o mostrar un mensaje de confirmación
    alert('Gracias por tu compra');
    // También puedes limpiar el carrito o realizar otras acciones necesarias
  });
}

// Llama a la función para manejar el botón de compra
handleCheckout();

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
// Agrega esta función para manejar el botón de compra
function handleCheckout() {
    const checkoutButton = document.getElementById('checkout-button');
  
    checkoutButton.addEventListener('click', () => {
      // Crear una factura con el total
      const total = parseFloat(cartTotalAside.textContent.replace('$', ''));
  
      // Lógica para imprimir la factura (puede variar según el navegador y configuración del usuario)
      const printWindow = window.open('', '', 'width=600,height=600');
      printWindow.document.open();
      printWindow.document.write('<html><head><title>Factura de Compra</title></head><body>');
      printWindow.document.write('<h1>Factura de Compra</h1>');
      printWindow.document.write(`<p>Total: $${total.toFixed(2)}</p>`);
      printWindow.document.write('<p>Gracias por tu compra</p>');
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
  
      // Limpiar el carrito
      cartItemsAside.innerHTML = '';
      cartTotalAside.textContent = '$0.00';
  
      // Reiniciar el contador de elementos
      const cartItemCount = document.getElementById('cart-item-count');
      cartItemCount.textContent = '0';
    });
  }
  
  // Llama a la función para manejar el botón de compra
  handleCheckout();
  
  