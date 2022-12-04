import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from './style.jsx'

export function  CardEvento(props) {
    return (
        <Card>
            <img src={props.foto} alt="" />
            <div>
                <h2>{props.nome}</h2>
                <Link to={`/evento/${props.id}`}><Button variant="contained">Saiba mais</Button></Link>
            </div>
        </Card>
    )
}