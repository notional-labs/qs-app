import React, { useEffect, useState } from "react";
import PageHead from '@/components/layout/PageHead';
import DefiDashboard from "@/components/defi";

export default function Defi() {
    return (
        <>
            <PageHead pageTitle="Defi | Quicksilver" />
            <DefiDashboard/>
        </> 
    );
}