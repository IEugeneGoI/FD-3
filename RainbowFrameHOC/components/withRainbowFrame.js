import React from "react";

function withRainbowFrame(colors) {
    return function(Comp) {
        return props => {
            let component = <Comp {...props} />;
            colors.forEach(color => {
                component = <div style={{border: 'solid 0.5em ' + color, padding: '0.4em'}}>{component}</div>
            });
            return component;
        }
    };
}

export default withRainbowFrame;

