import { CardEvento } from "../../components/CardEvento/CardEvento";
import { Header } from "../../components/Header/Header";
import { DivEventos, Main } from "./style";

export function Dashboard() {
    return (
        <>
            <Header type="dashboard"/>
            <Main>
                <h3>Meus eventos</h3>

                <DivEventos>
                    <CardEvento />
                </DivEventos>
            </Main>
        </>
    )
}