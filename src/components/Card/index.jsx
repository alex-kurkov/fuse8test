import React from 'react';
import { INDI_APT, SUPP_APT } from '../../utils/constants';
import './styles.css';

const Card = ({ data }) => {
  const { address, image, price, title, type, id } = data;

  const labelClass = `card__label card__label_type_${type === INDI_APT ? 'indie' : 'avail'}`
  const labelText = type === INDI_APT
    ? INDI_APT
    : `Restaurant & ${SUPP_APT}`

  const PriceText = () => (
    <p className="card__price card__text">
      New Properties for Sale from <span className="card__price_type_emphasised">&pound;{price.toLocaleString('en-UK')}</span>
    </p>
  )
  
  return (
    <article className="card">
      <div className="card__imageWrap">
        <img 
          className="card__image"
          src={image}
          alt={`image of ${title}`}
        />
        <div className={labelClass}>{labelText}</div>
      </div>
      <div className="card__info">
        <h3 className="card__title card__text">{title}</h3>
        <p className="card__address card__text">{address}</p>
        <PriceText />
        <p className="card__ownership-info card__text">Shared Ownership Available</p>
      </div>
    </article>
)};

export default Card;
