import styled from 'styled-components';
import { mediaQuery } from './mediaQuery';

export const Banner = styled.div`
  width: 100%;
  padding: 5rem;
`;

export const CardLeft = styled.div`
  grid-column: 1 / -1;
  display: grid;
  justify-items: center;
  align-items: center;
  align-content: center;
  gap: 2rem;
  row-gap: 0;

  .mug-image {
    height: 100%;
    max-width: 25rem;
    object-fit: contain;
  }

  ${mediaQuery('sm')`
    grid-template-columns: auto 1fr;

    .mug-image {
      grid-row: span 2;
    }
    `};
`;

export const CardRight = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-auto-rows: auto;
  justify-items: center;
  align-items: center;
  margin-top: 2rem;
  gap: 2rem;
  row-gap: 0;

  .main-image {
    height: 100%;
    max-width: 50rem;
    object-fit: contain;
  }

  ${mediaQuery('md')`
    grid-template-columns: 1fr 1fr;
    .main-image {
      grid-col: 2 / -1;
    }
  `};
`;

export const Links = styled.div`
  .gridIt {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-items: center;
  }

  .middle {
    grid-column: 2 / 3;
    width: 100%;
    text-align: center;
    padding: 0.5rem 2rem;
  }

  ul > li {
    background: var(--bg_link);
    border: 1px solid var(--black);
  }

  li:hover {
    background: var(--link-hover);
  }

  h2 {
    color: inherit;
    font-size: inherit;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 2rem;
    align-items: center;
  }

  h2:before,
  h2:after {
    display: block;
    content: '';
    height: 10px;
    background: linear-gradient(
      to var(--direction, left),
      #ffc600cc,
      transparent
    );
  }
  h2:after {
    --direction: right;
  }

  ${mediaQuery('sm')`
    font-size: 2rem;
  `};

  ${mediaQuery('lg')`
    font-size: 2.2rem;
  `};
`;
