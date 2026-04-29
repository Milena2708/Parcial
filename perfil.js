document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('usuarioRegistrado'));
    const infoDiv = document.getElementById('perfilInfo');
    const formEditar = document.getElementById('formEditarPerfil');

    if (user && document.getElementById('viewNombre')) {
        document.getElementById('viewNombre').innerText = `${user.nombres} ${user.apellidos}`;
        document.getElementById('viewCorreo').innerText = user.correo;
        document.getElementById('viewDni').innerText = user.dni;
        document.getElementById('viewCarrera').innerText = user.carrera;
        document.getElementById('viewCiclo').innerText = user.ciclo;
        document.getElementById('viewCiudad').innerText = user.ciudad;
    }

    window.habilitarEdicion = function() {
        if (infoDiv && formEditar) {
            infoDiv.classList.add('hidden');
            formEditar.classList.remove('hidden');
            document.getElementById('editNombres').value = user.nombres;
            document.getElementById('editApellidos').value = user.apellidos;
            document.getElementById('editCorreo').value = user.correo;
            document.getElementById('editDni').value = user.dni;
            document.getElementById('editCarrera').value = user.carrera;
            document.getElementById('editCiclo').value = user.ciclo;
            document.getElementById('editCiudad').value = user.ciudad;
        }
    };

    if (formEditar) {
        formEditar.addEventListener('submit', (e) => {
            e.preventDefault();
            const userActualizado = {
                ...user,
                nombres: document.getElementById('editNombres').value,
                apellidos: document.getElementById('editApellidos').value,
                correo: document.getElementById('editCorreo').value,
                dni: document.getElementById('editDni').value,
                carrera: document.getElementById('editCarrera').value,
                ciclo: document.getElementById('editCiclo').value,
                ciudad: document.getElementById('editCiudad').value
            };
            localStorage.setItem('usuarioRegistrado', JSON.stringify(userActualizado));
            localStorage.setItem('sesionActiva', JSON.stringify(userActualizado));
            alert("Perfil actualizado");
            location.reload();
        });
    }
});

window.eliminarCuenta = function() {
    if (confirm("¿Estás seguro? Se borrará TODO.")) {
        localStorage.clear();
        window.location.href = 'registro.html';
    }
};
