﻿import React from 'react';

import RainbowFrame from './RainbowFrame';

class FrameRender extends React.Component {

  render() {
    let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];

    return (
      <RainbowFrame colors = {colors}>
        Hello!
      </RainbowFrame>
    );
  }

}

export default FrameRender;
