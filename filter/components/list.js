var List = React.createClass({
    displayName: "List",
    propTypes: {
        list: React.PropTypes.arrayOf(React.PropTypes.string),
        optionString: React.PropTypes.string,
        optionAZ: React.PropTypes.bool,
    },
    getDefaultProps: function () {
        return {
            optionString: "",
            optionAZ: false,
        }
    },
    render: function () {
        let unsortedlistArr = this.props.list;
        var listArr = this.props.optionAZ ? unsortedlistArr.slice().sort() : unsortedlistArr;
        var $listArr = listArr.map(str => {
            if (str.indexOf(this.props.optionString) != -1) return React.DOM.option({ className: "Option" }, str);
        });
        var $select = React.DOM.select({
            className: "Select",
            size: 5,
        }, ...$listArr);
        return $select
    }
})