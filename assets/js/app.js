//funcionalidad desplazar hacia arriba
const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");
desplazarArriba.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        left: 0,
        behavior:"smooth",

    });
});
//posicional "suavemente" en la posicion arriba:0 e izquierta:0
const burger = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click",()=>{
    ul.classList.toggle("show");
});

// cerrar el menu de hamburguesa al hacer click en un enlace
// seleccionar enlaces de navegación

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) =>
link.addEventListener("click",()=>{
    ul.classList.remove("show");
})
);