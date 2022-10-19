(() => {
    const themeSelectorDropdown = document.getElementById('themeSelectorDropdown');

    if (themeSelectorDropdown) {
        const htmlRoot = document.querySelector('html');
        const themeSelectors = document.querySelectorAll('.theme-selector');

        themeSelectors.forEach(el => {
            el.addEventListener('click', () => {
                const selectedTheme = el.getAttribute('data-sh-theme');
                const selectedThemeMode = el.getAttribute('data-sh-theme-mode');

                htmlRoot.setAttribute('data-sh-theme', selectedTheme);
                htmlRoot.setAttribute('data-sh-theme-mode', selectedThemeMode);
                localStorage.setItem('theme', selectedTheme);
                localStorage.setItem('theme-mode', selectedThemeMode);
            }, false);
        });

        themeSelectorDropdown.addEventListener('show.bs.dropdown', () => {
            themeSelectors.forEach(el => {
                if (el.getAttribute('data-sh-theme') == htmlRoot.getAttribute('data-sh-theme')) {
                    el.classList.add('active');
                    el.setAttribute('aria-current', 'true');
                } else {
                    el.classList.remove('active');
                    el.removeAttribute('aria-current');
                }
            });
        });
    }
})();
