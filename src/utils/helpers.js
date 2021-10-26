import image0 from '../images/mock-image0.png';
import image1 from '../images/mock-image1.png';
import image2 from '../images/mock-image2.png';

const mockImages = [ image0, image1, image2 ];
const getRandom = num => Math.round(Math.random() * num);

export const enrichedApartments = aptsArray => aptsArray
  .map(item => { 
    const image = mockImages[getRandom(2)];
    return { ...item, image };
  });

export const getFilteredByStringArr = (targetArr, searchField, searchPhrase) => targetArr
  .filter(item => item[searchField].toLowerCase().indexOf(searchPhrase.toLowerCase()) !== -1);
