import { ArrowBackIcon, TimeIcon } from "@chakra-ui/icons";
import {
  HStack,
  Text,
  Flex,
  Center,
  Spacer,
  Button,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Cosmos from "@/assets/logos/cosmos.svg";
import Image from "next/image";
import { Chart as ChartJs, Tooltip, Legend, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ReactMarkdown from "react-markdown";
import React from "react";
import GovStyle from "@/styles/Governance.module.css";
import remarkGfm from "remark-gfm";

ChartJs.register(ArcElement, Tooltip, Legend);
const ProposalPage = () => {
  const proposalDetail = {
    proposal_id: "4",
    content: {
      "@type": "/cosmos.gov.v1beta1.TextProposal",
      title:
        "Proposal for issuance of fungible tokens directly on the Cosmos Hub",
      description:
        "This proposal is a first step towards enabling fungible token issuance on the Cosmos Hub, with listing of new tokens requiring governance approval. Read the full proposal at https://github.com/validator-network/cosmoshub-proposals/blob/0d306f1fcc841a0ac6ed1171af96e6869d6754b6/issuance-proposal.md",
    },
    status: "PROPOSAL_STATUS_REJECTED",
    final_tally_result: {
      yes: "33723552888122",
      abstain: "20706168938",
      no: "26427988266507",
      no_with_veto: "13368982409321",
    },
    submit_time: "2019-04-15T08:45:39.072577509Z",
    deposit_end_time: "2019-04-29T08:45:39.072577509Z",
    total_deposit: [
      {
        denom: "uatom",
        amount: "512000001",
      },
    ],
    voting_start_time: "2019-04-15T15:25:48.465886746Z",
    voting_end_time: "2019-04-29T15:25:48.465886746Z",
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
        data: [
          parseInt(proposalDetail.final_tally_result.yes),
          parseInt(proposalDetail.final_tally_result.no),
          parseInt(proposalDetail.final_tally_result.no_with_veto),
          parseInt(proposalDetail.final_tally_result.abstain),
        ],
        backgroundColor: ["#1BCA87", "#FF8291", "#F0950D", "#BAA2EB"],
        borderColor: ["#1BCA87", "#FF8291", "#F0950D", "#BAA2EB"],
        cutout: "80%",
      },
    ],
  };

  const doughnutLabel = {
    id: "doughnutLabel",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.font = 'bold 17px sans-serif';
      ctx.fillStyle = "#1BCA87";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fontWeight = '900'
      ctx.fillText(
        `Yes: ${(
          (parseInt(proposalDetail.final_tally_result.yes) / totalVotingPower) *
          100
        ).toFixed(2)}%`,
        xCoor,
        yCoor
      );
    },
  };
  const options = {};
  return (
    <Center w={"100%"} margin={"1vh"}>
      <Box className={GovStyle.governance_container}>
        <HStack>
          <ArrowBackIcon boxSize={8} />
          <h2>Proposal #{proposalDetail.proposal_id}</h2>
        </HStack>
        <Flex style={{ marginTop: "20px" }}>
          <Center
            style={{ borderRadius: "10px", border: "1px solid #3E497C" }}
            w="100px"
          >
            <HStack>
              <TimeIcon boxSize={4} />
              <Text fontSize={12}>Ongoing</Text>
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
          <Button
            style={{
              backgroundColor: "#FF8500",
              border: "none",
              borderRadius: "5px",
              width: "200px",
              height: "48px",
              margin: "0 auto",
              alignItems: "center",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
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
              plugins={[doughnutLabel]}
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
                  <div style={{ fontWeight: "700", color: "#1BCA87" }}>
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
                  <div style={{ fontWeight: "700", color: "#FF8291" }}>
                    NO{" "}
                    {(
                      (parseInt(proposalDetail.final_tally_result.no) /
                        totalVotingPower) *
                      100
                    ).toFixed(2)}
                    %
                  </div>
                  <div>{proposalDetail.final_tally_result.no} ATOM</div>
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
                  <div style={{ fontWeight: "700", color: "#F0950D" }}>
                    NO WITH VETO{" "}
                    {(
                      (parseInt(
                        proposalDetail.final_tally_result.no_with_veto
                      ) /
                        totalVotingPower) *
                      100
                    ).toFixed(2)}
                    %
                  </div>
                  <div>
                    {proposalDetail.final_tally_result.no_with_veto} ATOM
                  </div>
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
                  <div style={{ fontWeight: "700", color: "#BAA2EB" }}>
                    ABSTAIN{" "}
                    {(
                      (parseInt(proposalDetail.final_tally_result.abstain) /
                        totalVotingPower) *
                      100
                    ).toFixed(2)}
                    %
                  </div>
                  <div>{proposalDetail.final_tally_result.abstain} ATOM</div>
                </Text>
              </HStack>
            </div>
          </div>
        </HStack>
        <div style={{ textAlign: "left", marginTop: "2rem" }}>
          <h1>Description:</h1>
          <ReactMarkdown
            children={proposalDetail.content.description}
            remarkPlugins={remarkGfm}
          />
        </div>
      </Box>
    </Center>
  );
};

export default ProposalPage;
