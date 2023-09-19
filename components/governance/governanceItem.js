import React from "react";
import { Flex, Center, Text, HStack} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import Cosmos from "@/assets/logos/cosmos.svg";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


const GovernanceItem = ({ proposalId, title, vote, endTime }) => {
  const [locale, setLocale] = useState("en-US");
  useEffect(() => {
    setLocale(navigator.language);
  }, []);
  const totalVotingPower =
    parseInt(vote.yes_count) +
    parseInt(vote.no_count) +
    parseInt(vote.no_with_veto_count) +
    parseInt(vote.abstain_count);
  const convertZTime = (endTime) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "UTC",
      timeZoneName: "short",
    };

    return new Intl.DateTimeFormat(locale, options).format(new Date(endTime));
  };
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
            <HStack style={{ padding: "8px 10px 8px 10px" }}>
              <TimeIcon boxSize={4} />
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
          <Image src={Cosmos} alt="logo" />
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
          <Text
            style={{
              width: `${(parseInt(vote.yes_count) / totalVotingPower) * 100}%`,
              backgroundColor: "#1BCA87",
            }}
          ></Text>
          <Text
            style={{
              width: `${(parseInt(vote.no_count) / totalVotingPower) * 100}%`,
              backgroundColor: "#FF8291",
            }}
          ></Text>
          <Text
            style={{
              width: `${
                (parseInt(vote.no_with_veto_count) / totalVotingPower) * 100
              }%`,
              backgroundColor: "#F0950D",
            }}
          ></Text>
          <Text
            style={{
              width: `${
                (parseInt(vote.abstain_count) / totalVotingPower) * 100
              }%`,
              backgroundColor: "#BAA2EB",
            }}
          ></Text>
        </Flex>
        <Text
          style={{
            textAlign: "left",
            color: "#CDCDCD",
            fontStyle: "italic",
            marginTop: "10px",
          }}
        >
          Voting Ends: {convertZTime(endTime)}
        </Text>
      </Link>
    );
};

export default GovernanceItem;
