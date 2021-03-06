import React, { useCallback, useState, useEffect } from 'react';
import { useLocalStorage } from '../../utils/hooks';
import { getFilteredByStringArr } from '../../utils/helpers';
import { ADD_ITEMS_NUMBER, FILTER_SENSITIVITY, ITEMS_SHOWN_INIT } from '../../utils/constants';
import { CardsList, FilterForm } from '..';
import ChevronIcon from '../Icons/ChevronIcon';
import './styles.css';

const Main = ({ aptsList }) => {
  const [ apartments, setApartments ] = useState([]);
  const [ filterText, setFilterText ] = useLocalStorage('filterText', '');
  const [itemsShown, setItemsShown] = useState(ITEMS_SHOWN_INIT);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const addCards = () => {
    setItemsShown(itemsShown + ADD_ITEMS_NUMBER);
  };

  const checkButtonState = useCallback(() => {
    if (apartments.length > itemsShown) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [apartments, itemsShown])


  const filterMemoCb = () => {
    if (filterText.length < FILTER_SENSITIVITY) {
      setApartments(aptsList);
    } else {
      const filteredApts = getFilteredByStringArr(apartments, 'title', filterText)
      setApartments(filteredApts);
    }
  };

  useEffect(() => {
    checkButtonState();
  }, [itemsShown, apartments, checkButtonState]);

  useEffect(() => {
    setApartments(aptsList)
  }, [aptsList]);

  useEffect(() => {
    filterMemoCb();
  }, [filterText]);
  
  return (
    <main className="main">
      <FilterForm value={filterText} setValue={setFilterText}/>
      {!!apartments.length
        ? <CardsList apartments={apartments.slice(0, itemsShown)}/>
        : <span className="main__status-text">no apartments found....</span>
      }
      <button 
        className={`main__button main__button_disabled_${buttonDisabled}`} 
        onClick={addCards}
        aria-label="See more"
      >
          See more...
          <ChevronIcon/>
      </button>
    </main>
  )
}

export default Main;