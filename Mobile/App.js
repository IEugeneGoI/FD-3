import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';


let clientsArr=[
    {id:101, fio:{surname: "Иванов", name: "Иван", patronymic: "Иванович"}, balance:200, status: "active"},
    {id:105, fio:{surname: "Сидоров", name: "Сергей", patronymic: "Сергеевич"}, balance:250, status: "active"},
    {id:110, fio:{surname: "Петров", name: "Пётр", patronymic: "Петрович"}, balance:180, status: "active"},
    {id:120, fio:{surname: "Григорьев", name: "Григорий", patronymic: "Григорьевич"}, balance:-220, status: "blocked"},
];

ReactDOM.render(
    <MobileCompany clients = {clientsArr} />, 
    document.getElementById('container')
);

