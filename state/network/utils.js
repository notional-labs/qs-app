import { ProdChainInfos, ProdZoneInfos, ProdDataMap } from '@/state/chains/prod'
import { TestChainInfos, TestZoneInfos, TestDataMap } from '@/state/chains/test'
import { DevChainInfos, DevZoneInfos, DevDataMap } from '@/state/chains/dev'

const Chains = {
    "preprod": ProdChainInfos,
    "prod": ProdChainInfos,
    "test": TestChainInfos,
    "dev": DevChainInfos,
}

const Zones = {
    "preprod": ProdZoneInfos,
    "prod": ProdZoneInfos,
    "test": TestZoneInfos,
    "dev": DevZoneInfos,
}

const DataMaps = {
    "preprod": ProdDataMap,
    "prod": ProdDataMap,
    "test": TestDataMap,
    "dev": DevDataMap,
}

export const ChainInfos = Chains[process.env.NEXT_PUBLIC_CHAIN_ENV].filter(item => process.env.NEXT_PUBLIC_WHITELISTED_ZONES.includes(item.chainId))
export const ZoneInfos = Zones[process.env.NEXT_PUBLIC_CHAIN_ENV].filter(item => process.env.NEXT_PUBLIC_WHITELISTED_ZONES.includes(item.chain_id))
export const DataMap = DataMaps[process.env.NEXT_PUBLIC_CHAIN_ENV]

export const AssetList = Object.entries(DataMap).filter(([key, _]) => process.env.NEXT_PUBLIC_WHITELISTED_DENOM.includes(key))