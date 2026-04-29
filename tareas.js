document.addEventListener('DOMContentLoaded', () => {
    const formTareas = document.getElementById('formTareas');
    const listaTareasDiv = document.getElementById('listaTareas');
    const selectCurso = document.getElementById('selectCurso');

    function cargarCursosSelect() {
        const cursos = JSON.parse(localStorage.getItem('cursos')) || [];
        if (selectCurso) {
            selectCurso.innerHTML = '<option value="">Selecciona un Curso</option>' + 
                cursos.map(c => `<option value="${c.nombre}">${c.nombre}</option>`).join('');
        }
    }

    window.listarTareas = function(filtro = 'Todas') {
        let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        if (filtro !== 'Todas') tareas = tareas.filter(t => t.estado === filtro);

        if (listaTareasDiv) {
            listaTareasDiv.innerHTML = tareas.map((t, index) => `
                <div class="card" style="background: white; border: 1px solid #ffb7c5; padding: 10px; margin: 10px; border-radius: 8px;">
                    <h4>${t.titulo} [${t.estado}]</h4>
                    <button onclick="cambiarEstadoTarea(${index})">Cambiar Estado</button>
                    <button onclick="eliminarTarea(${index})">Eliminar</button>
                </div>
            `).join('');
        }
    };

    if (formTareas) {
        formTareas.addEventListener('submit', (e) => {
            e.preventDefault();
            const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
            tareas.push({
                titulo: document.getElementById('tituloTarea').value,
                curso: selectCurso.value,
                fecha: document.getElementById('fechaEntrega').value,
                prioridad: document.getElementById('prioridad').value,
                estado: 'Pendiente'
            });
            localStorage.setItem('tareas', JSON.stringify(tareas));
            formTareas.reset();
            listarTareas();
        });
    }

    window.cambiarEstadoTarea = function(index) {
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas[index].estado = tareas[index].estado === 'Pendiente' ? 'Completada' : 'Pendiente';
        localStorage.setItem('tareas', JSON.stringify(tareas));
        listarTareas();
    };

    window.eliminarTarea = function(index) {
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas.splice(index, 1);
        localStorage.setItem('tareas', JSON.stringify(tareas));
        listarTareas();
    };

    window.filtrar = function(estado) { listarTareas(estado); };

    cargarCursosSelect();
    listarTareas();
});
