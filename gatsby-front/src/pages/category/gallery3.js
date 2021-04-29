import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { TitleContext } from '../../components/Layout';

const Container = styled.div`
  margin-top: var(--navSize);
  padding: 2rem;
  display: grid;
`;

const Gallery3 = () => {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('Gallery 3');
  }, [setTitle]);

  return (
    <Container>
      <h1>Gallery 3</h1>
    </Container>
  );
};

export default Gallery3;
