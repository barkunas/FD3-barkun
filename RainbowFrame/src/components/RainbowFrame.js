import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {
    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.string)
    };
    renderFrames(arr) {
        var currentColor = arr.shift()
        if (arr.length == 0) { return (this.props.children) }
        return <div style={{ border: "solid 1px " + currentColor, padding: "10px" }}>{this.renderFrames(arr)}</div>
    }
    render() {
        return this.renderFrames(this.props.colors)
    };
}

export default RainbowFrame;