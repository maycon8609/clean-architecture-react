import type { FC, FormEvent } from 'react'

import { useFormContext } from '@presentation/contexts/form'

import type { LoginProps } from './types'

import { Field } from '@presentation/components/Field'
import { Footer } from '@presentation/components/Footer'
import { FormStatus } from '@presentation/components/FormStatus'
import { Header } from '@presentation/components/Header'

import Styles from './LoginStyles.scss'

export const Login: FC<LoginProps> = ({
  'data-testid': datatestId = 'login',
  ...props
}) => {
  const { isLoading, emailErrorMessage, errorMessage, passwordErrorMessage } =
    useFormContext()

  /* istanbul ignore next */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div
      data-testid={`${datatestId}--container`}
      className={Styles.login}
      {...props}
    >
      <Header
        data-testid={`${datatestId}--header`}
        label="4Dev - enquetes para Programadores"
      />

      <form
        className={Styles.form}
        data-testid={`${datatestId}--form`}
        onSubmit={handleSubmit}
      >
        <h2>Login</h2>

        <Field
          data-testid={`${datatestId}--field-email`}
          errorMessage={emailErrorMessage}
          name="email"
          placeholder="Digite seu e-mail"
          type="email"
        />

        <Field
          data-testid={`${datatestId}--field-password`}
          errorMessage={passwordErrorMessage}
          name="password"
          placeholder="Digite sua senha"
          type="password"
        />

        <button
          className={Styles.buttonSubmit}
          data-testid={`${datatestId}--button-submit`}
          disabled
          type="submit"
        >
          Entrar
        </button>

        <span className={Styles.link} data-testid={`${datatestId}--link`}>
          Criar conta
        </span>

        <FormStatus
          data-testid={`${datatestId}--form-status`}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
      </form>

      <Footer data-testid={`${datatestId}--footer`} />
    </div>
  )
}
