import React from 'react';
import { button } from '../../../Common/Forms/Forms';

const FavoritCity = ({favoritCity,removeFavorit}) => {
  if (!favoritCity)
    return null
  return (
    <div>
      <b>Избранный город: </b>{favoritCity}
      { favoritCity &&
        <div style={{display: 'inline-block',margin: '0px 10px'}}>
          {button(removeFavorit,"warning","Удалить")}
        </div>
      }
    </div>
  );
};

export default FavoritCity;