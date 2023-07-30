import { axios } from '@/helpers/axios';
import type { AxiosResponse } from 'axios';
import { CharacterDescription } from '@/api/types';

export type SingleCharacterRequest = {
  id: number;
};

export type SingleCharacterResponse = CharacterDescription;

export const getSingleCharacter = (
  requestParams: SingleCharacterRequest,
): Promise<AxiosResponse<SingleCharacterResponse>> => {
  return axios.get(`people/${requestParams.id}`);
};
