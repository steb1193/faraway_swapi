'use client';
import { styled } from '@mui/material/styles';
import type { FC } from 'react';
import { PropsWithChildren } from 'react';

export const SearchIconWrapper: FC<PropsWithChildren> = styled('div')(
  ({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
);
