
document.querySelectorAll('.zoomable').forEach(item => {
    item.addEventListener('mouseenter', function() {
        let scale = parseFloat(this.getAttribute('data-scale')) || 1.2;
        this.style.setProperty('--scale', scale);
    });

    item.addEventListener('mouseleave', function() {
        this.style.removeProperty('--scale');
    });
});
