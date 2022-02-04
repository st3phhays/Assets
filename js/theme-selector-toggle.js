(function() {
    var themeSelectorToggle = document.getElementById('themeSelectorToggle');

    if (themeSelectorToggle) {
        var htmlRoot = document.querySelector('html'),
            themeQuery = window.matchMedia('(prefers-color-scheme: dark)'),
            themeStorage = localStorage.getItem('theme'),
            themeDark = htmlRoot.getAttribute('data-sh-theme-dark'),
            themeLight= htmlRoot.getAttribute('data-sh-theme-light');

        setToggle(htmlRoot.getAttribute('data-sh-theme-mode'));

        themeSelectorToggle.addEventListener('change', setTheme);
        themeQuery.addEventListener('change', setSystemTheme);

        themeSelectorToggle.addEventListener('click', function() {
            themeQuery.removeEventListener('change', setSystemTheme);
        });

        function setSystemTheme(e) {
            var themeSystem = e.matches ? 'dark' : 'light';

            if (!themeStorage) {
                console.log('storage');
                setToggle(themeSystem);
            }
        }

        function setTheme() {
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
        }

        function setToggle(themePrefers) {
            if (themePrefers == 'dark') {
                themeSelectorToggle.checked = true;
            } else {
                themeSelectorToggle.checked = false;
            }
        }
    }
})();