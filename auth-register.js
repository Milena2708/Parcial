document.addEventListener('DOMContentLoaded', () => {
    const formRegistro = document.getElementById('formRegistro');

    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();

            const usuario = {
                nombres: document.getElementById('nombres').value,
                apellidos: document.getElementById('apellidos').value,
                correo: document.getElementById('correo').value.trim().toLowerCase(),
                dni: document.getElementById('dni').value,
                password: document.getElementById('password').value,
                carrera: document.getElementById('carrera').value,
                ciclo: document.getElementById('ciclo').value,
                ciudad: document.getElementById('ciudad').value
            };

            // Validaciones
            if (usuario.dni.length !== 8) return alert("DNI debe tener 8 dígitos");
            if (usuario.password.length < 6) return alert("Contraseña mínima: 6 caracteres");

            // Guardamos en LocalStorage
            localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));
            
            alert("¡Registro exitoso! Ahora inicia sesión.");
            window.location.href = 'login.html';
        });
    }
});
