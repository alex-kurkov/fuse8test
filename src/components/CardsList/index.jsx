import React from 'react';
import { Card } from '..';
import './styles.css';

const CardsList = ({ apartments }) => (
  <ul className="cards-list" aria-describedby="apartments list">
    {apartments.map(item => (
      <li key={item.id} className="cards-list__item">
        <a rel="noopener noreferrer" href={`/details/${item.id}`} className="cards-list__link">
          <Card data={item}>arlkvhefoh</Card>
        </a>
      </li>
    
    ))}
  </ul>

);

export default CardsList;
