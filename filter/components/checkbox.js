var Checkbox = React.createClass({
    displayName:"Checkbox",
    propTypes: {
        setOptionAZ: React.PropTypes.func.isRequired,
    },
    updateDataFromInput: function (event) {
        this.props.setOptionAZ(event.target.checked);
    },
    render:function () {
        var $checkbox = React.DOM.input({className:"Checkbox",type:"checkbox",onChange:this.updateDataFromInput});
        return $checkbox
    }
})