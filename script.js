function toggleDropdown() {
    const dropdown = document.getElementById("dropdownContent");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function cambiarDocumento(url) {
    const visor = document.getElementById("visor");
    const loading = document.getElementById("loading");

    loading.style.display = "flex"; /* Display flex para centrar el contenido */
    loading.style.alignItems = "center"; /* Centrar verticalmente */
    loading.style.justifyContent = "center"; /* Centrar horizontalmente */
    visor.style.display = "none";
    visor.src = url;

    visor.onload = () => {
        loading.style.display = "none";
        visor.style.display = "block";
    };
}
