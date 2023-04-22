import React, {useState} from "react";


function Menu() {

    return (
        <div style={{backgroundColor: '#E7ECEF', height: '100vh'}}>
            <div style={{display: 'flex'}}>
                <img src={require('../images/github.png')} style={{height: '40px', objectFit: 'scale-down'}}/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <text style={{fontWeight: 700, fontSize: 24}}>
                        Имя проекта
                    </text>
                    <text>
                        Инфо о проекте
                    </text>
                </div>
            </div>
            <ul style={{listStyleType: 'disclosure-closed'}}>
                <li style={{margin: '10px'}}>
                    Проекты
                </li>
                <li style={{margin: '10px'}}>
                    Задачи
                </li>
                <li style={{margin: '10px'}}>
                    Участники
                </li>
                <li style={{margin: '10px'}}>
                    Спринты
                </li>
            </ul>
        </div>
    );
}
export default Menu;