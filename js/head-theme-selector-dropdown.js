if (!/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    const html = document.getElementsByTagName('html')[0];
    const themeStorage = localStorage.getItem('theme');
    const themeModeStorage = localStorage.getItem('theme-mode');

    if (themeStorage) {
        html.setAttribute('data-sh-theme', themeStorage);
        html.setAttribute('data-sh-theme-mode', themeModeStorage);
    }
}
