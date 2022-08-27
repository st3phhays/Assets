import Collapse from './bootstrap/collapse';
import { getParents } from './functions.js';
import { escapeSpecialChars } from './functions.js';

(() => {
    if (location.hash) {
        let el = document.querySelector(escapeSpecialChars(location.hash));

        if (el) {
            const elScroll = el,
                collapseParents = getParents(el).filter(el => el != document && el.classList.contains('collapse'));

            if (collapseParents.length == 0 && el.classList.contains('collapse')) {
                collapseParents.push(el);
            }

            collapseParents.reverse().forEach((el, idx, array) => {
                el = document.getElementById(escapeSpecialChars(el.id));
                
                const collapseParentContainer = Collapse.getOrCreateInstance(el, { toggle: false });
                
                collapseParentContainer.show();

                el.addEventListener('shown.bs.collapse', e => {
                    e.stopImmediatePropagation();

                    if (idx === array.length - 1) {
                        elScroll.scrollIntoView();
                    }
                });
            });
        }
    }
})();