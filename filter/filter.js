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
            optionAZ:false,
        }
    },
    setOptionString: function (str) {
        this.setState({ optionString: str });
    },
    setOptionAZ:function (bool) {
        this.setState({optionAZ:bool})
    },
    render: function () {
        var $inputFiled = React.createElement(InputField, { setOptionString: this.setOptionString });
        var $list = React.createElement(List, { list: this.props.list, optionString: this.state.optionString,optionAZ:this.state.optionAZ });
        var $checkbox = React.createElement(Checkbox,{setOptionAZ:this.setOptionAZ})
        var $headDiv = React.DOM.div({className:"HeadDiv"},$checkbox, $inputFiled)
        var $mainBlock = React.DOM.div({ className: "MainBlock" }, $headDiv, $list);
        return $mainBlock
    },
})