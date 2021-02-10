import * as React from 'react';
import { ExampleService } from './service-example';
import fetchMock from "jest-fetch-mock"

describe('Example Service', () => {

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  const testResponse = {
    response: 200
  };


  it('calls register correctly', async () => {
    // arrange
    const service = new ExampleService({ baseUrl: 'http://anyUrl/api/v1' });
    fetchMock.mockResponse(JSON.stringify(testResponse));

    // act
    await service
      .register({ userName: "testName", company: "testCompany"})
      .then((response) => response.json())
      .then((body: any) => {
        // assert
        expect(body).toStrictEqual(testResponse);
        expect(fetchMock.mock.calls.length).toEqual(1);
        expect(fetchMock.mock.calls[0][0]).toEqual(
          'http://anyUrl/api/v1/register'
        );
      });
  });
});

