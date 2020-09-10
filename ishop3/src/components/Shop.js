import React from 'react';
import Item from './Item';

class Shop extends React.Component {
    static propTypes = {
        data: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number,
            name: React.PropTypes.string,
            price: React.PropTypes.number,
            image: React.PropTypes.string,
            balance: React.PropTypes.number,
        }))
    };
    defaultProps = {
        data: []
    }

    state = {
        data: this.props.data
    };

    removeItem = (name) => {
        var newData = this.state.data.filter(item => {
            return item.Name != name
        });
        if (newData.length == 0) {
            newData = [{
                Name: "-",
                Price: "-",
                URL: "-",
                Quantity: "-"
            }]
        };
        this.setState({ data: newData });
    };
    paintItem = (id) => {
        this.setState({ paintItem: id });
    };
    render() {
        var headNamesArr = Object.keys(this.state.data[0]).map(headName => {
            return React.DOM.td({}, headName)
        });
        headNamesArr.push(React.DOM.td({}, 'Control'));

        var $thead = React.DOM.thead({}, React.DOM.tr({}, ...headNamesArr));
        var itemsArr = this.state.data.map((itemData) => {
            var color = itemData.URL == this.state.paintItem ? true : false;
            return React.createElement(Item, { data: itemData, removeItem: this.removeItem, key: itemData.Name, paintItem: this.paintItem, color: color })
        });
        var $tbody = React.DOM.tbody({}, itemsArr);
        var $table = React.DOM.table({}, $thead, $tbody);
        return $table
    }
};

export default Shop;