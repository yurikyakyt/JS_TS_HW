const { myQuerySelectorAll } = require('./homework-4');

describe('customQuerySelectorAll', () => {
    let root;

    beforeEach(() => {
        document.body.innerHTML = `
      <div id="main" class="container">
        <p class="text">Hello</p>
        <span class="text">World</span>
        <div class="box">
          <p class="nested">Nested</p>
        </div>
      </div>
    `;
        root = document;
    });

    test('По тегу', () => {
        const elements = myQuerySelectorAll('p', root);
        expect(elements.length).toBe(2);
        expect(elements[0].textContent).toBe('Hello');
    });

    test('По id', () => {
        const [element] = myQuerySelectorAll('#main', root);
        expect(element).not.toBeNull();
        expect(element.id).toBe('main');
    });

    test('По классу', () => {
        const elements = myQuerySelectorAll('.text', root);
        expect(elements.length).toBe(2);
        expect(elements[1].tagName).toBe('SPAN');
    });

    test('С двумя селекторами', () => {
        const elements = myQuerySelectorAll('#main .nested', root);
        expect(elements.length).toBe(1);
        expect(elements[0].textContent).toBe('Nested');
    });

    test('Ошибка', () => {
        expect(() => myQuerySelectorAll(null)).toThrow();
        expect(() => myQuerySelectorAll('')).toThrow();
    });
});
