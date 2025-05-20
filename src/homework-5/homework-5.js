function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('Argument must be an array'));
        }

        const results = [];
        let completed = 0;

        if (promises.length === 0) {
            return resolve([]);
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completed += 1;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(err => reject(err));
        });
    });
}

module.exports = { promiseAll };
