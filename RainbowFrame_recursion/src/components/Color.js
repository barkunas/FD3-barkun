import React from 'react';
import PropTypes from 'prop-types';

class Color extends React.Component {
    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.string)
    };
    render() {
        if (this.props.colors.length == 0) { return (<span>{'Hello!'}</span>) }
        var currentColor = this.props.colors.shift()
        return (
            <div style={{ border: "solid 1px " + currentColor, padding: "10px" }}>
                <Color colors={this.props.colors}></Color>
            </div>
        )
    };
}
export default Color;