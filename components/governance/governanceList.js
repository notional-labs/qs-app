import React from "react";
import GovernanceItem from "./governanceItem";
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
const proposal = [
  {
    proposal_id: "1",
    content: {
      "@type": "/cosmos.gov.v1beta1.TextProposal",
      title:
        "Adjustment of blocks_per_year to come aligned with actual block time test",
      description:
        "This governance proposal is for adjustment of blocks_per_year parameter to normalize the inflation rate and reward rate.\\n ipfs link: https://ipfs.io/ipfs/QmXqEBr56xeUzFpgjsmDKMSit3iqnKaDEL4tabxPXoz9xc",
    },
    status: "PROPOSAL_STATUS_PASSED",
    final_tally_result: {
      yes: "97118903526799",
      abstain: "402380577234",
      no: "320545400000",
      no_with_veto: "0",
    },
    submit_time: "2019-03-20T06:41:27.040075748Z",
    deposit_end_time: "2019-04-03T06:41:27.040075748Z",
    total_deposit: [
      {
        denom: "uatom",
        amount: "512100000",
      },
    ],
    voting_start_time: "2019-03-20T20:43:59.630492307Z",
    voting_end_time: "2019-04-03T20:43:59.630492307Z",
  },
  {
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
  },
  {
    proposal_id: "3",
    content: {
      "@type": "/cosmos.gov.v1beta1.TextProposal",
      title: "ATOM Transfer Enablement v2",
      description:
        "A plan for enabling ATOM transfers is being proposed, which involves the release and test of Cosmos SDK v0.34.0 and a strategy for the network to accept the release and upgrade the mainnet once testing has been deemed to be successful. Read the full proposal at  https://ipfs.io/ipfs/Qmam1PU39qmLBzKv3eYA3kMmSJdgR6nursGwWVjnmovpSy or formatted at https://ipfs.ink/e/Qmam1PU39qmLBzKv3eYA3kMmSJdgR6nursGwWVjnmovpSy",
    },
    status: "PROPOSAL_STATUS_PASSED",
    final_tally_result: {
      yes: "91073006010689",
      abstain: "82100000001",
      no: "8960614220464",
      no_with_veto: "91169999999",
    },
    submit_time: "2019-04-03T10:15:22.291176064Z",
    deposit_end_time: "2019-04-17T10:15:22.291176064Z",
    total_deposit: [
      {
        denom: "uatom",
        amount: "521500000",
      },
    ],
    voting_start_time: "2019-04-03T17:35:12.673927642Z",
    voting_end_time: "2019-04-17T17:35:12.673927642Z",
  },
  {
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
  },
  {
    proposal_id: "796",
    content: {
      "@type": "/cosmos.gov.v1beta1.TextProposal",
      title: "Nullify proposal 75",
      description:
        "The cosmos hub has an elegant method for dealing with spam, known as veto. It deals with genuine spam proposals very well. But what does it mean under the hood? Well, what it means under the hood is that you vote for no and you vote for veto at the same time, you’re making two votes. If the tally for veto reaches 33%, the deposit on the proposal is burned and the proposal automatically fails.\n\nSince there is absolutely no way to mandate a definition of spam and everybody is going to interpret that differently and it makes no sense whatsoever to argue about that, I propose that we nullify proposal 75, AND free the authors of governance proposals from writing tedious vote options because those are defined very well in the software. Luckily, our community is more than intelligent enough to interpret on their own, what the vote options do, and the documentation of the vote options is highly effective.\n\nFinally, I believe that it makes sense to require only explaining the yes option, as doing otherwise can land a punter in hot water.\n\nTherefore, to make governance simpler in all ways, and increase participation in governance, and remove the crazy burn two sticks of incense and say 10 hail Marys before approaching Cosmos hub governance to save thyself from Gaia’s proceduralist faction, we should do the logical thing, and require only that YES, be defined. All other vote options are defined by the underlying software and its documentation.\n\nvote YES to nullify proposal 75, require that YES be defined, and use all other vote options as described by the cosmos-sdk.\n\n\n\n\n\n",
    },
    status: "PROPOSAL_STATUS_REJECTED",
    final_tally_result: {
      yes: "17408218876772",
      abstain: "61270208115946",
      no: "35315607586255",
      no_with_veto: "184621196523",
    },
    submit_time: "2023-05-05T16:30:09.404650195Z",
    deposit_end_time: "2023-05-19T16:30:09.404650195Z",
    total_deposit: [
      {
        denom: "uatom",
        amount: "250000000",
      },
    ],
    voting_start_time: "2023-05-05T18:00:51.810689338Z",
    voting_end_time: "2023-05-19T18:00:51.810689338Z",
  },
  {
    proposal_id: "821",
    content: {
      "@type": "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
      title: "v12 Software Upgrade",
      description:
        "# Gaia v12 Upgrade\r\n\r\n## Background\r\n\r\nThe Gaia v12 release is a major release that will follow the standard governance process by initially submitting this post on the Cosmos Hub forum. After collecting forum feedback, a governance proposal will be sent to the Cosmos Hub for voting.\r\n\r\nOn governance vote approval, validators will be required to update the Cosmos Hub binary at the halt-height specified in the on-chain proposal.\r\n\r\n## Release Contents\r\n\r\nThis release contains the major addition of the Liquid Staking Module and a number of updates to core dependencies.\r\n\r\n* The relevant signaling proposal for the Liquid Staking Module is [#790. Liquid staking module: Regulated and efficient liquid staking](https://www.mintscan.io/cosmos/proposals/790).\r\n* A full changelog and relevant binaries can be found [here](https://github.com/cosmos/gaia/releases/tag/v12.0.0). \r\n* The roadmap for this and future releases can be found [here](https://informal.systems/blog/informal-hub-team-jan-2023-update#2023-cosmos-hub-roadmap\r\n).\r\n\r\n## Testing and Testnets\r\n\r\nThe v12 release has gone through rigorous testing, including e2e tests, integration tests, and differential tests. Differential tests are similar to integration tests, but they compare the system state to an expected state generated from a model implementation. In addition, v12 has been independently tested by Hypha.\r\n\r\nValidators and node operators can join a public testnet to participate in a test upgrade to a release candidate before the Cosmos Hub upgrades to the final release. You can find the relevant information (genesis file, peers, etc.) to join the release testnet (theta-testnet-001) [here](https://github.com/cosmos/testnets/tree/master/public), or the Replicated Security testnet (provider) [here](https://github.com/cosmos/testnets/blob/master/replicated-security/provider/README.md).\r\n\r\n## Potential risk factors\r\n\r\nAlthough very extensive testing and simulation has taken place there always still exists a risk that the Cosmos Hub might experience problems due to potential bugs or errors from the new features. In the case of serious problems, validators should stop operating the network immediately. \r\n\r\nCoordination with validators will happen in the #cosmos-hub-validators-verified channel of the Cosmos Network Discord to create and execute a contingency plan. Likely this will be an emergency release with fixes or the recommendation to consider the upgrade aborted and revert back to the previous release of gaia (v11).\r\n\r\n## Governance votes\r\n\r\nThe following items summarize the voting options and what it means for this proposal:\r\n\r\n**YES** - You agree that the Cosmos Hub should be updated with this release.\r\n**NO** - You disagree that the Cosmos Hub should be updated with this release.\r\n**NO WITH VETO** - A ‘NoWithVeto’ vote indicates a proposal either (1) is deemed to be spam, i.e., irrelevant to Cosmos Hub, (2) disproportionately infringes on minority interests, or (3) violates or encourages violation of the rules of engagement as currently set out by Cosmos Hub governance. If the number of ‘NoWithVeto’ votes is greater than a third of total votes, the proposal is rejected and the deposits are burned.\r\n**ABSTAIN** - You wish to contribute to the quorum but you formally decline to vote either for or against the proposal.\r\n",
      plan: {
        name: "v12",
        time: "0001-01-01T00:00:00Z",
        height: "16985500",
        info: '{"binaries":{"darwin/amd64":"https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-darwin-amd64?checksum=sha256:1b76a7b2ee9bd739cd28de6e380248f276c678d8f9cab1fc2fe17fce07389693","darwin/arm64":"https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-darwin-arm64?checksum=sha256:20e81d813f942ed3114c6953016b9e24f0946b08e34f0da9c13bcb7276719130","linux/amd64":"https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-linux-amd64?checksum=sha256:d67e91bda37c94f2efacba0f97bcbdb8931e9dbc457d1ce3f1e60a71d1b1b7dd","linux/arm64":"https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-linux-arm64?checksum=sha256:aee279a6aedf8e83e59487c2006e72e496f73c36a882c44b3cc20969c3d237fb","windows/amd64":"https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-windows-amd64.exe?checksum=sha256:7d970cd3f138b5ce8fe78a8209a5907fcfec6fb717434244010381cdd6b4cd32","windows/arm64":"https://github.com/cosmos/gaia/releases/download/v12.0.0/gaiad-v12.0.0-windows-arm64.exe?checksum=sha256:b54c9c7e1c7bb36fc78cac294d86f8836e2dc02d747abc84d68062615a0512df"}}',
        upgraded_client_state: null,
      },
    },
    status: "PROPOSAL_STATUS_PASSED",
    final_tally_result: {
      yes: "142945267220417",
      abstain: "145746264939",
      no: "149539878485",
      no_with_veto: "6367666721",
    },
    submit_time: "2023-08-25T15:34:52.820928027Z",
    deposit_end_time: "2023-09-08T15:34:52.820928027Z",
    total_deposit: [
      {
        denom: "uatom",
        amount: "250000000",
      },
    ],
    voting_start_time: "2023-08-25T15:34:52.820928027Z",
    voting_end_time: "2023-09-08T15:34:52.820928027Z",
  },
];

const GovernanceList = () => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "1rem 0",
        height: "100vh",
        position: 'relative'

      }}
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
            <InputGroup
              style={{
                border: "0.5px solid #979797",
                borderRadius: "20px",
                padding: "10px",
                width: "336px",
              }}
            >
              <HStack>
                <InputLeftAddon
                  pointerEvents="none"
                  children={<Search2Icon color="gray" />}
                />
                <Input
                  style={{ backgroundColor: "#2A2A2A" }}
                  type="text"
                  placeholder="Search For Proposal"
                />
              </HStack>
            </InputGroup>
          </>
          <>
            <Menu>
              <MenuButton
                style={{
                  border: "1px solid white",
                  borderRadius: "5px",
                  color: "white",
                  padding: "10px",
                }}
                as={Button}
                rightIcon={<ChevronDownIcon color="orange" />}
              >
                Filter by Status
              </MenuButton>
              <MenuList>
                <MenuItem>Voting</MenuItem>
                <MenuItem>Passed</MenuItem>
                <MenuItem>Rejected</MenuItem>
              </MenuList>
            </Menu>
          </>
        </div>
      </div>
      <div
        // className="grid-col"
        // id="grid-staking-card"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2rem",
          marginTop: "2rem",
          zIndex: '100'
        }}
      >
        {proposal.map((proposal, index) => {
          return (
            <GovernanceItem
              proposalId={proposal.proposal_id}
              title={proposal.content.title}
              vote={proposal.final_tally_result}
              startTime={proposal.voting_start_time}
              endTime={proposal.voting_end_time}
              index={index}
              key={proposal.proposal_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GovernanceList;
