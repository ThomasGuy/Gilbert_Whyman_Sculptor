/* eslint-disable no-unused-expressions */
import { animated, useTrail } from 'react-spring';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-plugin-sanity-image';
import { TitleContext } from '../../components/Layout';
import { mediaQuery } from '../../styles';
import SEO from '../../components/SEO';
import { useBreakpoint } from '../../hooks/useBreakpoint';

const PictureBox = styled(animated.div)`
  position: relative;
  max-width: 65rem;
`;

const Container = styled.div`
  margin-top: var(--navSize);
  padding: 2rem 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: ${({ width }) =>
    `repeat(auto-fill, minmax(${width}rem, 1fr))`};
  grid-auto-flow: dense;

  .wide {
    grid-column: 1 / -1;
    color: white;
  }

  .tall2 {
    grid-row: span 2;
  }

  .wide2 {
    grid-column: span 2;
  }

  .wide3 {
    grid-column: ${({ span }) => `span ${span}`};
  }

  ${mediaQuery('sm')`
    gap: 2rem;
    padding: 2rem;
 `};
`;

function addClass(ratio) {
  switch (true) {
    case ratio < 0.5:
      return 'tall2';
    case ratio > 1.25 && ratio <= 2.4:
      return 'wide2';
    case ratio > 2.4:
      return 'wide3';
    default:
      return '';
  }
}

function shuffleIndex(len) {
  const index = new Array(len);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < index.length; i++) {
    index[i] = i;
  }

  return index
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
}

const Gallery2 = () => {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('Gallery 2');
  }, [setTitle]);

  const { pics } = useStaticQuery(graphql`
    query {
      pics: allSanityPicture {
        nodes {
          id
          name
          image {
            ...ImageWithPreview
            asset {
              url
              metadata {
                dimensions {
                  width
                  height
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  `);

  const imageProps = pics.nodes.map((node, idx) => {
    const { name, image, id } = node;
    return {
      image,
      alt: name,
      title: name,
      idx,
      key: id,
      ratio: image.asset.metadata.dimensions.aspectRatio,
      loading: 'eager',
      imgStyle: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        marginBottom: '0',
      },
    };
  });

  // const index = shuffleIndex(imageProps.length);

  const breakpoints = useBreakpoint();

  let width = 14;
  let span = 2;

  breakpoints.span ? (span = 3) : (span = 2);

  if (breakpoints.galleryMd) {
    breakpoints.galleryLg ? (width = 18) : (width = 16);
  } else {
    width = 14;
  }

  const trail = useTrail(imageProps.length, {
    opacity: 1,
    scale: 1,
    from: { opacity: 0, scale: 0.3 },
  });

  return (
    <Container width={width} span={span}>
      <p className="wide">
        This layout example uses all the images in the cms, it will look better
        when you update Sanity Studio with larger images
      </p>
      {trail.map((props, idx) => {
        const { image, key, title, ratio, imgStyle, ...others } = imageProps[
          idx
        ];
        return (
          <PictureBox
            className={addClass(ratio)}
            key={key}
            style={{ ...props }}>
            <SEO title={title} imageSrc={image.asset.url} />
            <Image
              {...image}
              width={650}
              title={title}
              style={imgStyle}
              {...others}
            />
          </PictureBox>
        );
      })}
    </Container>
  );
};

export default Gallery2;
