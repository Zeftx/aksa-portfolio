// Funktion zum Öffnen der Detailansicht
function openDetail(id) {
    const overlay = document.getElementById(id);
    if (overlay) {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Scrollen im Hintergrund sperren
    }
}

// Funktion zum Schließen der Detailansicht
function closeDetail(id) {
    const overlay = document.getElementById(id);
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Scrollen wieder aktivieren
    }
}

// Schließen des Overlays bei Klick außerhalb des Fensters
window.onclick = function(event) {
    if (event.target.classList.contains('detail-overlay')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Zusätzliches Komfort-Feature: Schließen mit der ESC-Taste
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeOverlays = document.querySelectorAll('.detail-overlay');
        activeOverlays.forEach(overlay => {
            if (overlay.style.display === 'flex') {
                overlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});