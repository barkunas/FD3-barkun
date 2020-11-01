import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import mobileEvents from './events';

class MobileClient extends React.PureComponent {

  state = {
    ...this.props
  }
  editBtnHandler = ()=>{
    mobileEvents.emit('editClient',this.props.info)
  }
  removeBtnHandler = ()=>{
    mobileEvents.emit('removeClient',this.props.info)
  }
  render() {
    var statusText = this.props.info.status?"Активный":"Заблокированный"
    console.log("MobileClient id=" + this.props.info.id + " render");

    return (
      <tr className='MobileClient'>
        <td className='MobileClientFIO'>{this.state.info.name0}</td>
        <td className='MobileClientFIO'>{this.state.info.name1}</td>
        <td className='MobileClientFIO'>{this.state.info.name2}</td>
        <td className='MobileClientFIO'>{this.state.info.balance}</td>
        <td className='MobileClientFIO'>{statusText}</td>
        <td className='MobileClientFIO'>
          <input type="button" value="редактировать" onClick={this.editBtnHandler}/>
        </td>
        <td className='MobileClientFIO'>
          <input type="button" value="удалить" onClick={this.removeBtnHandler}/>
        </td>

      </tr>
    );

  }

}

export default MobileClient;
