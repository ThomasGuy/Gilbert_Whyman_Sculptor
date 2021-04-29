import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Events from '../components/Events';
import SanityImageBox from '../components/SanityImageBox';
import { Page, Bio, Image } from '../styles';
import { UpComing } from '../styles/home';
import SEO from '../components/SEO';
import { TitleContext } from '../components/Layout';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Home = ({ pageContext }) => {
  const { events, biography, image } = pageContext.home;
  const bio = biography.map((para, idx) => <Bio key={idx}>{para}</Bio>);
  const { siteTitle } = useSiteMetadata();
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle(siteTitle);
  }, [setTitle, siteTitle]);

  return (
    <Page top={3}>
      <SEO title={siteTitle} />
      <Image width="100rem" className="top">
        <SEO imageSrc={image?.asset?.url} />
        <SanityImageBox
          image={image}
          name=""
          alt="Gilbert Whyman"
          title="Gilbert Whyman"
        />
      </Image>
      {bio}
      <UpComing>
        <h2>Exhibitions</h2>
      </UpComing>
      <Events events={events} />
    </Page>
  );
};

export default Home;

Home.propTypes = {
  pageContext: PropTypes.object,
};
