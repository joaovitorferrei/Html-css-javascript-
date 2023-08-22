document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("togglePortfolio");
    const portfolioSection = document.querySelector(".portfolio");

    toggleButton.addEventListener("click", function() {
        portfolioSection.classList.toggle("hidden");
    });
});