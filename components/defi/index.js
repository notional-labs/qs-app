import Link from "next/link";
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
    Tabs, Tab, Button
} from "@nextui-org/react";
import {
    Center
} from '@chakra-ui/react'
import Umee from "@/assets/logos/umee.png";
import Osmosis from "@/assets/logos/osmosis.svg";
import Quasar from "@/assets/logos/quasar.svg";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

const defiApps = [
    {
        key: 1,
        name: "qOSMO/OSMO",
        category: "Liquidity Provides",
        provider: "Osmosis",
        URL: "https://app.osmosis.zone/pool/956",
        APY: "",
        TVL: 99978,
        logo: "../../../assets/logos/osmosis.svg",
    },
    {
        key: 2,
        name: "QCK/OSMO",
        category: "Liquidity Provides",
        provider: "Osmosis",
        URL: "https://app.osmosis.zone/pool/952",
        APY: "0.1643",
        TVL: 28507,
        logo: "../../../assets/logos/osmosis.svg",
    },
    {
        key: 3,
        name: "qSTARS/STARS",
        category: "Liquidity Provides",
        provider: "Osmosis",
        URL: "https://app.osmosis.zone/pool/903",
        APY: 0.0179,
        TVL: 30113,
        logo: "../../../assets/logos/osmosis.svg",
    },
    {
        key: 4,
        name: "qATOM/ATOM",
        category: "Liquidity Provides",
        provider: "Osmosis",
        URL: "https://app.osmosis.zone/pool/944",
        APY: 0.0038,
        TVL: 1036259,
        logo: "../../../assets/logos/osmosis.svg",
    },
    {
        key: 5,
        name: "qSOMM/SOMM",
        category: "Liquidity Provides",
        provider: "Osmosis",
        URL: "https://app.osmosis.zone/pool/1087",
        APY: 0.0002,
        TVL: 101986,
        logo: "../../assets/logos/osmosis.svg",
    },
    {
        key: 6,
        name: "qREGEN/REGEN",
        category: "Liquidity Provides",
        provider: "Osmosis",
        URL: "https://app.osmosis.zone/pool/948",
        APY: 0.0004,
        TVL: 30119,
        logo: "../../../assets/logos/osmosis.svg",
    },
    {
        key: 7,
        name: "ATOM Pro",
        category: "Vault",
        provider: "Quasar",
        URL: "https://app.quasar.fi/vault/atom-pro",
        APY: 0.13,
        TVL: 46910,
        logo: "../../../assets/logos/osmosis.svg",
    },
    {
        key: 8,
        name: "qATOM",
        category: "Lending & Borrowing",
        provider: "Umee",
        URL: "https://app.umee.cc/markets",
        APY: 0.0203,
        TVL: 30000,
        logo: "../../../assets/logos/osmosis.svg",
    }
]

const DefiDashboard = () => {
    const [category, setCategory] = useState("All");

    return (
        <Center w={'100%'}>
            <div className="defi-dashboard">
                <div className="defi-header">
                    <h2 className="h1">DeFi Opportunities</h2>
                    <p>Use your qAssets to earn extra yield in DeFi.</p>
                </div>
                <div className="category-filter">
                    <Tabs selectedKey={category} onSelectionChange={setCategory} color="primary" variant="solid">
                        <Tab key="All" title="All" style={{
                            textAlign: "center",
                            borderRight: "1px solid grey",
                            padding: "0px 50px",
                            width: "unset"
                        }}
                        />
                        <Tab key="Vault" title="Vault" style={{
                            textAlign: "center",
                            borderRight: "1px solid grey",
                            padding: "0px 50px",
                            width: "unset"
                        }}
                        />
                        <Tab key="Liquidity Provides" title="Liquidity Provides" style={{
                            textAlign: "center",
                            borderRight: "1px solid grey",
                            padding: "0px 50px",
                            width: "unset"
                        }}
                        />
                        <Tab key="Lending & Borrowing" title="Lending & Borrowing" style={{
                            textAlign: "center",
                            padding: "0px 50px",
                            width: "unset"
                        }}
                        />
                    </Tabs>
                </div>
                <Table className="defi-table">
                    <TableHeader className="text-left">
                        <TableColumn>ASSETS PAIR</TableColumn>
                        <TableColumn>APY</TableColumn>
                        <TableColumn>TVL</TableColumn>
                        <TableColumn>PROVIDER</TableColumn>
                    </TableHeader>
                    {category === "All" ? (
                        <TableBody items={defiApps}>
                            {(item) => (
                                <TableRow key={item.key}>
                                    <TableCell style={{
                                        fontSize: "30px",
                                        paddingLeft: "20px"
                                    }}
                                    >
                                        {item.name}
                                    </TableCell>
                                    <TableCell style={{
                                        fontSize: "30px",
                                        fontWeight: "700",
                                    }}
                                    >{item.APY * 100}%
                                    </TableCell>
                                    <TableCell style={{
                                        fontSize: "30px",
                                        fontWeight: "700",
                                    }}
                                    >
                                        ${item.TVL.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    </TableCell>
                                    <TableCell className="provider flex">
                                        {
                                            item.provider === "Osmosis" ? (
                                                <>
                                                    <Image src={Osmosis} />
                                                    <a href={item.URL} target="_blank">
                                                        Add Liquidity
                                                    </a>
                                                </>
                                            ) : item.provider === "Umee" ? (
                                                <>
                                                    <Image src={Umee} />
                                                    <a href={item.URL} target="_blank">
                                                        Lend/Borrow
                                                    </a>
                                                </>
                                            ) : (
                                                <>
                                                    <Image src={Quasar} />
                                                    <a href={item.URL} target="_blank">
                                                        Vault
                                                    </a>
                                                </>
                                            )
                                        }
                                        {console.log(item.category)}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    ) : (
                        <TableBody
                            items={defiApps.filter(item => {
                                return (item.category === category)
                            })}
                        >
                            {(item) => (
                                <TableRow key={item.key}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.APY}</TableCell>
                                    <TableCell>{item.TVL}</TableCell>
                                    <TableCell className="provider">
                                        {
                                            item.provider === "Osmosis" ? (
                                                <>
                                                    <Image src={Osmosis} />
                                                    <a href={item.URL} target="_blank">
                                                        Add Liquidity
                                                    </a>
                                                </>
                                            ) : item.provider === "Umee" ? (
                                                <>
                                                    <Image src={Umee} />
                                                    <a href={item.URL} target="_blank">
                                                        Lend/Borrow
                                                    </a>
                                                </>
                                            ) : (
                                                <>
                                                    <Image src={Quasar} />
                                                    <a href={item.URL} target="_blank">
                                                        Vault
                                                    </a>
                                                </>
                                            )
                                        }
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    )}
                </Table >
            </div>
        </Center>

    );
}

export default DefiDashboard;
