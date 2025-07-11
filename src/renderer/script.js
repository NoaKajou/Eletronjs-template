document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('demo-btn');
    const info = document.getElementById('info');

    button.addEventListener('click', () => {
        info.textContent = `Platform: ${window.electronAPI.platform}`;
    });
});
