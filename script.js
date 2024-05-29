document.addEventListener("DOMContentLoaded", function() {
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach(detail => {
        const summary = detail.querySelector("summary");

        summary.addEventListener("click", function(event) {
            event.preventDefault();
            
            // Toggle open state
            detail.open = !detail.open;

            // Adjust max-height for smooth transition
            detailsElements.forEach(d => {
                if (d === detail) {
                    d.style.maxHeight = d.open ? (d.scrollHeight + "px") : (summary.scrollHeight + "px");
                } else {
                    d.style.transitionDelay = "0.3s"; // Add delay for smooth closing animation
                    d.style.maxHeight = summary.scrollHeight + "px";
                    d.open = false; // Ensure all other details are closed
                }
            });
        });

        // Initialize max-height on page load
        detail.style.maxHeight = detail.open ? (detail.scrollHeight + "px") : (summary.scrollHeight + "px");
    });
});
