import React from 'react';
import cls from './Main.module.scss';
import { StatusBar } from '../../StatusBar/index';
import { Beast } from '../../../utils/beastClass';
import { ControlBar } from '../../ControlBar';

const beast = new Beast();

const Main = () => {
    return (
        <div className={cls.base}>
            <div className={cls.mainContainer}>
                <StatusBar beast={beast}/>
                {/*<Beast beast={beast}/>*/}
                <ControlBar beast={beast}/>
            </div>
        </div>
    );
};

export default Main;