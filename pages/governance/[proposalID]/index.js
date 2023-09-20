import {
  Center,
  Box,
  HStack,
  Flex,
  Spacer,
  Button,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { use } from "react";
import GovStyle from "@/styles/Governance.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProposal } from "@/state/proposals/thunks/connectProposal";
import ProposalDetail from "@/components/governance/proposalDetail";

const ProposalPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { proposalID } = router.query;
  const { proposal, loadingProposal } = useSelector((state) => state.proposals);
  useEffect(() => {
    if (proposalID !== undefined) {
      console.log(router.query);
      dispatch(fetchSingleProposal(proposalID));
      console.log(proposal);
    }
  }, [proposalID]);

  // useEffect(() => {
  //   const router = useRouter();
  //   const { proposalID } = router.query;
  //   dispatch(fetchSingleProposal(proposalID));
  //   console.log(proposal);
  // }, []);
  if (loadingProposal) {
    return (
      <Center w={"100%"} margin={"1vh"}>
        <Box className={GovStyle.governance_container}>
          <HStack>
            <SkeletonCircle size="8" />
            <SkeletonText width="150px" noOfLines={1} />
          </HStack>

          <Flex mt="20px">
            <Skeleton w="100px" h="30px" borderRadius="10px" />
            <Skeleton ml="20px" w="100px" h="30px" />
          </Flex>

          <Flex mt="20px" mb="20px">
            <HStack>
              <SkeletonCircle size="24px" />
              <SkeletonText width="200px" noOfLines={1} />
            </HStack>
            <Spacer />
            <Button
              isLoading={true}
              loadingText="Loading"
              colorScheme="teal"
              variant="outline"
              width="200px"
            >
              Vote
            </Button>
          </Flex>

          <HStack spacing="40px">
            <SkeletonText width="150px" noOfLines={2} />
            <SkeletonText width="150px" noOfLines={2} />
            <SkeletonText width="150px" noOfLines={2} />
          </HStack>

          <HStack spacing="50px" mt="20px">
            <SkeletonCircle size="90px" />
            <Box>
              <SkeletonText width="200px" noOfLines={1} />
              <HStack>
                <Skeleton
                  mt="20px"
                  width="202px"
                  height="68px"
                  borderRadius="10px"
                />
                <Skeleton
                  mt="20px"
                  width="202px"
                  height="68px"
                  borderRadius="10px"
                />
                <Skeleton
                  mt="20px"
                  width="202px"
                  height="68px"
                  borderRadius="10px"
                />
                <Skeleton
                  mt="20px"
                  width="202px"
                  height="68px"
                  borderRadius="10px"
                />
              </HStack>
            </Box>
          </HStack>

          <Box textAlign="left" mt="2rem">
            <SkeletonText width="150px" noOfLines={1} />
            <SkeletonText mt="20px" width="400px" noOfLines={5} />
          </Box>
        </Box>
      </Center>
    );
  } else {
    return <ProposalDetail proposal={proposal}></ProposalDetail>;
  }
};

export default ProposalPage;
