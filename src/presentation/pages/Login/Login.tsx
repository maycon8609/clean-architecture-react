import React from 'react'
import type { FC, FormEvent } from 'react'

import { useFormContext } from '@presentation/contexts'

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
  const { isLoading } = useFormContext()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div
      data-testid={`${datatestId}--container`}
      className={Styles.login}
      {...props}
    >
      <HeaderLogin data-testid={`${datatestId}--header`} />

      <form
        className={Styles.form}
        data-testid={`${datatestId}--form`}
        onSubmit={handleSubmit}
      >
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

        <FormStatus
          data-testid={`${datatestId}--form-status`}
          isLoading={isLoading}
        />
      </form>

      <Footer data-testid={`${datatestId}--footer`} />
    </div>
  )
}

export default Login
