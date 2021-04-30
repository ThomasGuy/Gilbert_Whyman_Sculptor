import React, { useContext, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { GatsbyImage } from 'gatsby-plugin-image';
import { TitleContext } from '../../components/Layout';

const Container = styled.div`
  margin-top: var(--navSize);
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45rem, 1fr));
  grid-auto-rows: max-content;
  gap: 3rem;
  padding: 2rem;

  .wide {
    color: white;
    grid-column: 1 / -1;
  }
`;

const Card = ({ children }) => {
  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0) scaleY(1)',
    from: { opacity: 0, transform: 'translateY(-11rem) scaleY(0.5)' },
  });

  const Box = styled(animated.div)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 3fr;
    gap: 2rem;
    row-gap: 1rem;
    padding: 2rem;
    border-radius: 15px;
    background: var(--bg_link);

    .image {
      grid-row: 1 / -1;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .title {
      text-align: center;
      padding: 1rem;
      color: var(--yellow);
      font-size: 2.4rem;
      text-decoration: underline;
    }
    .text {
      color: var(--offWhite);
      font-size: 1.7rem;
    }
  `;
  return <Box style={{ ...springProps }}>{children}</Box>;
};

const Gallery1 = () => {
  const { pics } = useStaticQuery(
    graphql`
      query {
        pics: allSanityPicture(
          filter: { category: { name: { eq: "Portrait heads" } } }
        ) {
          nodes {
            name
            _id
            image {
              asset {
                gatsbyImageData(layout: CONSTRAINED, width: 300)
                metadata {
                  dimensions {
                    aspectRatio
                    height
                    width
                  }
                }
                url
              }
            }
          }
          totalCount
        }
      }
    `
  );

  const { setTitle } = useContext(TitleContext);

  useEffect(() => {
    setTitle('Gallery 1');
  }, [setTitle]);

  const data = pics.nodes.map(node => {
    const { image, name, _id } = node;
    return (
      <Card key={_id}>
        <div className="image">
          <GatsbyImage image={image.asset.gatsbyImageData} alt={name} />
        </div>
        <h2 className="title">{name}</h2>
        <p className="text">This is some text</p>
      </Card>
    );
  });

  return (
    <Container>
      <p className="wide">
        Note these Galleries 1, 2 and 3 can't be directly changed in Sanity
        Studio though they do use your images from the cms.
      </p>
      {data}
    </Container>
  );
};

export default Gallery1;
