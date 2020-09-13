import React from 'react';
import './NewProduct.css';

class NewProduct extends React.Component {
    static defaultProps = {
        currentItemData: {
            id: Math.floor(Math.random() * Math.floor(10000000)),
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
                    id: this.props.currentItemData.id,
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
        var Name = event.target.name;
        var value = event.target.value;
        var data = this.props.currentItemData;
        var newData = { ...data, [Name]: value };
        this.props.changeForm(newData);
    }
    render() {
        var titleText = this.props.type == 2 ? 'Edit exiting Product' : 'Add new product';
        if (this.props.type == 2) {
            this
        };
        if (!this.props.type) {
            return (
                <button onClick={this.clickHandler}>
                    New Product
                </button>
            )
        };

        var isSaveBtnDisable = Object.values(this.props.testData).some(e => { return e == false });

        return (
            <div>
                <h1>{titleText}</h1>
                <form onSubmit={this.formAddHandler}>
                    <div>
                        <span>ID: {this.props.currentItemData.id}</span>
                    </div>
                    <div>
                        <div>Name:</div>
                        <input name="Name" value={this.props.currentItemData.Name} onChange={this.inputHandler} />
                        {(!this.props.testData.Name) && <span className="ErrorSpan">Какое-то странное имя, измените!</span>}
                    </div>
                    <div>
                        <div>Price:</div>
                        <input type="number" name="Price" value={this.props.currentItemData.Price} onChange={this.inputHandler} />
                        {(!this.props.testData.Price) && <span className="ErrorSpan">Введите корректное число</span>}
                    </div>
                    <div>
                        <div>URL:</div>
                        <input name="URL" value={this.props.currentItemData.URL} onChange={this.inputHandler} />
                        {(!this.props.testData.URL) && <span className="ErrorSpan">Неправильный URL</span>}
                    </div>
                    <div>
                        <div>Quantity:</div>
                        <input type="number" name="Quantity" value={this.props.currentItemData.Quantity} onChange={this.inputHandler} />
                        {(!this.props.testData.Quantity) && <span className="ErrorSpan">Должно быть целое число</span>}
                    </div>
                    <div>
                        <button type="submit" disabled={isSaveBtnDisable}>Save</button>
                        <button value="Cancel" onClick={this.cancelClickHandler}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default NewProduct;