import { Button } from "@mui/material";
import { DivHeader } from "./style.jsx"
import { Link } from 'react-router-dom';

export function Header(props) {
    let logado = localStorage.getItem('idWhyBot')

    function Deslogar() {
        localStorage.setItem('idWhyBot', 0) 
    }

    return (
        <DivHeader>
            <h1 style={{ color: '#5972A3' }}>Whybot</h1>
            <nav>
                {logado > 0 ? (
                    <>
                        <Link to={'/'}><Button variant="text">Eventos</Button></Link>
                        <Link to={'/dashboard'}><Button variant="text">Meus eventos</Button></Link>
                        <Link to={'/'}><Button onClick={() => Deslogar()} variant="contained">Sair</Button></Link>
                    </>
                ) : (
                    <>
                        <Link to={'/'}><Button variant="text">Eventos</Button></Link>
                        <Link to={'/login'}><Button variant="contained">Login</Button></Link>
                    </>
                )
                }
            </nav>
        </DivHeader>
    )
}