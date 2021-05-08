import styled from 'styled-components';
import { mediaQuery, mediaQueryMax } from './mediaQuery';

export const Page = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  margin-top: var(--navSize);
  margin-bottom: 2rem;
  display: grid;
  gap: 2rem;
  padding: 0 0.7rem;
  color: rgba(255, 255, 255, 0.75);

  .email {
    font-size: 1.6rem;

    ${mediaQueryMax('md')`
      margin-top: 2rem;
      order: -1;
      `};

    ${mediaQuery('sm')`
      font-size: 2.1rem;
    `};
  }

  .top {
    margin-top: ${({ top }) => `${top}rem`};
  }

  ${mediaQuery('xs')`
    padding: 0.7rem;
  `};

  ${mediaQuery('sm')`
    padding: 0 1rem;
  `};

  ${mediaQuery('md')`
    padding: 0 1.5rem;
  `};
`;

export const Bio = styled.p`
  font-weight: lighter;
  line-height: 1.4;
  padding: 0 0.5rem;

  ${mediaQuery('sm')`
    font-size: 1.6rem;
    padding: 0 1rem;
    `};

  ${mediaQuery('md')`
    letter-spacing: 0.5px;
    font-size: 1.8rem;
    line-height: 1.6;
  `};
`;

export const Image = styled.div`
  max-width: ${props => props.width};
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1.5rem;
`;
