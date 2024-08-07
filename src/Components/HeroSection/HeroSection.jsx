import React from 'react'
import styled from 'styled-components';

const HeroContainer = styled.div`
  
`

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg></HeroBg>
      <HeroInnerContainer>
        <HeroLeftContainer></HeroLeftContainer>
        <HeroRightContainer></HeroRightContainer>
      </HeroInnerContainer>
    </HeroContainer>
  )
}

export default HeroSection