import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import { Header } from '@/components/Header';
import Providers from '@/app/providers';

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Star wars characters',
};
const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <Providers>
        <body className={roboto.className}>
          <Header />
          <CssBaseline />
          <Container maxWidth="lg">
            <Box mt={2}>{children}</Box>
          </Container>
        </body>
      </Providers>
    </html>
  );
};
export default RootLayout;
