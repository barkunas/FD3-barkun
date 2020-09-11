import React from 'react'

class ItemInfo extends React.Component {
    render() {
        var blockType = this.props.type
        var itemData = this.props.itemData
        switch (blockType) {
            case 'itemInfo':
                return (
                <div className={blockType}>
                    <h1>{itemData.Name}</h1>
                    <div>{itemData.Price}</div>
                </div>)
                break;

            default:
                return null
        }
    }
}

export default ItemInfo