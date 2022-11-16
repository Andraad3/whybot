import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EventoDescricao } from "./pages/EventoDescricao/EventoDescricao";
import { Eventos } from "./pages/Eventos/Eventos";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Eventos />} />
                <Route path="/evento/:id" element={<EventoDescricao />} />
                {/* <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
