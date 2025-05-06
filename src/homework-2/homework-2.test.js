require('./homework-2');

describe('myCall', () => {
    function greet() { return this.name; }
    function sum(a, b) { return a + b; }
    function getValue() { return this.value; }

    test('Устанавливает переданный контекст', () => {
        const result = greet.myCall({ name: 'Alice' });
        expect(result).toBe('Alice');
    });

    test('Передаёт аргументы функции', () => {
        const result = sum.myCall(null, 2, 3);
        expect(result).toBe(5);
    });

    test('Работает с глобальным контекстом', () => {
        globalThis.value = 10;
        const result = getValue.myCall();
        expect(result).toBe(10);
    });
});

describe('myApply', () => {
    function greet(greeting) { return `${greeting}, ${this.name}`; }
    function speak() { return this.sound; }
    function getValue() { return this.value; }

    test('Вызывает функцию с контекстом и массивом аргументов', () => {
        const result = greet.myApply({ name: 'Bob' }, ['Hi']);
        expect(result).toBe('Hi, Bob');
    });

    test('Работает с пустым массивом аргументов', () => {
        const result = speak.myApply({ sound: 'woof' }, []);
        expect(result).toBe('woof');
    });

    test('Работает без массива аргументов', () => {
        const result = getValue.myApply({ value: 42 });
        expect(result).toBe(42);
    });
});

describe('myBind', () => {
    function greet() { return this.name; }
    function sum(a, b) { return a + b; }
    function add(a, b, c) { return a + b + c; }

    test('Привязывает контекст к функции', () => {
        const bound = greet.myBind({ name: 'Charlie' });
        expect(bound()).toBe('Charlie');
    });

    test('Поддерживает частичное применение (один аргумент)', () => {
        const double = sum.myBind(null, 2);
        expect(double(5)).toBe(7);
    });

    test('Работает с несколькими заранее привязанными и переданными аргументами', () => {
        const bound = add.myBind(null, 1, 2);
        expect(bound(3)).toBe(6);
    });
});
