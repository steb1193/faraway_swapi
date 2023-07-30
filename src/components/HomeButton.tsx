'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';

export const HomeButton: FC = () => {
  const router = useRouter();

  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="open drawer"
      sx={{ mr: 2 }}
      onClick={() => router.push('/')}
    >
      <HomeIcon />
    </IconButton>
  );
};
