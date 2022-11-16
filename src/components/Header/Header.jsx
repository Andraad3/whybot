import { Button } from "@mui/material";
import { DivHeader } from "./style.jsx"

export function Header() {
    return (
        <DivHeader>
            <h1 style={{ color: '#5972A3' }}>Whybot</h1>
            <nav>
                <Button variant="text">Eventos</Button>
                <Button variant="contained">Login</Button>
            </nav>
        </DivHeader>
    )
}