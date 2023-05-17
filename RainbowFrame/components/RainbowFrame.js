import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  
  render () {
    let children = this.props.children;
    this.props.colors.forEach( color => {
        children = <div style = { { border: 'solid 0.5em ' + color, padding: '0.4em' } }>{children}</div>
      } 
    );

    return (
      children
    );
  }
}

export default RainbowFrame;
