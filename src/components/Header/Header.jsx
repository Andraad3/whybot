import { Button } from "@mui/material";
import { DivHeader } from "./style.jsx"
import { Link } from 'react-router-dom';

export function Header(props) {
    return (
        <DivHeader>
            <h1 style={{ color: '#5972A3' }}>Whybot</h1>
            <nav>
                {props.type === 'dashboard' ? (
                    <>
                        <Link to={'/'}><Button variant="text">Eventos</Button></Link>
                        <Link to={'/dashboard'}><Button variant="text">Meus eventos</Button></Link>
                        <Link to={'/'}><Button variant="contained">Sair</Button></Link>
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