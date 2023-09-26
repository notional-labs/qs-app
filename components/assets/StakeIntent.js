import React, { useEffect, useState } from "react";
import {
    VStack,
    Text,
    HStack,
    Divider,
    useDisclosure,
    Button,
    Center,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NetworkSelect from "./NetworkSelect";
import IntentModal from "./IntentModal";
import { useDispatch, useSelector } from "react-redux";
import { DataMap } from "@/state/network/utils";
import { setIntOpts } from "@/state/assets/slice";
import ValidatorIntentDisplay from "./ValidatorIntentDisplay";
import refreshBalance from "@/state/wallet/thunks/refreshBalance";

export default function StakeIntent() {
    const dispatch = useDispatch()
    const { client, address } = useSelector(state => state.wallet)
    const { selectedDenom } = useSelector(state => state.network)

    const [completedFetch, setCompletedFetch] = useState(false)
    const [originIntents, setOriginIntents] = useState([])
    const [isFinished, setIsFinished] = useState(false)

    const { isOpen, onClose, onOpen } = useDisclosure()

    const handleCloseModal = () => {
        setIsFinished(false)
        onClose()
    }

    useEffect(() => {
        if (client && address) {
            client.quicksilver.interchainstaking.v1.delegatorIntent({ chain_id: DataMap[selectedDenom]?.zone.chain_id, delegator_address: address })
                .then(res => {
                    let intentArr = res.intent.intents.map(item => ({valoperAddress: item.valoper_address, weight: item.weight * 100}))
                    dispatch(setIntOpts(intentArr))
                    setOriginIntents(intentArr)
                    setCompletedFetch(true)
                })
                .catch(e => {
                    setCompletedFetch(true)
                    console.log(e)
                })
        }
    }, [client, address, selectedDenom])

    useEffect(() => {
        if (isFinished) {
            client.quicksilver.interchainstaking.v1.delegatorIntent({ chain_id: DataMap[selectedDenom].zone.chain_id, delegator_address: address })
                .then(res => {
                    let intentArr = res.intent.intents.map(item => ({valoperAddress: item.valoper_address, weight: item.weight * 100}))
                    dispatch(setIntOpts(intentArr))
                    setOriginIntents(intentArr)
                    setCompletedFetch(true)
                })
                .catch(e => {
                    setCompletedFetch(true)
                    console.log(e)
                })
            dispatch(refreshBalance())
        }
    }, [isFinished])

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
                {originIntents.length ? originIntents.map((item, index) =>
                    <ValidatorIntentDisplay key={"intent-display" + index} valoperAddress={item.valoperAddress} weight={item.weight} />
                ) : <Center p='20px' textAlign={'center'}>
                    <Text color='#FBFBFB' fontSize={'16px'} >
                        You have not set the intent yet. Please click on the button to 'Set Intent'
                    </Text>
                </Center>
                }
            </VStack>
            <IntentModal isFinished={isFinished} setIsFinished={setIsFinished} completedFetch={completedFetch} isOpen={isOpen} onClose={handleCloseModal} />
        </VStack>
    );
}