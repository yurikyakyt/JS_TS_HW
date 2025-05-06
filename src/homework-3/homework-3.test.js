require('./homework-3');

describe('myReduce', () => {
    test('Суммирует числа с начальным значением', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7];
        const sum = numbers.myReduce((acc, curr) => acc + curr, 10);
        expect(sum).toBe(38);
    });

    test('Суммирует числа с начальным значением', () => {
        const numbers = [1, 2, 3, 4, 5];
        const sum = numbers.myReduce((acc, curr) => acc + curr);
        expect(sum).toBe(15);
    });

    test('Суммирует числа с начальным значением', () => {
        const strings = ['1', '2', '3', '4', '5'];
        const concatResult = strings.myReduce((acc, curr) => acc + curr, '');
        expect(concatResult).toBe('12345');
    });

    test('Кидает ошибку при пустом массиве без начального значения', () => {
        const emptyArray = [];
        expect(() => emptyArray.myReduce((acc, curr) => acc + curr)).toThrow(TypeError);
    });

    test('Кидает ошибку если передана не функция', () => {
        const numbers = [1, 2, 3, 4, 5];
        expect(() => numbers.myReduce(1, 1)).toThrow(TypeError);
    });
});