'use client';
import type { NextPage } from 'next';
import { Box } from '@mui/material';
import { CharactersList } from '@/components/CharactersList';
import { Hydrate } from '@tanstack/react-query';
import { CharacterPagination } from '@/components/CharacterPagination';
import { useGetCharacters } from '@/hooks/useGetCharacters';
import Loading from '@/app/loading';
import NotFound from '@/app/not-found';

const HomePage: NextPage<{
  searchParams?: { page?: string; search?: string };
}> = () => {
  const { data, isFetching } = useGetCharacters();
  if (!data && isFetching) {
    return <Loading />;
  }
  if (!data || !data.results.length) {
    return <NotFound />;
  }
  return (
    <Hydrate>
      <Box m={2}>
        <Box flexGrow={1} minHeight={'80vh'}>
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
