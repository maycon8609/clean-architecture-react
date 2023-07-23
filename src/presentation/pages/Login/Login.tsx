import React from 'react'
import type { FC } from 'react'

import type { LoginProps } from './types'

import {
  Field,
  Footer,
  FormStatus,
  HeaderLogin
} from '@presentation/components'

import Styles from './LoginStyles.scss'

export const Login: FC<LoginProps> = ({
  'data-testid': datatestId = 'login',
  ...props
}) => {
  return (
    <div
      data-testid={`${datatestId}--container`}
      className={Styles.login}
      {...props}
    >
      <HeaderLogin data-testid={`${datatestId}--header`} />

      <form className={Styles.form} data-testid={`${datatestId}--form`}>
        <h2>Login</h2>

        <Field
          data-testid={`${datatestId}--field-email`}
          name="email"
          placeholder="Digite seu e-mail"
          type="email"
        />

        <Field
          data-testid={`${datatestId}--field-password`}
          name="password"
          placeholder="Digite sua senha"
          type="password"
        />

        <button
          className={Styles.buttonSubmit}
          data-testid={`${datatestId}--button-submit`}
          type="submit"
        >
          Entrar
        </button>

        <span className={Styles.link} data-testid={`${datatestId}--link`}>
          Criar conta
        </span>

        <FormStatus data-testid={`${datatestId}--form-status`} />
      </form>

      <Footer data-testid={`${datatestId}--footer`} />
    </div>
  )
}

export default Login
