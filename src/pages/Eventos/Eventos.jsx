import { CardEvento } from "../../components/CardEvento/CardEvento";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { DivEventos, Main } from "./style";

export function Eventos() {
    return (
        <>
            <Header />
            <Main>
                <h3>Próximos eventos</h3>

                <DivEventos>
                    <CardEvento />
                    <CardEvento />
                    <CardEvento />
                    <CardEvento />
                    <CardEvento />
                    <CardEvento />
                </DivEventos>
            </Main>
            <Footer />
        </>
    )
}