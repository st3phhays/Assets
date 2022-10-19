const getBox = (width, height) => {
    return {
        string: '+',
        style: `font-size: 1px; padding: ${Math.floor(height / 2)}px ${Math.floor(width / 2)}px; line-height: ${height}px;`
    };
};

const drawMemeText = (ctx, type, text, width, y) => {
    text = text.toUpperCase();
    // Determine the font size
    if (text.length < 24) {
        const val = Math.max(0, text.length - 12);
        const size = 70 + (val * -3);

        drawText(ctx, size, text, width / 2, y);
    } else if (text.length < 29) {
        drawText(ctx, 40, text, width / 2, y);
    } else {
        const strs = wrap(text, 27);
        strs.forEach((str, i) => {
            drawText(ctx, 40, str, width / 2, (type == 'lower') ? (y - ((strs.length - 1) * 40)) + (i * 40) : y + (i * 40));
        });
    }
};

const drawText = (ctx, size, text, x, y) => {
    // Set the text styles
    ctx.font = `bold ${size}px Impact`;
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 7;
    ctx.strokeStyle = '#000';
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
};

const wrap = (text, num) => {
    const output = [];
    const split = text.split(' ');
    const str = [];

    for (let i = 0, cache = split.length; i < cache; i++) {
        if ((str + split[i]).length < num) str.push(split[i]);
        else {
            output.push(str.join(' '));
            str.length = 0;
            str.push(split[i]);
        }
    }

    // Push the final line
    output.push(str.join(' '));

    return output;
};

const consoleImage = (url, scale) => {
    scale = scale || 1;
    const img = new Image();

    img.addEventListener('load', () => {
        const dim = getBox(img.width * scale, img.height * scale / 2);
        console.log(`%c${dim.string}`, `${dim.style}background: url(${url}); background-size: ${img.width * scale}px ${img.height * scale}px; color: transparent;`);
    });

    img.src = url;
};

export const consoleMeme = (upper, lower, image, width, height) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const _w = 500; const
        _h = 500;

    width = width || 500;
    height = width || 500;

    const img = new Image();

    img.setAttribute('crossOrigin', 'anonymous');

    img.addEventListener('load', () => {
        canvas.width = width;
        canvas.height = height;

        ctx.scale(width / 500, height / 500);

        // Draw the background
        ctx.drawImage(img, 0, 0, _w, _h);

        drawMemeText(ctx, 'upper', upper, _w, 50); // upper
        drawMemeText(ctx, 'lower', lower, _w, _h - 50); // upper

        consoleImage(canvas.toDataURL());
    });

    img.src = image;
};
