var Button = React.createClass({
    displayName: "Button",
    propTypes: {
        setDefaultOptions: React.PropTypes.func.isRequired,
    },
    getDefaultProps: function () {
        return {
            buttonName: "Сброс"
        }
    },
    render: function () {
        var $button = React.DOM.button({
            className: "Button",
            onClick: this.props.setDefaultOptions
        }, this.props.buttonName);
        return $button
    },
})