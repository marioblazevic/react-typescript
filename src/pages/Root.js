import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default RootLayout;
