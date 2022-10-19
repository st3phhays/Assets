import { confettiBurst } from './util/confetti';

(() => {
    const confettiOnDemand = document.querySelectorAll('.confetti');

    confettiOnDemand.forEach(el => {
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
