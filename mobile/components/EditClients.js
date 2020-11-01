import React from 'react'
import mobileEvents from './events'

class EditClients extends React.PureComponent {
    form = {}
    saveBtnHandler = () => {
        var status = this.form.status.checked?1:0;
        mobileEvents.emit('saveEditedClient', {
            ...this.props.clientInfo,
            name0:this.form.name0.value,
            name1: this.form.name1.value,
            name2: this.form.name2.value,
            balance: this.form.balance.value,
            status: status,
            company: this.form.company.value
        })
    }
    render() {
        console.log('EditClients reder')
        return (
            <div>
                Имя<input ref={(ref) => this.form.name0 = ref} defaultValue={this.props.clientInfo.name0}/>
                Фамилия<input ref={(ref) => this.form.name1 = ref} defaultValue={this.props.clientInfo.name1} />
                Отчество<input ref={(ref) => this.form.name2 = ref} defaultValue={this.props.clientInfo.name2} />
                Компания<input ref={(ref) => this.form.company = ref} defaultValue={this.props.clientInfo.company} />
                Баланс<input ref={(ref) => this.form.balance = ref} defaultValue={this.props.clientInfo.balance} />
                Статус<input type="checkbox" ref={(ref) => this.form.status = ref} defaultChecked={this.props.clientInfo.status} />
                <br />
                <input type="button" value="сохранить" onClick={this.saveBtnHandler} />
            </div>
        )
    }
}

export default EditClients;