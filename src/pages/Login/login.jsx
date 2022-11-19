import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import style from './login.module.css';

export function Login() {
    return (
        <div className={style.divLogin}>
            <h1 style={{ color: '#5972A3' }}>Login</h1>
            <form className={style.divCamposLogin}>
                <TextField fullWidth variant='outlined' label='Email' size="small" type='email' />
                <TextField fullWidth variant='outlined' label='Senha' size="small" />
                <Link to={'/dashboard'}><button className={style.buttonLogin}>Entrar</button></Link>
                <Link to={'/cadastro'}><button className={style.buttonLogin}>Criar conta</button></Link>
            </form>
        </div>
    )
}