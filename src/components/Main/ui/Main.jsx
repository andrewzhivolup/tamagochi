import React from 'react';
import cls from './Main.module.scss';
import { StatusBar } from '../../StatusBar/index';

const Main = () => {
    return (
        <div className={cls.base}>
            <div className={cls.mainContainer}>
                <StatusBar/>
            </div>
        </div>
    );
};

export default Main;