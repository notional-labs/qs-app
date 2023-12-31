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
import { useEffect } from "react";
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
                  <MenuList backgroundColor="inherit">
                    <MenuItem backgroundColor="inherit">Voting</MenuItem>
                    <MenuItem backgroundColor="inherit">Passed</MenuItem>
                    <MenuItem backgroundColor="inherit">Rejected</MenuItem>
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
              : proposals.map((proposal, index) => {
                  return (
                    <GovernanceItem
                      proposalId={proposal.id}
                      title={proposal.messages[0].content.title}
                      vote={proposal.final_tally_result}
                      startTime={proposal.voting_start_time}
                      endTime={proposal.voting_end_time}
                      index={index}
                      // key={proposal.proposal_id}
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
