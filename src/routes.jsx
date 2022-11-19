import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro/cadastro";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { EventoDescricao } from "./pages/EventoDescricao/EventoDescricao";
import { Eventos } from "./pages/Eventos/Eventos";
import { Login } from "./pages/Login/login";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Eventos />} />
                <Route path="/evento/:id" element={<EventoDescricao />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}
