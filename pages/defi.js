import SideBar from "@/components/sidebar";
import Layout from "@/components/layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DefiDashboard from "@/components/defi";

function Staking() {
    return (
        <Layout pageTitle="Defi | Quicksilver">
            <div className="dashboard h-screen bg-center bg-background bg-cover bg-no-repeat flex items-center">
                <>
                    <SideBar currentPath={"Defi"} />
                    <div className="main-container">
                        <div className="content">
                            <DefiDashboard />
                        </div>
                    </div>
                </>
            </div>
        </Layout >
    );
}

export default Staking;
