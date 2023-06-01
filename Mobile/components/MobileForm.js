import React from 'react';
import PropTypes from 'prop-types';

import {mobileEvents} from './events';
import './MobileForm.css';

class MobileForm extends React.PureComponent {

    static propTypes = {
        client: PropTypes.shape({
            id: PropTypes.number.isRequired,
            fio: PropTypes.shape({
                surname: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                patronymic: PropTypes.string.isRequired,
            }),
            balance: PropTypes.number.isRequired,
        }),
        isEditMode: PropTypes.bool.isRequired,
    };


    constructor(props) {
        super(props);
        this.surnameEl = React.createRef();
        this.nameEl = React.createRef();
        this.patronymicEl = React.createRef();
        this.balanceEl = React.createRef();
    }


    save = (EO) => {
        const elem = {
            id: this.props.client.id,
            fio: {
                surname: this.surnameEl.current ? this.surnameEl.current.value : this.props.client.fio.surname,
                name: this.nameEl.current ? this.nameEl.current.value : this.props.client.fio.name,
                patronymic: this.patronymicEl.current ? this.patronymicEl.current.value : this.props.client.fio.patronymic,
            },
            balance: +this.balanceEl.current ? +this.balanceEl.current.value : this.props.client.balance,
        }

        mobileEvents.emit('ESaveClient', elem);
    }

    create = () => {
        mobileEvents.emit('ECreate');
    }

    cancel = () => {
        mobileEvents.emit('ECancel');
    }


    render() {

        console.log('MobileForm render')

        if (this.props.isEditMode) {
            return (
                <div className = 'MobileForm' >
                    <div>
                        <span>Фамилия</span>
                        <input ref = {this.surnameEl}  type = "text"   defaultValue = {this.props.client.fio.surname} />
                    </div>
                    <div>
                        <span>Имя</span>
                        <input ref = {this.nameEl}   type = "text"   defaultValue = {this.props.client.fio.name} />
                    </div>
                    <div>
                        <span>Отчество</span>
                        <input ref = {this.patronymicEl}   type = "text"   defaultValue = {this.props.client.fio.patronymic} />
                    </div>
                    <div>
                        <span>Баланс</span>
                        <input ref = {this.balanceEl}   type = "number"   defaultValue = {this.props.client.balance} />
                    </div>
                    <button className = 'MobileForm-Save'   onClick = {this.save}>Сохранить</button>
                    <button className = 'MobileForm-Cancel'   onClick = {this.cancel}>Отмена</button>
                </div>
            )
        } else {
            return (
                <button className = 'MobileForm-Create'   onClick = {this.create}>
                    Создать
                </button>
            )
        }
    }
}

export default MobileForm;
