import styled from "styled-components";

export const ErrorWrapper = styled.div`
    background: linear-gradient(rgb(21, 26, 55) 0%, rgba(21, 26, 55, 0) 100%);
    border: 1px solid rgb(36, 41, 63);
    border-radius: 0.5rem;
    margin: 0px auto;
    width: 320px;
    height:150px;
    animation: 0.8s ease 0s 1 normal none running bjnKdr;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding:15px;
`;

export const ErrorWContainer = styled.div`
    width: 75vw;
    display:flex;
    justify-content: center;
    margin-top:100px;
`;

export const ImgError = styled.img`
   width:120px;
`;

export const TextError = styled.span`
color: #fff;
text-transform: uppercase;
font-weight: 600;
text-align:left;
font-size: 25px;
font-family: Arial, Helvetica, sans-serif;F
`;