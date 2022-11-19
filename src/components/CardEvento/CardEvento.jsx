import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Card } from './style.jsx'

export function  CardEvento() {
    return (
        <Card>
            <img src="https://imgs.search.brave.com/dQnOpwM97gPK9RzX38N2b6BZ5eC4VWtwB0c6ctyHCyw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9mLmku/dW9sLmNvbS5ici9m/b3RvZ3JhZmlhLzIw/MjAvMDUvMTkvMTU4/OTkxMDg5OTVlYzQx/ZDczZTNiZGRfMTU4/OTkxMDg5OV8zeDJf/cnQuanBn" alt="" />
            <div>
                <h2>Evento</h2>
                <Link to={'/evento/1'}><Button variant="contained">Saiba mais</Button></Link>
            </div>
        </Card>
    )
}