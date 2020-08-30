var InputField = React.createClass({
    displayName: "InputField",
    propTypes: {
        setOptionString: React.PropTypes.func.isRequired,
    },
    updateDataFromInput: function (event) {
        this.props.setOptionString(event.target.value);
    },
    render: function () {
        var $input = React.DOM.input({ className: "Input", onChange: this.updateDataFromInput });
        return $input
    },
})