import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/Ishop';
import itemsArr from './items.json';

var shopName = 'Магазин компьютерной техники';

ReactDOM.render(
  <Ishop name = {shopName}  items = {itemsArr}/>, 
  document.getElementById('container') 
);

