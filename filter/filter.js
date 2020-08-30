var Filter = React.createClass({
    displayName: 'Filter',
    propTypes: {
        list: React.PropTypes.arrayOf(React.PropTypes.string),
    },
    getDefaultProps: function () {
        return {
            list: ["нет слов"],
        }
    },
    getInitialState: function () {
        return {
            optionString: "",
        }
    },
    setOptionString: function (str) {
        this.setState({ optionString: str });
    },
    render: function () {
        var $inputFiled = React.createElement(InputField, { setOptionString: this.setOptionString });
        var $list = React.createElement(List, { list: this.props.list, optionString: this.state.optionString });
        var $mainBlock = React.DOM.div({ className: "MainBlock" }, $inputFiled, $list);
        return $mainBlock
    },
})