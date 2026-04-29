document.addEventListener('DOMContentLoaded', () => {
    const formCursos = document.getElementById('formCursos');
    const listaCursosDiv = document.getElementById('listaCursos');

    window.listarCursos = function() {
        const cursos = JSON.parse(localStorage.getItem('cursos')) || [];
        if (listaCursosDiv) {
            listaCursosDiv.innerHTML = cursos.map((c, index) => `
                <div class="card" style="border: 1px solid #ffb7c5; margin: 10px; padding: 10px; border-radius: 8px;">
                    <p><strong>${c.nombre}</strong> - ${c.docente}</p>
                    <button onclick="eliminarCurso(${index})">Eliminar</button>
                </div>
            `).join('');
        }
    };

    if (formCursos) {
        formCursos.addEventListener('submit', (e) => {
            e.preventDefault();
            const nuevoCurso = {
                nombre: document.getElementById('nombreCurso').value,
                docente: document.getElementById('docente').value,
                horario: document.getElementById('horario').value,
                modalidad: document.getElementById('modalidad').value,
                creditos: document.getElementById('creditos').value
            };
            const cursos = JSON.parse(localStorage.getItem('cursos')) || [];
            cursos.push(nuevoCurso);
            localStorage.setItem('cursos', JSON.stringify(cursos));
            formCursos.reset();
            listarCursos();
        });
    }

    window.eliminarCurso = function(index) {
        let cursos = JSON.parse(localStorage.getItem('cursos'));
        cursos.splice(index, 1);
        localStorage.setItem('cursos', JSON.stringify(cursos));
        listarCursos();
    };

    listarCursos();
});
