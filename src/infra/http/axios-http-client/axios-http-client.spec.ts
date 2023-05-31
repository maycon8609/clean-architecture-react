import { faker } from '@faker-js/faker'
import axios from 'axios'

import { HttpPostParams } from '@data/protocols/http'

import { AxiosHttpClient } from '.'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
  data: faker.string.uuid(),
  status: faker.number.int()
}

mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.string.uuid()
})

describe('AxiosHttpCliente', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()

    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())

    expect(httpResponse).toEqual({
      body: mockedAxiosResult.data,
      statusCode: mockedAxiosResult.status
    })
  })
})
