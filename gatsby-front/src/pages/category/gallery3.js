import React, { useContext, useEffect } from 'react';
import { TitleContext } from '../../components/Layout';
import { Page } from '../../styles';

const Gallery3 = () => {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('Gallery 3');
  }, [setTitle]);
  return (
    <Page>
      <h1>Gallery 3</h1>
    </Page>
  );
};

export default Gallery3;
