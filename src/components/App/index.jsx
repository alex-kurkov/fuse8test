import React, { useEffect, useState } from 'react';
import { Main } from '..';
import { getApartmentsRequest } from '../../utils/api';
import { enrichedApartments } from '../../utils/helpers';
import './styles.css';

function App() {
  const [ aptsList, setAptsList ] = useState([]);

  useEffect(() => {
    getApartmentsRequest()
      .then(data => {
        const modifiedData = enrichedApartments(data);
        setAptsList(modifiedData);
      })
      .catch(e => console.error(e));
  }, [])


  return (
    <div className="app">
      <h1 className="app__title">
        Our Latest Developments
      </h1>
      <Main aptsList={aptsList} />
    </div>
  );
}

export default App;
