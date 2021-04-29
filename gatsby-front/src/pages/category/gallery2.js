/* eslint-disable no-unused-expressions */
import { animated, useTrail } from 'react-spring';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { TitleContext } from '../../components/Layout';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { mediaQuery } from '../../styles';

const PictureBox = styled(animated.div)`
  display: grid;
  justify-content: center;
  align-items: center;
  max-width: 80rem;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-fit: contain; */
  }
`;

const Container = styled.div`
  margin-top: var(--navSize);
  padding: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: ${({ width }) =>
    `repeat(auto-fill, minmax(${width}rem, 1fr))`};
  grid-auto-rows: max-content;
  grid-auto-flow: dense;

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

const Gallery2 = () => {
  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('Gallery 2');
  }, [setTitle]);

  const { pics } = useStaticQuery(graphql`
    query {
      pics: allSanityPicture {
        nodes {
          name
          image {
            asset {
              gatsbyImageData(layout: CONSTRAINED, width: 400)
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

  const gallery = pics.nodes.map(node => {
    const { name, image } = node;
    const { aspectRatio } = image.asset.metadata.dimensions;
    return [
      <GatsbyImage
        image={image.asset.gatsbyImageData}
        alt={name}
        ratio={aspectRatio}
      />,
      aspectRatio,
    ];
  });

  const breakpoints = useBreakpoint();

  let width = 14;
  let span = 2;

  breakpoints.span ? (span = 3) : (span = 2);

  if (breakpoints.galleryMd) {
    breakpoints.galleryLg ? (width = 20) : (width = 18);
  }

  const trail = useTrail(gallery.length, {
    opacity: 1,
    scale: 1,
    from: { opacity: 0, scale: 0.3 },
  });

  return (
    <Container width={width} span={span}>
      {trail.map(({ opacity, scale, ...rest }, idx) => {
        const ratio = parseFloat(gallery[idx][1]);
        const key = idx;
        return (
          <PictureBox
            key={key}
            className={addClass(ratio)}
            style={{ opacity, scale, ...rest }}>
            {gallery[idx][0]}
          </PictureBox>
        );
      })}
    </Container>
  );
};

export default Gallery2;
