import { Button } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Chatbot, InfoEvento, Perguntas, RefazerPergunta, Resposta, W100 } from "./style";

export function EventoDescricao() {
    return (
        <>
            <Header />
            <div style={{ height: '100%' }}>
                <h1 style={{ textAlign: 'center', color: 'rgb(89, 114, 163)' }}>Periclao - 2023</h1>
                <W100>
                    <InfoEvento>
                        <img src="https://imgs.search.brave.com/dQnOpwM97gPK9RzX38N2b6BZ5eC4VWtwB0c6ctyHCyw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mLmku/dW9sLmNvbS5ici9m/b3RvZ3JhZmlhLzIw/MjAvMDUvMTkvMTU4/OTkxMDg5OTVlYzQx/ZDczZTNiZGRfMTU4/OTkxMDg5OV8zeDJf/cnQuanBn" alt="" />
                        <div>
                            <h4>Descrição</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus animi corporis, itaque doloribus vero ab eos optio porro neque, quidem pariatur possimus delectus exercitationem eligendi veniam, ratione eum a! Delectus.</p>
                        </div>
                    </InfoEvento>
                    <Chatbot>
                        <h2>Whybot</h2>
                        <Perguntas>
                            <Button variant="contained">Qual o Status do show?</Button>
                            <Button variant="contained">Onde e quando será o Show?</Button>
                            <Button variant="contained">Qual o tempo de duração do show?</Button>
                            <Button variant="contained">Qual o valor e tipos de ingresso ?</Button>
                            <Button variant="contained">Onde posso comprar meu ingresso?</Button>
                        </Perguntas>
                        <Resposta>
                            <Button variant="contained">Respostaaaa</Button>
                        </Resposta>

                        <RefazerPergunta>
                            <Button variant="contained">Outra pergunta</Button>
                        </RefazerPergunta>
                    </Chatbot>
                </W100>
            </div>
            {/* <Footer /> */}
        </>
    )
}