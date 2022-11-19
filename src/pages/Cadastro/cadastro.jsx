import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import style from './cadastro.module.css';

export function Cadastro() {
    return (
        <div className={style.divCadastro}>
            <h1 style={{ color: '#5972A3' }}>Cadastro</h1>
            <form className={style.divCamposCadastro}>
                <TextField fullWidth variant='outlined' label='Nome' size="small" />
                <TextField fullWidth variant='outlined' label='Email' size="small" type='email' />
                <TextField fullWidth variant='outlined' label='Senha' size="small" />
                <TextField fullWidth variant='outlined' label='Confirmar senha' size="small" type='password' />
                <Link to={'/dashboard'}><button className={style.buttonCadastro}>Cadastrar</button></Link>
            </form>
        </div>
    )
}