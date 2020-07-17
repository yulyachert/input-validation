export function isValid(number): boolean {
    return number.search(/(^[7|8]{0,1}\d{10}$)|(^\+7{1}\d{10}$)/g) !== -1;
}

export function isIncludes(array, number, callbackFunc): boolean {
    number = number.split('').filter(num => !isNaN(Number(num))).join('');
    for (const num of array) {
        if (String(num).includes(number)) {
            callbackFunc(number);
            return true
        }
    }
    return false
}