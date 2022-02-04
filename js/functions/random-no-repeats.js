
function randomNoRepeats(array) {
    var copy = array.slice(0);

    return function() {
        array.forEach(function (el) {
            el.classList.remove('random');
        });

        if (copy.length < 1) {
            copy = array.slice(0);
        }

        var index = Math.floor(Math.random() * copy.length),
            item = copy[index];

        copy.splice(index, 1);

        item.classList.add('random');

        return item;
    };
}