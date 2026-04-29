document.addEventListener('DOMContentLoaded', () => {
    const formLogin = document.getElementById('formLogin');

    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();

            const correoInput = document.getElementById('correo').value.trim().toLowerCase();
            const passInput = document.getElementById('password').value;

            // Recuperamos el usuario del registro
            const usuarioGuardado = JSON.parse(localStorage.getItem('usuarioRegistrado'));

            if (usuarioGuardado && 
                usuarioGuardado.correo === correoInput && 
                usuarioGuardado.password === passInput) {
                
                // Crear sesión activa
                localStorage.setItem('sesionActiva', JSON.stringify(usuarioGuardado));
                window.location.href = 'dashboard.html';
            } else {
                alert("Correo o contraseña incorrectos. ¿Ya te registraste?");
            }
        });
    }
});
