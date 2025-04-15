const deepEqual = require('./homework-1');

describe('Функция deepEqual', () => {
    test('Примитивы', () => {
        expect(deepEqual(1, 1)).toBe(true);
        expect(deepEqual('текст', 'текст')).toBe(true);
        expect(deepEqual(true, true)).toBe(true);
        expect(deepEqual(null, null)).toBe(true);
        expect(deepEqual(undefined, undefined)).toBe(true);
        expect(deepEqual(1, '1')).toBe(false);
        expect(deepEqual(0, false)).toBe(false);
    });

    test('NaN', () => {
        expect(deepEqual(NaN, NaN)).toBe(true);
        expect(deepEqual(NaN, 0)).toBe(false);
        expect(deepEqual(NaN, null)).toBe(false);
        expect(deepEqual(NaN, undefined)).toBe(false);
    });

    test('Массивы', () => {
        expect(deepEqual([1, 2], [1, 2])).toBe(true);
        expect(deepEqual([1, [2]], [1, [2]])).toBe(true);
        expect(deepEqual([1, 2], [1, 2, 3])).toBe(false);
        expect(deepEqual([1, 2], [2, 1])).toBe(false);
    });

    test('Объекты', () => {
        expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true);
        expect(deepEqual({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true);
        expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
        expect(deepEqual({ a: 1 }, { b: 1 })).toBe(false);
        expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
    });

    test('Разные типы', () => {
        expect(deepEqual([1, 2], { 0: 1, 1: 2 })).toBe(false);
        expect(deepEqual({}, [])).toBe(false);
    });

    test('Сложные структуры', () => {
        const obj1 = { a: [1, { b: 2, c: [3, 4] }] };
        const obj2 = { a: [1, { b: 2, c: [3, 4] }] };
        const obj3 = { a: [1, { b: 2, c: [3, 5] }] };

        expect(deepEqual(obj1, obj2)).toBe(true);
        expect(deepEqual(obj1, obj3)).toBe(false);
    });
});