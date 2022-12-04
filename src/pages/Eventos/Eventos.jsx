import { useEffect, useState } from "react";
import { api } from "../../api";
import { CardEvento } from "../../components/CardEvento/CardEvento";
import { Header } from "../../components/Header/Header";
import { DivEventos, Main } from "./style";

export function Eventos() {
    const [eventos, setEventos] = useState()

    async function getEventos() {
        await api.get('/eventos').then(async res => {
            if (res.data.status === 200) {
                setEventos(res.data.data)
            }
        })
    }

    useEffect(() => {
        getEventos()
    }, [])

    return (
        <>
            <Header />
            <Main>
                <h3>Próximos eventos</h3>

                <DivEventos>
                    {eventos?.map((eve) => {
                        return (
                            <CardEvento foto={eve.foto} nome={eve.nome} id={eve.id} />
                        )
                    })}
                </DivEventos>
            </Main>
        </>
    )
}