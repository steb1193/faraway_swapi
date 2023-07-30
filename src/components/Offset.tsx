'use client';
import { styled } from '@mui/material/styles';
import { FC } from 'react';

export const Offset: FC = styled('div')(({ theme }) => theme.mixins.toolbar);
