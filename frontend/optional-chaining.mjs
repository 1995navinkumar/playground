export default function get(obj, path, defValue) {
    const isObjUndefined = typeof obj === 'undefined';
    const isPathUndefined = typeof path === 'undefined';
    if (isObjUndefined) {
        return defValue;
    }
    if (isPathUndefined) {
        return undefined;
    }


    if (Array.isArray(path)) {
        path = path.join('.');
    }
    const paths = path.split('.');
    let currObj = obj;
    for (let i = 0; i < paths.length; i++) {
        const subPath = paths[i];
        const isSubPathAnIndex = !isNaN(subPath);
        currObj = isSubPathAnIndex ? currObj[+subPath] : currObj[subPath];
        if (typeof currObj === 'undefined' || (
            Object.prototype.toString.call(currObj) !== '[object Object]' && !Array.isArray(currObj) && i !== paths.length - 1
        )) {
            currObj = undefined;
            break;
        }

    }
    return typeof currObj === 'undefined' ? defValue : currObj;
}
