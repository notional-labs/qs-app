import React, { useEffect, useState } from "react";
import {
    VStack,
    Flex,
    Text,
    HStack,
    Divider,
    useDisclosure,
    Avatar,
    Button,
    Center,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NetworkSelect from "./NetworkSelect";
import IntentModal from "./IntentModal";
import { useSelector } from "react-redux";
import { DataMap } from "@/state/network/utils";
import ValidatorIntent from "./ValidatorIntent";

export default function StakeIntent() {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const { client } = useSelector(state => state.wallet)
    const { selectedDenom, address } = useSelector(state => state.network)

    const [intents, setIntents] = useState([])

    useEffect(() => {
        if (client && address) {
            client.quicksilver.interchainstaking.v1.delegatorIntent({ chain_id: DataMap[selectedDenom].zone.chain_id, delegator_address: "cosmos1st3fng2vjcpz5lhg46un94zg0vn3nj658wc0chc57z29hx8zqeys6mvxdd" })
                .then(res => {
                    setIntents(res.intent.intents)
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }, [client, address])

    return (
        <VStack
            alignItems={'start'}
            gap={4}
            w='35%'
        >
            <HStack w='full' justifyContent={'space-between'}>
                <Text fontSize={'18px'}>Stake Intent</Text>
                <Button onClick={onOpen} color='#FF8500' p={0} h={'min'} variant='ghost' rightIcon={<ChevronRightIcon />} fontSize={'14px'}
                    _hover={{ textDecoration: 'underline' }}
                >
                    Edit / Reset Intent
                </Button>
            </HStack>
            <NetworkSelect />
            <Divider />
            <VStack w='full' maxH='180px' overflowY={'scroll'} pr={2} gap={3}
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '3px',
                        h: "90%",
                        borderRadius: '8px',
                        backgroundColor: `#FF850033`,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: `#FF8500`,
                    },
                }}
            >
                {intents.length ? intents.map((item, index) =>
                    <ValidatorIntent key={"intent" + index} valoperAddress={item.valoperAddress} weight={item.weight} />
                ) : <Center p='20px' textAlign={'center'}>
                    <Text color='#FBFBFB' fontSize={'16px'} >
                        You have not set the intent yet. Please click on the button to 'Set Intent'
                    </Text>
                </Center>
                }
            </VStack>
            <IntentModal isOpen={isOpen} onClose={onClose} intents={intents} />
        </VStack>
    );
}