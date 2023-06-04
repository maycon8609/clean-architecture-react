import { faker } from '@faker-js/faker'

import type { AccountModel } from '@domain/models'
import type { AuthenticationParams } from '@domain/usecases'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.string.uuid()
})
