import React from 'react';

class NewProduct extends React.Component {
    state = {
        Name: "",
        Price: "",
        URL: "",
        Quantity: ""
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
        this.props.addItem({
            Name: target.Name.value,
            Price: target.Price.value,
            URL: target.URL.value,
            Quantity: target.Quantity.value
        })
    }
    inputHandler = (event) => {
        var Name = event.target.name
        var value = event.target.value
        this.setState({ [Name]: value })
    }
    render() {
        switch (this.props.isActive) {
            case true:
                return (
                    <div>
                        <h1>Add new product</h1>
                        <form onSubmit={this.formAddHandler}>
                            <span>ID: </span>
                            Name: <input name="Name" value={this.state.Name} onChange={this.inputHandler} />
                            Price: <input name="Price" value={this.state.Price} onChange={this.inputHandler} />
                            URL: <input name="URL" value={this.state.URL} onChange={this.inputHandler} />
                            Quantity: <input name="Quantity" value={this.state.Quantity} onChange={this.inputHandler} />
                            <button type="submit" >Save</button>
                            <button value="Cancel" onClick={this.cancelClickHandler}>Cancel</button>
                        </form>
                    </div>
                )
                break;

            default:
                return (
                    <button onClick={this.clickHandler}>
                        New Product
                    </button>
                )
        }

    }
};

export default NewProduct;