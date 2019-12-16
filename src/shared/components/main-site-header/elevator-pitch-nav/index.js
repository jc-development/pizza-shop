import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import isActive from '../assets/utils/isActive';

import './assets/css/elevator-pitch.css';

const ElevatorPitchNav = props => {

  const pitches = [
    "You are a good person. You need good pizza.",
    "You deserve a better pizza. We can help.",
    "Old-world homemade goodness.",
  ];

  const howToOrder = "Order Online or Call 555-555-5555";

  const [elevatorPitchIndex, setElevatorPitchIndex] = useState(0);
  const [elevatorPitch, setElevatorPitch] = useState( pitches[elevatorPitchIndex] );
  const [ elevatorPitchTurn, setElevatorPitchTurn ] = useState(false);

  const intervalRef = useRef();

  useEffect(
    () => {
      const id = setInterval(() => {
        if (!elevatorPitchTurn) {
          (elevatorPitchIndex < pitches.length - 1) ? setElevatorPitchIndex(elevatorPitchIndex + 1) : setElevatorPitchIndex(0);
          setElevatorPitchTurn(true);
        } else {
          setElevatorPitchTurn(false);
        }
      }, 2500);

      elevatorPitchTurn ? setElevatorPitch( pitches[elevatorPitchIndex] ) : setElevatorPitch( howToOrder );
      intervalRef.current = id;

      return () => {
        clearInterval(intervalRef.current);
      }
    }
  );

  const passLink = passedLink => props.activeMainNav !== null ? isActive({ linkName: passedLink, activeLinkRedux: props.activeMainNav }) : null;

  return (
    <span className={ props.isOpen ? 'main-header-middle hidden' : 'main-header-middle' }>
      <h2>{elevatorPitch}</h2>
      <nav>
        <ul className="thirds-equal">
          <li><Link to="/pizzas" className={ passLink('pizzas') }>pizzas</Link></li>
          <li><Link to="/wings" className={ passLink('wings') }>wings</Link></li>
          <li><Link to="/hot-subs" className={ passLink('hot-subs') }>hot subs</Link></li>
        </ul>
      </nav>
    </span>
  );
};


export default ElevatorPitchNav;
