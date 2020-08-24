var data = [
    {
        id: 321413,
        name: "Caffè Americano",
        price: 285,
        image: "27de6f3e-2fa2-4f76-bb04-263ab13ad9aa",
        balance: 200
    }, {
        id: 213211,
        name: "Blonde Roast",
        price: 245,
        image: "aedc77c9-e713-45b6-963a-2349ae4c77f7",
        balance: 100
    }, {
        id: 324444,
        name: "Caffè Misto",
        price: 325,
        image: "66a1eebb-ef06-4e37-8906-74588d64aa18",
        balance: 200
    }, {
        id: 32422,
        name: "Featured Starbucks® Dark Roast Coffee",
        price: 245,
        image: "300de9d9-0a7b-434e-b224-ac53cc94d54a",
        balance: 30
    }, {
        id: 325522,
        name: "Starbucks® Blonde Cappuccino",
        price: 415,
        image: "9fbc7101-6a46-44c2-a25f-19a049389ba1",
        balance: 2
    },
];

var ItemsTable = React.createClass({

    displayName: 'ItemsTable',

    getDefaultProps: function () {
        return { question: "Вопрос ни о чём" }
    },

    render: function () {
        var tableChildren = [];
        this.props.data.forEach(item => {
            var descriptionArr = [
                React.DOM.li({ className: 'ItemName' }, item.name),
                React.DOM.li({ className: 'ItemPrice' }, item.price)
            ];
            var $description = React.DOM.ul({ className: "Description" }, ...descriptionArr);
            var $image = React.DOM.img({ className: 'ItemImage',src:'img/'+item.image+'.jpeg' });
            var $imageDiv = React.DOM.div({className:"ImageDiv"},$image)
            var $item = React.DOM.tr({ className: 'Item', key: item.id }, React.DOM.td({className:"ItemTd"}, $description,$imageDiv));
            tableChildren.push($item)
        });
        return React.DOM.table({ className: 'ItemsTable' }, React.DOM.tbody({ className: "ItemsBody" }, tableChildren));
    },

});

ReactDOM.render(
    React.createElement(ItemsTable, { data: data }),
    document.getElementById('container')
);