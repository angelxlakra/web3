import React, { useEffect, useState } from 'react';
import Box from '@/components/Box';
import NavBar from '@/components/NavBar';
import styled from 'styled-components';
import { entryAnimation, ethFieldAnimation, scrollAnimations } from './utils/animations';


const HomeComp = () => {

    const [loading, setLoading] = useState(true);

    // eslint-disable-next-line max-len
    const subtext = "Web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.";
    const heading = "Interact Your Apps with the Ethereum Blockchain";

    useEffect(() => {
        if (!loading) {
            // eslint-disable-next-line no-undef
            if (process.browser) {
                ethFieldAnimation();
            }
            entryAnimation();
            scrollAnimations();
        }
    }, [loading]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    if (loading) {
        return <EthField className="ethField" zIndex={1} height="100vh" />
    }

    return (
        <Box>
            <EthField className="ethField" zIndex={1} height="100vh" bg="white" />
            <NavBar />
            <Box column center textAlign="center" mx="1.8rem">
                <Box
                    className="heading"
                    maxWidth="110rem"
                    fontSize={{ mobileXs: "3.2rem", tabletMd: "5rem" }}
                    mt={{ mobileXs: "14rem", tabletMd: "26rem" }}
                    color="purple-text"
                >
                    {heading}
                </Box>
                <Box
                    className="subtext"
                    fontSize={{ mobileXs: "1.6rem", tabletMd: "2.4rem" }}
                    maxWidth="60rem"
                    fontWeight="6000"
                    mt={{ mobileXs: "2rem", tabletMd: "5rem" }}
                    color="purple-50"
                >
                    {subtext}
                </Box>
                <a href="https://web3js.readthedocs.io/en/v1.3.4/" target="_self" className="cta">
                    <DocumentationButton
                        as="button"
                        bg="purple-text"
                        fontSize={{ mobileXs: "1.6rem", tabletMd: "2rem" }}
                        p={{ mobileXs: "1rem", tabletMd: "2rem" }}
                        mt={{ mobileXs: "2rem", tabletMd: "4rem" }}
                        border="none"
                        borderRadius="0.5rem"
                        color="white-100"
                        cursor="pointer"
                    >
                        Documentation
                    </DocumentationButton>
                </a>
                <Box
                    className="smart-contract"
                    as="img"
                    src="/smart-contract.png"
                    alt=""
                    height={{ mobileXs: "20rem", tabletMd: "60rem" }}
                    zIndex={2}
                />
            </Box>
            <Box bg="purple-text" center column color="white">
                <Box width={{ mobileXs: "80%", tabletMd: "110rem" }} center column>
                    <Box fontSize="8rem" mt="10rem">Modules</Box>
                    <Box height="1rem" width="8rem" bg="white-100" borderRadius="1rem" />
                </Box>
            </Box>
        </Box >
    );
}


const DocumentationButton = styled(Box)(() => `
    transition: transform ease-in 150ms;
    transform-origin: 50% 50%;
    
    &:hover {
        transform: scale(1.05);
    }
`)

const EthField = styled(Box)(() => `
    position: fixed;
`);

export default HomeComp;