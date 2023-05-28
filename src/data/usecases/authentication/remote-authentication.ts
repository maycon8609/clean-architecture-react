import { HttpPostClient, HttpStatusCode } from '@data/protocols/http'

import { InvalidCredentialsError } from '@domain/errors'
import { AuthenticationParams } from '@domain/usecases'

export class RemoteAuthentication {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        return Promise.resolve()
    }
  }
}
