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
        this.setState({ data: [...this.state.data, itemData] })
    }
    removeItem = (name) => {
        var newData = this.state.data.filter(item => {
            return item.Name != name
        });
        this.setState({ data: newData });
    };
    editItem = (itemData) => {
        this.setState({newProductType: 2,currentItemDataForm:itemData, showItemInfo: false, paintItem: itemData.URL})
    }
    saveEditedItem = (itemData)=>{
        var itemKey = itemData.id;
        var currItemIndex = this.state.data.findIndex((item)=>{
            return item.id==itemKey
        })
        var newData = this.state.data.slice()
        newData[currItemIndex]=itemData
        this.setState({data:newData})
    }
    resetBottomBlock = () => {
        this.setState({ newProductType: 0, showItemInfo: false,hasChengesInForm:false })
    }
    newProductHandler = () => {
        this.setState({ newProductType: 1, showItemInfo: false ,currentItemDataForm:undefined})
    };
    itemRowHandler = (itemData) => {
        this.setState({ newProductType: 0, showItemInfo: true, paintItem: itemData.URL, ItemInfoType: 'itemInfo', currentItemData: itemData });
    };
    changeForm=(itemData)=>{
        var hasChengesInForm = objectСomparison(itemData,this.state.currentItemData)
        this.setState({currentItemDataForm: itemData,hasChengesInForm})
    }
    render() {
        var itemsArr = this.state.data.map((itemData) => {
            var color = itemData.URL == this.state.paintItem ? true : false;
            return (
                <Item data={itemData} editItem={this.editItem} removeItem={this.removeItem} key={itemData.id} itemRowHandler={this.itemRowHandler} color={color} hasChengesInForm={this.state.hasChengesInForm}/>
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
                currentItemData={this.state.currentItemDataForm} />
                {
                    (this.state.showItemInfo) ?
                        (<ItemInfo type={this.state.ItemInfoType} itemData={this.state.currentItemData} />)
                        : null
                }
            </div>
        )
    }
};

function objectСomparison(obj1,obj2){
    for (let key in obj1) {
        if (obj1[key]!=obj2[key]) return true
    }
    return false
}

export default Shop;