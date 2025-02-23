function toggleDropdown() {
    const dropdown = document.getElementById("dropdownContent");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function cambiarDocumento(url) {
    const visor = document.getElementById("visor");
    const loading = document.getElementById("loading");
    loading.style.display = "flex"; // Cambia a flex para centrar texto
    visor.style.display = "none";
    visor.src = url;

    visor.onload = () => {
        loading.style.display = "none";
        visor.style.display = "block";
    };
}
