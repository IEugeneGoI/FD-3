import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render () {
    const regexp = /(?:<br>|<br\/>|<br\s+\/>)+/gi;
    const text = this.props.text.split(regexp);

    const textArr = [];

    for(let i = 0; i < text.length; i++) {
      if(i == text.length - 1) {
        textArr.push(text[i]);
        console.log(text[i])
      } else {
        textArr.push(text[i], <br key={i}/>);
      }

    }

    return (
      <div className='br2jsx'>
        {textArr}
      </div>
    );
  }
}

export default BR2JSX;
