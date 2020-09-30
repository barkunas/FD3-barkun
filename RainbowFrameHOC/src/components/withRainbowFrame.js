import React from 'react'

function withRainbowFrame(colors) {
    return Component => {
        return props => {
            var frames = <Component {...props} />;
            colors.forEach(color => {
                frames =
                    <div style={{ border: "solid 1px " + color, padding: "10px" }}>
                        {frames}
                    </div>;
            });
            return frames
        }

    }
}

export default withRainbowFrame;