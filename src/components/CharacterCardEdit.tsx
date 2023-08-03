'use client';
import type { ChangeEvent, FC } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
} from '@mui/material';
import { CharacterDescription } from '@/api/types';
import { useState } from 'react';
import Cookies from 'js-cookie';

export type CharacterCardEdit = Partial<CharacterDescription>;

export const CharacterCardEdit: FC<CharacterCardEdit> = ({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
  url,
}) => {
  const getDefaultValue = (): Partial<CharacterDescription> => ({
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    url,
  });
  const localData = Cookies.get(url!);
  const [formState, setFormState] = useState<Partial<CharacterDescription>>(
    localData ? JSON.parse(localData) : getDefaultValue(),
  );
  const enhancedColor = (formState.eye_color || '').includes('-')
    ? `color-mix(in lch, ${(formState.eye_color || '').replaceAll('-', ', ')})`
    : formState.eye_color;
  const handleReset = () => {
    if (!url) return;
    localStorage.removeItem(url);
    setFormState(getDefaultValue());
  };
  const handleEdit = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof CharacterCardEdit,
  ) => {
    if (!url) return;
    setFormState((prev) => {
      const newValue = { ...prev, [key]: e.target.value };
      Cookies.set(url!, JSON.stringify(newValue));
      return newValue;
    });
  };
  return (
    <Box
      minHeight="90vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ width: 345 }}>
        <Box height={140} bgcolor={enhancedColor} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name || ''}
          </Typography>
          <TextField
            fullWidth
            margin="dense"
            label="height"
            value={formState.height}
            onChange={(e) => handleEdit(e, 'height')}
            variant="standard"
          />
          <TextField
            fullWidth
            margin="dense"
            label="mass"
            value={formState.mass}
            onChange={(e) => handleEdit(e, 'mass')}
            variant="standard"
          />
          <TextField
            fullWidth
            margin="dense"
            label="hair color"
            value={formState.hair_color}
            onChange={(e) => handleEdit(e, 'hair_color')}
            variant="standard"
          />
          <TextField
            fullWidth
            margin="dense"
            label="skin color"
            value={formState.skin_color}
            onChange={(e) => handleEdit(e, 'skin_color')}
            variant="standard"
          />
          <TextField
            fullWidth
            margin="dense"
            label="eye color"
            value={formState.eye_color}
            onChange={(e) => handleEdit(e, 'eye_color')}
            variant="standard"
          />
          <TextField
            fullWidth
            margin="dense"
            label="birth year"
            value={formState.birth_year}
            onChange={(e) => handleEdit(e, 'birth_year')}
            variant="standard"
          />
          <TextField
            fullWidth
            margin="dense"
            label="gender"
            value={formState.gender}
            onChange={(e) => handleEdit(e, 'gender')}
            variant="standard"
          />
        </CardContent>

        <CardActions>
          <Button size="small" color="primary" onClick={handleReset}>
            Reset
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
