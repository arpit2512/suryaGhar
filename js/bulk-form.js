// Bulk Order Form Handling

document.addEventListener('DOMContentLoaded', function() {
    const bulkOrderForm = document.getElementById('bulkOrderForm');
    const fileUpload = document.getElementById('fileUpload');
    const fileList = document.getElementById('fileList');
    const formSuccess = document.getElementById('formSuccess');

    // File upload handling
    if (fileUpload) {
        fileUpload.addEventListener('change', function(e) {
            displaySelectedFiles(e.target.files);
        });

        // Drag and drop support
        const fileUploadWrapper = document.querySelector('.file-upload-wrapper');

        fileUploadWrapper.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.style.borderColor = 'var(--primary-color)';
        });

        fileUploadWrapper.addEventListener('dragleave', function() {
            this.style.borderColor = '';
        });

        fileUploadWrapper.addEventListener('drop', function(e) {
            e.preventDefault();
            this.style.borderColor = '';

            if (e.dataTransfer.files.length) {
                fileUpload.files = e.dataTransfer.files;
                displaySelectedFiles(e.dataTransfer.files);
            }
        });
    }

    // Form submission
    if (bulkOrderForm) {
        bulkOrderForm.addEventListener('submit', handleFormSubmit);
    }

    function displaySelectedFiles(files) {
        fileList.innerHTML = '';

        if (files.length === 0) return;

        const fileListHTML = Array.from(files).map(file => {
            const fileSize = formatFileSize(file.size);
            return `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; background: var(--bg-light); border-radius: 5px; margin-bottom: 5px;">
                    <div>
                        <i class="fas fa-file"></i>
                        <span style="margin-left: 10px;">${file.name}</span>
                        <small style="color: var(--text-light); margin-left: 10px;">(${fileSize})</small>
                    </div>
                    <i class="fas fa-check-circle" style="color: var(--success-color);"></i>
                </div>
            `;
        }).join('');

        fileList.innerHTML = fileListHTML;
    }

    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        // Validate form
        if (!bulkOrderForm.checkValidity()) {
            bulkOrderForm.reportValidity();
            return;
        }

        // Gather form data
        const formData = new FormData(bulkOrderForm);
        const data = {};

        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        // In a real application, this would send to a backend API
        console.log('Form data:', data);

        // Simulate API call
        submitToBackend(data);
    }

    function submitToBackend(data) {
        // Show loading state
        const submitButton = bulkOrderForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;

        // Simulate API delay
        setTimeout(() => {
            // Hide form and show success message
            bulkOrderForm.style.display = 'none';
            formSuccess.style.display = 'block';

            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth' });

            // Store submission in localStorage for demo purposes
            const submissions = JSON.parse(localStorage.getItem('bulkOrderSubmissions') || '[]');
            submissions.push({
                ...data,
                submittedAt: new Date().toISOString()
            });
            localStorage.setItem('bulkOrderSubmissions', JSON.stringify(submissions));

            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // Send confirmation email (in real app)
            console.log('Confirmation email would be sent to:', data.email);
        }, 1500);
    }

    // Pre-fill form from cart if available
    prefillFromCart();

    function prefillFromCart() {
        const cart = JSON.parse(localStorage.getItem('suryakitCart') || '[]');

        if (cart.length > 0) {
            // Calculate total capacity
            let totalCapacity = 0;
            const kitTypes = new Set();

            cart.forEach(item => {
                // Extract capacity from product name (simplified)
                const match = item.name.match(/(\d+)kW/);
                if (match) {
                    totalCapacity += parseInt(match[1]) * (item.quantity || 1);
                }

                // Extract kit type
                if (item.name.includes('On-Grid')) kitTypes.add('on-grid');
                if (item.name.includes('Off-Grid')) kitTypes.add('off-grid');
                if (item.name.includes('Hybrid')) kitTypes.add('hybrid');
            });

            // Pre-fill total project capacity
            const projectCapacityField = document.getElementById('projectCapacity');
            if (projectCapacityField && totalCapacity > 0) {
                projectCapacityField.value = totalCapacity + ' kW';
            }

            // Pre-fill kit type if only one type in cart
            const kitTypeField = document.getElementById('kitType');
            if (kitTypeField && kitTypes.size === 1) {
                kitTypeField.value = Array.from(kitTypes)[0];
            }

            // Pre-fill number of kits
            const numKitsField = document.getElementById('numKits');
            if (numKitsField) {
                const totalKits = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
                numKitsField.value = totalKits;
            }

            // Add cart details to additional details
            const additionalDetailsField = document.getElementById('additionalDetails');
            if (additionalDetailsField) {
                let cartDetails = 'Items in cart:\n';
                cart.forEach(item => {
                    cartDetails += `- ${item.name} (${item.brand}) x ${item.quantity || 1}\n`;
                });
                additionalDetailsField.value = cartDetails;
            }
        }
    }

    // Form field validation helpers
    const phoneField = document.getElementById('phone');
    if (phoneField) {
        phoneField.addEventListener('input', function() {
            // Remove non-numeric characters
            this.value = this.value.replace(/[^0-9+\-\s]/g, '');
        });
    }

    const gstinField = document.getElementById('gstin');
    if (gstinField) {
        gstinField.addEventListener('input', function() {
            // Convert to uppercase
            this.value = this.value.toUpperCase();
        });
    }

    // Set minimum date for required date field to today
    const requiredDateField = document.getElementById('requiredDate');
    if (requiredDateField) {
        const today = new Date().toISOString().split('T')[0];
        requiredDateField.setAttribute('min', today);
    }
});
