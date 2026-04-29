// Protección de ruta: Ejecutar de inmediato
(function comprobarAcceso() {
    const sesion = localStorage.getItem('sesionActiva');
    if (!sesion) {
        window.location.href = 'login.html';
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const sesion = JSON.parse(localStorage.getItem('sesionActiva'));
    
    // Mostrar nombre del usuario
    if (sesion && document.getElementById('userName')) {
        document.getElementById('userName').innerText = sesion.nombres;
    }

    // Actualizar contadores
    const cursos = JSON.parse(localStorage.getItem('cursos')) || [];
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    
    if (document.getElementById('totalCursos')) {
        document.getElementById('totalCursos').innerText = cursos.length;
    }
    if (document.getElementById('totalTareas')) {
        document.getElementById('totalTareas').innerText = tareas.length;
    }
});

// Función global para cerrar sesión
window.logout = function() {
    localStorage.removeItem('sesionActiva');
    window.location.href = 'login.html';
};
