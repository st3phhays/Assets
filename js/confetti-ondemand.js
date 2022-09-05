import { confettiBurst } from './util/functions';

(() => {
    const confettiOndemand = document.querySelectorAll('.confetti');

    confettiOndemand.forEach(el => {
        el.addEventListener('click', () => {
            confettiBurst();
        }, false);

        document.addEventListener('keydown', e => {
            const code = (e.keyCode ? e.keyCode : e.which);

            if (code == 13 && document.activeElement == el) {
                confettiBurst();
            }
        });
    });
})();
