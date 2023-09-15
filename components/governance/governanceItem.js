import React from "react";
import { Flex, Center, Text, HStack } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import Cosmos from "@/assets/logos/cosmos.svg";
import Image from "next/image";
import Link from "next/link";

const GovernanceItem = ({
  proposalId,
  title,
  vote,
  startTime,
  endTime,
  index,
}) => {
  const totalVotingPower =
    parseInt(vote.yes) +
    parseInt(vote.no) +
    parseInt(vote.no_with_veto) +
    parseInt(vote.abstain);
  const utcDate = new Date(endTime);
  const localTime = utcDate.toLocaleString();
  return (
    <Link
      href={`/governance/${proposalId}`}
      style={{
        border: "1px solid black",
        padding: "20px",
        height: "202px",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px 0px #FFFFFF99",
        // backgroundColor: "#141414",
        color: "white",
        cursor: "pointer",
      }}
    >
      <Flex>
        <Center
          style={{ borderRadius: "10px", border: "1px solid #3E497C" }}
          w="100px"
        >
          <HStack style={{padding: '8px 10px 8px 10px'}}>
            <TimeIcon boxSize={4}/>
            <Text fontSize={12}>Ongoing</Text>
          </HStack>
        </Center>
        <Center w="100px">
          <Text>Time Left:</Text>
        </Center>
      </Flex>
      <HStack
        style={{
          textAlign: "left",
          height: "48px",
          margin: "0 auto",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Image src={Cosmos} />
        <div>{`#${proposalId} ${title}`}</div>
      </HStack>
      <Flex
        style={{
          height: "8px",
          borderRadius: "8px",
          border: "1px solid gray",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${(parseInt(vote.yes) / totalVotingPower) * 100}%`,
            backgroundColor: "#1BCA87",
          }}
        ></div>
        <div
          style={{
            width: `${(parseInt(vote.no) / totalVotingPower) * 100}%`,
            backgroundColor: "#FF8291",
          }}
        ></div>
        <div
          style={{
            width: `${(parseInt(vote.no_with_veto) / totalVotingPower) * 100}%`,
            backgroundColor: "#F0950D",
          }}
        ></div>
        <div
          style={{
            width: `${(parseInt(vote.abstain) / totalVotingPower) * 100}%`,
            backgroundColor: "#BAA2EB",
          }}
        ></div>
      </Flex>
      <div
        style={{
          textAlign: "left",
          color: "#CDCDCD",
          fontStyle: "italic",
          marginTop: "10px",
        }}
      >
        Voting Ends: {localTime}
      </div>
    </Link>
  );
};

export default GovernanceItem;
