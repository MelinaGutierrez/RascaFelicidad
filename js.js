document.addEventListener("DOMContentLoaded", function () {
    const filtro = document.querySelector(".filtro");
    const contactoSeccion = document.querySelector(".contacto-seccion");

    // Obtén la posición vertical de la sección "Contacto"
    const contactoOffset = contactoSeccion.offsetTop;

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;

        // Verifica si el scroll está por encima de la sección "Contacto"
        if (scrollY < contactoOffset) {
            filtro.style.position = "sticky";
        } else {
            filtro.style.position = "static";
        }
    });
});
