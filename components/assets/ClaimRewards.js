import React, {useState, useEffect} from "react";
import {
    VStack,
    Flex,
    Text,
    Button,
    Checkbox,
    Tooltip,
    useDisclosure,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import RewardModal from "./RewardModal";

export default function ClaimRewards() {
    const { client, address} = useSelector(state => state.wallet)

    const [availableRewards, setAvailableRewards] = useState(0)
    const {isOpen, onClose, onOpen} = useDisclosure()
    useEffect(() => {
        if (client) {client.cosmos.auth.v1beta1.account({
            address: "quick1n8g3upr3f5mldctpmyjnzng6j2gv3y29pf34th"
          })
            // client.cosmos.distribution.v1beta1.delegationTotalRewards({delegator_address: "quick1n8g3upr3f5mldctpmyjnzng6j2gv3y29pf34th"}).then(res => console.log(res))
        }

    }, [client, address])
    return (
        <Flex
            bgColor={'rgba(0, 0, 0, 0.6)'}
            borderRadius={'10px'}
            justifyContent={'space-between'}
            minW={'500px'}
            p={4}
        >
            <VStack alignItems={'start'}>
                <Text fontWeight={700} fontSize={'20px'}>Available Rewards</Text>
                <Text fontWeight={700} fontSize={'25px'}>0.00 QCK</Text>
                <Checkbox disabled size='sm'>
                    <Text as={'i'} fontSize={'13px'} color={'#FBFBFB'}>
                        Enable Automatic Claiming of Rewards {" "}
                        <Tooltip label='Coming soon' fontSize='md'>
                            <InfoIcon />
                        </Tooltip>
                    </Text>
                </Checkbox>
            </VStack>
            <Button
                onClick={onOpen}
                px={4}
                size='sm'
                fontWeight={400}
                bgColor={'#FF850096'}
                _hover={{
                    bgColor: '#FF850054'
                }}
                color='white'
                borderRadius={4}>
                Claim Rewards
            </Button>
            <RewardModal isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
}