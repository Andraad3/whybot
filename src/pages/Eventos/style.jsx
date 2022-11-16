import styled from "styled-components";

export const Main = styled.main`
    text-align: center;
    width: 100%;
    height: 100%;

    h3 {
        color: rgb(89, 114, 163);
    }
`


export const DivEventos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    width: 90%;
    margin: 0 auto;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`