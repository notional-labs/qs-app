import { ProdQuickSilverChainInfo, ProdChainInfos } from '@/state/chains/prod'
import { TestQuickSilverChainInfo, TestChainInfos } from '@/state/chains/test'
import { DevQuickSilverChainInfo, DevChainInfos } from '@/state/chains/dev'
const QuickSilverChains = {
    "preprod": ProdQuickSilverChainInfo,
    "prod": ProdQuickSilverChainInfo,
    "test": TestQuickSilverChainInfo,
    "dev": DevQuickSilverChainInfo,
}

export const QuickSilverChainInfo = QuickSilverChains[process.env.NEXT_PUBLIC_CHAIN_ENV]