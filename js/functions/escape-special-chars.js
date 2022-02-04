function escapeSpecialChars(el) {
    return el.replace(/[.]/g, "\\$&");
}