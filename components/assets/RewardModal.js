import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Link,
    useToast,
    Text,
    SimpleGrid,
    Avatar
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import GradientDivider from "../layout/GradientDivider";

export default function RewardModal({isOpen, onClose}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size='md'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader bgColor='#0E0E0E' borderTopRadius={'md'}>
                    <Text color='white' fontSize='22px'>
                        Connect Your Wallet
                    </Text>
                    <Text color='#CDCDCD' fontSize='14px' fontWeight={400} mt={2}>
                        Select your preferred wallet below.
                    </Text>
                    <Text color='#CDCDCD' fontSize='14px' fontWeight={400} mt={2}>
                        Don't have a wallet?{' '}
                        <Link color='blue.600' textDecoration='underline' href='#' fontWeight={600}>
                            See supported wallets
                        </Link>
                    </Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody
                    bgColor={'#181818'} borderBottomRadius={'md'}
                    py={5}
                >
                    <SimpleGrid columns={2} gap={4}>
                        {SupportedWallets.map(item =>
                            <Button
                                onClick={() => handleConnectWallet(item)}
                                isDisabled={connecting}
                                key={item}
                                w='full'
                                size='lg'
                                justifyContent='left'
                                colorScheme='blackAlpha'
                                py={4}
                                fontSize='16px'
                                fontWeight={500}
                                border='solid 1px gray'
                                leftIcon={<Avatar src={WalletConfigs[item].logo} w='30px' h='30px' />}>
                                {WalletConfigs[item].name}
                            </Button>)
                        }
                    </SimpleGrid>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}