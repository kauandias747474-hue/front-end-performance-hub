document.addEventListener('DOMContentLoaded', () => {
    // Atualiza a hora
    const updateTime = () => {
        document.getElementById('lastUpdate').textContent = new Date().toLocaleTimeString();
    };
    setInterval(updateTime, 1000);
    updateTime();

    // Lógica do Kill Switch
    document.getElementById('killSwitch').addEventListener('click', () => {
        alert("🚨 ALERTA: Todas as campanhas seriam pausadas via API agora!");
    });

});

