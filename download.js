// Funktion, um SVG herunterzuladen
function downloadSVG(svgElement, fileName) {
    const serializer = new XMLSerializer();
    const svgBlob = new Blob([serializer.serializeToString(svgElement)], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Event-Listener für alle Download-Icons
document.querySelectorAll('.download-icon').forEach((icon, index) => {
    icon.addEventListener('click', () => {
        const category = icon.closest('.category'); // Sucht die zugehörige Kategorie
        const svg = category.querySelector('svg'); // Sucht das SVG innerhalb der Kategorie
        if (svg) {
            downloadSVG(svg, `pattern-${index + 1}.svg`); // Benennt die Datei
        } else {
            alert('No SVG found to download!');
        }
    });
});
