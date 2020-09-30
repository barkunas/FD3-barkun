import React from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {
    render() {
        let textArr = this.props.text.split(/\<br ?\/?>/)
        let result = []
        textArr.forEach((elem, i) => {
            if (i) { result.push(<br key={i}/>) }
            result.push(elem);
        });
        return (
            <div className="BR2JSX">
                {result}
            </div>
        )

    }
}
export default BR2JSX;