import { HelloWorldProps } from "../../types/example";


export interface IExampleService {
  register(registrationData: HelloWorldProps): Promise<Response>;
}

export class ExampleService implements IExampleService {
  baseUrl: string;

  constructor({ baseUrl }: { baseUrl: string }) {
    this.baseUrl = baseUrl;
  }

  async register(registrationData: HelloWorldProps) {
    return await fetch(`${this.baseUrl}/register`, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(registrationData)
    });
  }
}

// const EXAMPLE_API_ENDPOINT = "http://example:5050/query";

// const ExampleApiService = {
//     exampleApiCall: async (data: HelloWorldProps) => {
//         fetch(`${EXAMPLE_API_ENDPOINT }/pre-signup`, {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//             .then(response => {
//                 return response.json()
//             })
//             .catch(err => console.log(err))
//     },
// };
// export default ExampleApiService;


