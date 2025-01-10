// Funktion für Info-Overlays
document.querySelectorAll('.info-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const overlay = icon.nextElementSibling; // Das Info-Overlay direkt nach dem Icon
        // Toggle zwischen 'flex' und 'none'
        overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
    });
});

// Funktion für Settings-Overlays
document.querySelectorAll('.settings-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        const overlay = icon.nextElementSibling; // Das Settings-Overlay direkt nach dem Icon
        // Toggle zwischen 'flex' und 'none'
        overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
    });
});
