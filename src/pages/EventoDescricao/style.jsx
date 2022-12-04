import styled from "styled-components";

export const W100 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
`

export const InfoEvento = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;

    img {
        width: 80%;
        height: auto;
        margin: 0 auto;
    }

    div {
        text-align: center;

        p {
            width: 80%;
            margin: 0 auto;
        }
    }

    @media (max-width: 900px) {
        width: 100%;
    }
`

export const Chatbot = styled.div`
    width: 50%;
    height: 100%;
    margin: 20px;
    padding: 20px;
    border: 1px solid #c1c1c1;
    border-radius: 20px;

    h2 {
        text-align: center;
        color: rgb(89, 114, 163);
        margin: 0px;
        margin-bottom: 10px;
    }

    @media (max-width: 900px) {
        margin: 0 auto;
        margin-top: 20px;
        width: 80%;
    }
`

export const Perguntas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 100%;
`

export const Resposta = styled.div`
    display: flex;
    justify-content: end;
`

export const RefazerPergunta = styled.div`
    border-top: 1px solid #c1c1c1;
    margin-top: 10px;
    padding: 20px;
    bottom: 0px;
    display: flex;
    justify-content: center;
`