function toggleDropdown() {
    let dropdown = document.getElementById("dropdownContent");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function cambiarDocumento(url) {
    let visor = document.getElementById("visor");
    let loading = document.getElementById("loading");
    let reloadBtn = document.getElementById("reloadBtn");

    visor.style.display = "none";
    loading.style.display = "flex";
    reloadBtn.style.display = "none";

    setTimeout(() => {
        visor.src = url;
        visor.style.display = "block";
        loading.style.display = "none";
        reloadBtn.style.display = "inline-block";
    }, 1500);
}

function recargarDocumento() {
    let visor = document.getElementById("visor");
    visor.src = visor.src;
}
