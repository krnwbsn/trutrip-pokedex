import { MockedResponse } from '@apollo/client/testing';
import { GET_POKEMON_LIST } from '@utils/query';

export const mocksResponse = [
  {
    request: {
      query: GET_POKEMON_LIST,
      variables: {
        limit: 1,
      },
    },
    result: {
      data: {
        pokemonData: {
          species: [
            {
              pokemons: [
                {
                  types: [
                    {
                      type: [
                        {
                          name: 'pikachu',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  },
];

export const mocks: MockedResponse<Record<string, any>>[] = [
  {
    request: mocksResponse[0].request,
    result: mocksResponse[0].result,
  },
];

export const mocksWithError: MockedResponse<Record<string, any>>[] = [
  {
    request: mocksResponse[0].request,
    error: new Error('data not found'),
  },
];
