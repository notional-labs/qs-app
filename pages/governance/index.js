import React from "react";
import GovernanceList from "@/components/governance/governanceList";
import { Flex } from "@chakra-ui/react";
import SideBar from "@/components/sidebar";
import Layout from "@/components/layout";

const Governance = () => {
  return (
    <Layout>
      <Flex>
        <SideBar />
        <GovernanceList />
      </Flex>
    </Layout>
  );
};

export default Governance;
