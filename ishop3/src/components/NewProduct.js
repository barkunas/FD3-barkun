import React from 'react';

class NewProduct extends React.Component {
    static defaultProps = {
        currentItemData: {
            Name: "",
            Price: "",
            URL: "",
            Quantity: ""
        }
    }
    cancelClickHandler = () => {
        this.props.resetBottomBlock()
    }
    clickHandler = () => {
        this.props.newProductHandler()
    };
    formAddHandler = (event) => {
        event.preventDefault()
        var target = event.target
        switch (this.props.type) {
            case 1:
                this.props.addItem({
                    Name: target.Name.value,
                    Price: target.Price.value,
                    URL: target.URL.value,
                    Quantity: target.Quantity.value
                })
                break;
            case 2:
                this.props.saveEditedItem({
                    id: this.props.currentItemData.id,
                    Name: target.Name.value,
                    Price: target.Price.value,
                    URL: target.URL.value,
                    Quantity: target.Quantity.value
                })
                break;
            default:
                break;
        }

    }
    inputHandler = (event) => {
        var Name = event.target.name
        var value = event.target.value
        var data = this.props.currentItemData
        var newData = { ...data, [Name]: value }
        this.props.changeForm(newData)
    }
    editHandler = (event) => {

    }
    render() {
        var titleText = this.props.type == 2 ? 'Edit exiting Product' : 'Add new product';
        var buttonSaveIsActive = this.props.type == 1
        var buttonEditIsActive = this.props.type == 2
        if (this.props.type == 2) {
            this
        }
        if (!this.props.type) {
            return (
                <button onClick={this.clickHandler}>
                    New Product
                </button>
            )
        }
        return (
            <div>
                <h1>{titleText}</h1>
                <form onSubmit={this.formAddHandler}>
                    <span>ID: </span>
                    Name: <input name="Name" value={this.props.currentItemData.Name} onChange={this.inputHandler} />
                    Price: <input name="Price" value={this.props.currentItemData.Price} onChange={this.inputHandler} />
                    URL: <input name="URL" value={this.props.currentItemData.URL} onChange={this.inputHandler} />
                    Quantity: <input name="Quantity" value={this.props.currentItemData.Quantity} onChange={this.inputHandler} />
                    <button type="submit">Save</button>
                    <button value="Cancel" onClick={this.cancelClickHandler}>Cancel</button>
                </form>
            </div>
        )

    }
};

export default NewProduct;