import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import DefiIcon from "@/assets/icons/defi.svg";
import AirdropIcon from "@/assets/icons/airdrop.svg";
import GovIcon from "@/assets/icons/governance.svg";
import StakingIcon from "@/assets/icons/staking.svg";
import AssetsIcon from "@/assets/icons/assets.svg";
import Quicksilver from "@/assets/logos/qs-text.svg";

const navButton = [
    {
        text: "Staking",
        path: "/staking",
        img: StakingIcon,
    },
    {
        text: "Assets",
        path: "/assets",
        img: AssetsIcon,
    },
    {
        text: "Defi",
        path: "/defi",
        img: DefiIcon,
    },
    {
        text: "Airdrop",
        path: "/airdrop",
        img: AirdropIcon,
    },
    {
        text: "Governance",
        path: "/governance",
        img: GovIcon,
    }
];

const SideBar = ({ currentPath }) => {
    const sidebar = React.createRef();
    const [width, setWidth] = useState(233);
    const [full, setFull] = useState(true);
    const [isShows, setIsShows] = useState([]);

    useEffect(() => {
        let showArray = navButton.map((_) => {
            return false;
        });
        setIsShows([...showArray]);
    }, []);

    useEffect(() => {
        const updateWidth = () => {
            const container = document.querySelector('.sidebar');
            if (container) {
                setWidth(container.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    useEffect(() => {
         if (width < 233) {
            console.log(width)
            setFull(false);
        }
    }, [width]);

    const resize = () => {
        setFull(!full);
    }

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
        <div className={full ? `sidebar` : `sidebar minimal-size`} ref={sidebar}>
            <Navbar
                className="menu"
                light
                expand="md"
            >
                <NavbarBrand href="/" className="text-black dark:text-white logo flex items-center font-semibold text-xl">
                    <Image
                        src={Quicksilver}
                        alt="cnweb logo"
                        className="invert dark:invert-0 h-12 w-12"
                    />
                </NavbarBrand>
                <div className="menu-bar">
                    {navButton.map((button, index) => {
                        return (
                            <Link
                                href={button.path}
                                key={index}
                                onMouseEnter={() => {
                                    handleMouseEnter(button, index);
                                }}
                                onMouseLeave={() => {
                                    handleMouseLeave(button, index);
                                }}
                                className="menu-bar-item"
                                style={{
                                    background: currentPath === button.text && "linear-gradient(145deg, #4f4f4f, #2d2d2d)",
                                    boxShadow: currentPath === button.text && "7px 7px 22px #242424, -7px -7px 22px #383838",
                                }}

                            >
                                <Image alt="" src={button.img} />
                                <p>
                                    {button.text}
                                </p>
                            </Link>
                        );
                    })}
                </div>
                <div className="menu-down flex items-center">
                    Powered by Quicksilver Protocol. Made by Notional with love.
                </div>
            </Navbar>
            <a className={full ? `resize-btn` : `resize-btn minimal-btn`} onClick={resize}>
                <span className="up-arrow"></span>
                <span className="down-arrow"></span>
            </a>
        </div>
    );
};

export default SideBar;