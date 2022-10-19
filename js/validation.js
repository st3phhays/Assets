(() => {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(el => {
        el.addEventListener('submit', e => {
            if (!el.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }

            el.classList.add('was-validated');
        }, false);
    });
})();
