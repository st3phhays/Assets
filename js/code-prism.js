import { trimString } from './util/functions';

(() => {
    const codeBlocks = document.querySelectorAll('code');
    const codePre = document.querySelectorAll('pre');

    codeBlocks.forEach(trimString);

    // Highlight code blocks
    for (const i of codePre) {
        if (!i.classList.contains('highlight-delay') && !i.classList.contains('d-format-none')) {
            i.classList.add('line-numbers', 'language-none');
            Prism.highlightAll();
        }
    }
})();
