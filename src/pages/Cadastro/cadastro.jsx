import React from "react";
import { TextField } from "@mui/material";
import style from './cadastro.module.css';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from "../../api";
import { useNavigate } from "react-router-dom";

export function Cadastro() {
    const navigate = useNavigate();

    const schema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().required('Email é obrigatório'),
        password: Yup.string().required('Senha é obrigatória'),
        confirmPassword: Yup.string().required('Confirmar senha é obrigatória').oneOf([Yup.ref('password')], 'Senhas não conferem')
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema)
    });

    async function CriarUsuario(data) {
        await api.post('/cadastro', data).then(res => {
            if (res.data.status === 201) {
                navigate("/login");
            } else {
                console.log('Erro: ', res);
            }
        })
    }

    return (
        <div className={style.divCadastro}>
            <h1 style={{ color: '#5972A3' }}>Cadastro</h1>
            <form onSubmit={handleSubmit(CriarUsuario)} className={style.divCamposCadastro}>
                <TextField fullWidth variant='outlined' {...register('nome')} label='Nome' size="small" />
                <TextField fullWidth variant='outlined' {...register('email')} label='Email' size="small" type='email' />
                <TextField fullWidth variant='outlined' {...register('password', { required: true })} label='Senha' size="small" type='password' />
                {errors.password?.message}
                <TextField fullWidth variant='outlined' {...register('confirmPassword', { required: true })} label='Confirmar senha' size="small" type='password' />
                {errors.confirmPassword?.message}
                <button className={style.buttonCadastro} type="submit">Cadastrar</button>
            </form>
        </div>
    )
}