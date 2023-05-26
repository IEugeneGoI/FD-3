import React from 'react';

import withRainbowFrame from './withRainbowFrame';
import DoubleButton from './DoubleButton';
import './RainbowFrame.css';

class FrameRender extends React.Component {

  render() {
    let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
    let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

    return (
        <div className='Frame'>
            <DoubleButton caption1="однажды" caption2="пору" cbPressed={num => alert(num)} >
              в студёную зимнюю
            </DoubleButton>
            <br/>
            <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={num => alert(num)}>
                вышел, был сильный
            </FramedDoubleButton>
        </div>

    );
  }

}

export default FrameRender;
