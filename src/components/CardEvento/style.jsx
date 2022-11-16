import styled from "styled-components";

export const Card = styled.div`
    width: 300px;
    border: 1px solid #c1c1c1;
    margin: 0 auto;

    img {
        width: 100%;
        height: auto;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        text-align: center;


        h2 {
            margin: 0;
        }
    }
`