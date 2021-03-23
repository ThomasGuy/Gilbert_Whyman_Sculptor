import styled from 'styled-components';

// Nav styles
export const Fixed = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--bg);
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const Navbar = styled.nav`
  height: var(--nav-size);
  background-color: var(--black);
  padding: 0 0.5rem;
  border-bottom: var(--border);
`;

export const NavbarNav = styled.ul`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavbarNavItem = styled.li`
  width: calc(var(--nav-size) * 0.8);
  margin-bottom: 0;

  /* Icon Button */
  .icon-button {
    --button-size: calc(var(--nav-size) * 0.6);
    width: var(--button-size);
    height: var(--button-size);
    background-color: #484a4d;
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    outline: none;
  }

  .icon-button:hover {
    filter: brightness(1.3);
  }

  svg {
    fill: var(--offWhite);
    width: 25px;
    height: 25px;
  }
`;

export const Banner = styled.h2`
  color: var(--offWhite);
  font-size: 2.7rem;
  margin: 0 auto 0 2rem;
`;
