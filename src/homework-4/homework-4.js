function myQuerySelectorAll(selector, root = document) {
    if (!selector || typeof selector !== 'string') {
        throw new Error('Selector must be a non-empty string');
    }

    const selectors = selector.split(/\s+/); // поддержка вложенных селекторов через пробел
    let elements = [root];

    for (const sel of selectors) {
        let nextElements = [];

        for (const el of elements) {
            if (sel.startsWith('#')) {
                const found = el.querySelector(sel); // для простоты используем встроенный метод
                if (found) nextElements.push(found);
            } else if (sel.startsWith('.')) {
                nextElements.push(...el.getElementsByClassName(sel.slice(1)));
            } else {
                nextElements.push(...el.getElementsByTagName(sel));
            }
        }

        elements = nextElements;
    }

    return Array.from(elements);
}

module.exports = {myQuerySelectorAll};