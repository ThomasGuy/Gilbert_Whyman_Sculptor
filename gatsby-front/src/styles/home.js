import styled from 'styled-components';
import { mediaQuery } from './mediaQuery';

export const UpComing = styled.div`
  grid-column: 1 / -1;
  display: grid;
  margin-top: 2rem;
  opacity: 0.9;

  h2 {
    font-size: 2rem;
    margin: 0;
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 20px;
    align-items: center;
    color: var(--yellow);
    font-weight: 300;

    ${mediaQuery('xs')`
      font-size: 2.3rem;
    `};

    ${mediaQuery('sm')`
      font-size: 2.8rem;
      `};

    ${mediaQuery('md')`
      font-size: 3.2rem;
    `};
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
`;
