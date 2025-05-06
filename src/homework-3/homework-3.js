function myReduce(callback, initialValue) {
    // Проверяем первый аргумент является ли он функцией
    if (typeof callback !== 'function') {
        throw new TypeError("Первый аргумент должен быть функцией");
    }

    //Объявляем начальные данные, и инициализируем переменную array массивом к которому мы применяем функцию
    const array = this;
    let accumulator;
    let startIndex;

    //Проверяем наличие initialValue
    //Решил использовать arguments, поскольку если проверять initialValue !== undefined, то мы не даем передать undefined как аргумент
    if (arguments.length >= 2) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        //Если нет initialValue и массив пустой, то непонятно, что возвращать, поэтому проверяем и выкидываем ошибку
        if (array.length === 0) {
            throw new TypeError('Невозможно применить функцию к пустому массиву без начального значения');
        }
        accumulator = array[0];
        startIndex = 1;
    }

    //Итерируемся по массиву и присваиваем аккумулятору результат выполнения callback-функции
    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback.call(undefined, accumulator, array[i], i, array);
    }

    return accumulator;
}

Array.prototype.myReduce = myReduce;
