if (!/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    const html = document.getElementsByTagName('html')[0],
        themeStorage = localStorage.getItem('theme'),
        themeModeStorage = localStorage.getItem('theme-mode'),
        themeLight = html.getAttribute('data-sh-theme-light'),
        themeDark = html.getAttribute('data-sh-theme-dark');

    if (themeStorage) {
        html.setAttribute('data-sh-theme', themeStorage);
        html.setAttribute('data-sh-theme-mode', themeModeStorage);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.setAttribute('data-sh-theme', themeDark)
        html.setAttribute('data-sh-theme-mode', 'dark');
    } else {
        html.setAttribute('data-sh-theme', themeLight)
        html.setAttribute('data-sh-theme-mode', 'light');
    }
}
