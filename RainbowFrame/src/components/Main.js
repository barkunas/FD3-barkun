import React from 'react';
import RainbowFrame from './RainbowFrame'

class Main extends React.Component {

    render() {
        return (
            <RainbowFrame colors={this.props.colors}>
                Hello!
            </RainbowFrame>
        );
    }
};

export default Main;