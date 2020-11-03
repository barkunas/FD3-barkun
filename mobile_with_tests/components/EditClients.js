import React from 'react'
import mobileEvents from './events'

class EditClients extends React.PureComponent {
    form = {}
    state = { ...this.props.clientInfo }
    saveBtnHandler = () => {
        var status = this.form.status.checked || false;
        mobileEvents.emit('saveEditedClient', {
            ...this.props.clientInfo,
            name0: this.form.name0.value,
            name1: this.form.name1.value,
            name2: this.form.name2.value,
            balance: this.form.balance.value,
            status: status
        })
    }
    render() {
        console.log('EditClients reder')
        return (
            <div>
                Имя<input className="input-name0" ref={(ref) => this.form.name0 = ref} defaultValue={this.state.name0} />
                Фамилия<input className="input-name1" ref={(ref) => this.form.name1 = ref} defaultValue={this.state.name1} />
                Отчество<input className="input-name2" ref={(ref) => this.form.name2 = ref} defaultValue={this.state.name2} />
                Баланс<input className="input-balance" ref={(ref) => this.form.balance = ref} defaultValue={this.state.balance} />
                Статус<input className="input-status" type="checkbox" ref={(ref) => this.form.status = ref} defaultChecked={!!this.state.status} />
                <br />
                <input className="saveNewUserBtn" type="button" value="сохранить" onClick={this.saveBtnHandler} />
            </div>
        )
    }
}

export default EditClients;