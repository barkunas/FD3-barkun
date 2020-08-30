var Shop = React.createClass({
    displayName: 'Shop',
    propTypes: {
        data: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number,
            name: React.PropTypes.string,
            price: React.PropTypes.number,
            image: React.PropTypes.string,
            balance: React.PropTypes.number,
        })),
    },
    getDefaultProps: function () {
        return {
            data: []
        }
    },
    getInitialState: function () {
        return {
            data: this.props.data
        }
    },
    removeItem: function (name) {
        var newData = this.state.data.filter(item => {
            return item.Name != name
        });
        if (newData.length == 0) {
            newData = [{
                Name: "-",
                Price: "-",
                URL: "-",
                Quantity: "-"
            }]
        }
        this.setState({ data: newData })

    },
    render: function () {
        var headNamesArr = Object.keys(this.state.data[0]).map(headName => {
            return React.DOM.td({}, headName)
        });
        headNamesArr.push(React.DOM.td({}, 'Control'))

        var $thead = React.DOM.thead({}, React.DOM.tr({}, ...headNamesArr))
        var itemsArr = this.state.data.map((itemData) => {
            return React.createElement(Item, { data: itemData, removeItem: this.removeItem })
        });
        var $tbody = React.DOM.tbody({}, ...itemsArr);
        var $table = React.DOM.table({}, $thead, $tbody);
        return $table
    },

});

