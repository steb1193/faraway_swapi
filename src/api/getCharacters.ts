import { axios } from '@/helpers/axios';
import type { AxiosResponse } from 'axios';
import { CharacterDescription } from '@/api/types';

export type CharactersRequest = {
  page?: string;
  search?: string;
};

export type CharactersResponse = {
  count: number;
  next: string;
  previous: number;
  results: CharacterDescription[];
};

export const getCharacters = (
  requestParams?: CharactersRequest,
): Promise<AxiosResponse<CharactersResponse>> => {
  return axios.get('people', { params: requestParams });
};
