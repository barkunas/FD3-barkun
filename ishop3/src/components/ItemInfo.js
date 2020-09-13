import React from 'react'

class ItemInfo extends React.Component {
    render() {
        var blockType = this.props.type
        var itemData = this.props.itemData
        switch (blockType) {
            case 'itemInfo':
                return (
                    <div className={blockType}>
                        <span>ID: {this.props.itemData.id}</span>
                        <h2>{itemData.Name}</h2>
                        <div>{itemData.Price}</div>
                    </div>)
                break;

            default:
                return null
        }
    }
}

export default ItemInfo