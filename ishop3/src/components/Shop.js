import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import BottomBlock from './BottomBlock';

class Shop extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
            image: PropTypes.string,
            balance: PropTypes.number,
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
        /* if (newData.length == 0) {
            newData = [{
                Name: "-",
                Price: "-",
                URL: "-",
                Quantity: "-"
            }]
        }; */
        this.setState({ data: newData });
    };
    itemRowHandler = (itemData) => {
        this.setState({ paintItem: itemData.URL, bottomBlockType: 'itemInfo' ,currentItemData:itemData});
    };
    render() {
        var itemsArr = this.state.data.map((itemData) => {
            var color = itemData.URL == this.state.paintItem ? true : false;
            return (
                <Item data={itemData} removeItem={this.removeItem} key={itemData.Name} itemRowHandler={this.itemRowHandler} color={color} />
            )
        });
        return (
            <div>
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
                {
                    (true) &&
                    (<BottomBlock type={this.state.bottomBlockType} itemData={this.state.currentItemData} />)
                }
            </div>
        )
    }
};

export default Shop;