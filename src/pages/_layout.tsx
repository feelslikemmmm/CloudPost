import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from '@/styles/GlobalStyles';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { Column } from '@/styles/layouts/Layout';

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Suspense fallback={'loading...'}>
          <GlobalStyles />
          <Outlet />
        </Suspense>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

const Container = styled(Column)`
  align-items: center;
  max-width: 1920px;
  margin: 0 auto; /* 가운데 정렬 */
  width: 100%; /* 부모의 100% */
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
