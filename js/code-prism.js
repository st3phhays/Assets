import { trimString } from './functions.js';

(() => {
    const codeBlocks = document.querySelectorAll('code'),
        codePre = document.querySelectorAll('pre');
        
    codeBlocks.forEach(trimString);

    // Highlight code blocks
    for (const i of codePre) {
        if (!i.classList.contains('highlight-delay') && !i.classList.contains('d-format-none')) {
            i.classList.add('line-numbers', 'language-none');
            Prism.highlightAll();
        }
    }
})();
