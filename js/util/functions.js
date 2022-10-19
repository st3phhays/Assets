export const trimString = item => item.innerHTML = item.innerHTML.trim();

export const randomNoRepeats = array => {
    let copy = array.slice(0);

    return () => {
        array.forEach(el => {
            el.classList.remove('random');
        });

        if (copy.length < 1) {
            copy = array.slice(0);
        }

        let index = Math.floor(Math.random() * copy.length),
            item = copy[index];

        copy.splice(index, 1);

        item.classList.add('random');

        return item;
    };
}

export const getParents = el => {
    let parents = [],
    node = el;

    while (node != document) {
        parents.push(node.parentNode);
        node = node.parentNode;
    }
    return parents;
}

export const escapeSpecialChars = el => el.replace(/[.]/g, "\\$&");

export const setCookieExpirationNever = () => {
    let d = new Date();
    // 100 years in milliseconds: 100 years * 365 days * 24 hours * 60 minutes * 60 seconds * 1000ms
    d.setTime(d.getTime() + (100 * 365 * 24 * 60 * 60 * 1000));

    return 'expires=' + d.toUTCString() + ';';
}

export const getCookie = name => {
    const pattern = RegExp(name + "=.[^;]*"),
        matched = document.cookie.match(pattern);

    if (matched) {
        const cookie = matched[0].split('=');
        
        return cookie[1];
    }

    return false;
}

export const getInputValue = id => document.getElementById(id).value;

export const callEndpoint = async (url, headers) => {
    try {
        const response = await fetch(url, headers);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Get query parameters
export const queryStringParams = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
