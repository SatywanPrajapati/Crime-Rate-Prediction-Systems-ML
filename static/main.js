// Crime Prediction App JS


document.addEventListener("DOMContentLoaded", () => {

    // 1. Populate Year Dropdown (index page only)
    const yearDropdown = document.getElementById("year-dropdown");

    if (yearDropdown) {
        const startYear = 2000;
        const endYear = 2050;

        // Avoid duplicate options (important for reload cases)
        if (yearDropdown.options.length === 0) {
            for (let year = startYear; year <= endYear; year++) {
                const option = document.createElement("option");
                option.value = year;
                option.textContent = year;
                yearDropdown.appendChild(option);
            }
        }

        // Set current year as default
        const currentYear = new Date().getFullYear();
        if (currentYear >= startYear && currentYear <= endYear) {
            yearDropdown.value = currentYear;
        }
    }
    // 2. Dynamic Footer Year (all pages)
    const footerYear = document.getElementById("year");

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

});