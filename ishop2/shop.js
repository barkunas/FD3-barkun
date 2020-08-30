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

    render: function () {
        console.log(this)
        var headNamesArr = Object.keys(this.props.data[0]).map(headName => {
            return React.DOM.td({}, headName)
        });
        headNamesArr.push(React.DOM.td({}, 'Control'))
        var $thead = React.DOM.thead({}, React.DOM.tr({}, ...headNamesArr))
        var itemsArr = this.props.data.map((itemData) => {
            return React.createElement(Item, { data: itemData })
        })
        
        var $tbody = React.DOM.tbody({}, ...itemsArr);
        var $table = React.DOM.table({}, $thead, $tbody);
        return $table
    },

});

