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
import Cosmos from "@/assets/logos/cosmos.svg";
import Image from "next/image";
import { Chart as ChartJs, Tooltip, Legend, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ReactMarkdown from "react-markdown";
import React from "react";
import GovStyle from "@/styles/Governance.module.css";
import remarkGfm from "remark-gfm";
import { useEffect,useState } from "react";
import PageHead from "../layout/PageHead";
import { useRouter } from "next/router";

ChartJs.register(ArcElement, Tooltip, Legend);
const ProposalDetail = ({proposal}) => {
    const [locale, setLocale] = useState("en-US");
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { proposalID } = router.query;
//   const { proposal, loadingProposal } = useSelector((state) => state.proposals.proposal);
   useEffect(() => {
    // dispatch(fetchSingleProposal(proposalID));
     setLocale(navigator.language);
  }, []);
  const router = useRouter()
  const yesCount = parseInt(proposal.final_tally_result.yes_count);
  const noCount = parseInt(proposal.final_tally_result.no_count);
  const noWithVetoCount = parseInt(proposal.final_tally_result.no_with_veto_count);
  const abstainCount = parseInt(proposal.final_tally_result.abstain_count);
  
  const totalVotingPower = yesCount + noCount + noWithVetoCount + abstainCount;
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
  }
  const dataDougnut = {
    labels: [],
    datasets: [
      {
        labels: "Votes",
        data: [
          yesCount,
          noCount,
          noWithVetoCount,
          abstainCount,
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
          (parseInt(proposal.final_tally_result.yes_count) / totalVotingPower) *
          100
        ).toFixed(2)}%`,
        xCoor,
        yCoor
      );
    },
  };
  const options = {};
  console.log(proposal);
      return (
        <>
        <PageHead pageTitle={`Proposal ${proposal.id} | Quicksilver`} />
        <Center w={"100%"} margin={"1vh"}>
          <Box my={'12vh'} mx={20} w='full' height='578px' overflowY={"scroll"}   __css={{
        '&::-webkit-scrollbar': {
          w: '2',
        },
        '&::-webkit-scrollbar-track': {
          w: '6',
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '10',
          bg: `gray.500`,
        },
      }} className={GovStyle.governance_container}>
             <HStack>
               <ArrowBackIcon cursor={"pointer"} boxSize={8} onClick={() => {router.back()}}/>
             <h2>Proposal #{proposal.id}</h2>

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
                <div>{`#${proposal.id} ${proposal.messages[0].content.title}`}</div>
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
                  {convertZTime(proposal.submit_time)}
                </Text>
              </div>
              <div style={{ textAlign: "left" }}>
                <Text>Voting Start</Text>
                <Text fontWeight={600}>
                  {convertZTime(proposal.voting_start_time)}
                </Text>
              </div>
              <div style={{ textAlign: "left" }}>
                <Text>Voting End</Text>
                <Text fontWeight={600}>
                  {convertZTime(proposal.voting_end_time)}
                </Text>
              </div>
            </HStack>
            <HStack spacing="50px" style={{ textAlign: "left" }}>
              <div>
                <Doughnut
                  key={Math.random()}
                  data={dataDougnut}
                  options={options}
                  plugins={[doughnutLabel]}
                  style={{
                    width: "181px",
                  }}
                />
              </div>
              <div>
                <Text>{proposal.messages[0].content.title}</Text>
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
                          (yesCount /
                            totalVotingPower) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                      <div>{yesCount} ATOM</div>
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
                          (noCount /
                            totalVotingPower) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                      <div>{noCount} ATOM</div>
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
                        {((
                          noWithVetoCount /
                            totalVotingPower) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                      <div>
                        {noWithVetoCount} ATOM
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
                          (abstainCount /
                            totalVotingPower) *
                          100
                        ).toFixed(2)}
                        %
                      </div>
                      <div>{abstainCount} ATOM</div>
                    </Text>
                  </HStack>
                </div>
              </div>
            </HStack>
            <div style={{ textAlign: "left", marginTop: "2rem" }}>
              <h1>Description:</h1>
              <ReactMarkdown
                children={proposal.messages[0].content.description}
                remarkPlugins={remarkGfm}
              />
            </div> 
          </Box>
        </Center>
        </>
      );
};

export default ProposalDetail;
