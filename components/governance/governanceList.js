import React from "react";
import GovernanceItem from "./governanceItem";
import GovStyle from "@/styles/Governance.module.css";
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
  Center,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProposal } from "@/state/proposals/thunks/connectProposal";
import { Skeleton } from "@chakra-ui/react";
import PageHead from "../layout/PageHead";

const GovernanceList = () => {
  const dispatch = useDispatch();
  const { proposals, loadingProposals } = useSelector(
    (state) => state.proposals
  );
  useEffect(() => {
    dispatch(fetchProposal());
  }, [fetchProposal]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  return (
    <>
      <PageHead pageTitle="Governance | Quicksilver" />
      <Center w={"100%"} margin={"1vh"}>
        <Box
          my={"12vh"}
          mx={20}
          w="full"
          className={GovStyle.governance_container}
        >
          <div>
            <h1 style={{ color: "#FBFBFB" }}>Governance</h1>
            <p style={{ color: "#CDCDCD" }}>
              Vote on Cosmos proposals through the Quicksilver platform.
            </p>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                marginTop: "2rem",
              }}
            >
              <>
                <InputGroup w={"30%"}>
                  <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="tel"
                    placeholder="Search Proposal"
                    borderRadius={"20px"}
                    _focus={{ borderColor: "#E77728", boxShadow: "none" }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </InputGroup>
              </>
              <>
                <Menu>
                  <MenuButton
                    style={{
                      border: "1px solid white",
                      borderRadius: "5px",
                      padding: "10px",
                      backgroundColor: "inherit",
                      color: "rgba(151, 151, 151, 1)",
                    }}
                    as={Button}
                    rightIcon={<ChevronDownIcon color="orange" />}
                  >
                    Filter by Status
                  </MenuButton>
                  <MenuList backgroundColor="rgb(42, 42, 42)">
                    <MenuItem
                      backgroundColor="inherit"
                      onClick={() => setFilterStatus("")}
                    >
                      All
                    </MenuItem>
                    <MenuItem
                      backgroundColor="inherit"
                      onClick={() =>
                        setFilterStatus("PROPOSAL_STATUS_VOTING_PERIOD")
                      }
                    >
                      Voting
                    </MenuItem>
                    <MenuItem
                      backgroundColor="inherit"
                      onClick={() => setFilterStatus("PROPOSAL_STATUS_PASSED")}
                    >
                      Passed
                    </MenuItem>
                    <MenuItem
                      backgroundColor="inherit"
                      onClick={() =>
                        setFilterStatus("PROPOSAL_STATUS_REJECTED")
                      }
                    >
                      Rejected
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
              marginTop: "2rem",
              zIndex: "100",
            }}
          >
            {loadingProposals // Display Skeleton components when loadingProposals
              ? Array(6)
                  .fill(0)
                  .map((_, idx) => (
                    <Box
                      key={idx}
                      style={{
                        border: "1px solid black",
                        padding: "20px",
                        height: "202px",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 5px 0px #FFFFFF99",
                        color: "white",
                        minWidth: "509.03px",
                      }}
                    >
                      <Flex>
                        <Skeleton
                          height="40px"
                          width="100px"
                          borderRadius="10px"
                          mr={4}
                        />
                        <Skeleton
                          height="40px"
                          width="100px"
                          borderRadius="10px"
                        />
                      </Flex>
                      <HStack mt={4} mb={4}>
                        <Skeleton circle height="48px" width="48px" mr={4} />
                        <Skeleton height="48px" width="150px" />
                      </HStack>
                      <Skeleton
                        height="8px"
                        width="100%"
                        borderRadius="8px"
                        mt={2}
                      />
                      <Skeleton height="16px" width="60%" mt={4} />
                    </Box>
                  ))
              : proposals
                  .filter((proposal) => {
                    // Filter by search term
                    const matchesSearch = proposal.messages[0].content.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase());
                    const matchesStatus =
                      !filterStatus || proposal.status === filterStatus;
                    return matchesSearch && matchesStatus;
                  })
                  .map((filteredProposal, index) => {
                      return (
                        <GovernanceItem
                        proposalId={filteredProposal.id}
                        title={filteredProposal.messages[0].content.title}
                        vote={filteredProposal.final_tally_result}
                        startTime={filteredProposal.voting_start_time}
                        endTime={filteredProposal.voting_end_time}
                        key={filteredProposal.proposal_id}
                        index={index}
                        />
                        );
                  })}
          </div>
        </Box>
      </Center>
    </>
  );
};

export default GovernanceList;
