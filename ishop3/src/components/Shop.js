import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import ItemInfo from './ItemInfo';
import NewProduct from './NewProduct'

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
    addItem = (itemData) => {
        this.setState({ data: [...this.state.data, itemData] })
    }
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
    editItem = (itemData) => {
        
        console.log(itemData)
    }
    resetBottomBlock = () => {
        this.setState({ newProductIsActive: false, showItemInfo: false })
    }
    newProductHandler = () => {
        this.setState({ newProductIsActive: true, showItemInfo: false })
    };
    itemRowHandler = (itemData) => {
        this.setState({ newProductIsActive: false, showItemInfo: true, paintItem: itemData.URL, ItemInfoType: 'itemInfo', currentItemData: itemData });
    };
    render() {
        var itemsArr = this.state.data.map((itemData) => {
            var color = itemData.URL == this.state.paintItem ? true : false;
            return (
                <Item data={itemData} editItem={this.editItem} removeItem={this.removeItem} key={itemData.Name} itemRowHandler={this.itemRowHandler} color={color} />
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
                            <td>Edit</td>
                            <td>Control</td>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsArr}
                    </tbody>
                </table>
                <NewProduct resetBottomBlock={this.resetBottomBlock} addItem={this.addItem} newProductHandler={this.newProductHandler} isActive={this.state.newProductIsActive} />
                {
                    (this.state.showItemInfo) ?
                        (<ItemInfo type={this.state.ItemInfoType} itemData={this.state.currentItemData} />)
                        : null
                }
            </div>
        )
    }
};

export default Shop;