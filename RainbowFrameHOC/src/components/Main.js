import React from 'react';
import DoubleButton from './DoubleButton.js';
import withRainbowFrame from './withRainbowFrame.js';


class Main extends React.Component {
    testCallback = (num) => {
        console.log(num);
    }
    render() {
        var FramedDoubleButton = withRainbowFrame(this.props.colors)(DoubleButton);
        return (
            <div>
                <DoubleButton caption1="однажды" caption2="пору" cbPressed={this.testCallback}>
                    в студёную зимнюю
                </DoubleButton>
                <FramedDoubleButton caption1="однажды" caption2="пору" cbPressed={this.testCallback}>
                    в студёную зимнюю
                </FramedDoubleButton>
            </div>
        );
    }
};

export default Main;