function myCall(context, ...args) {
    context = context || globalThis;
    const uniqueKey = Symbol('fn');
    context[uniqueKey] = this;
    const result = context[uniqueKey](...args);
    delete context[uniqueKey];
    return result;
}

function myApply(context, args) {
    context = context || globalThis;
    const uniqueKey = Symbol('fn');
    context[uniqueKey] = this;
    const result = Array.isArray(args) ? context[uniqueKey](...args) : context[uniqueKey]();
    delete context[uniqueKey];
    return result;
}

function myBind(context, ...boundArgs) {
    const fn = this;
    return function (...callArgs) {
        return fn.myApply(context, [...boundArgs, ...callArgs]);
    };
}

Function.prototype.myCall = myCall;
Function.prototype.myApply = myApply;
Function.prototype.myBind = myBind;
