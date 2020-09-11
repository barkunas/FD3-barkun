import React from 'react';

class Item extends React.Component {
    state = {
        color: false,
    }
    delButtonHandler = (event) => {
        event.stopPropagation();
        confirm(`Удалить ${this.props.data.Name} ?`)
            ? this.props.removeItem(this.props.data.Name)
            : null;
    }
    editButtonHandler = (event) => {
        event.stopPropagation();
        this.props.editItem(this.props.data)
    }
    rowHandler = () => {
        this.props.itemRowHandler(this.props.data)
    }
    render() {
        var data = this.props.data;
        return (
            <tr className={this.props.color ? "Trtrue" : "Trfalse"} onClick={this.rowHandler} >
                <td>{data.Name}</td>
                <td>{data.Price}</td>
                <td>{getImagePath(data.URL)}</td>
                <td>{data.Quantity}</td>
                <td>
                    <button onClick={this.editButtonHandler}>Edit</button>
                </td>
                <td>
                    <button onClick={this.delButtonHandler}>Delete</button>
                </td>
            </tr >
        )
    }
};

function getImagePath(name) {
    return 'img/' + name + '.jpeg'
};

export default Item;