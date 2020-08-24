var shopName = "Coffee Shop 24";
var data = [
    {
        id: 321413,
        name: "Caffè Americano",
        price: 2.85,
        image: "27de6f3e-2fa2-4f76-bb04-263ab13ad9aa",
        balance: 200
    }, {
        id: 213211,
        name: "Blonde Roast",
        price: 2.45,
        image: "aedc77c9-e713-45b6-963a-2349ae4c77f7",
        balance: 100
    }, {
        id: 324444,
        name: "Caffè Misto",
        price: 3.25,
        image: "66a1eebb-ef06-4e37-8906-74588d64aa18",
        balance: 200
    }, {
        id: 32422,
        name: "Featured Starbucks® Dark Roast Coffee",
        price: 2.45,
        image: "300de9d9-0a7b-434e-b224-ac53cc94d54a",
        balance: 30
    }, {
        id: 325522,
        name: "Starbucks® Blonde Cappuccino",
        price: 4.15,
        image: "9fbc7101-6a46-44c2-a25f-19a049389ba1",
        balance: 2
    },
];

var ItemsTable = React.createClass({
    displayName: 'ItemsTable',
    propTypes: {
        shopName: React.PropTypes.string,
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
            shopName: "Упс! Что-то пошло не так",
            data: []
        }
    },

    render: function () {
        var $shopName = React.DOM.thead({}, React.DOM.tr({}, React.DOM.td({ className: "ShopName" }, this.props.shopName)))
        var tableChildren = this.props.data.map(item => {
            if (item.balance <= 0) { return };
            var descriptionArr = [
                React.DOM.li({ className: 'ItemName' }, item.name),
                React.DOM.li({ className: 'ItemPrice' }, item.price + ' $')
            ];
            var $description = React.DOM.ul({ className: "Description" }, ...descriptionArr);
            var $image = React.DOM.img({ className: 'ItemImage', src: getImagePath(item.image) });
            var $imageDiv = React.DOM.div({ className: "ImageDiv" }, $image);
            return React.DOM.tr({ className: 'Item', key: item.id }, React.DOM.td({ className: "ItemTd" }, $description, $imageDiv));
        });
        return React.DOM.table({ className: 'ItemsTable' }, $shopName, React.DOM.tbody({ className: "ItemsBody" }, tableChildren));
    },

});

ReactDOM.render(
    React.createElement(ItemsTable, { shopName: shopName, data: data }),
    document.getElementById('container')
);

function getImagePath(name) {
    return 'img/' + name + '.jpeg'
}