import React from 'react'
import styled,{ css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward} from 'react-icons/io'
const Herosection=styled.section`
height:100vh;
max-height:1100px;
position:relative;
overflow:hidden;
`;
const HeroWrapper=styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
position:relative;
`;
const Heroslide=styled.div``;
const Heroslider=styled.div``;
const HeroImages =styled.img`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
object-fit:cover;
`;
const Arrow=styled(IoMdArrowRoundForward)``;
const HeroContent=styled.div`
position:relative;
`;

function Hero({sliders}) {
    return (
        <div>
            <Herosection>
                <HeroWrapper>
                    {sliders.map((slide,index)=>{
                        return (
                            <Heroslide key={index} >
                                <Heroslider>
                                    <HeroImages src={slide.image} alt={slide.alt}/>
                                    <HeroContent>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.price}</p>
                                    </HeroContent>
                                    <Button to={slide.path} primary='true'>
                                        {slide.lable}
                                        <Arrow/>
                                    </Button>
                                </Heroslider>
                            </Heroslide>
                        );
                    })}
                </HeroWrapper>
            </Herosection>
        </div>
    )
}

export default Hero
