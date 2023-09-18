import axios from 'axios'
import { ProdZoneInfos } from '@/state/chains/prod'

export const getZoneWithChainId = async (chainId) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_QUICKSILVER_API}/quicksilver/interchainstaking/v1/zones`)
        const {zones} = res.data
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

export const getRedemptionRate = async (chainId) => {
    try {
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