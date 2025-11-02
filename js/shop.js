// Shop Page Functionality - Filtering and Sorting

document.addEventListener('DOMContentLoaded', function() {
    const productsGrid = document.getElementById('productsGrid');
    const productCards = Array.from(document.querySelectorAll('.product-card'));
    const clearFiltersBtn = document.getElementById('clearFilters');
    const sortSelect = document.getElementById('sortBy');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');

    let allProducts = [...productCards];

    // Initialize filters from URL parameters
    initializeFiltersFromURL();

    // Price range slider
    if (priceRange) {
        priceRange.addEventListener('input', function() {
            const value = parseInt(this.value);
            priceValue.textContent = formatPrice(value);
            applyFilters();
        });
    }

    // Filter checkboxes
    const filterCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Sort select
    if (sortSelect) {
        sortSelect.addEventListener('change', applySorting);
    }

    // Clear filters button
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }

    function initializeFiltersFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const type = urlParams.get('type');

        if (type) {
            const checkbox = document.querySelector(`input[name="type"][value="${type}"]`);
            if (checkbox) {
                checkbox.checked = true;
                applyFilters();
            }
        }
    }

    function applyFilters() {
        const selectedTypes = getSelectedValues('type');
        const selectedCapacities = getSelectedValues('capacity');
        const selectedPanels = getSelectedValues('panel');
        const selectedInverters = getSelectedValues('inverter');
        const maxPrice = parseInt(priceRange?.value || 5000000);

        let visibleCount = 0;

        allProducts.forEach(card => {
            let isVisible = true;

            // Type filter
            if (selectedTypes.length > 0) {
                const cardType = card.getAttribute('data-type');
                if (!selectedTypes.includes(cardType)) {
                    isVisible = false;
                }
            }

            // Capacity filter
            if (selectedCapacities.length > 0 && isVisible) {
                const cardCapacity = parseInt(card.getAttribute('data-capacity'));
                let matchesCapacity = false;

                selectedCapacities.forEach(range => {
                    if (range === '1-3' && cardCapacity >= 1 && cardCapacity <= 3) matchesCapacity = true;
                    if (range === '3-5' && cardCapacity > 3 && cardCapacity <= 5) matchesCapacity = true;
                    if (range === '5-10' && cardCapacity > 5 && cardCapacity <= 10) matchesCapacity = true;
                    if (range === '10-25' && cardCapacity > 10 && cardCapacity <= 25) matchesCapacity = true;
                    if (range === '25-50' && cardCapacity > 25 && cardCapacity <= 50) matchesCapacity = true;
                    if (range === '50+' && cardCapacity > 50) matchesCapacity = true;
                });

                if (!matchesCapacity) {
                    isVisible = false;
                }
            }

            // Panel manufacturer filter
            if (selectedPanels.length > 0 && isVisible) {
                const cardPanel = card.getAttribute('data-panel');
                if (!selectedPanels.includes(cardPanel)) {
                    isVisible = false;
                }
            }

            // Inverter manufacturer filter
            if (selectedInverters.length > 0 && isVisible) {
                const cardInverter = card.getAttribute('data-inverter');
                if (!selectedInverters.includes(cardInverter)) {
                    isVisible = false;
                }
            }

            // Price filter
            if (isVisible) {
                const cardPrice = parseInt(card.getAttribute('data-price'));
                if (cardPrice > maxPrice) {
                    isVisible = false;
                }
            }

            // Show/hide card
            if (isVisible) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update product count
        const productCount = document.getElementById('productCount');
        if (productCount) {
            productCount.textContent = visibleCount;
        }

        // Re-apply sorting after filtering
        applySorting();
    }

    function applySorting() {
        const sortValue = sortSelect?.value || 'featured';
        const visibleProducts = allProducts.filter(card => card.style.display !== 'none');

        visibleProducts.sort((a, b) => {
            switch (sortValue) {
                case 'price-low':
                    return parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price'));
                case 'price-high':
                    return parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price'));
                case 'capacity':
                    return parseInt(a.getAttribute('data-capacity')) - parseInt(b.getAttribute('data-capacity'));
                default:
                    return 0; // Featured - maintain original order
            }
        });

        // Re-append sorted products
        visibleProducts.forEach(card => {
            productsGrid.appendChild(card);
        });
    }

    function getSelectedValues(name) {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        return Array.from(checkboxes).map(cb => cb.value);
    }

    function clearAllFilters() {
        // Uncheck all checkboxes
        const allCheckboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
        allCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        // Reset price range
        if (priceRange) {
            priceRange.value = 5000000;
            priceValue.textContent = formatPrice(5000000);
        }

        // Reset sort
        if (sortSelect) {
            sortSelect.value = 'featured';
        }

        // Show all products
        applyFilters();
    }

    function formatPrice(value) {
        // Format Indian currency
        if (value >= 10000000) {
            return (value / 10000000).toFixed(1) + ' Cr';
        } else if (value >= 100000) {
            return (value / 100000).toFixed(0) + ',00,000';
        } else {
            return value.toLocaleString('en-IN');
        }
    }
});
