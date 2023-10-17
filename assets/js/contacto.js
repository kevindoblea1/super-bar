const mostrarFormulario = document.getElementById('mostrar-formulario');
const formularioContacto = document.getElementById('formulario-contacto');
const infoContacto = document.getElementById('info-contacto');
const botonContactanos = document.getElementById('mostrar-formulario');

mostrarFormulario.addEventListener('click', (event) => {
    event.preventDefault();
    infoContacto.style.display = 'none'; // Oculta la información de contacto
    botonContactanos.style.display = 'none'; // Oculta el botón "Contactanos"
    formularioContacto.style.display = 'block'; // Muestra el formulario de contacto
});
