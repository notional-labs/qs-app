export const TestQuickSilverChainInfo = {
    chainId: "rhye-1",
    chainName: "Quicksilver Testnet",
    rpc: "https://rpc.test.quicksilver.zone",
    rest: "https://lcd.test.quicksilver.zone",
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
            coinDenom: "qMUON",
            coinMinimalDenom: "uqmuon",
            coinDecimals: 6,
            coinGeckoId: "cosmos",
        },
        {
            coinDenom: "qOSMO",
            coinMinimalDenom: "uqosmo",
            coinDecimals: 6,
            coinGeckoId: "osmosis",
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
            coinDenom: "qJUNOX",
            coinMinimalDenom: "uqjunox",
            coinDecimals: 6,
            coinGeckoId: "juno-network",
        },
        {
            coinDenom: "qREGEN",
            coinMinimalDenom: "uqregen",
            coinDecimals: 6,
            coinGeckoId: "regen",
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

export const TestChainInfos = [
    TestQuickSilverChainInfo,
    {
        chainId: "fauxgaia-1",
        chainName: "FauxGaia Testnet",
        rpc: "https://rpc.fauxgaia-1.test.quicksilver.zone",
        rest: "https://lcd.fauxgaia-1.test.quicksilver.zone",

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
                coinDenom: "MUON",
                coinMinimalDenom: "umuon",
                coinDecimals: 6,
                coinGeckoId: "cosmos",
            },
        ],
        feeCurrencies: [
            {
                coinDenom: "MUON",
                coinMinimalDenom: "umuon",
                coinDecimals: 6,
                coinGeckoId: "cosmos",
            },
        ],
        stakeCurrency: {
            coinDenom: "MUON",
            coinMinimalDenom: "umuon",
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
        chainId: "osmo-test-4",
        chainName: "Osmosis Testnet",
        rpc: "https://rpc.osmo-test-4.test.quicksilver.zone",
        rest: "https://lcd.osmo-test-4.test.quicksilver.zone",

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
                coinDenom: "OSMO",
                coinMinimalDenom: "uosmo",
                coinDecimals: 6,
                coinGeckoId: "osmosis",
            },
        ],
        feeCurrencies: [
            {
                coinDenom: "OSMO",
                coinMinimalDenom: "uosmo",
                coinDecimals: 6,
                coinGeckoId: "osmosis",
            },
        ],
        stakeCurrency: {

            coinDenom: "OSMO",
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
    },
    {
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
    },
    {
        chainId: "elgafar-1",
        chainName: "Stargaze Testnet",
        rpc: "https://rpc.elgafar-1.test.quicksilver.zone",
        rest: "https://lcd.elgafar-1.test.quicksilver.zone",

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
            low: 0.01,
            average: 0.015,
            high: 0.03,
        },
    },
    {
        chainId: "theta-testnet-001",
        chainName: "Cosmos Hub Test",
        rpc: "https://rpc.theta-testnet-001.test.quicksilver.zone",
        rest: "https://lcd.theta-testnet-001.test.quicksilver.zone",

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
            low: 0.01,
            average: 0.015,
            high: 0.03,
        },
    },
    {
        chainId: "uni-6",
        chainName: "Juno Testnet",
        rpc: "https://rpc.uni-6.test.quicksilver.zone",
        rest: "https://lcd.uni-6.test.quicksilver.zone",

        bip44: {
            coinType: 118,
        },
        bech32Config: {
            bech32PrefixAccAddr: "juno",
            bech32PrefixAccPub: "junopub",
            bech32PrefixValAddr: "junovaloper",
            bech32PrefixValPub: "junovaloperpub",
            bech32PrefixConsAddr: "junovalcons",
            bech32PrefixConsPub: "junovalconspub",
        },
        currencies: [
            {
                coinDenom: "JUNOX",
                coinMinimalDenom: "ujunox",
                coinDecimals: 6,
                coinGeckoId: "juno-network",
            },
        ],
        feeCurrencies: [
            {
                coinDenom: "JUNOX",
                coinMinimalDenom: "ujunox",
                coinDecimals: 6,
                coinGeckoId: "juno-network",
            },
        ],
        stakeCurrency: {

            coinDenom: "JUNOX",
            coinMinimalDenom: "ujunox",
            coinDecimals: 6,
            coinGeckoId: "juno-network",
        },
        coinType: 118,
        gasPriceStep: {
            low: 0.01,
            average: 0.015,
            high: 0.03,
        }
    }
]

export const TestZoneInfos = [
    {
        connection_id: "connection-1",
        chain_id: "elgafar-1",
        deposit_address: {
            address: "stars1z6kk76ascgye3vtkauy3v3dn0vh3zkchzptypjwvwqczly92saxs96kesk",

            port_name: "icacontroller-elgafar-1.deposit",
            withdrawal_address: "stars1clza9vj9j80ksyrcjalvpurpsgc04862wqscxk9tgp66047w9t3qq9uteg",
            balance_waitgroup: 0
        },
        withdrawal_address: {
            address: "stars1clza9vj9j80ksyrcjalvpurpsgc04862wqscxk9tgp66047w9t3qq9uteg",

            port_name: "icacontroller-elgafar-1.withdrawal",
            withdrawal_address: "stars1clza9vj9j80ksyrcjalvpurpsgc04862wqscxk9tgp66047w9t3qq9uteg",
            balance_waitgroup: 0
        },
        performance_address: {
            address: "stars187j0cmsfw3tppn6dn94x7dq8gre5y0y9hn07yk559lwcw9yv8acqkgcu69",

            port_name: "icacontroller-elgafar-1.performance",
            withdrawal_address: "stars1clza9vj9j80ksyrcjalvpurpsgc04862wqscxk9tgp66047w9t3qq9uteg",
            balance_waitgroup: 0
        },
        delegation_address: {
            address: "stars18z8g39uz9m30sh2tucxya2x0068jah7sy5yzagttw7qcgkw6f88qxc39d6",

            port_name: "icacontroller-elgafar-1.delegate",
            withdrawal_address: "stars1clza9vj9j80ksyrcjalvpurpsgc04862wqscxk9tgp66047w9t3qq9uteg",
            balance_waitgroup: 0
        },
        account_prefix: "stars",
        local_denom: "uqstars",
        base_denom: "ustars",
    },
    {
        connection_id: "connection-14",
        chain_id: "osmo-test-5",
        deposit_address: {
            address: "osmo1lsy0xk782njpkuccnhrtw9n6vclzy6sr8uzmc65772dg2qvky4tqs8ths2",

            port_name: "icacontroller-osmo-test-5.deposit",
            withdrawal_address: "osmo1f7mc8txevv2tv6dlz2zgcj7nnl86tmtw0z0azfkex64yre5e5m5q4c7sxk",
            balance_waitgroup: 0
        },
        withdrawal_address: {
            address: "osmo1f7mc8txevv2tv6dlz2zgcj7nnl86tmtw0z0azfkex64yre5e5m5q4c7sxk",

            port_name: "icacontroller-osmo-test-5.withdrawal",
            withdrawal_address: "osmo1f7mc8txevv2tv6dlz2zgcj7nnl86tmtw0z0azfkex64yre5e5m5q4c7sxk",
            balance_waitgroup: 0
        },
        performance_address: {
            address: "osmo1f73cmckk2x79lpunyjj3k57nkvzstytp95wu4zrhc62acau84ghqktkgr7",

            port_name: "icacontroller-osmo-test-5.performance",
            withdrawal_address: "osmo1f7mc8txevv2tv6dlz2zgcj7nnl86tmtw0z0azfkex64yre5e5m5q4c7sxk",
            balance_waitgroup: 0
        },
        delegation_address: {
            address: "osmo1t86w5zqjw5vz4dhmarkyygt8syzt8uppa9w3qat7dc6urwfwnq6qpsn5zz",

            port_name: "icacontroller-osmo-test-5.delegate",
            withdrawal_address: "osmo1f7mc8txevv2tv6dlz2zgcj7nnl86tmtw0z0azfkex64yre5e5m5q4c7sxk",
            balance_waitgroup: 0
        },
        account_prefix: "osmo",
        local_denom: "uqosmo",
        base_denom: "uosmo",
    },
    {
        connection_id: "connection-2",
        chain_id: "regen-redwood-1",
        deposit_address: {
            address: "regen1f25gjkv8qtw8pmwrnek5c6u2r8vcu5jzh8dvs73wxp49lgx8z4gslp077m",

            port_name: "icacontroller-regen-redwood-1.deposit",
            withdrawal_address: "regen198u08eeuffnalk9z4kpk55h7rcndn2wasqsgyduhd3mrr4yp7ass2tuwfg",
            balance_waitgroup: 0
        },
        withdrawal_address: {
            address: "regen198u08eeuffnalk9z4kpk55h7rcndn2wasqsgyduhd3mrr4yp7ass2tuwfg",

            port_name: "icacontroller-regen-redwood-1.withdrawal",
            withdrawal_address: "regen198u08eeuffnalk9z4kpk55h7rcndn2wasqsgyduhd3mrr4yp7ass2tuwfg",
            balance_waitgroup: 0
        },
        performance_address: {
            address: "regen19w438u0j63dml9aqsqxmha3y8uv40wvapkqrnekt899kc3p99yds52nn80",

            port_name: "icacontroller-regen-redwood-1.performance",
            withdrawal_address: "regen198u08eeuffnalk9z4kpk55h7rcndn2wasqsgyduhd3mrr4yp7ass2tuwfg",
            balance_waitgroup: 0
        },
        delegation_address: {
            address: "regen1x68nf585hq3q57re6c4txlhzxxtx3rz73aglmz388tj24sf09gasw0n45l",

            port_name: "icacontroller-regen-redwood-1.delegate",
            withdrawal_address: "regen198u08eeuffnalk9z4kpk55h7rcndn2wasqsgyduhd3mrr4yp7ass2tuwfg",
            balance_waitgroup: 0
        },
        account_prefix: "regen",
        local_denom: "uqregen",
        base_denom: "uregen",
    },
    {
        connection_id: "connection-13",
        chain_id: "sommelier-3",
        deposit_address: {
            address: "somm1ax93l9ujrkvnzv4qg8y6cjsx407p2wgnl4ar3ha2flc2pzestqcsa0xljg",

            port_name: "icacontroller-sommelier-3.deposit",
            withdrawal_address: "somm1jvsjwvxxd7cuwhllk80kylqxta080rvwqxkxl4nzv0acx2srjwgsvwhx5v",
            balance_waitgroup: 0
        },
        withdrawal_address: {
            address: "somm1jvsjwvxxd7cuwhllk80kylqxta080rvwqxkxl4nzv0acx2srjwgsvwhx5v",

            port_name: "icacontroller-sommelier-3.withdrawal",
            withdrawal_address: "somm1jvsjwvxxd7cuwhllk80kylqxta080rvwqxkxl4nzv0acx2srjwgsvwhx5v",
            balance_waitgroup: 0
        },
        performance_address: {
            address: "somm1ye3g0t5zg9dqs936satgm8cux7m8m4p4e6d9q7l25qkupyer3f6s7w9caw",

            port_name: "icacontroller-sommelier-3.performance",
            withdrawal_address: "somm1jvsjwvxxd7cuwhllk80kylqxta080rvwqxkxl4nzv0acx2srjwgsvwhx5v",
            balance_waitgroup: 0
        },
        delegation_address: {
            address: "somm1dpz3x9x30y9l244kpdskluxfpwtrnsndkvzgcfkrwzaznk2v9xespd7u08",

            port_name: "icacontroller-sommelier-3.delegate",
            withdrawal_address: "somm1jvsjwvxxd7cuwhllk80kylqxta080rvwqxkxl4nzv0acx2srjwgsvwhx5v",
            balance_waitgroup: 0
        },
        account_prefix: "somm",
        local_denom: "uqsomm",
        base_denom: "usomm",
    },
    {
        connection_id: "connection-0",
        chain_id: "theta-testnet-001",
        deposit_address: {
            address: "cosmos125zjzmsrwt6v4c53s3s8jcdzdnvatzs029hwlvgjvv906wq3g25ssdfect",
            port_name: "icacontroller-theta-testnet-001.deposit",
            withdrawal_address: "cosmos1yuuz8thyl6yglh7szh8ve3vrv2g65rfp5w7kn2ue9dtcwfh686as3t60pw",
            balance_waitgroup: 0
        },
        withdrawal_address: {
            address: "cosmos1yuuz8thyl6yglh7szh8ve3vrv2g65rfp5w7kn2ue9dtcwfh686as3t60pw",

            port_name: "icacontroller-theta-testnet-001.withdrawal",
            withdrawal_address: "cosmos1yuuz8thyl6yglh7szh8ve3vrv2g65rfp5w7kn2ue9dtcwfh686as3t60pw",
            balance_waitgroup: 0
        },
        performance_address: {
            address: "cosmos1lh830fc7lyxdfva8xe0mk26xc3uta6dhu3pyrz7474j3z7vjmu8s50j0mg",

            port_name: "icacontroller-theta-testnet-001.performance",
            withdrawal_address: "cosmos1yuuz8thyl6yglh7szh8ve3vrv2g65rfp5w7kn2ue9dtcwfh686as3t60pw",
            balance_waitgroup: 0
        },
        delegation_address: {
            address: "cosmos12u59hsmtu4pzjefzwd43emsal2z5kq3wpw59jf25xxhlnuh6mn2snky4gx",
            port_name: "icacontroller-theta-testnet-001.delegate",
            withdrawal_address: "cosmos1yuuz8thyl6yglh7szh8ve3vrv2g65rfp5w7kn2ue9dtcwfh686as3t60pw",
            balance_waitgroup: 0
        },
        account_prefix: "cosmos",
        local_denom: "uqatom",
        base_denom: "uatom",
    }
]

export const TestDataMap = {
    uatom: {
        local_logo: "/assets/qAtom.svg",
        base_logo: "/assets/Cosmos.png",
        network_name: "Cosmos Hub",
        symbol: "ATOM",
        zone: {
            connection_id: "connection-0",
            chain_id: "theta-testnet-001",
            deposit_address: {
                address: "cosmos125zjzmsrwt6v4c53s3s8jcdzdnvatzs029hwlvgjvv906wq3g25ssdfect",
                port_name: "icacontroller-theta-testnet-001.deposit",
                withdrawal_address: "cosmos1yuuz8thyl6yglh7szh8ve3vrv2g65rfp5w7kn2ue9dtcwfh686as3t60pw",
                balance_waitgroup: 0
            },
            withdrawal_address: {
                address: "cosmos1yuuz8thyl6yglh7szh8ve3vrv2g65rfp5w7kn2ue9dtcwfh686as3t60pw",

                port_name: "icacontroller-theta-testnet-001.withdrawal",
                withdrawal_address: "cosmos1yuuz8thyl6yglh7szh8ve3vrv2g65rfp5w7kn2ue9dtcwfh686as3t60pw",
                balance_waitgroup: 0
            },
            performance_address: {
                address: "cosmos1lh830fc7lyxdfva8xe0mk26xc3uta6dhu3pyrz7474j3z7vjmu8s50j0mg",

                port_name: "icacontroller-theta-testnet-001.performance",
                withdrawal_address: "cosmos1yuuz8thyl6yglh7szh8ve3vrv2g65rfp5w7kn2ue9dtcwfh686as3t60pw",
                balance_waitgroup: 0
            },
            delegation_address: {
                address: "cosmos12u59hsmtu4pzjefzwd43emsal2z5kq3wpw59jf25xxhlnuh6mn2snky4gx",
                port_name: "icacontroller-theta-testnet-001.delegate",
                withdrawal_address: "cosmos1yuuz8thyl6yglh7szh8ve3vrv2g65rfp5w7kn2ue9dtcwfh686as3t60pw",
                balance_waitgroup: 0
            },
            account_prefix: "cosmos",
            local_denom: "uqatom",
            base_denom: "uatom",
        },
        network: {
            chainId: "theta-testnet-001",
            chainName: "Cosmos Hub Test",
            rpc: "https://rpc.theta-testnet-001.test.quicksilver.zone",
            rest: "https://lcd.theta-testnet-001.test.quicksilver.zone",

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
                low: 0.01,
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
            connection_id: "connection-14",
            chain_id: "osmo-test-5",
            deposit_address: {
                address: "osmo1lsy0xk782njpkuccnhrtw9n6vclzy6sr8uzmc65772dg2qvky4tqs8ths2",

                port_name: "icacontroller-osmo-test-5.deposit",
                withdrawal_address: "osmo1f7mc8txevv2tv6dlz2zgcj7nnl86tmtw0z0azfkex64yre5e5m5q4c7sxk",
                balance_waitgroup: 0
            },
            withdrawal_address: {
                address: "osmo1f7mc8txevv2tv6dlz2zgcj7nnl86tmtw0z0azfkex64yre5e5m5q4c7sxk",

                port_name: "icacontroller-osmo-test-5.withdrawal",
                withdrawal_address: "osmo1f7mc8txevv2tv6dlz2zgcj7nnl86tmtw0z0azfkex64yre5e5m5q4c7sxk",
                balance_waitgroup: 0
            },
            performance_address: {
                address: "osmo1f73cmckk2x79lpunyjj3k57nkvzstytp95wu4zrhc62acau84ghqktkgr7",

                port_name: "icacontroller-osmo-test-5.performance",
                withdrawal_address: "osmo1f7mc8txevv2tv6dlz2zgcj7nnl86tmtw0z0azfkex64yre5e5m5q4c7sxk",
                balance_waitgroup: 0
            },
            delegation_address: {
                address: "osmo1t86w5zqjw5vz4dhmarkyygt8syzt8uppa9w3qat7dc6urwfwnq6qpsn5zz",

                port_name: "icacontroller-osmo-test-5.delegate",
                withdrawal_address: "osmo1f7mc8txevv2tv6dlz2zgcj7nnl86tmtw0z0azfkex64yre5e5m5q4c7sxk",
                balance_waitgroup: 0
            },
            account_prefix: "osmo",
            local_denom: "uqosmo",
            base_denom: "uosmo",
        },
        network: {
            chainId: "osmo-test-4",
            chainName: "Osmosis Testnet",
            rpc: "https://rpc.osmo-test-4.test.quicksilver.zone",
            rest: "https://lcd.osmo-test-4.test.quicksilver.zone",

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
                    coinDenom: "OSMO",
                    coinMinimalDenom: "uosmo",
                    coinDecimals: 6,
                    coinGeckoId: "osmosis",
                },
            ],
            feeCurrencies: [
                {
                    coinDenom: "OSMO",
                    coinMinimalDenom: "uosmo",
                    coinDecimals: 6,
                    coinGeckoId: "osmosis",
                },
            ],
            stakeCurrency: {

                coinDenom: "OSMO",
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
            connection_id: "connection-2",
            chain_id: "regen-redwood-1",
            deposit_address: {
                address: "regen1f25gjkv8qtw8pmwrnek5c6u2r8vcu5jzh8dvs73wxp49lgx8z4gslp077m",

                port_name: "icacontroller-regen-redwood-1.deposit",
                withdrawal_address: "regen198u08eeuffnalk9z4kpk55h7rcndn2wasqsgyduhd3mrr4yp7ass2tuwfg",
                balance_waitgroup: 0
            },
            withdrawal_address: {
                address: "regen198u08eeuffnalk9z4kpk55h7rcndn2wasqsgyduhd3mrr4yp7ass2tuwfg",

                port_name: "icacontroller-regen-redwood-1.withdrawal",
                withdrawal_address: "regen198u08eeuffnalk9z4kpk55h7rcndn2wasqsgyduhd3mrr4yp7ass2tuwfg",
                balance_waitgroup: 0
            },
            performance_address: {
                address: "regen19w438u0j63dml9aqsqxmha3y8uv40wvapkqrnekt899kc3p99yds52nn80",

                port_name: "icacontroller-regen-redwood-1.performance",
                withdrawal_address: "regen198u08eeuffnalk9z4kpk55h7rcndn2wasqsgyduhd3mrr4yp7ass2tuwfg",
                balance_waitgroup: 0
            },
            delegation_address: {
                address: "regen1x68nf585hq3q57re6c4txlhzxxtx3rz73aglmz388tj24sf09gasw0n45l",

                port_name: "icacontroller-regen-redwood-1.delegate",
                withdrawal_address: "regen198u08eeuffnalk9z4kpk55h7rcndn2wasqsgyduhd3mrr4yp7ass2tuwfg",
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
    usomm: {
        local_logo: "/assets/qSomm.svg",
        base_logo: "/assets/sommelier.png",
        network_name: "Sommelier",
        symbol: "SOMM",
        zone: {
            connection_id: "connection-13",
            chain_id: "sommelier-3",
            deposit_address: {
                address: "somm1ax93l9ujrkvnzv4qg8y6cjsx407p2wgnl4ar3ha2flc2pzestqcsa0xljg",

                port_name: "icacontroller-sommelier-3.deposit",
                withdrawal_address: "somm1jvsjwvxxd7cuwhllk80kylqxta080rvwqxkxl4nzv0acx2srjwgsvwhx5v",
                balance_waitgroup: 0
            },
            withdrawal_address: {
                address: "somm1jvsjwvxxd7cuwhllk80kylqxta080rvwqxkxl4nzv0acx2srjwgsvwhx5v",

                port_name: "icacontroller-sommelier-3.withdrawal",
                withdrawal_address: "somm1jvsjwvxxd7cuwhllk80kylqxta080rvwqxkxl4nzv0acx2srjwgsvwhx5v",
                balance_waitgroup: 0
            },
            performance_address: {
                address: "somm1ye3g0t5zg9dqs936satgm8cux7m8m4p4e6d9q7l25qkupyer3f6s7w9caw",

                port_name: "icacontroller-sommelier-3.performance",
                withdrawal_address: "somm1jvsjwvxxd7cuwhllk80kylqxta080rvwqxkxl4nzv0acx2srjwgsvwhx5v",
                balance_waitgroup: 0
            },
            delegation_address: {
                address: "somm1dpz3x9x30y9l244kpdskluxfpwtrnsndkvzgcfkrwzaznk2v9xespd7u08",

                port_name: "icacontroller-sommelier-3.delegate",
                withdrawal_address: "somm1jvsjwvxxd7cuwhllk80kylqxta080rvwqxkxl4nzv0acx2srjwgsvwhx5v",
                balance_waitgroup: 0
            },
            account_prefix: "somm",
            local_denom: "uqsomm",
            base_denom: "usomm",
        },
        network: {
            chainId: "sommelier-3",
            chainName: "Sommelier",
            rpc: "https://rpc.sommelier-3.quicksilver.zone",
            rest: "https://lcd.sommelier-3.quicksilver.zone",

            bip44: {
                coinType: 118,
            },
            bech32Config: {
                bech32PrefixAccAddr: "somm",
                bech32PrefixAccPub: "sommpub",
                bech32PrefixValAddr: "sommvaloper",
                bech32PrefixValPub: "sommvaloperpub",
                bech32PrefixConsAddr: "sommvalcons",
                bech32PrefixConsPub: "sommvalconspub",
            },
            currencies: [
                {
                    coinDenom: "SOMM",
                    coinMinimalDenom: "usomm",
                    coinDecimals: 6,
                    coinGeckoId: "sommelier",
                },
            ],
            feeCurrencies: [
                {
                    coinDenom: "SOMM",
                    coinMinimalDenom: "usomm",
                    coinDecimals: 6,
                    coinGeckoId: "sommelier",
                },
            ],
            stakeCurrency: {
                coinDenom: "SOMM",
                coinMinimalDenom: "usomm",
                coinDecimals: 6,
                coinGeckoId: "sommelier",
            },
            coinType: 118,
            gasPriceStep: {
                low: 0.01,
                average: 0.015,
                high: 0.03,
            }
        }
    },
    ustars: {
        local_logo: "/assets/qSTAR.svg",
        base_logo: "/assets/Stargaze.png",
        network_name: "Stargaze",
        symbol: "STARS",
        zone: {
            connection_id: "connection-1",
            chain_id: "elgafar-1",
            deposit_address: {
                address: "stars1z6kk76ascgye3vtkauy3v3dn0vh3zkchzptypjwvwqczly92saxs96kesk",

                port_name: "icacontroller-elgafar-1.deposit",
                withdrawal_address: "stars1clza9vj9j80ksyrcjalvpurpsgc04862wqscxk9tgp66047w9t3qq9uteg",
                balance_waitgroup: 0
            },
            withdrawal_address: {
                address: "stars1clza9vj9j80ksyrcjalvpurpsgc04862wqscxk9tgp66047w9t3qq9uteg",

                port_name: "icacontroller-elgafar-1.withdrawal",
                withdrawal_address: "stars1clza9vj9j80ksyrcjalvpurpsgc04862wqscxk9tgp66047w9t3qq9uteg",
                balance_waitgroup: 0
            },
            performance_address: {
                address: "stars187j0cmsfw3tppn6dn94x7dq8gre5y0y9hn07yk559lwcw9yv8acqkgcu69",

                port_name: "icacontroller-elgafar-1.performance",
                withdrawal_address: "stars1clza9vj9j80ksyrcjalvpurpsgc04862wqscxk9tgp66047w9t3qq9uteg",
                balance_waitgroup: 0
            },
            delegation_address: {
                address: "stars18z8g39uz9m30sh2tucxya2x0068jah7sy5yzagttw7qcgkw6f88qxc39d6",

                port_name: "icacontroller-elgafar-1.delegate",
                withdrawal_address: "stars1clza9vj9j80ksyrcjalvpurpsgc04862wqscxk9tgp66047w9t3qq9uteg",
                balance_waitgroup: 0
            },
            account_prefix: "stars",
            local_denom: "uqstars",
            base_denom: "ustars",
        },
        network: {
            chainId: "elgafar-1",
            chainName: "Stargaze Testnet",
            rpc: "https://rpc.elgafar-1.test.quicksilver.zone",
            rest: "https://lcd.elgafar-1.test.quicksilver.zone",

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
                low: 0.01,
                average: 0.015,
                high: 0.03,
            },
        }
    },
}