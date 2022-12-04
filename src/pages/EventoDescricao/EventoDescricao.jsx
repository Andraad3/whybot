import { Button } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { Chatbot, InfoEvento, Perguntas, RefazerPergunta, Resposta, W100 } from "./style";
import { api } from "../../api";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from 'moment'

export function EventoDescricao() {
    let { id } = useParams();
    let logado = localStorage.getItem('idWhyBot')
    const [evento, setEvento] = useState()
    const [resposta, setResposta] = useState()
    const [mostraBotao, setMostraBotao] = useState(false)

    async function getEvento() {
        await api.get(`/evento/?id=${id}`).then(res => {
            console.log(res.data);
            if (res.data.status === 200) {

                if (logado > 0) {
                    verificaEventoUser(res.data.data[0])
                }

                setEvento(res.data.data[0])
            }
        })
    }

    async function verificaEventoUser(evento) {
        await api.get(`/eventosUser/?id=${localStorage.getItem('idWhyBot')}`).then(res => {
            if (res.data.status === 200) {
                let achou = res.data.data.find(eve => eve.idEvento === evento.id)
                if (achou !== undefined) {
                    setMostraBotao(true)
                }
            }
        })
    }

    useEffect(() => {
        getEvento()
    }, [])

    async function FazerPergunta(numero) {
        console.log('Numero: ', numero);
        switch (numero) {
            case 1:
                setResposta(`O evento esta ${evento?.status === true ? 'Ativo' : 'Desativado'}`)
                break;
            case 2:
                setResposta(`A data do evento é dia ${moment(evento?.dataEvento, 'yyyy-mm-dd').format('DD/MM/YYYY')}`)
                break;
            case 3:
                setResposta(`A localização do evento é ${evento?.localizacao}`)
                break;
            case 4:
                setResposta(`O evento tem duração de ${evento?.duracao}`)
                break;
            default:
                break;
        }
    }

    async function AddFavoritos() {
        await api.post('/addEvento', {
            idEvento: evento.id,
            idUser: localStorage.getItem('idWhyBot')
        })
    }

    return (
        <>
            <Header />
            <div style={{ height: '100%' }}>
                <h1 style={{ textAlign: 'center', color: 'rgb(89, 114, 163)' }}>{evento?.nome}</h1>
                <h4 style={{ textAlign: 'center', color: 'rgb(89, 114, 163)' }}>{evento?.localizacao} - {moment(evento?.dataEvento, 'yyyy-mm-dd').format('YYYY')}</h4>

                {logado > 0 && mostraBotao === false ? (
                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 20 }}>
                        <Button onClick={() => AddFavoritos()} variant="contained" color="success">Adicionar aos favoritos</Button>
                    </div>
                ) : null}
                <W100>
                    <InfoEvento>
                        <img src={evento?.foto} alt="" />
                        <div>
                            <h4>Descrição</h4>
                            <p>{evento?.descricao}</p>
                        </div>
                    </InfoEvento>
                    <Chatbot>
                        <h2>Whybot</h2>
                        <br />
                        <br />
                        <Perguntas>
                            <Button onClick={() => FazerPergunta(1)} variant="contained">Qual o Status do show?</Button>
                            <Button onClick={() => FazerPergunta(2)} variant="contained">Qual a data do Show?</Button>
                            <Button onClick={() => FazerPergunta(3)} variant="contained">Onde será o Show?</Button>
                            <Button onClick={() => FazerPergunta(4)} variant="contained">Qual o tempo de duração do show?</Button>
                        </Perguntas>
                        <br />
                        <br />
                        <RefazerPergunta>
                            <h3>{resposta}</h3>
                        </RefazerPergunta>
                    </Chatbot>
                </W100>
            </div>
        </>
    )
}