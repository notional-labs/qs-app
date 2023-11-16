import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Box, Image as ChakraImage, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const navButton = [
    {
        text: "Staking",
        path: "/staking",
        img: '/icons/staking.svg',
        currentPathImg: '/icons/stakingb.svg'
    },
    {
        text: "Assets",
        path: "/assets",
        img: '/icons/assets.svg',
        currentPathImg: '/icons/assetsb.svg'
    },
    {
        text: "Defi",
        path: "/defi",
        img: '/icons/defi.svg',
        currentPathImg: '/icons/defib.svg'
    },
    // {
    //     text: "Airdrop",
    //     path: "/airdrop",
    //     img: '/icons/airdrop.svg',
    //     currentPathImg: '/icons/airdropb.svg'
    // },
    {
        text: "Governance",
        path: "/governance",
        img: '/icons/governance.svg',
        currentPathImg: '/icons/governanceb.svg'
    }
];

const SideBar = () => {
    const currentPath = usePathname()
    const sidebar = React.createRef();
    const [isShows, setIsShows] = useState([]);

    useEffect(() => {
        let showArray = navButton.map((_) => {
            return false;
        });
        setIsShows([...showArray]);
    }, []);

    // useEffect(() => {
    //     const updateWidth = () => {
    //         const container = document.querySelector('.sidebar');
    //         if (container) {
    //             setWidth(container.offsetWidth);
    //         }
    //     };

    //     updateWidth();
    //     window.addEventListener('resize', updateWidth);

    //     return () => {
    //         window.removeEventListener('resize', updateWidth);
    //     };
    // }, []);

    const handleMouseEnter = (button, index) => {
        if (button.subNav) {
            let showArray = [...isShows];
            showArray[index] = true;
            setIsShows([...showArray]);
        }
    };

    const handleMouseLeave = (button, index) => {
        if (button.subNav) {
            let showArray = [...isShows];
            showArray[index] = false;
            setIsShows([...showArray]);
        }
    };

    return (
        <Box h={'100vh'} zIndex={2} >
            <div className={`sidebar`} ref={sidebar}>
                <Box h={'100%'}>
                    <Navbar
                        className="menu"
                        light
                        expand="md"
                        height={'100vh'}
                    >
                        <Flex justify={'start'} direction={'column'}>
                            <NavbarBrand className="text-black dark:text-white logo flex items-center font-semibold text-xl">
                                {
                                    <ChakraImage alt="cnweb logo" src={'/logo/qs-text.svg'} />
                                }
                            </NavbarBrand>
                            <div className="menu-bar">
                                {navButton.map((button, index) => {
                                    return (
                                        <Link
                                            href={button.path}
                                            key={"sidebar" + index}
                                            onMouseEnter={() => {
                                                handleMouseEnter(button, index);
                                            }}
                                            onMouseLeave={() => {
                                                handleMouseLeave(button, index);
                                            }}
                                            style={{
                                                background: currentPath.includes(button.path) && "rgba(231, 119, 40, 1)",
                                                boxShadow: currentPath.includes(button.path) && "7px 7px 22px #242424, -7px -7px 22px #383838",
                                            }}

                                        >
                                            {currentPath.includes(button.path) ? <ChakraImage src={button.currentPathImg} boxSize={'60%'} /> : <ChakraImage src={button.img} boxSize={'60%'} />}
                                            <p style={{
                                                color: 'rgba(255, 255, 255, 1)',
                                                display: "inline-block",
                                                color: currentPath.includes(button.path) ? 'rgba(14, 14, 14, 1)' : 'rgba(255, 255, 255, 1)',
                                                fontSize: '1.15em',
                                                fontWeight: 'bold'
                                            }}
                                            >
                                                {button.text}
                                            </p>
                                        </Link>
                                    );
                                })}
                            </div>
                            <Flex
                                className="menu-down flex items-center"
                                style={{ color: '#979797', height: '18px', fontSize: '12px' }}
                                justifyContent={'end'}
                                flexDirection={'column'}
                                h={'100%'}
                            >
                                <Text>
                                    Powered by Quicksilver Protocol.
                                </Text>
                            </Flex>
                        </Flex>
                    </Navbar>
                </Box>
            </div>
        </Box>
    );
};

export default SideBar;