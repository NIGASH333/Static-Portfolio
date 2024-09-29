import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/profile-img1.png'

const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60vw; /* Adjusted width */
    height: 60vh; /* Adjusted height */
    display: flex;
    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index: 1;
    overflow: visible; /* Ensure content is visible */
`

const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;

    .pic {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 100%;
        height: auto;
    }
`

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child {
        color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
        font-size: calc(0.5rem + 1.5vw);
        font-weight: 300;
    }
`

const ResumeButtonContainer = styled.div`
    margin-top: 1rem; /* Space above the button */
`

const ResumeButton = styled.a`
    display: inline-block; /* Allows for padding and margin */
    padding: 0.75rem 2rem; /* Increased padding for a larger clickable area */
    color: ${props => props.theme.body}; /* Ensure text color is visible */
    font-size: calc(0.7rem + 1vw);
    text-decoration: none; /* Remove underline */
    background: ${props => props.theme.text}; /* Solid background */
    border: 2px solid ${props => props.theme.body}; /* Border for visibility */
    border-radius: 5px; /* Slight rounding for aesthetics */
    transition: background 0.3s ease, color 0.3s ease;

    &:hover {
        color: ${props => props.theme.text}; /* Change text color on hover */
        background: ${props => props.theme.body}; /* Invert background color on hover */
    }
`

const Intro = () => {
    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: '60vh' }} /* Adjusted the animated height */
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Nigash.</h3>
                    <h6>
                        A highly skilled, self-driven Software Developer and Software Tester with the proven ability to adapt to any situation. A Programming Polyglot and Goal-driven Natural Leader.
                    </h6>
                    <ResumeButtonContainer>
                        {/* Update the href to point to the resume file */}
                        <ResumeButton href={require('../assets/documents/NigashResume.pdf')} download="Nigash_Resume.pdf">
                            Download Resume
                        </ResumeButton>
                    </ResumeButtonContainer>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
