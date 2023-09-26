export const getNativeTokenBalance = (balances, baseDenom) => {
    if (balances.length === 0) {
        return {amount: 0, denom: baseDenom}
    }
    const filterBalance = balances.filter(balance => {
        return balance.denom === baseDenom
    })

    return filterBalance.length > 0 ? filterBalance[0] : {amount: 0, denom: baseDenom}
}

export const getBalances = async (restApi, addr) => {
    let balanceReq = await fetch(`${restApi}/cosmos/bank/v1beta1/balances/${addr}`)
    let balanceRes = await balanceReq.json()
    return balanceRes
}
