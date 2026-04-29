// Claves sugeridas [cite: 87-92]
const KEYS = {
    USER: 'usuarioRegistrado',
        SESSION: 'sesionActiva',
            COURSES: 'cursos',
                TASKS: 'tareas',
                    CONFIG: 'configuracion'
                    };

                    // --- REDIRECCIÓN DE SEGURIDAD --- 
                    function checkAuth() {
                        const session = JSON.parse(localStorage.getItem(KEYS.SESSION));
                            const currentPage = window.location.pathname;

                                if (!session && !currentPage.includes('login.html') && !currentPage.includes('registro.html')) {
                                        window.location.href = 'login.html';
                                            }
                                            }

                                            // --- REGISTRO --- [cite: 8-17]
                                            function registrarUsuario(event) {
                                                event.preventDefault();
                                                    const user = {
                                                            nombres: document.getElementById('nombres').value, // [cite: 9]
                                                                    apellidos: document.getElementById('apellidos').value, // [cite: 10]
                                                                            correo: document.getElementById('correo').value, // [cite: 11]
                                                                                    dni: document.getElementById('dni').value, // [cite: 12]
                                                                                            password: document.getElementById('password').value, // [cite: 13]
                                                                                                    carrera: document.getElementById('carrera').value, // [cite: 14]
                                                                                                            ciclo: document.getElementById('ciclo').value, // [cite: 15]
                                                                                                                    ciudad: document.getElementById('ciudad').value // [cite: 16]
                                                                                                                        };

                                                                                                                            // Validaciones mínimas [cite: 105-108]
                                                                                                                                if (user.dni.length !== 8) return alert("DNI debe tener 8 dígitos");
                                                                                                                                    if (user.password.length < 6) return alert("Mínimo 6 caracteres");

                                                                                                                                        localStorage.setItem(KEYS.USER, JSON.stringify(user));
                                                                                                                                            alert("Cuenta creada con éxito");
                                                                                                                                                window.location.href = 'login.html';
                                                                                                                                                }

                                                                                                                                                // --- LOGIN --- [cite: 18-23]
                                                                                                                                                function login(event) {
                                                                                                                                                    event.preventDefault();
                                                                                                                                                        const email = document.getElementById('correo').value;
                                                                                                                                                            const pass = document.getElementById('password').value;
                                                                                                                                                                const user = JSON.parse(localStorage.getItem(KEYS.USER));

                                                                                                                                                                    if (user && user.correo === email && user.password === pass) {
                                                                                                                                                                            localStorage.setItem(KEYS.SESSION, JSON.stringify(user));
                                                                                                                                                                                    window.location.href = 'dashboard.html';
                                                                                                                                                                                        } else {
                                                                                                                                                                                                alert("Credenciales incorrectas");
                                                                                                                                                                                                    }
                                                                                                                                                                                                    }

                                                                                                                                                                                                    // --- GESTIÓN DE CURSOS --- [cite: 38-50]
                                                                                                                                                                                                    function guardarCurso(curso) {
                                                                                                                                                                                                        let cursos = JSON.parse(localStorage.getItem(KEYS.COURSES)) || [];
                                                                                                                                                                                                            cursos.push(curso);
                                                                                                                                                                                                                localStorage.setItem(KEYS.COURSES, JSON.stringify(cursos));
                                                                                                                                                                                                                }

                                                                                                                                                                                                                // --- CERRAR SESIÓN --- [cite: 37, 85]
                                                                                                                                                                                                                function logout() {
                                                                                                                                                                                                                    localStorage.removeItem(KEYS.SESSION);
                                                                                                                                                                                                                        window.location.href = 'login.html';
                                                                                                                                                                                                                        }