import React from 'react';
import PropTypes from 'prop-types';

import {mobileEvents} from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    client: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fio: PropTypes.shape({
        surname: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        patronymic: PropTypes.string.isRequired,
      }),
      balance: PropTypes.number.isRequired,
    })
  };

  state = {
    ...this.props.client
  };

  componentDidUpdate = (prevProps) => {
    const isNewProps = this.props.client.id !== prevProps.client.id ||
      this.props.client.balance !== prevProps.client.balance ||
      this.props.client.fio.surname !== prevProps.client.fio.surname ||
      this.props.client.fio.name !== prevProps.client.fio.name ||
      this.props.client.fio.patronymic !== prevProps.client.fio.patronymic;

    if (isNewProps) {
      this.setState({
        ...this.props.client,
        fio: {
          ...this.props.client.fio
        },
      });
    }
  };


  delete = (EO) => {
    mobileEvents.emit('EDelete', this.state.id);
  }

  edit = () => {
    mobileEvents.emit('EEdit', this.state);
  }

  render() {

    console.log("MobileClient id=" + this.props.client.id + " render");

    const isActive = this.state.balance > 0;

    return (
      <tr>
        <td>{this.state.fio.surname}</td>
        <td>{this.state.fio.name}</td>
        <td>{this.state.fio.patronymic}</td>
        <td>{this.state.balance}</td>
        <td style = {{ backgroundColor: isActive ? 'green' : 'red' }} >
          {isActive ? 'Active' : 'Blocked'}
        </td>
        <td><button className = 'MobileClient-Edit'   onClick = {this.edit} >Редактировать</button></td>
        <td><button className = 'MobileClient-Delete'   onClick = {this.delete}>Удалить</button></td>
      </tr>
    )
  }
}

export default MobileClient;
