import React from 'react'

class BottomBlock extends React.Component {
    render() {
        var blockType = this.props.type
        var itemData = this.props.itemData
        switch (blockType) {
            case 'itemInfo':
                return (
                <div className={blockType}>
                    <div>{itemData.Name}</div>
                    <div>{itemData.Price}</div>
                </div>)
                break;

            default:
                return null
        }
    }
}

export default BottomBlock