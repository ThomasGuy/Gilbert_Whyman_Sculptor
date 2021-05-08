import React, { useCallback, useEffect, useRef, useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import styled from 'styled-components';
import HomeIcon from '../assets/svg/house.svg';
import BurgerIcon from '../assets/svg/list.svg';
import { NavFixed, NavbarNav, NavbarNavItem, Banner } from '../styles';
import NavCollapse from './NavCollapse';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { useBreakpoint } from '../hooks/useBreakpoint';

const BigNav = styled.div`
  display: grid;
  grid-template-rows: 6rem 4rem;
  grid-template-columns: ${({ items }) => `repeat(${items}, 14rem)`};
  justify-content: center;
  place-items: center center;
  gap: 0;

  .title {
    grid-column: 2 / -2;
  }

  .style {
    background: var(--black);
    text-align: center;
    padding: 1rem 0.5rem;
    border-radius: var(--border-radius);
    color: var(--offWhite);
    opacity: 0.9;

    &:hover,
    &.active {
      background-color: #525357;
    }
  }
`;

const NavBig = ({ children, items }) => (
  <BigNav items={items}>{children}</BigNav>
);

function NavItem({ open, setOpen, children, icon, linkref }) {
  const listener = useCallback(() => {
    setOpen(state => !state);
  }, [setOpen]);

  const handleKey = useCallback(
    evt => {
      // keyCode = 9 "tab"
      if (evt.keyCode === 9) {
        setOpen(state => !state);
      }
    },
    [setOpen]
  );

  useEffect(() => {
    const bun = linkref.current;
    bun.addEventListener('click', listener);
    document.addEventListener('keydown', handleKey); // listen for 'tab' key

    return () => {
      bun.removeEventListener('click', listener);
      document.removeEventListener('keydown', handleKey);
    };
  }, [handleKey, linkref, listener]);

  return (
    <NavbarNavItem>
      <div
        className="icon-button"
        ref={linkref}
        onClick={() => listener}
        onKeyDown={handleKey}
        role="button"
        tabIndex={0}>
        {icon}
      </div>
      {open && children}
    </NavbarNavItem>
  );
}

function NavLink({ icon }) {
  return (
    <NavbarNavItem>
      <Link className="icon-button" to="/" roll="link">
        {icon}
      </Link>
    </NavbarNavItem>
  );
}

function Nav({ title }) {
  const breakpoint = useBreakpoint();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const linkref = useRef(null);
  const handler = useCallback(() => setOpen(false), [setOpen]);
  useOnClickOutside(dropdownRef, linkref, handler);

  const { category } = useStaticQuery(graphql`
    query {
      category: allSanityCategory {
        nodes {
          name
          slug {
            current
          }
          _id
        }
      }
    }
  `);

  const extras = [
    {
      name: 'gallery1',
      _id: 'gallery1',
      slug: { current: 'gallery1' },
    },
    {
      name: 'gallery2',
      _id: 'gallery2',
      slug: { current: 'gallery2' },
    },
    {
      name: 'gallery3',
      _id: 'gallery3',
      slug: { current: 'gallery3' },
    },
  ];

  const newList = [...category.nodes, ...extras];
  console.log(breakpoint.navChange);
  return (
    <NavFixed>
      {breakpoint.navChange ? (
        <NavbarNav>
          <Banner>{title}</Banner>
          <NavLink icon={<HomeIcon />} key="Home" />
          <NavItem
            linkref={linkref}
            icon={<BurgerIcon />}
            key="burger"
            open={open}
            setOpen={setOpen}>
            <NavCollapse
              list={newList}
              dropref={dropdownRef}
              setOpen={setOpen}
            />
          </NavItem>
        </NavbarNav>
      ) : (
        <NavBig items={newList.length}>
          <NavLink icon={<HomeIcon />} key="Home" />
          <Banner className="title">{title}</Banner>
          <Link to="/contact" activeStyle={{ color: 'yellow', opacity: '1' }}>
            About
          </Link>
          {newList.map(node => {
            const { name, _id, slug } = node;
            return (
              <Link
                className="style"
                to={`/category/${slug.current}`}
                key={_id}
                activeStyle={{ color: 'yellow', opacity: '1' }}>
                {name}
              </Link>
            );
          })}
        </NavBig>
      )}
    </NavFixed>
  );
}

export default Nav;
