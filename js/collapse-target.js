import Collapse from './bootstrap/collapse';

(() => {
    const btnCollapseTarget = document.querySelectorAll('.btn-collapse-target');

    if (btnCollapseTarget) {
        btnCollapseTarget.forEach(el => {
            el.addEventListener('click', e => {
                const collapseTarget = document.querySelector(el.getAttribute('data-collapse-target'));

                if (!collapseTarget.classList.contains('show')) {
                    e.preventDefault();

                    const collapseTargetContainer = Collapse.getOrCreateInstance(collapseTarget, { toggle: false });

                    collapseTargetContainer.show();

                    collapseTarget.addEventListener('shown.bs.collapse', () => {
                        document.querySelector(el.getAttribute('href')).scrollIntoView();
                    });
                }
            }, false);
        });
    }
})();