import SideBar from "@/components/sidebar";
import Layout from "@/components/layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import UnbondingAssets from "@/components/assets/unbonding";

function Assets() {
    return (
        <Layout pageTitle="Assets | Quicksilver">
            <div className="dashboard h-screen bg-center bg-background bg-cover bg-no-repeat flex items-center">
                <>
                    <SideBar currentPath={"Assets"} />
                    <div className="main-container">
                        <div className="content">
                            <UnbondingAssets />
                        </div>
                    </div>
                </>
            </div>
        </Layout >
    );
}

export default Assets;
