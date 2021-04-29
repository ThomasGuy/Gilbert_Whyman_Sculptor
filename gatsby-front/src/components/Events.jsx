import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CalendarIcon from '../assets/svg/calendar3.svg';
import { mediaQuery } from '../styles/mediaQuery';

const Container = styled.div`
  /* background-color: var(--bg_link); */
  width: 90%;
  height: 30rem;
  margin: 0 auto 4rem auto;
  overflow-y: auto;
  scrollbar-width: none;

  ${mediaQuery('sm')`
    font-size: 1.8rem;
    height: 35rem;
  `};

  ${mediaQuery('md')`
    width: 80%;
  `};

  ${mediaQuery('lg')`
    height: 40rem;
  `};
`;

const EventList = styled.ul`
  p {
    margin: 0;
  }
  h3,
  h3 {
    margin-bottom: 0;
  }
`;

const Title = styled.div`
  position: absolute;
  top: -3px;
  left: 3rem;
  transform: rotate(-2deg);
  display: block;
  background-color: var(--yellow);
  color: var(--black);
  font-weight: 600;
  line-height: 2;
  padding: 0 1rem;
  z-index: 1;

  ${mediaQuery('sm')`
    font-size: 2.6rem;
  `};

  ${mediaQuery('lg')`
    font-size: 3rem;
  `};
`;

const EventListItem = styled.li`
  position: relative;
  background: var(--bg_event);
  opacity: 0.9;
  padding: 0 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  padding-top: 2rem;
  border: 1px solid var(--black);
  box-shadow: var(--bs);

  h3 {
    margin-top: 1.8rem;
    color: inherit;
    font-size: inherit;
    font-weight: 400;
    text-align: center;
  }

  p {
    padding: 0.5rem 2rem;
  }

  hr {
    border: 1px solid #1a1714;
    margin: 6px 0 2px 0;
  }

  ${mediaQuery('xs')`
    font-size: 1.5rem;
  `};

  ${mediaQuery('sm')`
    padding-top: 3rem;
    font-size: 1.8rem;

    h3 {
      margin-top: 2.8rem
    }
    `};

  ${mediaQuery('lg')`
    font-size: 2rem;

        h3 {
          margin-top: 3rem
        }
  `};
`;

export function Event({ evt }) {
  const { name, address, dates, about } = evt;
  const { number, road, city, postcode, country } = address;
  return (
    <EventListItem>
      <Title>{name}</Title>
      <h3>
        <CalendarIcon /> &nbsp; {dates.start} &nbsp;&#8209;&nbsp; {dates.finish}
      </h3>
      <p>{about}</p>
      <hr />
      <p>
        {`${number} ${road}, ${city}`}
        {postcode && ` ${postcode}`} {country && `, ${country}`}
      </p>
    </EventListItem>
  );
}

export default function Events({ events }) {
  const evtList = events.map(evt => <Event evt={evt} key={evt._key} />);
  return (
    <Container>
      <EventList>{evtList}</EventList>
    </Container>
  );
}

Events.propTypes = {
  events: PropTypes.array,
};
