document.addEventListener('DOMContentLoaded', () => {
    const formConfig = document.getElementById('formConfig');
    const config = JSON.parse(localStorage.getItem('configuracion')) || {};

    if (document.getElementById('modoOscuro')) {
        document.getElementById('modoOscuro').checked = config.modoOscuro || false;
    }
    if (document.getElementById('nombreVisible')) {
        document.getElementById('nombreVisible').value = config.nombreVisible || "";
    }

    if (formConfig) {
        formConfig.addEventListener('submit', (e) => {
            e.preventDefault();
            const nuevaConfig = {
                modoOscuro: document.getElementById('modoOscuro').checked,
                nombreVisible: document.getElementById('nombreVisible').value
            };
            localStorage.setItem('configuracion', JSON.stringify(nuevaConfig));
            alert("Configuración guardada");
            window.location.href = 'dashboard.html';
        });
    }
});
