import styled from 'styled-components';

const StyledFlex = styled.h1`
    display: flex;
    justify-content: space-around;
`
const StyledH2 = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 55px;
    margin: 0;

`
const StyledPurple = styled.span`
    color: #8f1aef;
`
const StyledInput = styled.input`
        border: 1px solid lightgrey;
    padding: 15px;
    margin-top: 25px;
    border-radius: 5px;
    width: 60%;
`
const StyledText = styled.p`
    font-size: 17px;
    letter-spacing: 3px;
    color: grey;
    margin-bottom: 0;
`
const StyledContainer = styled.div`
    background-color: white;
    margin: 20px;
    border-radius: 30px;
    border-bottom-right-radius: 35%;
    padding: 35px;
`
const Styledall = styled.div`
    background-color: #e9e9e9;
    width: 100%;
    height: 100vh;
    padding-top: 10px;
`

export { StyledFlex, StyledH2, StyledPurple, StyledInput, StyledText, Styledall, StyledContainer };
