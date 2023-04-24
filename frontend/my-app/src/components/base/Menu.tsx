import React, {useState} from "react";
import app_styles from '../../App.module.css';
import main_page_styles from '../../pages/main_page/MainPage.module.css';
import base_styles from './base.module.css';

function Menu() {

    return (
        <div className={`${app_styles.grey} ${app_styles.height_full_screen} ${base_styles.sidebar}`}>
            <div style={{display: 'flex'}}>
                <img src={require('../../images/github.png')} style={{height: '30px', objectFit: 'scale-down'}}/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h3 className={`${app_styles.header_weight} ${main_page_styles.title}`}>
                        Имя проекта
                    </h3>
                    <text style={{marginTop: '-40px', marginBottom: '40px'}}>
                        Инфо о проекте
                    </text>
                </div>
            </div>
            <ul>
                <li>
                    Проекты
                </li>
                <li>
                    Задачи
                </li>
                <li>
                    Участники
                </li>
                <li>
                    Спринты
                </li>
            </ul>
        </div>
    );
}
export default Menu;