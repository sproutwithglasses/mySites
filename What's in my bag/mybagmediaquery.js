//media query resize test
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('containment-wrapper');
    const divs = document.querySelectorAll('.draggable');

    let containerRect = container.getBoundingClientRect();

    function updateContainerRect() {
        containerRect = container.getBoundingClientRect();
    }

    function constrainDivs() {
        // Get the updated container dimensions
        updateContainerRect();

        divs.forEach(div => {
            const divRect = div.getBoundingClientRect();
            let left = parseFloat(div.style.left) || 0;
            let top = parseFloat(div.style.top) || 0;

            // Constrain the div within the container
            left = Math.max(0, Math.min(left, containerRect.width - divRect.width));
            top = Math.max(0, Math.min(top, containerRect.height - divRect.height));

            // Apply the constrained positions
            div.style.left = `${left}px`;
            div.style.top = `${top}px`;
        });
    }

    // Initial constraint
    constrainDivs();
    // Constrain divs on window resize
    window.addEventListener('resize', constrainDivs);
});