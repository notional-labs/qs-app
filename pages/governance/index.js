// import SideBar from "@/components/sidebar";
// import Layout from "@/components/layout";
// import Link from "next/link";
import React from "react";
import GovernanceList from "@/components/governance/governanceList";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  InputLeftAddon,
  Flex,
} from "@chakra-ui/react";
import { Search2Icon, ChevronDownIcon } from "@chakra-ui/icons";
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
