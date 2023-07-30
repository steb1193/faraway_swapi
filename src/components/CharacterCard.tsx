'use client';
import type { FC } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Button,
  Box,
  Skeleton,
} from '@mui/material';
import { CharacterDescription } from '@/api/types';
import { useRouter } from 'next/navigation';

export type CharacterCardProps = Partial<CharacterDescription> & {
  disabled: boolean;
};

export const CharacterCard: FC<CharacterCardProps> = ({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
  url,
  disabled,
}) => {
  const router = useRouter();

  const enhancedColor = (eye_color || '').includes('-')
    ? `color-mix(in lch, ${(eye_color || '').replaceAll('-', ', ')})`
    : eye_color;
  const handleClick = () => {
    if (!url) return;
    const urlParts = url.split('/');
    router.push(`/${urlParts[urlParts.length - 2]}`);
  };
  if (disabled) {
    return (
      <>
        <Skeleton variant="rectangular" width={210} height={118} />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <br />
          <Skeleton width="50%" />
          <Skeleton width="40%" />
          <Skeleton width="70%" />
          <Skeleton width="70%" />
          <Skeleton width="60%" />
          <Skeleton width="40%" />
        </Box>
      </>
    );
  }
  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
      <CardActionArea>
        <Box height={140} bgcolor={enhancedColor} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name || ''}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            height: {height};
            <br />
            mass: {mass};
            <br />
            hair color: {hair_color};
            <br />
            skin color: {skin_color};
            <br />
            eye color: {eye_color};
            <br />
            birth year: {birth_year};
            <br />
            gender: {gender};
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" component="div">
            Share
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
