const { promiseAll } = require('./homework-5');

describe('custom promiseAll', () => {
    test('основной функционал', async () => {
        const p1 = Promise.resolve(1);
        const p2 = Promise.resolve(2);
        const p3 = Promise.resolve(3);

        const result = await promiseAll([p1, p2, p3]);
        expect(result).toEqual([1, 2, 3]);
    });

    test('Значения не промисы', async () => {
        const result = await promiseAll([1, Promise.resolve(2), 3]);
        expect(result).toEqual([1, 2, 3]);
    });

    test('ошибка если в промисе ошибка', async () => {
        const p1 = Promise.resolve(1);
        const p2 = Promise.reject(new Error('Failed'));
        const p3 = Promise.resolve(3);

        await expect(promiseAll([p1, p2, p3])).rejects.toThrow('Failed');
    });

    test('пустой массив', async () => {
        const result = await promiseAll([]);
        expect(result).toEqual([]);
    });

    test('аргумент не массив', async () => {
        await expect(promiseAll('not-an-array')).rejects.toThrow(TypeError);
    });
});
