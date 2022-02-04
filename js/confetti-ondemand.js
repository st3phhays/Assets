(function() {
    var confettiOndemand = document.querySelectorAll('.confetti');

    confettiOndemand.forEach(function(el) {
        el.addEventListener('click', function() {
            confettiBurst();
        }, false);

        document.addEventListener('keydown', function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);

            if (code == 13 && document.activeElement == el) {
                confettiBurst();
            }
        });
    });
})();