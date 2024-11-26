// Archivo: js.js
console.log("El archivo js.js se está ejecutando.");

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validar nombre (mínimo 3 caracteres)
        if (name.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres.");
            event.preventDefault();
            return;
        }

        // Validar correo electrónico (formato básico)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            event.preventDefault();
            return;
        }

        // Validar mensaje (mínimo 10 caracteres)
        if (message.length < 10) {
            alert("El mensaje debe tener al menos 10 caracteres.");
            event.preventDefault();
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        const requiredFields = form.querySelectorAll("[required]");
        let allValid = true;

        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                field.style.border = "2px solid red";
                allValid = false;
            } else {
                field.style.border = "";
            }
        });

        if (!allValid) {
            alert("Por favor, completa todos los campos obligatorios.");
            event.preventDefault();
        }
    });
});

