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

export const getAmountFromDenom = (balance) => {
    if (!balance) {
        return 0
    }
    const exponent = balance.denom.substring(0,1)
    if (exponent === 'u') {
        return balance.amount / Math.pow(10, 6)
    }
}