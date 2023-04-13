import { StyledFlex, StyledH2, StyledPurple, StyledInput, StyledText, Styledall, StyledContainer } from "./styles.js";
import React, { useState } from 'react';


const Home = () => {

    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);

    let newDate = new Date(`${month}/${day}/${year}`);
    let differentDay = Math.trunc((new Date() - newDate) / 1000 / 60 / 60 / 24)
    console.log('Días de diferencia: ' + Math.round(differentDay))
    console.log('Mes de diferencia: ' + Math.round((differentDay / 365 * 12)))
    console.log('Años de diferencia: ' + Math.round(differentDay / 365))



    return (
        <>
            <Styledall>
                <StyledContainer>
                    <StyledFlex>
                        <div>
                            <StyledText>DAY</StyledText>
                            <StyledInput onChange={(ev) => setDay(ev.target.value)} type="number" min="1" max="31" />
                        </div>
                        <div>
                            <StyledText>MONTH</StyledText>
                            <StyledInput onChange={(ev) => setMonth(ev.target.value)} type="number" min="1" max="12" />
                        </div>
                        <div>
                            <StyledText>YEAR</StyledText>
                            <StyledInput onChange={(ev) => setYear(ev.target.value)} type="number" />
                        </div>
                    </StyledFlex>
                    <hr />
                    <button>Onclick</button>
                    <StyledH2>
                        <StyledPurple>{ }</StyledPurple> years
                    </StyledH2>
                    <StyledH2>
                        <StyledPurple>{ }</StyledPurple> month
                    </StyledH2>
                    <StyledH2>
                        <StyledPurple>{ }</StyledPurple> days
                    </StyledH2>
                </StyledContainer>
            </Styledall>
        </>
    )
}



export default Home;

