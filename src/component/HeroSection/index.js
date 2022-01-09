import React from 'react'
import Video from '../../videos/chroma.mp4'
import { HeroContainer,VideoBg,HeroBg } from './HeroElement'
const HeroSection = (props) => {
    
    return (
        <>

        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay  controls src={Video} type='video/mp4'/> 

            
            </HeroBg>
        </HeroContainer>
        </>
    )
}

export default HeroSection
