import type { FC, FormEvent } from 'react'
import { useEffect } from 'react'

import { useFormContext } from '@presentation/contexts/form'

import type { LoginProps } from './types'

import { Field } from '@presentation/components/Field'
import { Footer } from '@presentation/components/Footer'
import { FormStatus } from '@presentation/components/FormStatus'
import { Header } from '@presentation/components/Header'

import Styles from './LoginStyles.scss'

export const Login: FC<LoginProps> = ({
  'data-testid': datatestId = 'login',
  validation,
  ...props
}) => {
  const { formState, setEmailContent, setPasswordContent } = useFormContext()

  useEffect(() => {
    // TODO: Criar hook useEffectSkipFirst para substituir este if
    if (formState.emailContent) {
      validation.validate({ email: formState.emailContent })
    }
  }, [formState.emailContent, validation])

  useEffect(() => {
    // TODO: Criar hook useEffectSkipFirst para substituir este if
    if (formState.passwordContent) {
      validation.validate({ password: formState.passwordContent })
    }
  }, [formState.passwordContent, validation])

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
          errorMessage={formState.emailErrorMessage}
          name="email"
          onChange={event => setEmailContent(event.target.value)}
          placeholder="Digite seu e-mail"
          type="email"
        />

        <Field
          data-testid={`${datatestId}--field-password`}
          errorMessage={formState.passwordErrorMessage}
          name="password"
          onChange={event => setPasswordContent(event.target.value)}
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
          errorMessage={formState.errorMessage}
          isLoading={formState.isLoading}
        />
      </form>

      <Footer data-testid={`${datatestId}--footer`} />
    </div>
  )
}
