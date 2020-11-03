import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import mobileEvents from './events';

class MobileClient extends React.PureComponent {
  editBtnHandler = () => {
    mobileEvents.emit('editClient', this.props.info)
  }
  removeBtnHandler = () => {
    mobileEvents.emit('removeClient', this.props.info)
  }
  render() {
    var statusText = this.props.info.status ? "Активный" : "Заблокированный"
    console.log("MobileClient id=" + this.props.info.id + " render");

    return (
      <tr className='MobileClient'>
        <td className='MobileClientFIO'>{this.props.info.name0}</td>
        <td className='MobileClientFIO'>{this.props.info.name1}</td>
        <td className='MobileClientFIO'>{this.props.info.name2}</td>
        <td className='MobileClientFIO'>{this.props.info.balance}</td>
        <td className='MobileClientFIO'>{statusText}</td>
        <td className='MobileClientFIO'>
          <input className="editBtn" type="button" value="редактировать" onClick={this.editBtnHandler} />
        </td>
        <td className='MobileClientFIO'>
          <input className="removeBtn" type="button" value="удалить" onClick={this.removeBtnHandler} />
        </td>

      </tr>
    );

  }

}

export default MobileClient;
