import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import { BreakpointProvider } from '../hooks/useBreakpoint';
import { GlobalStyles } from '../styles';
import Footer from './Footer';
import Nav from './Nav';
import SEO from './SEO';

const ContentStyles = styled.div`
  max-width: var(--maxWidth);
  min-height: 100vh;
  margin: 0 auto;
  background-color: var(--bg);
`;

// these should maybe be synced up with mediaQueries
const queries = {
  or: '(orientation: portrait)', // we can check orientation also
  navChange: '(max-width: 780px)',

  md: '(max-width: 668px)',
  galleryMd: '(min-width: 468px)',
  galleryLg: '(min-width: 910px)',
  span: '(min-width: 580px)',
};

export const TitleContext = createContext({
  title: 'Sport',
  setTitle: () => {},
});

const Layout = ({ children, siteTitle, siteDescription }) => {
  const [title, setTitle] = useState(siteTitle);
  return (
    <>
      <GlobalStyles />
      <SEO title={siteTitle} description={siteDescription} />
      <ContentStyles>
        <BreakpointProvider queries={queries}>
          <Nav title={title} />
          <TitleContext.Provider value={{ title, setTitle }}>
            {children}
          </TitleContext.Provider>
        </BreakpointProvider>
        <Footer />
      </ContentStyles>
    </>
  );
};

export default Layout;
