var Item = React.createClass({
    displayName: "Item",
    buttonHandler:function(){
        this.props.removeItem(this.props.data.Name)
    },
    render: function () {
        var data = this.props.data;
        var $tdName = React.DOM.td({},data.Name);
        var $tdPrice = React.DOM.td({},data.Price);
        var $tdURL = React.DOM.td({},getImagePath(data.URL));
        var $tdQuantity = React.DOM.td({},data.Quantity);
        var $tdControl = React.DOM.td({},React.DOM.button({onClick:this.buttonHandler},"Delete"));
        var $tr = React.DOM.tr({},$tdName,$tdPrice,$tdURL,$tdQuantity,$tdControl)
        return $tr
    }
})

function getImagePath(name) {
    return 'img/' + name + '.jpeg'
}