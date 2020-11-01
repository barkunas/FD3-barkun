import React from 'react';
import EditClients from './EditClients';
import mobileEvents from './events';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  state = {
    currentCompany: 0,
    companies: this.props.companies,
    clients: this.props.clients,
    statusFilter: undefined,
    editClient: null
  };

  companyBtnHandler = (id) => {
    var newState = {
      ...this.state,
      currentCompany: id
    }
    this.setState(newState)
  }
  statusBtnHandler = (statusType) => {
    var newState = {
      ...this.state,
      statusFilter: statusType
    }
    this.setState(newState)
  }
  saveEditedClient = (client) => {
    var newState = {
      ...this.state,
      editClient:null
    }
    let newClient = {}
    if (client.id) {
      newClient = newState.clients.find((elem) => elem.id == client.id);
      newClient.name0 = client.name0;
      newClient.name1 = client.name1;
      newClient.name2 = client.name2;
      newClient.balance = client.balance;
      newClient.company = client.company;
      newClient.status = client.status;
      newClient.id = +new Date;
    } else {
      client.id = +new Date;
      newState.clients.push(client)
    }
    this.setState(newState)
  }
  editClientFunc = (clientRef) => {
    var newState = {
      ...this.state,
      editClient: clientRef
    }
    this.setState(newState)
  }
  removeClientFunc = (client) => {
    var newState = {
      ...this.state,
      clients:this.state.clients.filter((elem)=>elem.id!=client.id)
    }
    this.setState(newState)
  }
  componentDidMount = () => {
    mobileEvents.addListener('saveEditedClient', this.saveEditedClient);
    mobileEvents.addListener('editClient', this.editClientFunc);
    mobileEvents.addListener('removeClient', this.removeClientFunc);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('saveEditedClient', this.saveEditedClient);
    mobileEvents.removeListener('editClient', this.editClientFunc);
    mobileEvents.removeListener('removeClient', this.removeClientFunc);
  };
  createUserBtnHandler() {
    mobileEvents.emit('editClient', {})
  }

  render() {

    console.log("MobileCompany render");

    var clientsCode = this.state.clients.map(client =>
      client.company == this.state.currentCompany && client.status != this.state.statusFilter && <MobileClient key={client.id} info={client} />
    );

    return (
      <div className='MobileCompany'>
        <div>
          <input type="button" value="МТС" onClick={() => this.companyBtnHandler(0)} />
          <input type="button" value="Velcom" onClick={() => this.companyBtnHandler(1)} />
        </div>
        <div className='MobileCompanyName'>
          Компания &laquo;{this.state.companies[this.state.currentCompany]}&raquo;
        </div>
        <div>
          <input type="button" value="Все" onClick={() => this.statusBtnHandler(undefined)} />
          <input type="button" value="Активные" onClick={() => this.statusBtnHandler(0)} />
          <input type="button" value="Заблокированные" onClick={() => this.statusBtnHandler(1)} />
        </div>
        <table className='MobileCompanyClients'>
          <thead>
            <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Баланс</th>
              <th>Статус</th>
              <th>Редактировать</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {clientsCode}
          </tbody>

        </table>
        <div>
          <input type="button" value="Создать нового" onClick={this.createUserBtnHandler} />
        </div>
        {this.state.editClient && <EditClients clientInfo={this.state.editClient} clients={this.state.clients} />}
      </div>
    )
      ;

  }

}

export default MobileCompany;
