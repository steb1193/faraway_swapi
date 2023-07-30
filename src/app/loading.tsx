import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loading: FC = () => {
  return (
    <Box
      height="90vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
