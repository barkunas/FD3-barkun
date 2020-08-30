var InputField = React.createClass({
    displayName: "InputField",
    propTypes: {
        setOptionString: React.PropTypes.func.isRequired,
        value: React.PropTypes.string,
    },
    updateDataFromInput: function (event) {
        this.props.setOptionString(event.target.value);
    },
    render: function () {
        var $input = React.DOM.input({
            className: "Input",
            onChange: this.updateDataFromInput,
            value: this.props.value
        });
        return $input
    },
})