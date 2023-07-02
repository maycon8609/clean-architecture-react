import React from 'react'
import type { FC } from 'react'

import { Logo, Spinner } from '@presentation/components'

import Styles from './LoginStyles.scss'

export const Login: FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <Logo />
        <h1>4Dev - enquetes para Programadores</h1>
      </header>

      <form className={Styles.form}>
        <h2>Login</h2>

        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <span className={Styles.status}>🔴️</span>
        </div>

        <div className={Styles.inputWrap}>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <span className={Styles.status}>🔴️</span>
        </div>

        <button className={Styles.buttonSubmit} type="submit">
          Entrar
        </button>

        <span className={Styles.link}>Criar conta</span>

        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />

          <span className={Styles.error}>Error</span>
        </div>
      </form>

      <footer className={Styles.footer} />
    </div>
  )
}

export default Login
