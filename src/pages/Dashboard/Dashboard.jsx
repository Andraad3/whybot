import { CardEvento } from "../../components/CardEvento/CardEvento";
import { Header } from "../../components/Header/Header";
import { DivEventos, Main } from "./style";
import { api } from "../../api";
import { useEffect, useState } from "react";

export function Dashboard() {
    const [meusEventos, setMeusEventos] = useState()

    async function getEventos() {
        await api.get('/eventos').then(async res => {
            if (res.data.status === 200) {
                getMyEventos(res.data.data)
            }
        })
    }

    async function getMyEventos(eventos) {
        await api.get(`/eventosUser/?id=${localStorage.getItem('idWhyBot')}`).then(res => {
            if (res.data.status === 200) {
                let meusEvents = []

                res.data.data.map(evezin => {
                    let achou = eventos.find(eve => eve.id === evezin.idEvento)

                    if (achou !== undefined) {
                        meusEvents.push(achou)
                    }
                })

                setMeusEventos(meusEvents)
            }
        })
    }

    useEffect(() => {
        getEventos()
    }, [])

    useEffect(() => {
        console.log('Meus Eventos: ', meusEventos)
    }, [meusEventos])

    return (
        <>
            <Header />
            <Main>
                <h3>Meus eventos</h3>

                <DivEventos>
                    {meusEventos?.map((eve) => {
                        return (
                            <CardEvento foto={eve.foto} nome={eve.nome} id={eve.id} />
                        )
                    })}
                </DivEventos>
            </Main>
        </>
    )
}