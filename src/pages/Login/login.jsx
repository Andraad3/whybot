import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import style from './login.module.css';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from "../../api";
import { useForm } from "react-hook-form";

export function Login() {
    const navigate = useNavigate();

    const schema = Yup.object().shape({
        email: Yup.string().required('Email é obrigatório'),
        password: Yup.string().required('Senha é obrigatória')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema)
    });

    async function Login(data) {
        await api.post('/login', data).then(res => {
            if (res.data.status === 200) {
                localStorage.setItem('idWhyBot', res.data.data[0].id)
                navigate("/dashboard");
            } else {
                console.log('Erro: ', res);
            }
        })
    }

    return (
        <div className={style.divLogin}>
            <h1 style={{ color: '#5972A3' }}>Login</h1>
            <form onSubmit={handleSubmit(Login)} className={style.divCamposLogin}>
                <TextField fullWidth variant='outlined' {...register('email')} label='Email' size="small" type='email' />
                <TextField fullWidth variant='outlined' {...register('password')} label='Senha' size="small" />
                <button type="submit" className={style.buttonLogin}>Entrar</button>
                <Link to={'/cadastro'}><button type="button" className={style.buttonLogin}>Criar conta</button></Link>
            </form>
        </div>
    )
}