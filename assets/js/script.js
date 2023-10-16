const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

// Agregar un manejador de eventos a los elementos del menú
const navMenuItems = document.querySelectorAll(".nav-menu-link");
navMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Ocultar el menú al hacer clic en un elemento del menú
    navMenu.classList.remove("nav-menu_visible");
    navToggle.setAttribute("aria-label", "Abrir menú");
  });
});

// Agregar un manejador de eventos al botón hamburguesa
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
