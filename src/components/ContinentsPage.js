import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import WorldImage from '../images/world.svg';
import { getCountries } from '../redux/countries/countriesSlice';
import Continents from './Continents';
import '../styles/ContinentsPage.css';

function ContinentsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <>
      <div className="world-map">
        <div className="stat">
          <img src={WorldImage} alt="world awesome" />
          <h2>THE WORLD</h2>
        </div>
        <div className="stats">
          <h3>STATS BY CONTINENTS</h3>
        </div>
      </div>
      <Continents />
    </>
  );
}

export default ContinentsPage;
