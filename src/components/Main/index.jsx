import React, { useCallback, useState, useEffect } from 'react';
import { useLocalStorage } from '../../utils/hooks';
import { CardsList, FilterForm } from '..';
import { ADDITEMSNUMBER, FILTER_SENSITIVITY, ITEMSSHOWNINIT } from '../../utils/constants';
import ChevronIcon from '../Icons/ChevronIcon';
import './styles.css';

const Main = ({ aptsList }) => {
  const [ apartments, setApartments ] = useState([]);
  const [ filterText, setFilterText ] = useLocalStorage('filterText', '');
  const [itemsShown, setItemsShown] = useState(ITEMSSHOWNINIT);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const addCards = () => {
    setItemsShown(itemsShown + ADDITEMSNUMBER);
  };

  const checkButtonState = useCallback(() => {
    if (apartments.length > itemsShown) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [apartments, itemsShown])

  const filterMemoCb = useCallback((text) => {
    if (text.length < FILTER_SENSITIVITY) {
      setApartments(aptsList);
    } else {
      const filteredApts = apartments
        .filter(item => item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1);
      setApartments(filteredApts);
    }
  }, [ filterText, aptsList ])

  useEffect(() => {
    checkButtonState();
  }, [itemsShown, apartments]);

  useEffect(() => {
    setApartments(aptsList)
  }, [aptsList]);

  useEffect(() => {
    filterMemoCb(filterText);
  }, [filterText]);
  
  return (
    <main className="main">
      <FilterForm value={filterText} setValue={setFilterText}/>
      {!!apartments.length
        ? <CardsList apartments={apartments.slice(0, itemsShown)}/>
        : <>no cards....</>
      }
      <button className={`main__button main__button_disabled_${buttonDisabled}`} onClick={addCards}>See more...<ChevronIcon/></button>
    </main>
  )
}

export default Main;