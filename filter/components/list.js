var List = React.createClass({
    displayName: "List",
    propTypes: {
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        optionString: React.PropTypes.string,
    },
    getDefaultProps: function () {
        return {
            optionString: "",
        }
    },
    render: function () {
        var listArr = this.props.list;
        var $listArr = listArr.map(str => {
            if (str.indexOf(this.props.optionString) != -1) return React.DOM.option({ className: "Option" }, str);
        });
        var $select = React.DOM.select({ className: "Select", size: 5 }, ...$listArr);
        return $select
    }
})