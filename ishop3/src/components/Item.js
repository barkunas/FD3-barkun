import React from 'react';

class Item extends React.Component {
    state = {
        color: false,
    }
    buttonHandler = (event) => {
        event.stopPropagation();
        confirm(`Удалить ${this.props.data.Name} ?`)
            ? this.props.removeItem(this.props.data.Name)
            : null;
    }
    rowHandler = () => {
        this.props.paintItem(this.props.data.URL)
    }
    render() {
        var data = this.props.data;
        var $tdName = React.DOM.td({}, data.Name);
        var $tdPrice = React.DOM.td({}, data.Price);
        var $tdURL = React.DOM.td({}, getImagePath(data.URL));
        var $tdQuantity = React.DOM.td({}, data.Quantity);
        var $tdControl = React.DOM.td({}, React.DOM.button({ onClick: this.buttonHandler }, "Delete"));
        var $tr = React.DOM.tr({ className: this.props.color ? "Trtrue" : "Trfalse", onClick: this.rowHandler }, $tdName, $tdPrice, $tdURL, $tdQuantity, $tdControl);
        return $tr
    }
};

function getImagePath(name) {
    return 'img/' + name + '.jpeg'
};

export default Item;