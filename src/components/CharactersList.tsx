'use client';
import { FC } from 'react';
import { CharacterCard } from '@/components/CharacterCard';
import { Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getCharacters } from '@/api/getCharacters';
import { useSearchParams } from 'next/navigation';

export const CharactersList: FC = () => {
  const searchParams = useSearchParams();

  const { data, isFetching } = useQuery({
    queryKey: [
      'characters',
      {
        page: searchParams.get('page'),
        search: searchParams.get('search'),
      },
    ],
    queryFn: async () => {
      const { data } = await getCharacters({
        page: searchParams.get('page'),
        search: searchParams.get('search'),
      });
      return data;
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: 300000,
  });

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 10 }}
    >
      {data?.results?.map((character, key) => (
        <Grid item xs={4} sm={4} md={2} key={character.url + key}>
          <CharacterCard {...character} disabled={isFetching} />
        </Grid>
      ))}
    </Grid>
  );
};
