'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import sendModalForm from './modules/sendModalForm';
import sendBottomForm from './modules/sendBottomForm';



    //таймер
    countTimer('30 May 2022');
    //меню
    toggleMenu();
    //popup
    togglePopUp();
    //табы
    tabs();
    //слайдер
    slider();
    //калькулятор
    calc();
    //отправка из шапки
    sendForm();
    //отправка из модального окна
    sendModalForm();
    //отправка нижней формы
    sendBottomForm();