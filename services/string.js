export const getDisplayDenom = (str, isAllUpperCase = true) => {
    let newStr
    if (isAllUpperCase) {
        newStr = str.substring(1, str.length).toUpperCase()
        str.charAt(0).toUpperCase() + str.slice(1);
    } else {
        const sliceStr = str.substring(1, str.length)
        newStr = sliceStr.charAt(0).toUpperCase() + sliceStr.slice(1);
    }

    return newStr
}

export const getAmountFromDenom = (amount, denom) => {
    const exponent = denom.substring(0,1)
    if (exponent === 'u') {
        return amount / Math.pow(10, 6)
    }
}