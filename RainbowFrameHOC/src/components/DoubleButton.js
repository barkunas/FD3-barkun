import React from 'react'
import PropTypes from 'prop-types';

class DoubleButton extends React.Component {
    static propTypes = {
        cbPressed: PropTypes.func
    }
    pressed = (event) => {
        this.props.cbPressed(event.target.dataset.type);
    }
    render() {
        return (
            <div>
                <button onClick={this.pressed} data-type={1}>{this.props.caption1}</button>
                {this.props.children}
                <button onClick={this.pressed} data-type={2}>{this.props.caption2}</button>
            </div>
        )
    }
}

export default DoubleButton;