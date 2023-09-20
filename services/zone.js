import axios from 'axios'
import { ProdZoneInfos } from '@/state/chains/prod'
import { setupStakingExtension, QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

export const statusList = [
    "BOND_STATUS_BONDED",
    "BOND_STATUS_UNBONDING",
    "BOND_STATUS_UNBONDED"
]


export const getZoneWithChainId = async (chainId) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_QUICKSILVER_API}/quicksilver/interchainstaking/v1/zones`)
        const { zones } = res.data
        if (!zones || zones.length === 0) {
            throw new Error('Fail to query zones')
        }
        const zone = zones.filter(z => {
            if (z.chain_id === chainId) {
                return true
            }
            return false
        })
        if (zone.length === 0) {
            throw new Error(`No zone with chain id ${chainId} found`)
        }
        return zone[0]
    }
    catch (e) {
        throw e
    }
}

export const getValidators = async (chainId) => {
    try {
        const zone = await getZoneWithChainId(chainId)
        return zone.validators
    }
    catch (e) {
        throw e
    }
}
export const getNativeValidators = async (rpc, status) => {
    try {
        const tendermint = await Tendermint34Client.connect(rpc)
        const baseQuery = new QueryClient(tendermint)
        const extension = setupStakingExtension(baseQuery)
        let validators = []
        if (status === 'active') {
            let res = await extension.staking.validators("BOND_STATUS_BONDED")
            if (!res.validators || res.validators.length === 0) {
                throw new Error("0 validators found")
            }
            validators.push(...res.validators)
            while (res.pagination.nextKey.length !== 0) {
                res = await extension.staking.validators("BOND_STATUS_BONDED", res.pagination.nextKey)
                validators.push(...res.validators)
            }
        }
        else {
            let res = await extension.staking.validators("BOND_STATUS_UNBONDING")
            if (res.validators) {
                validators.push(...res.validators)
                while (res.pagination.nextKey.length !== 0) {
                    res = await extension.staking.validators("BOND_STATUS_UNBONDING", res.pagination.nextKey)
                    validators.push(...res.validators)
                }
            }

            res = await extension.staking.validators("BOND_STATUS_UNBONDED")
            if (res.validators) {
                validators.push(...res.validators)
                while (res.pagination.nextKey.length !== 0) {
                    res = await extension.staking.validators("BOND_STATUS_UNBONDED", res.pagination.nextKey)
                    validators.push(...res.validators)
                }
            }
        }
        return validators
    }
    catch (e) {
        throw e
    }
}

export const getLogo = async (identity) => {
    try {
        const res = await axios.get(`https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=${identity}&fields=pictures`)
        if (res.status === 200 && res.data.status.code === 0 && res.data.them[0] && res.data.them[0].pictures) {
            return res.data.them[0].pictures.primary.url
        }
        return null
    } catch (e) {
        return null
    }
}

export const getRedemptionRate = async (chainId) => {
    try {
        if (!chainId) {

        }
        const zone = await getZoneWithChainId(chainId)
        return zone.redemption_rate
    }
    catch (e) {
        throw e
    }
}

export const getZoneLocal = (chainId) => {
    try {
        const zone = ProdZoneInfos.filter(z => {
            if (z.chain_id === chainId) {
                return true
            }
            return false
        })
        if (zone.length === 0) {
            throw new Error(`No zone with chain id ${chainId} found`)
        }
        return zone[0]
    }
    catch (e) {
        throw e
    }
}