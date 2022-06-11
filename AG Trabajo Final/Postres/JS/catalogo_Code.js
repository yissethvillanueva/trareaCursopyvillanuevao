
/* Programación de Dropdown Categorías */

function Dropdown() {
    document.getElementById("Desplegable").classList.toggle("Show");
}
  
// Evento para cunado el mouse sale del area de la lista de categoria
window.onclick = function(event) {
    if (!event.target.matches('.BtnCat')) {
        var dropdowns = document.getElementsByClassName("Contenido");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('Show')) {
                openDropdown.classList.remove('Show');
            }
        }
    }
}