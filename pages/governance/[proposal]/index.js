import { ArrowBackIcon, TimeIcon } from "@chakra-ui/icons";
import { HStack, Text, Flex, Center, Spacer, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Cosmos from "@/assets/logos/cosmos.svg";
import Image from "next/image";
import { Chart as ChartJs, Tooltip, Legend, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ReactMarkdown from "react-markdown";
import React from "react";
import remarkGfm from "remark-gfm";


ChartJs.register(ArcElement, Tooltip, Legend);
const ProposalPage = () => {
  const proposalDetail = {
    proposal_id: "2",
    content: {
      "@type": "/cosmos.gov.v1beta1.TextProposal",
      title: "ATOM Transfer Enablement",
      description:
        "A plan is proposed to set up a testnet using the Cosmos SDK v0.34.0 release, along with mainnet conditions, plus transfer enablement and increased block size, as a testing ground. Furthermore, a path for upgrading the cosmoshub-1 chain to use the Cosmos SDK release v0.34.0, along with the necessary updates to the genesis file, at block 425000, is outlined. IPFS: https://ipfs.io/ipfs/QmaUaMjXPE6i4gJR1NakQc15TZpSqjSrXNmrS1vA5veF9W",
    },
    status: "PROPOSAL_STATUS_REJECTED",
    final_tally_result: {
      yes: "5195610593628",
      abstain: "2619844783500",
      no: "58322135404940",
      no_with_veto: "43483296883256",
    },
    submit_time: "2019-03-25T21:42:19.240550245Z",
    deposit_end_time: "2019-04-08T21:42:19.240550245Z",
    total_deposit: [
      {
        denom: "uatom",
        amount: "521400000",
      },
    ],
    voting_start_time: "2019-03-25T23:44:04.098630937Z",
    voting_end_time: "2019-04-08T23:44:04.098630937Z",
  };
  const router = useRouter();
  const { proposal } = router.query;
  const totalVotingPower =
    parseInt(proposalDetail.final_tally_result.yes) +
    parseInt(proposalDetail.final_tally_result.no) +
    parseInt(proposalDetail.final_tally_result.no_with_veto) +
    parseInt(proposalDetail.final_tally_result.abstain);
  function covertToLocalTime(date) {
    const utcDate = new Date(date);
    const localTime = utcDate.toLocaleString();
    return localTime;
  }
  // Now you can use the proposal variable (which will contain the proposalId) in your component logic
  const dataDougnut = {
    labels: [],
    datasets: [
      {
        labels: "Votes",
        data: [parseInt(proposalDetail.final_tally_result.yes), parseInt(proposalDetail.final_tally_result.no), parseInt(proposalDetail.final_tally_result.no_with_veto), parseInt(proposalDetail.final_tally_result.abstain)],
        backgroundColor: ["#1BCA87", "#FF8291", "#F0950D", "#BAA2EB"],
        borderColor: ["#1BCA87", "#FF8291", "#F0950D", "#BAA2EB"],
        cutout: "80%",
      },
    ],
  };
  const options = {};
  return (
    <div
      style={{
        textAlign: "center",
        margin: "1rem 0",
        height: "100vh",
        width: "90%",
        backgroundColor: 'rgba(42, 42, 42, 1)',
        color: 'white',
        padding: '20px'
      }}
    >
      <HStack>
        <ArrowBackIcon boxSize={20}/>
        <h2>Proposal #{proposalDetail.proposal_id}</h2>
      </HStack>
      <Flex style={{marginTop: '20px'}}>
        <Center
          style={{ borderRadius: "10px", border: "1px solid #3E497C" }}
          w="100px"
        >
          <HStack>
            <TimeIcon />
            <Text>Ongoing</Text>
          </HStack>
        </Center>
        <Center w="100px">
          <Text>Time Left:</Text>
        </Center>
      </Flex>
      <Flex>
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
          <div>{`#${proposalDetail.proposal_id} ${proposalDetail.content.title}`}</div>
        </HStack>
        <Spacer />
        <Button style={{
            backgroundColor: '#FF8500',
            border: 'none',
            borderRadius: '5px',
            width: '200px',
            height: '48px',
            margin: "0 auto",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "20px",
        }}>
          Vote
        </Button>
      </Flex>
      <HStack spacing="40px">
        <div style={{ textAlign: "left" }}>
          <Text>Submit Time</Text>
          <Text fontWeight={600}>
            {covertToLocalTime(proposalDetail.submit_time)}
          </Text>
        </div>
        <div style={{ textAlign: "left" }}>
          <Text>Voting Start</Text>
          <Text fontWeight={600}>
            {covertToLocalTime(proposalDetail.voting_start_time)}
          </Text>
        </div>
        <div style={{ textAlign: "left" }}>
          <Text>Voting End</Text>
          <Text fontWeight={600}>
            {covertToLocalTime(proposalDetail.voting_end_time)}
          </Text>
        </div>
      </HStack>
      <HStack spacing="50px" style={{ textAlign: "left" }}>
        <div>
          <Doughnut
            data={dataDougnut}
            options={options}
            style={{
              width: "181px",
            }}
          />
        </div>
        <div>
          <Text>{proposalDetail.content.title}</Text>
          <div style={{ marginTop: "20px" }}>
            <HStack style={{ alignItems: "center" }}>
              <Text
                style={{
                  width: "202px",
                  height: "68px",
                  backgroundColor: "rgba(27, 202, 135, 0.2)",
                  textAlign: "left",
                  borderRadius: "6px",
                  padding: "13px",
                }}
              >
                <div style={{fontWeight: '700', color: '#1BCA87'}}>
                  YES{" "}
                  {(
                    (parseInt(proposalDetail.final_tally_result.yes) /
                      totalVotingPower) *
                    100
                  ).toFixed(2)}
                  %
                </div>
                <div>{proposalDetail.final_tally_result.yes} ATOM</div>
              </Text>
              <Text
                style={{
                  width: "202px",
                  height: "68px",
                  backgroundColor: "rgba(255, 130, 145, 0.2",
                  textAlign: "left",
                  borderRadius: "6px",
                  padding: "13px",
                }}
              >
                <div style={{fontWeight: '700', color: '#FF8291'}}>
                  NO{" "}
                  {(
                    (parseInt(proposalDetail.final_tally_result.no) /
                      totalVotingPower) *
                    100
                  ).toFixed(2)}
                  %
                </div>
                <div>{proposalDetail.final_tally_result.yes} ATOM</div>
              </Text>
              <Text
                style={{
                  width: "202px",
                  height: "68px",
                  backgroundColor: "rgba(240, 149, 13, 0.2)",
                  textAlign: "left",
                  borderRadius: "6px",
                  padding: "13px",
                }}
              >
                <div style={{fontWeight: '700', color: '#F0950D'}}>
                  NO WITH VETO{" "}
                  {(
                    (parseInt(proposalDetail.final_tally_result.no_with_veto) /
                      totalVotingPower) *
                    100
                  ).toFixed(2)}
                  %
                </div>
                <div>{proposalDetail.final_tally_result.yes} ATOM</div>
              </Text>
              <Text
                style={{
                  width: "202px",
                  height: "68px",
                  backgroundColor: "rgba(186, 162, 235, 0.2)",
                  textAlign: "left",
                  borderRadius: "6px",
                  padding: "13px",
                }}
              >
                <div style={{fontWeight: '700', color: '#BAA2EB'}}>
                  ABSTAIN{" "}
                  {(
                    (parseInt(proposalDetail.final_tally_result.abstain) /
                      totalVotingPower) *
                    100
                  ).toFixed(2)}
                  %
                </div>
                <div>{proposalDetail.final_tally_result.yes} ATOM</div>
              </Text>
            </HStack>
          </div>
        </div>
      </HStack>
      <div style={{textAlign: "left", marginTop: '2rem'}}>
        <h1>Description:</h1>
        <ReactMarkdown children={proposalDetail.content.description} remarkPlugins={remarkGfm}/>
      </div>
    </div>
  );
};

export default ProposalPage;
