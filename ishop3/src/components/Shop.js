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
    static defaultProps = {
        data: []
    }

    state = {
        data: this.props.data
    };
    addItem = (itemData) => {
        itemData.id = Math.floor(Math.random() * Math.floor(10000000));

        this.setState({ newProductType: 0, data: [...this.state.data, itemData], hasChengesInForm: false })
    }
    removeItem = (name) => {
        var newData = this.state.data.filter(item => {
            return item.Name != name
        });
        this.setState({ data: newData });
    };
    editItem = (itemData) => {
        if (!this.state.currentItemData) this.state.currentItemData = itemData;
        if (this.state.currentItemData.id != itemData.id) this.state.currentItemData = itemData;
        this.setState({ newProductType: 2, currentItemDataForm: itemData, showItemInfo: false, paintItem: itemData.id })
    }
    saveEditedItem = (itemData) => {
        var itemKey = itemData.id;
        var currItemIndex = this.state.data.findIndex((item) => {
            return item.id == itemKey
        })
        var newData = this.state.data.slice()
        newData[currItemIndex] = itemData
        this.setState({ newProductType: 0, data: newData, hasChengesInForm: false })
    }
    resetBottomBlock = () => {
        this.setState({ newProductType: 0, showItemInfo: false, hasChengesInForm: false })
    }
    newProductHandler = () => {
        this.setState({ newProductType: 1, showItemInfo: false, currentItemDataForm: undefined, paintItem: "", hasChengesInForm: true })
    };
    itemRowHandler = (itemData) => {
        this.setState({ newProductType: 0, showItemInfo: true, paintItem: itemData.id, ItemInfoType: 'itemInfo', currentItemData: itemData });
    };
    changeForm = (itemData) => {
        var testData = getIncorrectData(itemData);
        var hasChengesInForm = this.state.currentItemData ? objectСomparison(itemData, this.state.currentItemData) : false;
        this.setState({ currentItemDataForm: itemData, hasChengesInForm, testData })
    }
    render() {
        var itemsArr = this.state.data.map((itemData) => {
            var color = itemData.id == this.state.paintItem ? true : false;
            return (
                <Item data={itemData} editItem={this.editItem} removeItem={this.removeItem} key={itemData.id} itemRowHandler={this.itemRowHandler} color={color} hasChengesInForm={this.state.hasChengesInForm} />
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
                <NewProduct
                    saveEditedItem={this.saveEditedItem}
                    changeForm={this.changeForm}
                    resetBottomBlock={this.resetBottomBlock}
                    addItem={this.addItem}
                    newProductHandler={this.newProductHandler}
                    type={this.state.newProductType}
                    currentItemData={this.state.currentItemDataForm}
                    testData={this.state.testData} />
                {
                    (this.state.showItemInfo) ?
                        (<ItemInfo type={this.state.ItemInfoType} itemData={this.state.currentItemData} />)
                        : null
                }
            </div>
        )
    }
};

function objectСomparison(obj1, obj2) {
    for (let key in obj1) {
        if (obj1[key] != obj2[key]) return true
    }
    return false
}
function getIncorrectData(data) {
    return {
        Name: typeof data.Name == 'string' && data.Name.length > 0,
        Price: typeof +data.Price == 'number' && (data.Price.length + '') > 0,
        URL: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(data.URL),
        Quantity: Number.isInteger(+data.Quantity) && (data.Quantity.length + '') > 0
    }
}
export default Shop;