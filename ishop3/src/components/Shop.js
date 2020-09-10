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
        var itemsArr = this.state.data.map((itemData) => {
            var color = itemData.URL == this.state.paintItem ? true : false;
            return (
                <Item data={itemData} removeItem={this.removeItem} key={itemData.Name} paintItem={this.paintItem} color={color}></Item>
            )
        });
        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>URL</td>
                        <td>Quantity</td>
                        <td>Control</td>
                    </tr>
                </thead>
                <tbody>
                    {itemsArr}
                </tbody>
            </table>
        )
    }
};

export default Shop;