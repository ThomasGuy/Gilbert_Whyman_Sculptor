import styled from 'styled-components';

export const GalleryLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 4rem;
  margin-top: var(--navSize);
  padding: 2rem;
  overflow: hidden;
`;
