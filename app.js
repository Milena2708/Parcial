function login(event) {
        event.preventDefault();
            const email = document.getElementById('correo').value.trim(); // .trim() evita espacios extra
                const pass = document.getElementById('password').value;
                    
                        // Obtenemos el usuario guardado 
                            const user = JSON.parse(localStorage.getItem('usuarioRegistrado'));

                                // Validamos que el usuario exista y que los datos coincidan 
                                    if (user && user.correo === email && user.password === pass) {
                                            localStorage.setItem('sesionActiva', JSON.stringify(user)); // [cite: 89]
                                                    window.location.href = 'dashboard.html'; // [cite: 23]
                                                        } else {
                                                                alert("Credenciales incorrectas");
                                                                    }
                                                                    }
}