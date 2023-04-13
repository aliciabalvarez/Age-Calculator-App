import { StyledFlex, StyledH2, StyledPurple, StyledInput, StyledText, Styledall, StyledContainer } from "./styles.js";
import React, { useState } from 'react';


const Home = () => {

    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);

    // const getTotalDays = (birthday)=>{
    // const milisecondsToNow = new Date(birthday).getTime()
    // const now = new Date().getTime()

    // return (now - milisecondsToNow) / 1000 / 60 / 60 / 24
    // }

    const convertDays = (days) => {
        console.log(days)
        const years = Math.floor(days / 365);
        days = days % 365;
        let months = Math.floor(days / 30);
        days = days % 30;

        const dateTemp = new Date();
        dateTemp.setDate(dateTemp.getDate() + days);
        const lastDayOfMonth = new Date(dateTemp.getFullYear(), dateTemp.getMonth() + 1, 0).getDate();
        if (days > lastDayOfMonth) {
            days -= lastDayOfMonth;
            months++;
        }

        return { years, months, days };
    }

    const diferenceBetweenDates = (now, birthday) => {
        const milisecondsPerDay = 86400000; // Número de milisegundos en un día
        const milisecondsBetweenDays = now - birthday // Calcula la diferencia de tiempo en milisegundos
        const diferenceInDays = Math.floor(milisecondsBetweenDays / milisecondsPerDay); // Convierte la diferencia en días

        return diferenceInDays;
    }

    const birthday = new Date(`${month}/${day}/${year}`);
    const now = new Date();


    const totalDays = diferenceBetweenDates(now, birthday);
    const totalTime = convertDays(totalDays);
    console.log(totalTime)



    return (
        <>
            <Styledall>
                <StyledContainer>
                    <StyledFlex>
                        <div>
                            <StyledText>DAY</StyledText>
                            <StyledInput type="number" min="1" max="31" />
                        </div>
                        <div>
                            <StyledText>MONTH</StyledText>
                            <StyledInput type="number" min="1" max="12" />
                        </div>
                        <div>
                            <StyledText>YEAR</StyledText>
                            <StyledInput type="number" />
                        </div>
                    </StyledFlex>
                    <hr />
                    <button onClick={(ev) => setDate(ev.target.value)}  >Onclick</button>
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

