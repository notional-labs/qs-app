import React, { useEffect, useMemo, useState } from "react";
import {
    VStack,
    Text,
    Center,
    Box,
    Flex,
    InputGroup,
    InputLeftElement,
    Input,
    Switch,
    Grid,
    Button,
    Select
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@chakra-ui/icons'
import ValidatorSelectIntent from "./ValidatorSelectIntent";
import { useDispatch, useSelector } from "react-redux";
import { setValStatus } from "@/state/network/slice";
import assetStyles from '@/styles/Assets.module.css'

export default function ValidatorList({ totalSum }) {
    const dispatch = useDispatch();
    const { valStatus, valArr } = useSelector(state => state.network)

    const [searchText, setSearchText] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredVals, setFilteredVals] = useState([]);

    const handleSwitch = (e) => {
        if (e.target.checked) {
            dispatch(setValStatus(1))
        } else {
            dispatch(setValStatus(0))
        }
    }

    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }

    const startIndex = useMemo(() => (currentPage - 1) * 20, [currentPage])
    const endIndex = useMemo(() => startIndex + 20, [startIndex]);

    const paginatedData = useMemo(() => filteredVals.slice(startIndex, endIndex), [filteredVals, startIndex, endIndex]);
    const totalPages = useMemo(() => Math.ceil(filteredVals.length / 20));

    useEffect(() => {
        const filtered = valArr.filter((item) =>
            item.description.moniker.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredVals(filtered);
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [valArr, searchText, currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageChange = (event) => {
        const selectedPage = parseInt(event.target.value);
        setCurrentPage(selectedPage);
    };
    
    return (
        <Box w='full'>
            <Flex w='full' justifyContent={'space-between'} py={4}>
                <InputGroup w={'60%'}>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement>
                    <Input
                        type='tel'
                        placeholder='Search validator'
                        borderRadius={'10px'}
                        _focus={{ borderColor: '#E77728', boxShadow: 'none' }}
                        onChange={handleSearch}
                    />
                </InputGroup>
                <Center gap={'10px'} w='40%' >
                    <Switch size={'lg'} isChecked={valStatus == 1} colorScheme='orange' onChange={handleSwitch} />
                    <Text>
                        Show inactive validators
                    </Text>
                </Center>
            </Flex>
            <Grid templateColumns='60% 20% 20%' padding={'0 1em'} fontWeight='bold' fontSize={'14px'}>
                <Box>VALIDATOR</Box>
                <Box>VOTING POWER</Box>
                <Box>COMMISSION</Box>
            </Grid>
            <VStack w='full' maxH={'500px'} overflowY={'scroll'}
                boxShadow={"0px 0px 5px 0px rgba(255, 255, 255, 0.6)"}
                border='1px gray solid' borderRadius={'12px'} gap={2} py={2}
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
                {paginatedData.length ? paginatedData.map((val, i) => {
                    return (
                        <ValidatorSelectIntent
                            key={"val" + i}
                            address={val.operatorAddress}
                            name={val.description.moniker}
                            votingPower={(parseInt(val.delegatorShares) / Math.pow(10, 24)).toFixed(0)}
                            votingPowerPercentage={`${totalSum > 0 ? parseFloat(((parseInt(val.delegatorShares) / Math.pow(10, 24)) / totalSum) * 100).toFixed(2) : 0} %`}
                            commission={`${(parseFloat(val.commission.commissionRates.rate) / Math.pow(10, 16)).toFixed(2)} %`}
                        />
                    )
                }) : <Center p='20px' textAlign={'center'}>
                    <Text color='#FBFBFB' fontSize={'16px'} >
                        Cannot load valdidators
                    </Text>
                </Center>
                }

            </VStack>
            <Flex w='full' gap={6} justifyContent={'space-between'} my={2}>
                <Button leftIcon={<ChevronLeftIcon />} w='40%' colorScheme="orange" onClick={handlePrevPage} isDisabled={currentPage === 1}>Prev</Button>
                <Select w='20%' onChange={handlePageChange} value={currentPage}>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <option key={i + 1} value={i + 1} className={`${assetStyles.option_text}`}>
                            Page {i + 1}
                        </option>
                    ))}</Select>
                <Button rightIcon={<ChevronRightIcon />} w='40%' colorScheme="orange" onClick={handleNextPage} isDisabled={currentPage === totalPages}>Next</Button>
            </Flex>
        </Box>

    );
}