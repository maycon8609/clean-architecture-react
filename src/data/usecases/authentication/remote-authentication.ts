import { HttpPostClient } from '../../protocols/http/http-post-client'
import { AuthenticationParams } from '../../../domain/usecases/authentication'

export class RemoteAuthentication {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })
  }
}