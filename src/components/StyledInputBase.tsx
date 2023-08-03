'use client';
import { styled } from '@mui/material/styles';
import { InputBase, InputBaseProps, Theme } from '@mui/material';
import { StyledComponent } from '@emotion/styled';
import { MUIStyledCommonProps } from '@mui/system';

export const StyledInputBase: StyledComponent<
  InputBaseProps & MUIStyledCommonProps<Theme>
> = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
