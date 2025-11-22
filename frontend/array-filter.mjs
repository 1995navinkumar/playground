// filter accepts second arguments as _this
Array.prototype.myFilter = function (cb, _this) {
    const newArray = [];
    if (!cb) {
        throw "undefined is not a function"
    }
    const length = this.length;

    for (let i = 0; i < length; i++) {
        const item = this[i];
        if (!item) {
            continue;
        }
        if (cb.call(_this, item, i, this)) {
            newArray.push(item);
        }
    }
    return newArray;
}
