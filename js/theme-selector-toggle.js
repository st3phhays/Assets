(() => {
    const themeSelectorToggle = document.getElementById('themeSelectorToggle');

    if (themeSelectorToggle) {
        const htmlRoot = document.querySelector('html');
        const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const themeStorage = localStorage.getItem('theme');
        const themeDark = htmlRoot.getAttribute('data-sh-theme-dark');
        const themeLight = htmlRoot.getAttribute('data-sh-theme-light');

        const setSystemTheme = e => {
            const themeSystem = e.matches ? 'dark' : 'light';

            if (!themeStorage) {
                setToggle(themeSystem);
            }
        };

        const setTheme = () => {
            if (themeSelectorToggle.checked) {
                htmlRoot.setAttribute('data-sh-theme', themeDark);
                htmlRoot.setAttribute('data-sh-theme-mode', 'dark');
                localStorage.setItem('theme', themeDark);
                localStorage.setItem('theme-mode', 'dark');
            } else {
                htmlRoot.setAttribute('data-sh-theme', themeLight);
                htmlRoot.setAttribute('data-sh-theme-mode', 'light');
                localStorage.setItem('theme', themeLight);
                localStorage.setItem('theme-mode', 'light');
            }
        };

        const setToggle = themePrefers => {
            if (themePrefers == 'dark') {
                themeSelectorToggle.checked = true;
            } else {
                themeSelectorToggle.checked = false;
            }
        };

        setToggle(htmlRoot.getAttribute('data-sh-theme-mode'));
        themeSelectorToggle.addEventListener('change', setTheme);
        themeQuery.addEventListener('change', setSystemTheme);

        themeSelectorToggle.addEventListener('click', () => {
            themeQuery.removeEventListener('change', setSystemTheme);
        });
    }
})();
