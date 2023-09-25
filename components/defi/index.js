import Link from "next/link";
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
import Umee from "@/assets/logos/umee.png";
import Osmosis from "@/assets/logos/osmosis.svg";
import Quasar from "@/assets/logos/quasar.svg";
import Image from "next/image";

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
        <>
            <div className="defi-header">
                <h2 className="h1">DeFi Opportunities</h2>
                <p>Use your qAssets to earn extra yield in DeFi.</p>
            </div>
            <div className="category-filter border">
                <Tabs selectedKey={category} onSelectionChange={setCategory} >
                    <Tab key="All" title="All" />
                    <Tab key="Vault" title="Vault" />
                    <Tab key="Liquidity Provides" title="Liquidity Provides" />
                    <Tab key="Lending & Borrowing" title="Lending & Borrowing" />
                </Tabs>
            </div>
            <Table className="defi-table">
                <TableHeader>
                    <TableColumn>ASSETS PAIR</TableColumn>
                    <TableColumn>APY</TableColumn>
                    <TableColumn>TVL</TableColumn>
                    <TableColumn>PROVIDER</TableColumn>
                </TableHeader>
                {category === "All" ? (
                    <TableBody items={defiApps}>
                        {(item) => (
                            <TableRow key={item.key}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.APY}</TableCell>
                                <TableCell>{item.TVL}</TableCell>
                                <TableCell className="provider">
                                    {
                                        item.provider === "Osmosis" ?
                                            (
                                                <Image src={Osmosis} width="100" height="100" />
                                            ) : item.provider === "Umee" ?
                                                (
                                                    <Image src={Umee} width="100" height="100" />
                                                ) : (
                                                    <Image src={Quasar} width="100" height="100" />
                                                )
                                    }
                                    <Button>
                                        asdas
                                    </Button>
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
                                            <Image src={Osmosis} width="100" height="100" />
                                        ) : item.provider === "Umee" ? (
                                            <Image src={Umee} width="100" height="100" />
                                        ) : (
                                            <Image src={Quasar} width="100" height="100" />
                                        )
                                    }
                                    <Button>
                                        asdas
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                )}
            </Table >
        </>

    );
}

export default DefiDashboard;
