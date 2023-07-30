import { Offset } from '@/components/Offset';
import { Typography, AppBar, Toolbar } from '@mui/material';
import { FC } from 'react';
import { HomeButton } from '@/components/HomeButton';
import { SearchCharacter } from '@/components/SearchCharacter';

export const Header: FC = () => (
  <>
    <AppBar position="fixed">
      <Toolbar>
        <HomeButton />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Material UI Star Wars characters - Next.js example in TypeScript
        </Typography>
        <SearchCharacter />
      </Toolbar>
    </AppBar>
    <Offset />
  </>
);
