Array.prototype.myReduce = function (cb, initialValue, _this) {
    if (!cb) {
        throw "undefined is not a function"
    }
    const length = this.length;

    if (typeof initialValue === 'undefined' && length === 0) {
        throw 'Reduce of empty array with no initial value'
    }

    let reducedValue = initialValue ?? this[0];
    let i = typeof initialValue === 'undefined' ? 1 : 0;
    for (i; i < length; i++) {
        const item = this[i];
        if (!item) {
            continue;
        }
        reducedValue = cb(reducedValue, item, i, this);
    }
    return reducedValue;
}