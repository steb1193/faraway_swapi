'use client';
import { FC } from 'react';
import { CharacterCard } from '@/components/CharacterCard';
import { Grid } from '@mui/material';
import { useGetCharacters } from '@/hooks/useGetCharacters';

export const CharactersList: FC = () => {
  const { data, isFetching } = useGetCharacters();

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
