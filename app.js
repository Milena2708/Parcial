// 1. Claves para LocalStorage [cite: 87-92]
const KEYS = {
    USER: 'usuarioRegistrado',
        SESSION: 'sesionActiva',
            COURSES: 'cursos',
                TASKS: 'tareas',
                    CONFIG: 'configuracion'
                    };

                    // 2. Validación de Sesión (Seguridad) [cite: 84, 130]
                    function checkAuth() {
                        const session = localStorage.getItem(KEYS.SESSION);
                            const isLoginPage = window.location.pathname.includes('login.html');
                                const isRegisterPage = window.location.pathname.includes('registro.html');

                                    if (!session && !isLoginPage && !isRegisterPage) {
                                            window.location.href = 'login.html';
                                                }
                                                }

                                                // 3. Función de Registro [cite: 8-17, 105-108]
                                                function registrarUsuario(event) {
                                                    event.preventDefault();
                                                        
                                                            const user = {
                                                                    nombres: document.getElementById('nombres').value,
                                                                            apellidos: document.getElementById('apellidos').value,
                                                                                    correo: document.getElementById('correo').value.trim().toLowerCase(),
                                                                                            dni: document.getElementById('dni').value,
                                                                                                    password: document.getElementById('password').value,
                                                                                                            carrera: document.getElementById('carrera').value,
                                                                                                                    ciclo: document.getElementById('ciclo').value,
                                                                                                                            ciudad: document.getElementById('ciudad').value
                                                                                                                                };

                                                                                                                                    // Validaciones mínimas [cite: 106, 107]
                                                                                                                                        if (user.dni.length !== 8) return alert("El DNI debe tener 8 dígitos");
                                                                                                                                            if (user.password.length < 6) return alert("La contraseña debe tener mínimo 6 caracteres");

                                                                                                                                                localStorage.setItem(KEYS.USER, JSON.stringify(user));
                                                                                                                                                    alert("Cuenta creada con éxito. Ahora inicia sesión.");
                                                                                                                                                        window.location.href = 'login.html';
                                                                                                                                                        }

                                                                                                                                                        // 4. Función de Login Corregida [cite: 18-23, 142]
                                                                                                                                                        function login(event) {
                                                                                                                                                            event.preventDefault();
                                                                                                                                                                
                                                                                                                                                                    const emailInput = document.getElementById('correo').value.trim().toLowerCase();
                                                                                                                                                                        const passInput = document.getElementById('password').value;
                                                                                                                                                                            
                                                                                                                                                                                // Obtener usuario del LocalStorage [cite: 22, 88]
                                                                                                                                                                                    const savedUser = JSON.parse(localStorage.getItem(KEYS.USER));

                                                                                                                                                                                        if (savedUser && savedUser.correo === emailInput && savedUser.password === passInput) {
                                                                                                                                                                                                localStorage.setItem(KEYS.SESSION, JSON.stringify(savedUser)); // [cite: 89]
                                                                                                                                                                                                        window.location.href = 'dashboard.html'; // [cite: 23]
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                    alert("Credenciales incorrectas. Verifica tu correo y contraseña."); // [cite: 141]
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        }

                                                                                                                                                                                                                        // 5. Cerrar Sesión [cite: 85]
                                                                                                                                                                                                                        function logout() {
                                                                                                                                                                                                                            localStorage.removeItem(KEYS.SESSION);
                                                                                                                                                                                                                                window.location.href = 'login.html';
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                // 6. Eliminar Cuenta [cite: 86]
                                                                                                                                                                                                                                function eliminarCuenta() {
                                                                                                                                                                                                                                    if (confirm("¿Estás seguro? Se borrarán todos tus datos permanentemente.")) {
                                                                                                                                                                                                                                            localStorage.clear(); 
                                                                                                                                                                                                                                                    window.location.href = 'registro.html';
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                        }