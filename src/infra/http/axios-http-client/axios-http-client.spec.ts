import { faker } from '@faker-js/faker'
import axios from 'axios'

import { AxiosHttpClient } from '.'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpCliente', () => {
  test('Should call axios with correct URL', async () => {
    const url = faker.internet.url()
    const sut = new AxiosHttpClient()

    await sut.post({ url })

    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
