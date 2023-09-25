export const DevQuickSilverChainInfo = {
    chainId: "quicktest-1",
    chainName: "Quicksilver Dev",
    rpc: "https://rpc.dev.quicksilver.zone",
    rest: "https://lcd.dev.quicksilver.zone",
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "quick",
        bech32PrefixAccPub: "quickpub",
        bech32PrefixValAddr: "quickvaloper",
        bech32PrefixValPub: "quickvaloperpub",
        bech32PrefixConsAddr: "quickvalcons",
        bech32PrefixConsPub: "quickvalconspub",
    },
    currencies: [
        {
            coinDenom: "QCK",
            coinMinimalDenom: "uqck",
            coinDecimals: 6,
            coinGeckoId: "quicksilver",
        },
        {
            coinDenom: "qATOM",
            coinMinimalDenom: "uqatom",
            coinDecimals: 6,
            coinGeckoId: "cosmos",
        },
        {
            coinDenom: "qSTARS",
            coinMinimalDenom: "uqstars",
            coinDecimals: 6,
            coinGeckoId: "stargaze",
        },
        {
            coinDenom: "qOSMO",
            coinMinimalDenom: "uqosmo",
            coinDecimals: 6,
            coinGeckoId: "osmosis",
        },
    ],
    feeCurrencies: [
        {
            coinDenom: "QCK",
            coinMinimalDenom: "uqck",
            coinDecimals: 6,
            coinGeckoId: "quicksilver",
        },
    ],
    stakeCurrency: {
        coinDenom: "QCK",
        coinMinimalDenom: "uqck",
        coinDecimals: 6,
        coinGeckoId: "quicksilver",
    },
    coinType: 118,
    gasPriceStep: {
        low: 0.00,
        average: 0.015,
        high: 0.03,
    },
}

export const DevChainInfos = [
    DevQuickSilverChainInfo,
    {
        chainId: "quickgaia-1",
        chainName: "Quicksilver Dev Gaia Test",
        rpc: "https://rpc.quickgaia-1.dev.quicksilver.zone",
        rest: "https://lcd.quickgaia-1.dev.quicksilver.zone",

        bip44: {
            coinType: 118,
        },
        bech32Config: {
            bech32PrefixAccAddr: "cosmos",
            bech32PrefixAccPub: "cosmospub",
            bech32PrefixValAddr: "cosmosvaloper",
            bech32PrefixValPub: "cosmosvaloperpub",
            bech32PrefixConsAddr: "cosmosvalcons",
            bech32PrefixConsPub: "cosmosvalconspub",
        },
        currencies: [
            {
                coinDenom: "ATOM",
                coinMinimalDenom: "uatom",
                coinDecimals: 6,
                coinGeckoId: "cosmos",
            },
        ],
        feeCurrencies: [
            {
                coinDenom: "ATOM",
                coinMinimalDenom: "uatom",
                coinDecimals: 6,
                coinGeckoId: "cosmos",
            },
        ],
        stakeCurrency: {
            coinDenom: "ATOM",
            coinMinimalDenom: "uatom",
            coinDecimals: 6,
            coinGeckoId: "cosmos",
        },
        coinType: 118,
        gasPriceStep: {
            low: 0.00,
            average: 0.015,
            high: 0.03,
        },
    },
    {
        chainId: "quickstar-1",
        chainName: "Quicksilver Dev Stargaze Test",
        rpc: "https://rpc.quickstar-1.dev.quicksilver.zone",
        rest: "https://lcd.quickstar-1.dev.quicksilver.zone",

        bip44: {
            coinType: 118,
        },
        bech32Config: {
            bech32PrefixAccAddr: "stars",
            bech32PrefixAccPub: "starspub",
            bech32PrefixValAddr: "starsvaloper",
            bech32PrefixValPub: "starsvaloperpub",
            bech32PrefixConsAddr: "starsvalcons",
            bech32PrefixConsPub: "starsvalconspub",
        },
        currencies: [
            {
                coinDenom: "STARS",
                coinMinimalDenom: "ustars",
                coinDecimals: 6,
                coinGeckoId: "stargaze",
            },
        ],
        feeCurrencies: [
            {
                coinDenom: "STARS",
                coinMinimalDenom: "ustars",
                coinDecimals: 6,
                coinGeckoId: "stargaze",
            },
        ],
        stakeCurrency: {
            coinDenom: "STARS",
            coinMinimalDenom: "ustars",
            coinDecimals: 6,
            coinGeckoId: "stargaze",
        },
        coinType: 118,
        gasPriceStep: {
            low: 0.00,
            average: 0.015,
            high: 0.03,
        },
    },
    {
        chainId: "quickosmo-1",
        chainName: "Quicksilver Dev OSMO Test",
        rpc: "https://rpc.quickosmo-1.dev.quicksilver.zone",
        rest: "https://lcd.quickosmo-1.dev.quicksilver.zone",

        bip44: {
            coinType: 118,
        },
        bech32Config: {
            bech32PrefixAccAddr: "osmo",
            bech32PrefixAccPub: "osmopub",
            bech32PrefixValAddr: "osmovaloper",
            bech32PrefixValPub: "osmovaloperpub",
            bech32PrefixConsAddr: "osmovalcons",
            bech32PrefixConsPub: "osmovalconspub",
        },
        currencies: [
            {
                coinDenom: "OSMOSIS",
                coinMinimalDenom: "uosmo",
                coinDecimals: 6,
                coinGeckoId: "osmosis",
            },
        ],
        feeCurrencies: [
            {
                coinDenom: "OSMOSIS",
                coinMinimalDenom: "uosmo",
                coinDecimals: 6,
                coinGeckoId: "osmosis",
            },
        ],
        stakeCurrency: {

            coinDenom: "OSMOSIS",
            coinMinimalDenom: "uosmo",
            coinDecimals: 6,
            coinGeckoId: "osmosis",
        },
        coinType: 118,
        gasPriceStep: {
            low: 0.00,
            average: 0.015,
            high: 0.03,
        },
    }
]

export const DevZoneInfos = [
    {
        connection_id: "connection-12",
        chain_id: "osmo-test-5",
        deposit_address: {
            address: "osmo1w0rrzlxpv96kvxst64g0zldtv8njc9ec2pj7xdm30drkz6xceufsz02p52",
            port_name: "icacontroller-osmo-test-5.deposit",
            withdrawal_address: "osmo1jk2mtg0yncpzjvf58yxs5jxsev7aturjdzgdk2kuc5d9s4kggfvs7ln899",
            balance_waitgroup: 0
        },
        withdrawal_address: {
            address: "osmo1jk2mtg0yncpzjvf58yxs5jxsev7aturjdzgdk2kuc5d9s4kggfvs7ln899",
            port_name: "icacontroller-osmo-test-5.withdrawal",
            withdrawal_address: "osmo1jk2mtg0yncpzjvf58yxs5jxsev7aturjdzgdk2kuc5d9s4kggfvs7ln899",
            balance_waitgroup: 0
        },
        performance_address: {
            address: "osmo1haf2ncz8rjgkahpv2pnmar4s4ae43gfmknq9qfca9epn84ncz9ts25fv2t",

            port_name: "icacontroller-osmo-test-5.performance",
            withdrawal_address: "osmo1jk2mtg0yncpzjvf58yxs5jxsev7aturjdzgdk2kuc5d9s4kggfvs7ln899",
            balance_waitgroup: 0
        },
        delegation_address: {
            address: "osmo14lf9d6pfu02zsezx8al65034csvg4a200zq8a7u95acle363gjfs7txzej",
            port_name: "icacontroller-osmo-test-5.delegate",
            withdrawal_address: "osmo1jk2mtg0yncpzjvf58yxs5jxsev7aturjdzgdk2kuc5d9s4kggfvs7ln899",
            balance_waitgroup: 0
        },
        account_prefix: "osmo",
        local_denom: "uqosmo",
        base_denom: "uosmo",
    },
    {
        connection_id: "connection-13",
        chain_id: "provider",
        deposit_address: {
            address: "cosmos12xjtk9hllvkeenm4vjgwtecd3krk2acm0962gfxftq7wvlf6qldswrltgv",
            port_name: "icacontroller-provider.deposit",
            withdrawal_address: "cosmos12zdvlhtdwp99vwpx7pvym7436u74r9t4xdrutwasp6znczvuexcqwh6r87",
            balance_waitgroup: 0
        },
        withdrawal_address: {
            address: "cosmos12zdvlhtdwp99vwpx7pvym7436u74r9t4xdrutwasp6znczvuexcqwh6r87",

            port_name: "icacontroller-provider.withdrawal",
            withdrawal_address: "cosmos12zdvlhtdwp99vwpx7pvym7436u74r9t4xdrutwasp6znczvuexcqwh6r87",
            balance_waitgroup: 0
        },
        performance_address: {
            address: "cosmos16gdl00j4dhp3qp524y8s088usgska7ex05zfxk3wv0s6uvg0aauscf77x3",
            port_name: "icacontroller-provider.performance",
            withdrawal_address: "cosmos12zdvlhtdwp99vwpx7pvym7436u74r9t4xdrutwasp6znczvuexcqwh6r87",
            balance_waitgroup: 0
        },
        delegation_address: {
            address: "cosmos17wa02udmtqnpzv89g62qv983a6td20ayx5zzs4elz2l8rdm8h6ys7sn4rm",
            port_name: "icacontroller-provider.delegate",
            withdrawal_address: "cosmos12zdvlhtdwp99vwpx7pvym7436u74r9t4xdrutwasp6znczvuexcqwh6r87",
            balance_waitgroup: 0
        },
        account_prefix: "cosmos",
        local_denom: "uqatom",
        base_denom: "uatom",
    },
    {
        connection_id: "connection-3",
        chain_id: "regen-redwood-1",
        deposit_address: {
            address: "regen16qh6m729098dm3tsw84pc2r99el46syntdvth7myxsksljq5sa6q0w6ng0",

            port_name: "icacontroller-regen-redwood-1.deposit",
            withdrawal_address: "regen1lzw3uhr93uqnprnj3qk6d0r59r5me8td68kxvshms4h2jxk5dwvqrjfpff",
            balance_waitgroup: 0
        },
        withdrawal_address: {
            address: "regen1lzw3uhr93uqnprnj3qk6d0r59r5me8td68kxvshms4h2jxk5dwvqrjfpff",

            port_name: "icacontroller-regen-redwood-1.withdrawal",
            withdrawal_address: "regen1lzw3uhr93uqnprnj3qk6d0r59r5me8td68kxvshms4h2jxk5dwvqrjfpff",
            balance_waitgroup: 0
        },
        performance_address: {
            address: "regen1g2hshgxjqsd8yr8y2yp23cp6mef99a3f27s4aw73s9mr2tyzghsqj7u76n",
            port_name: "icacontroller-regen-redwood-1.performance",
            withdrawal_address: "regen1lzw3uhr93uqnprnj3qk6d0r59r5me8td68kxvshms4h2jxk5dwvqrjfpff",
            balance_waitgroup: 0
        },
        delegation_address: {
            address: "regen155sj9jnwlnwwjz9tk3cxpvkv6uvtf90fhvy4lc7a87wuxy3h6k6sgpdpjm",
            port_name: "icacontroller-regen-redwood-1.delegate",
            withdrawal_address: "regen1lzw3uhr93uqnprnj3qk6d0r59r5me8td68kxvshms4h2jxk5dwvqrjfpff",
            balance_waitgroup: 0
        },
        account_prefix: "regen",
        local_denom: "uqregen",
        base_denom: "uregen",
    },
    {
        connection_id: "connection-0",
        chain_id: "theta-testnet-001",
        deposit_address: {
            address: "cosmos1uuj8qqlx0qy5rgwf7vfk7yvsvvwy759n3xyjmucprxmv009qx2zs7etcy8",

            port_name: "icacontroller-theta-testnet-001.deposit",
            withdrawal_address: "cosmos1cklnz2w0jd3wmuc5ehlmvy9zsftw4ah5tjg659a3la9gtm6phj9q0gted3",
            balance_waitgroup: 0
        },
        withdrawal_address: {
            address: "cosmos1cklnz2w0jd3wmuc5ehlmvy9zsftw4ah5tjg659a3la9gtm6phj9q0gted3",

            port_name: "icacontroller-theta-testnet-001.withdrawal",
            withdrawal_address: "cosmos1cklnz2w0jd3wmuc5ehlmvy9zsftw4ah5tjg659a3la9gtm6phj9q0gted3",
            balance_waitgroup: 0
        },
        performance_address: {
            address: "cosmos1zu38qh27yjgc8lpg0wfdlxmw6y68nfanqjpycq3h4vs3m9sqa9ssz3qh8j",

            port_name: "icacontroller-theta-testnet-001.performance",
            withdrawal_address: "cosmos1cklnz2w0jd3wmuc5ehlmvy9zsftw4ah5tjg659a3la9gtm6phj9q0gted3",
            balance_waitgroup: 0
        },
        delegation_address: {
            address: "cosmos178e6mc8mc4d4kffw3pjju3c35nv0t240ys7lhq0yafdf0ld8xsesun2fyc",
            port_name: "icacontroller-theta-testnet-001.delegate",
            withdrawal_address: "cosmos1cklnz2w0jd3wmuc5ehlmvy9zsftw4ah5tjg659a3la9gtm6phj9q0gted3",
            balance_waitgroup: 0
        },
        account_prefix: "cosmos",
        local_denom: "uqatom",
        base_denom: "uatom",
    }
]

export const DevDataMap = {
    uatom: {
        local_logo: "/assets/qAtom.svg",
        base_logo: "/assets/Cosmos.png",
        network_name: "Cosmos Hub",
        symbol: "ATOM",
        zone: {
            connection_id: "connection-13",
            chain_id: "provider",
            deposit_address: {
                address: "cosmos12xjtk9hllvkeenm4vjgwtecd3krk2acm0962gfxftq7wvlf6qldswrltgv",
                port_name: "icacontroller-provider.deposit",
                withdrawal_address: "cosmos12zdvlhtdwp99vwpx7pvym7436u74r9t4xdrutwasp6znczvuexcqwh6r87",
                balance_waitgroup: 0
            },
            withdrawal_address: {
                address: "cosmos12zdvlhtdwp99vwpx7pvym7436u74r9t4xdrutwasp6znczvuexcqwh6r87",

                port_name: "icacontroller-provider.withdrawal",
                withdrawal_address: "cosmos12zdvlhtdwp99vwpx7pvym7436u74r9t4xdrutwasp6znczvuexcqwh6r87",
                balance_waitgroup: 0
            },
            performance_address: {
                address: "cosmos16gdl00j4dhp3qp524y8s088usgska7ex05zfxk3wv0s6uvg0aauscf77x3",
                port_name: "icacontroller-provider.performance",
                withdrawal_address: "cosmos12zdvlhtdwp99vwpx7pvym7436u74r9t4xdrutwasp6znczvuexcqwh6r87",
                balance_waitgroup: 0
            },
            delegation_address: {
                address: "cosmos17wa02udmtqnpzv89g62qv983a6td20ayx5zzs4elz2l8rdm8h6ys7sn4rm",
                port_name: "icacontroller-provider.delegate",
                withdrawal_address: "cosmos12zdvlhtdwp99vwpx7pvym7436u74r9t4xdrutwasp6znczvuexcqwh6r87",
                balance_waitgroup: 0
            },
            account_prefix: "cosmos",
            local_denom: "uqatom",
            base_denom: "uatom",
        },
        network: {
            chainId: "quickgaia-1",
            chainName: "Quicksilver Dev Gaia Test",
            rpc: "https://rpc.quickgaia-1.dev.quicksilver.zone",
            rest: "https://lcd.quickgaia-1.dev.quicksilver.zone",

            bip44: {
                coinType: 118,
            },
            bech32Config: {
                bech32PrefixAccAddr: "cosmos",
                bech32PrefixAccPub: "cosmospub",
                bech32PrefixValAddr: "cosmosvaloper",
                bech32PrefixValPub: "cosmosvaloperpub",
                bech32PrefixConsAddr: "cosmosvalcons",
                bech32PrefixConsPub: "cosmosvalconspub",
            },
            currencies: [
                {
                    coinDenom: "ATOM",
                    coinMinimalDenom: "uatom",
                    coinDecimals: 6,
                    coinGeckoId: "cosmos",
                },
            ],
            feeCurrencies: [
                {
                    coinDenom: "ATOM",
                    coinMinimalDenom: "uatom",
                    coinDecimals: 6,
                    coinGeckoId: "cosmos",
                },
            ],
            stakeCurrency: {
                coinDenom: "ATOM",
                coinMinimalDenom: "uatom",
                coinDecimals: 6,
                coinGeckoId: "cosmos",
            },
            coinType: 118,
            gasPriceStep: {
                low: 0.00,
                average: 0.015,
                high: 0.03,
            },
        }
    },
    uosmo: {
        local_logo: "/assets/qOsmo.svg",
        base_logo: "/assets/Osmosis.png",
        network_name: "Osmosis",
        symbol: "OSMO",
        zone: {
            connection_id: "connection-12",
            chain_id: "osmo-test-5",
            deposit_address: {
                address: "osmo1w0rrzlxpv96kvxst64g0zldtv8njc9ec2pj7xdm30drkz6xceufsz02p52",
                port_name: "icacontroller-osmo-test-5.deposit",
                withdrawal_address: "osmo1jk2mtg0yncpzjvf58yxs5jxsev7aturjdzgdk2kuc5d9s4kggfvs7ln899",
                balance_waitgroup: 0
            },
            withdrawal_address: {
                address: "osmo1jk2mtg0yncpzjvf58yxs5jxsev7aturjdzgdk2kuc5d9s4kggfvs7ln899",
                port_name: "icacontroller-osmo-test-5.withdrawal",
                withdrawal_address: "osmo1jk2mtg0yncpzjvf58yxs5jxsev7aturjdzgdk2kuc5d9s4kggfvs7ln899",
                balance_waitgroup: 0
            },
            performance_address: {
                address: "osmo1haf2ncz8rjgkahpv2pnmar4s4ae43gfmknq9qfca9epn84ncz9ts25fv2t",

                port_name: "icacontroller-osmo-test-5.performance",
                withdrawal_address: "osmo1jk2mtg0yncpzjvf58yxs5jxsev7aturjdzgdk2kuc5d9s4kggfvs7ln899",
                balance_waitgroup: 0
            },
            delegation_address: {
                address: "osmo14lf9d6pfu02zsezx8al65034csvg4a200zq8a7u95acle363gjfs7txzej",
                port_name: "icacontroller-osmo-test-5.delegate",
                withdrawal_address: "osmo1jk2mtg0yncpzjvf58yxs5jxsev7aturjdzgdk2kuc5d9s4kggfvs7ln899",
                balance_waitgroup: 0
            },
            account_prefix: "osmo",
            local_denom: "uqosmo",
            base_denom: "uosmo",
        },
        network: {
            chainId: "quickosmo-1",
            chainName: "Quicksilver Dev OSMO Test",
            rpc: "https://rpc.quickosmo-1.dev.quicksilver.zone",
            rest: "https://lcd.quickosmo-1.dev.quicksilver.zone",

            bip44: {
                coinType: 118,
            },
            bech32Config: {
                bech32PrefixAccAddr: "osmo",
                bech32PrefixAccPub: "osmopub",
                bech32PrefixValAddr: "osmovaloper",
                bech32PrefixValPub: "osmovaloperpub",
                bech32PrefixConsAddr: "osmovalcons",
                bech32PrefixConsPub: "osmovalconspub",
            },
            currencies: [
                {
                    coinDenom: "OSMOSIS",
                    coinMinimalDenom: "uosmo",
                    coinDecimals: 6,
                    coinGeckoId: "osmosis",
                },
            ],
            feeCurrencies: [
                {
                    coinDenom: "OSMOSIS",
                    coinMinimalDenom: "uosmo",
                    coinDecimals: 6,
                    coinGeckoId: "osmosis",
                },
            ],
            stakeCurrency: {

                coinDenom: "OSMOSIS",
                coinMinimalDenom: "uosmo",
                coinDecimals: 6,
                coinGeckoId: "osmosis",
            },
            coinType: 118,
            gasPriceStep: {
                low: 0.00,
                average: 0.015,
                high: 0.03,
            },
        }
    },
    uregen: {
        local_logo: "/assets/qRegen.svg",
        base_logo: "/assets/Regen.png",
        network_name: "Regen",
        symbol: "REGEN",
        zone: {
            connection_id: "connection-3",
            chain_id: "regen-redwood-1",
            deposit_address: {
                address: "regen16qh6m729098dm3tsw84pc2r99el46syntdvth7myxsksljq5sa6q0w6ng0",

                port_name: "icacontroller-regen-redwood-1.deposit",
                withdrawal_address: "regen1lzw3uhr93uqnprnj3qk6d0r59r5me8td68kxvshms4h2jxk5dwvqrjfpff",
                balance_waitgroup: 0
            },
            withdrawal_address: {
                address: "regen1lzw3uhr93uqnprnj3qk6d0r59r5me8td68kxvshms4h2jxk5dwvqrjfpff",

                port_name: "icacontroller-regen-redwood-1.withdrawal",
                withdrawal_address: "regen1lzw3uhr93uqnprnj3qk6d0r59r5me8td68kxvshms4h2jxk5dwvqrjfpff",
                balance_waitgroup: 0
            },
            performance_address: {
                address: "regen1g2hshgxjqsd8yr8y2yp23cp6mef99a3f27s4aw73s9mr2tyzghsqj7u76n",
                port_name: "icacontroller-regen-redwood-1.performance",
                withdrawal_address: "regen1lzw3uhr93uqnprnj3qk6d0r59r5me8td68kxvshms4h2jxk5dwvqrjfpff",
                balance_waitgroup: 0
            },
            delegation_address: {
                address: "regen155sj9jnwlnwwjz9tk3cxpvkv6uvtf90fhvy4lc7a87wuxy3h6k6sgpdpjm",
                port_name: "icacontroller-regen-redwood-1.delegate",
                withdrawal_address: "regen1lzw3uhr93uqnprnj3qk6d0r59r5me8td68kxvshms4h2jxk5dwvqrjfpff",
                balance_waitgroup: 0
            },
            account_prefix: "regen",
            local_denom: "uqregen",
            base_denom: "uregen",
        },
        network: {
            chainId: "regen-redwood-1",
            chainName: "Regen Testnet",
            rpc: "https://rpc.regen-redwood-1.test.quicksilver.zone",
            rest: "https://lcd.regen-redwood-1.test.quicksilver.zone",

            bip44: {
                coinType: 118,
            },
            bech32Config: {
                bech32PrefixAccAddr: "regen",
                bech32PrefixAccPub: "regenpub",
                bech32PrefixValAddr: "regenvaloper",
                bech32PrefixValPub: "regenvaloperpub",
                bech32PrefixConsAddr: "regenvalcons",
                bech32PrefixConsPub: "regenvalconspub",
            },
            currencies: [
                {
                    coinDenom: "REGEN",
                    coinMinimalDenom: "uregen",
                    coinDecimals: 6,
                    coinGeckoId: "regen",
                },
            ],
            feeCurrencies: [
                {
                    coinDenom: "REGEN",
                    coinMinimalDenom: "uregen",
                    coinDecimals: 6,
                    coinGeckoId: "regen",
                },
            ],
            stakeCurrency: {

                coinDenom: "REGEN",
                coinMinimalDenom: "uregen",
                coinDecimals: 6,
                coinGeckoId: "regen",
            },
            coinType: 118,
            gasPriceStep: {
                low: 0.00,
                average: 0.015,
                high: 0.03,
            },
        }
    },
}