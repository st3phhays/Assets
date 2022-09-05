import { randomNoRepeats } from './util/functions';

(() => {
    const container = document.querySelector("#draggableContainer");

    if (container) {
        const resizeObserver = new ResizeObserver(entries => resetTranslate());

        let activeItem = null,
            active = false;

        const draggableItems = container.querySelectorAll('.draggable'),
            shaker = randomNoRepeats([...draggableItems]);
            
        resizeObserver.observe(document.body);

        const shakerInterval = setInterval(() => {
            shaker();
        }, 5000);

        const dragStart = e => {
            if ((e.target !== e.currentTarget) && e.target.classList.contains('draggable')) {
                clearInterval(shakerInterval);

                active = true;

                // this is the item we are interacting with
                activeItem = e.target;
                activeItem.classList.add('dragging');

                if (activeItem !== null) {
                    if (!activeItem.xOffset) {
                        activeItem.xOffset = 0;
                    }

                    if (!activeItem.yOffset) {
                        activeItem.yOffset = 0;
                    }

                    if (e.type === "touchstart") {
                        activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
                        activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
                    } else {
                        activeItem.initialX = e.clientX - activeItem.xOffset;
                        activeItem.initialY = e.clientY - activeItem.yOffset;
                    }
                }
            }
        }

        const dragEnd = e => {
            if (activeItem !== null) {
                activeItem.initialX = activeItem.currentX;
                activeItem.initialY = activeItem.currentY;
                activeItem.classList.remove('dragging');
            }

            active = false;
            activeItem = null;
        }

        const drag = e => {
            if (active) {
                if (e.type === "touchmove") {
                    e.preventDefault();

                    activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
                    activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
                } else {
                    activeItem.currentX = e.clientX - activeItem.initialX;
                    activeItem.currentY = e.clientY - activeItem.initialY;
                }

                activeItem.xOffset = activeItem.currentX;
                activeItem.yOffset = activeItem.currentY;

                setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
            }
        }

        const setTranslate = (xPos, yPos, el) => {
            el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        }

        const resetTranslate = () => {
            for (let i of draggableItems) {
                setTranslate(0, 0, i);
            }
        }

        container.addEventListener("touchstart", dragStart, false);
        container.addEventListener("touchend", dragEnd, false);
        container.addEventListener("touchmove", drag, false);

        container.addEventListener("mousedown", dragStart, false);
        container.addEventListener("mouseup", dragEnd, false);
        container.addEventListener("mousemove", drag, false);
    }
})();
