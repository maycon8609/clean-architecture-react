import type { HttpPostClient } from '@data/protocols/http'
import { HttpStatusCode } from '@data/protocols/http'

import { InvalidCredentialsError, UnexpectedError } from '@domain/errors'
import type { AccountModel } from '@domain/models'
import type { Authentication, AuthenticationParams } from '@domain/usecases'

export class RemoteAuthentication implements Authentication {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
