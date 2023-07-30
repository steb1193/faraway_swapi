import type { NextPage } from 'next';
import { Box } from '@mui/material';
import { CharactersList } from '@/components/CharactersList';
import { getCharacters } from '@/api/getCharacters';
import getQueryClient from '@/helpers/getQueryClient';
import { Hydrate, dehydrate } from '@tanstack/react-query';
import { CharacterPagination } from '@/components/CharacterPagination';

const HomePage: NextPage = async ({ searchParams }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    ['characters', { page: searchParams?.page, search: searchParams?.search }],
    async () => {
      const { data } = await getCharacters({
        page: searchParams?.page,
        search: searchParams?.search,
      });
      return data;
    },
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Box ma={2}>
        <Box flexGrow={1}>
          <CharactersList />
        </Box>
      </Box>
      <Box m={2} display="flex" justifyContent="center" alignItems="center">
        <CharacterPagination />
      </Box>
    </Hydrate>
  );
};
export default HomePage;
